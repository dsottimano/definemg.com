# Shared UI implementations

No separate tenant UI primitive module directory exists. Buttons, service cards, testimonials, and person/logo grids are HTML patterns in the three presets and rich CMS bodies. The full home and Services implementations below provide their actual source; the shared interior shell and header/footer are deduplicated in layouts.md. Props are the named slot placeholders and array item fields; fields.json declares the CMS contract. CSS implementations are in theme.md.

## `templates/define-home/template.html`

```html
<div class="df-home">
<section class="df-hero df-hero-photo">
  {{#if heroImage}}<img class="df-hero-image" src="{{ heroImage }}" alt="{{ heroImageAlt }}" width="1831" height="741" fetchpriority="high">{{/if}}
  <div class="df-wrap df-hero-inner">
  <div class="df-hero-copy"><p class="df-eyebrow"><span class="df-dot" aria-hidden="true"></span>{{ eyebrow }}</p><h1>{{ title }} <em>{{ titleAccent }}</em></h1><p class="df-intro">{{ intro }}</p><div class="df-actions">{{#if primaryLabel}}<a class="df-button" href="{{ primaryUrl }}">{{ primaryLabel }}<span aria-hidden="true">↗</span></a>{{/if}}{{#if secondaryLabel}}<a class="df-text-link" href="{{ secondaryUrl }}">{{ secondaryLabel }}<span aria-hidden="true">↗</span></a>{{/if}}</div></div>
  </div>
</section>
{{#if clients}}<section class="df-clients df-wrap"><div class="df-client-heading"><p class="df-eyebrow">{{ clientsLabel }}</p>{{#if clientTitle}}<h2>{{ clientTitle }}</h2>{{/if}}{{#if clientIntro}}<p class="df-section-intro">{{ clientIntro }}</p>{{/if}}</div><div class="df-logo-grid">{{#each clients}}<div class="df-logo"><img src="{{ image }}" alt="{{ name }}" loading="lazy" width="325" height="260"></div>{{/each}}</div></section>{{/if}}
<section class="df-services df-section"><div class="df-wrap"><div class="df-section-head"><p class="df-eyebrow">{{ servicesEyebrow }}</p><div><h2>{{ servicesTitle }}</h2><p class="df-section-intro">{{ servicesIntro }}</p></div></div><div class="df-services-grid">{{#each services}}<a class="df-service" href="{{ url }}"><span class="df-number">{{ @number }}</span><span class="df-service-arrow" aria-hidden="true">↗</span><h3>{{ title }}</h3><p>{{ description }}</p></a>{{/each}}</div></div></section>
<section class="df-approach df-section"><div class="df-wrap"><div class="df-section-head"><p class="df-eyebrow">{{ approachEyebrow }}</p><div><h2>{{ approachTitle }}</h2><p class="df-section-intro">{{ approachIntro }}</p></div></div><div class="df-steps">{{#each steps}}<div class="df-step"><span class="df-number">{{ @number }}</span><h3>{{ title }}</h3><p>{{ description }}</p></div>{{/each}}</div></div></section>
<section class="df-about df-section"><div class="df-wrap df-about-grid"><div class="df-about-art" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div><div><p class="df-eyebrow">{{ aboutEyebrow }}</p><h2>{{ aboutTitle }}</h2><p class="df-section-intro">{{ aboutIntro }}</p>{{#if aboutLabel}}<a class="df-text-link" href="{{ aboutUrl }}">{{ aboutLabel }}<span aria-hidden="true">↗</span></a>{{/if}}</div></div></section>
{{#if body}}<section class="df-home-body df-wrap df-prose post-body">{{{ body }}}</section>{{/if}}
{{#if testimonials}}<section class="df-testimonials df-section"><div class="df-wrap"><h2>{{ testimonialsTitle }}</h2><div class="df-quotes">{{#each testimonials}}<figure><blockquote>{{ quote }}</blockquote><figcaption><strong>{{ name }}</strong><span>{{ role }}</span></figcaption></figure>{{/each}}</div></div></section>{{/if}}
<section class="df-cta"><div class="df-wrap"><p class="df-eyebrow">{{ ctaEyebrow }}</p><h2>{{ ctaTitle }}</h2><p>{{ ctaIntro }}</p>{{#if ctaLabel}}<a class="df-button df-button-light" href="{{ ctaUrl }}">{{ ctaLabel }}<span aria-hidden="true">↗</span></a>{{/if}}</div><div class="df-cta-orbit" aria-hidden="true"></div></section>
</div>

```
## `templates/define-services/template.html`

```html
<link rel="stylesheet" href="/define-services.css">
<div class="di-page ds-page" data-kind="services">
  <section class="ds-hero di-wrap">
    <p class="di-eyebrow ds-eyebrow"><span class="ds-live-dot" aria-hidden="true"></span>{{ eyebrow }}</p>
    <div class="ds-hero-grid">
      <div class="ds-hero-copy"><h1>{{ title }} <em>{{ titleAccent }}</em></h1><p class="ds-deck">{{ intro }}</p><div class="ds-actions"><a class="ds-button" href="{{ primaryUrl }}">{{ primaryLabel }}<span aria-hidden="true">↘</span></a><a class="ds-link" href="{{ secondaryUrl }}">{{ secondaryLabel }}<span aria-hidden="true">↗</span></a></div></div>
      <div class="ds-diagram" aria-hidden="true"><div class="ds-grid"></div><div class="ds-orbit ds-orbit-a"></div><div class="ds-orbit ds-orbit-b"></div><div class="ds-orbit ds-orbit-c"></div><span class="ds-satellite ds-satellite-a"></span><span class="ds-satellite ds-satellite-b"></span><div class="ds-node ds-node-top"><span class="ds-tiny-bars"><i></i><i></i><i></i></span>{{ diagramTop }}</div><div class="ds-node ds-node-center"><span class="ds-crosshair"></span>{{ diagramCenter }}</div><div class="ds-node ds-node-bottom"><span class="ds-node-mark">↗</span>{{ diagramBottom }}</div><p class="ds-diagram-caption">{{ diagramCaption }}</p></div>
    </div>
  </section>
  <section class="ds-capabilities" id="capabilities"><div class="di-wrap">
    <div class="ds-section-head"><p class="di-eyebrow">{{ capabilitiesLabel }}</p><h2>{{ capabilitiesTitle }}</h2><p>{{ capabilitiesIntro }}</p></div>
    <div class="ds-cards">{{#each services}}<article class="ds-card"><div class="ds-card-top"><span class="ds-count">{{ @number }}</span><div class="ds-glyph ds-glyph-{{ @number }}" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div></div><h3><a href="{{ url }}">{{ title }}</a></h3><p class="ds-card-description">{{ description }}</p><p class="ds-card-tags">{{ tags }}</p><a class="ds-card-link" href="{{ url }}">{{ label }}<span aria-hidden="true">↗</span></a></article>{{/each}}</div>
  </div></section>
  <section class="ds-approach di-wrap" id="approach"><aside class="ds-approach-aside"><p class="di-eyebrow">{{ approachLabel }}</p><h2>{{ approachTitle }}</h2><blockquote>{{ approachQuote }}</blockquote><div class="ds-lines" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div></aside><article class="di-prose post-body ds-body">{{{ body }}}</article></section>
  <section class="ds-closing"><div class="di-wrap"><div><p class="di-eyebrow">{{ ctaEyebrow }}</p><h2>{{ ctaTitle }}</h2></div><div><p>{{ ctaIntro }}</p><a class="ds-button ds-button-lime" href="{{ ctaUrl }}">{{ ctaLabel }}<span aria-hidden="true">↗</span></a></div></div></section>
</div>

```
## `public/define.js`

```js
/* Navigation is provided by Lanza. Mark active destinations without hiding content. */
(() => {
  const current = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.df-nav a').forEach((link) => {
    if (new URL(link.href, location.href).pathname.replace(/\/$/, '') === (current === '/' ? '' : current)) {
      link.setAttribute('aria-current', 'page');
    }
  });
})();

```
## `public/define-interiors.js`

```js
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

```
