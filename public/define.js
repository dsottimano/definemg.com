/* Navigation is provided by Lanza. Mark active destinations without hiding content. */
(() => {
  const current = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.df-nav a').forEach((link) => {
    if (new URL(link.href, location.href).pathname.replace(/\/$/, '') === (current === '/' ? '' : current)) {
      link.setAttribute('aria-current', 'page');
    }
  });
})();
