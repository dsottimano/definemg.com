# Shared layouts

Lanza owns the outer Astro document. These complete tenant overrides render header, footer, and common interior hero/rail/article shell. All editorial words belong in CMS entries; template placeholders must be preserved.

## `templates/parts/header.html`

```html
<link rel="stylesheet" href="/define.css">
<link rel="stylesheet" href="/define-interiors.css">
<header class="{{ headerClass }} df-header"><div class="df-wrap df-header-inner"><a class="df-brand" href="{{ homeUrl }}" aria-label="{{ siteName }}"><img src="/media/legacy/DMG-Logox188.png" alt="{{ siteName }}" width="180" height="64"></a><button class="nav-toggle" type="button" aria-expanded="false"><span>{{ menuLabel }}</span><span class="nav-toggle__mark" aria-hidden="true">+</span></button><nav class="site-nav df-nav" aria-label="{{ primaryNavigationLabel }}">{{#each menuHeader}}<a href="{{ url }}">{{ label }}</a>{{/each}}</nav></div></header>

```
## `templates/parts/footer.html`

```html
<footer class="{{ footerClass }} df-footer"><div class="df-wrap"><div class="df-footer-top"><a class="df-brand" href="{{ homeUrl }}"><img src="/media/legacy/DMG-Logox188.png" alt="{{ siteName }}" width="180" height="64" loading="lazy"></a><nav class="df-footer-nav">{{#each menuFooter}}<a href="{{ url }}">{{ label }}</a>{{/each}}</nav></div><div class="df-footer-bottom"><span>© {{ year }} {{ siteName }}</span><a href="{{ homeUrl }}" aria-label="{{ siteName }}">↗</a></div></div></footer><script src="/define.js" defer></script>

<script src="/define-interiors.js" defer></script>

```
## `templates/define-page/template.html`

```html
<div class="di-page" data-kind="{{ kind }}">
<header class="di-hero">
  <div class="di-wrap di-hero-grid">
    <div class="di-hero-copy"><p class="di-eyebrow">{{ eyebrow }}</p><h1 class="di-title">{{ title }}</h1>{{#if intro}}<p class="di-intro">{{ intro }}</p>{{/if}}</div>
    <div class="di-hero-visual">{{#if heroImage}}<img class="di-hero-image" src="{{ heroImage }}" alt="{{ heroImageAlt }}" loading="eager">{{/if}}<div class="di-art" aria-hidden="true"><div class="di-art-lines"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="di-art-disc"></div><div class="di-art-axis"></div><span class="di-art-point"></span></div></div>
  </div>
  <div class="di-hero-rule" aria-hidden="true"><span></span></div>
</header>
<div class="di-wrap di-layout">
  <aside class="di-rail"><div class="di-rail-inner">
    {{#if railLabel}}<div class="di-contents" hidden><p class="di-rail-label">{{ railLabel }}</p><nav class="di-contents-nav"></nav></div>{{/if}}
    {{#if relatedLinks}}<div class="di-related"><p class="di-rail-label">{{ relatedTitle }}</p><nav>{{#each relatedLinks}}<a href="{{ url }}"><span>{{ label }}</span><span aria-hidden="true">↗</span></a>{{/each}}</nav></div>{{/if}}
    <div class="di-rail-mark" aria-hidden="true"><span></span><span></span><span></span></div>
  </div></aside>
  <article class="di-prose">{{{ body }}}</article>
</div>
</div>

```
