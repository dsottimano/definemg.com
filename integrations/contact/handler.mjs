// Tenant-owned contact delivery. No recipient or Google credential reaches the browser.
const reply = (body, status = 200) => Response.json(body, { status, headers: {
  'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex',
  'X-Content-Type-Options': 'nosniff',
} });

async function boundedJSON(request) {
  const reader = request.body?.getReader();
  if (!reader) throw new Error('empty');
  const chunks = []; let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 16000) { await reader.cancel(); throw new Error('oversize'); }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size); let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  return JSON.parse(new TextDecoder().decode(bytes));
}

export async function handleContact(request, env, transport = fetch) {
  const endpoint = env.CONTACT_GOOGLE_URL || '';
  const ready = /^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(endpoint)
    && env.CONTACT_SHARED_SECRET?.length >= 32 && !!env.TURNSTILE_SECRET_KEY && !!env.TURNSTILE_SITE_KEY;
  if (request.method === 'GET') return reply({ ready: !!ready, sitekey: ready ? env.TURNSTILE_SITE_KEY : null });
  if (request.method !== 'POST') return reply({ code: 'method' }, 405);
  if (request.headers.get('Origin') !== new URL(request.url).origin) return reply({ code: 'invalid' }, 403);
  if (!ready) return reply({ code: 'unavailable' }, 503);
  if (!request.headers.get('Content-Type')?.startsWith('application/json')) return reply({ code: 'invalid' }, 415);
  let data;
  try { data = await boundedJSON(request); } catch { return reply({ code: 'invalid' }, 400); }
  if (!data || typeof data !== 'object' || Array.isArray(data)) return reply({ code: 'invalid' }, 400);
  const string = (key, max) => typeof data[key] === 'string' && data[key].trim().length <= max ? data[key].trim() : null;
  const name = string('name', 120), email = string('email', 254), company = string('company', 160), message = string('message', 5000), token = string('token', 2048);
  if (!name || !email || !/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(email) || /[\r\n]/.test(name)
      || company === null || !message || message.length < 10 || !token || data.website) return reply({ code: 'invalid' }, 400);
  try {
    const check = await transport('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: AbortSignal.timeout(10000),
      body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: token, remoteip: request.headers.get('CF-Connecting-IP') || undefined }),
    });
    if (!check.ok) return reply({ code: 'unavailable' }, 503);
    const result = await check.json();
    if (result.success !== true || result.action !== 'contact' || result.hostname !== new URL(request.url).hostname) return reply({ code: 'verification' }, 400);
    const payload = JSON.stringify({ name, email, company, message, timestamp: Date.now(), id: crypto.randomUUID() });
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(env.CONTACT_SHARED_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const signature = Array.from(new Uint8Array(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload))), x => x.toString(16).padStart(2, '0')).join('');
    const delivery = await transport(endpoint, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: AbortSignal.timeout(20000),
      body: JSON.stringify({ payload, signature }), redirect: 'follow',
    });
    if (!delivery.ok || (await delivery.json()).ok !== true) return reply({ code: 'unavailable' }, 503);
    return reply({ code: 'sent' });
  } catch {
    // Deliberately omit bodies, addresses, credentials and provider error text.
    console.error(JSON.stringify({ event: 'contact_delivery_unavailable' }));
    return reply({ code: 'unavailable' }, 503);
  }
}
