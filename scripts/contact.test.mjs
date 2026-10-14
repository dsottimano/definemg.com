import { test } from 'node:test';
import assert from 'node:assert/strict';
import { handleContact } from '../integrations/contact/handler.mjs';

const env = { CONTACT_GOOGLE_URL: 'https://script.google.com/macros/s/test/exec', CONTACT_SHARED_SECRET: 'test-secret-'.repeat(4), TURNSTILE_SECRET_KEY: 'test-secret', TURNSTILE_SITE_KEY: 'test-sitekey' };
const fields = { name: 'Test Sender', email: 'test@example.com', company: '', message: 'This is a test inquiry.', token: 'test-token', website: '' };
const request = (data = fields, origin = 'https://example.com') => new Request('https://example.com/api/contact', { method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
const refuseFetch = () => { throw new Error('must not contact a provider'); };

test('unconfigured form is unavailable and exposes no secrets', async () => {
  const response = await handleContact(new Request('https://example.com/api/contact'), {}, refuseFetch);
  assert.deepEqual(await response.json(), { ready: false, sitekey: null });
  assert.equal((await handleContact(request(), {}, refuseFetch)).status, 503);
});
test('cross-origin and malformed requests cannot send mail', async () => {
  assert.equal((await handleContact(request(fields, 'https://attacker.example'), env, refuseFetch)).status, 403);
  for (const data of [null, [], { ...fields, email: 'a@example.com,b@example.com' }, { ...fields, name: 'A\nB' }, { ...fields, website: 'spam' }, { ...fields, message: 'x'.repeat(17000) }]) {
    assert.equal((await handleContact(request(data), env, refuseFetch)).status, 400);
  }
});
test('verification must match success, hostname and action before forwarding', async () => {
  for (const result of [{ success: false }, { success: true, hostname: 'wrong.example', action: 'contact' }, { success: true, hostname: 'example.com', action: 'login' }]) {
    let calls = 0;
    const response = await handleContact(request(), env, async () => { calls++; return Response.json(result); });
    assert.equal(response.status, 400); assert.equal(calls, 1);
  }
});
test('success requires delivery acknowledgment and a valid signed payload', async () => {
  for (const accepted of [false, true]) {
    let calls = 0;
    const response = await handleContact(request(), env, async (url, options) => {
      calls++;
      if (calls === 1) return Response.json({ success: true, hostname: 'example.com', action: 'contact' });
      assert.equal(url, env.CONTACT_GOOGLE_URL);
      const { payload, signature } = JSON.parse(options.body);
      assert.equal(JSON.parse(payload).email, fields.email);
      const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(env.CONTACT_SHARED_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
      assert.equal(await crypto.subtle.verify('HMAC', key, Uint8Array.from(signature.match(/../g), h => parseInt(h, 16)), new TextEncoder().encode(payload)), true);
      return Response.json({ ok: accepted });
    });
    assert.equal(calls, 2); assert.equal(response.status, accepted ? 200 : 503);
    assert.equal((await response.json()).code, accepted ? 'sent' : 'unavailable');
  }
});
test('provider outage does not claim delivery', async () => {
  const response = await handleContact(request(), env, async () => { throw new Error('provider outage'); });
  assert.equal(response.status, 503);
  assert.equal((await response.json()).code, 'unavailable');
});
