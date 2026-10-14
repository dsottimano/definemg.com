(() => {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  const fieldset = form.querySelector('fieldset');
  const button = form.querySelector('button[type="submit"]');
  const status = form.querySelector('[role="status"]');
  let widget, token = '', busy = false;
  const show = code => { status.textContent = form.dataset[code] || form.dataset.unavailable; };
  async function initialize() {
    try {
      const response = await fetch('/api/contact', { credentials: 'omit' });
      const config = await response.json();
      if (!response.ok || config.ready !== true || !config.sitekey) return show('unavailable');
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        script.onload = resolve; script.onerror = reject;
        document.head.append(script);
      });
      widget = window.turnstile.render('#contact-verification', {
        sitekey: config.sitekey, action: 'contact',
        callback: value => { token = value; button.disabled = busy; if (status.textContent !== form.dataset.sent) status.textContent = ''; },
        'expired-callback': () => { token = ''; button.disabled = true; show('verification'); },
        'error-callback': () => { token = ''; button.disabled = true; show('verification'); },
      });
      fieldset.disabled = false;
      show('verification');
    } catch { show('unavailable'); }
  }
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (busy || !form.reportValidity()) return;
    if (!token) return show('verification');
    busy = true; button.disabled = true; show('sending');
    const values = Object.fromEntries(new FormData(form));
    fieldset.disabled = true;
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', credentials: 'omit', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, token }), signal: AbortSignal.timeout(35000),
      });
      const result = await response.json();
      if (response.ok && result.code === 'sent') { form.reset(); show('sent'); }
      else show(['invalid', 'verification'].includes(result.code) ? result.code : 'unavailable');
    } catch { show('unavailable'); }
    finally {
      busy = false; fieldset.disabled = false; token = ''; button.disabled = true;
      if (widget !== undefined) window.turnstile.reset(widget);
    }
  });
  initialize();
})();
