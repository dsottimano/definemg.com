import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHmac } from 'node:crypto';
import vm from 'node:vm';

function harness() {
  const messages = [], cache = new Map();
  const secret = 'mock-secret-'.repeat(4);
  const context = vm.createContext({
    ContentService: { MimeType: { JSON: 'json' }, createTextOutput: text => ({ setMimeType: () => JSON.parse(text) }) },
    PropertiesService: { getScriptProperties: () => ({ getProperty: key => key === 'CONTACT_RECIPIENT' ? 'private@example.com' : secret }) },
    Utilities: { Charset: { UTF_8: 'utf8' }, computeHmacSha256Signature: (payload, key) => [...createHmac('sha256', key).update(payload).digest()] },
    LockService: { getScriptLock: () => ({ tryLock: () => true, hasLock: () => true, releaseLock() {} }) },
    CacheService: { getScriptCache: () => ({ get: key => cache.get(key), put: (key, value) => cache.set(key, value) }) },
    MailApp: { getRemainingDailyQuota: () => 10, sendEmail: data => messages.push(data) },
  });
  vm.runInContext(readFileSync(new URL('../integrations/contact/Code.gs', import.meta.url), 'utf8'), context);
  const sign = overrides => {
    const payload = JSON.stringify({ name: 'Visitor', email: 'visitor@example.com', company: '', message: 'A valid mock inquiry.', timestamp: Date.now(), id: '12345678-1234-1234-1234-123456789abc', ...overrides });
    return { payload, signature: createHmac('sha256', secret).update(payload).digest('hex') };
  };
  return { messages, context, sign, call: body => context.doPost({ postData: { contents: JSON.stringify(body) } }) };
}
test('Google rejects unsigned, stale and malformed mail without sending', () => {
  const h = harness();
  for (const body of [{}, { ...h.sign({}), signature: '0'.repeat(64) }, h.sign({ timestamp: Date.now() - 180000 }), h.sign({ email: 'a@example.com,b@example.com' })]) assert.equal(h.call(body).ok, false);
  assert.equal(h.messages.length, 0);
});
test('Google sends only to private configured recipient and deduplicates replay', () => {
  const h = harness(), body = h.sign({ recipient: 'attacker@example.com' });
  assert.equal(h.call(body).ok, true); assert.equal(h.call(body).ok, true);
  assert.equal(h.messages.length, 1); assert.equal(h.messages[0].to, 'private@example.com');
  assert.equal(h.messages[0].replyTo, 'visitor@example.com'); assert.equal(h.messages[0].htmlBody, undefined);
});
test('Google mail quota failures return failure without sending', () => {
  const h = harness(); h.context.MailApp.getRemainingDailyQuota = () => 0;
  assert.equal(h.call(h.sign({})).ok, false); assert.equal(h.messages.length, 0);
});
