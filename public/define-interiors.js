/* Progressive enhancement only: all author content and related links render without JS. */
(() => {
  const page = document.querySelector('.di-page');
  if (!page) return;
  const article = page.querySelector('.di-prose');
  const contents = page.querySelector('.di-contents');
  const nav = page.querySelector('.di-contents-nav');
  if (!article || !contents || !nav) return;
  const headings = Array.from(article.querySelectorAll('h2,h3')).filter((heading) => !heading.closest('article article')).slice(0, 12);
  if (headings.length < 2) return;
  headings.forEach((heading, index) => {
    if (!heading.id) heading.id = `section-${index + 1}`;
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent.trim();
    nav.appendChild(link);
  });
  contents.hidden = false;
  if (!('IntersectionObserver' in window)) return;
  const links = Array.from(nav.querySelectorAll('a'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, {rootMargin: '-5% 0px -65% 0px'});
  headings.forEach((heading) => observer.observe(heading));
})();
