# Theme baseline — 2026-10-14

## Compact token summary

- Framework: Astro via pinned `lanza-site` 0.1.28. Tenant HTML presets rendered by Lanza; custom vanilla CSS and progressive JavaScript. No tenant React component library or Tailwind configuration.
- Palette: `--df-paper`/`--di-paper` #f7f8f2; `--df-ink`/`--di-ink`/`--df-dark` #142b32; `--df-muted` #54666b; `--di-muted` #586b71; lines #d9dfd8; primary blue #2161dd; lime #d2f56a. Interior hero #edf0e9, service section #ebefe7. Light theme only.
- Fonts: Space Grotesk headings (`--font-heading`); Inter body/UI (`--font-ui`); Arial/Helvetica fallback. Heading weight 500, tracking -.045em to -.055em, line height 1.05–1.12. Body 17–18px, line height 1.65–1.85.
- Scale baseline: home H1 clamp(48px,5.8vw,84px); interior H1 clamp(42px,4.7vw,68px); services H1 clamp(64px,6.6vw,96px). Section H2 ~36–58px. Eyebrows currently 9–11px uppercase with .12–.18em tracking: explicitly requested to increase and standardize.
- Containers: max-width 1280px, desktop width calc(100% - 96px), tablet -64px, mobile -40px. Section padding usually 65–110px. Interior left rail 205px with 74px gap. Services hero columns 1.15fr 1fr, gap 36px.
- Shapes: cards 3–6px radii; pill buttons 40px; appearance token radius 8px. Photo offset shadows 12px 12px 0 #dce3d8; profile 14px 14px 0 lime. Focus outline 3px blue + 5px offset.
- Breakpoints: home 1500/1050/760/480px; interiors 1600/1100/800/560px; services see raw CSS. Reduced-motion overrides exist.
- Required direction: blue tonal palette replacing every green/lime surface and hover; no concentric circles or visible 01/02/03 numbering; consistent readable eyebrows; headshots for team; retain approved homepage hero, overall layout, and mobile containment. These are requested changes, not claims that implementation exists.

## Raw theme sources

## `data/appearance.json`

```json
{
  "theme": "freehold",
  "logo": "/media/legacy/DMG-Logox188.png",
  "brand": {
    "colors": {
      "bg": "#f7f8f2",
      "surface": "#ffffff",
      "ink": "#142b32",
      "muted": "#54666b",
      "accent": "#2161dd",
      "border": "#d9dfd8"
    },
    "radius": "8px",
    "motion": "on",
    "fonts": {
      "heading": "space-grotesk",
      "body": "inter"
    },
    "scheme": "light"
  }
}

```
## `public/define.css`

```css
/* Define Media Group: tenant design system. */
:root {--df-paper:#f7f8f2;--df-ink:#142b32;--df-muted:#54666b;--df-line:#d9dfd8;--df-lime:#d2f56a;--df-blue:#2161dd;--df-dark:#142b32;--df-width:1280px}
html {scroll-behavior:smooth;scroll-padding-top:100px}
body {background:var(--df-paper);color:var(--df-ink);font-family:var(--font-ui,Arial),Helvetica,sans-serif;line-height:1.65}
body:has(.df-home) main,body:has(.df-page) main {max-width:none;width:100%;margin:0;padding:0}
.df-wrap {width:calc(100% - 96px);max-width:var(--df-width);margin-inline:auto}
.df-home *, .df-page *, .df-header *, .df-footer * {box-sizing:border-box}
.df-home h1,.df-home h2,.df-home h3,.df-page h1,.df-page h2,.df-page h3 {font-family:var(--font-heading,Arial),Helvetica,sans-serif;font-weight:500;letter-spacing:-.055em;line-height:1.05;color:inherit}
.df-home p {margin:0}
.df-home a,.df-page a {color:inherit}
.df-header.site-header {background:var(--df-paper);border-bottom:1px solid var(--df-line);position:relative;z-index:10}
.df-header-inner {display:flex;align-items:center;justify-content:space-between;gap:32px;min-height:104px}
.df-brand {display:inline-flex;align-items:center;flex-shrink:0;line-height:0}
.df-brand img {width:180px;max-height:70px;object-fit:contain;object-position:left center;mix-blend-mode:multiply}
.df-nav.site-nav {display:flex;align-items:center;gap:30px;flex-wrap:wrap}
.df-nav.site-nav a {font-family:var(--font-ui,Arial),Helvetica,sans-serif;font-size:14px;font-weight:500;letter-spacing:0;text-transform:none;color:var(--df-ink);text-decoration:none;padding-block:8px}
.df-nav.site-nav a:last-child {padding:12px 20px;border:1px solid var(--df-ink);border-radius:30px}
.df-nav.site-nav a:hover {color:var(--df-blue)}
.df-hero {min-height:640px;display:grid;grid-template-columns:1.15fr 1fr;align-items:center;gap:28px;padding-block:80px 92px}
.df-eyebrow {font-size:11px;line-height:1.5;letter-spacing:.14em;text-transform:uppercase;font-weight:600;margin:0 0 26px!important;display:flex;align-items:center;gap:10px}
.df-dot {width:7px;height:7px;border-radius:50%;background:var(--df-blue);box-shadow:0 0 0 5px #2161dd12}
.df-hero h1 {font-size:clamp(48px,5.8vw,84px);margin:0 0 30px;max-width:750px}
.df-hero h1 em {font-style:normal;color:var(--df-blue)}
.df-intro {font-size:18px;line-height:1.7;color:var(--df-muted);max-width:560px}
.df-actions {display:flex;align-items:center;gap:28px;flex-wrap:wrap;margin-top:36px}
.df-button {display:inline-flex;align-items:center;justify-content:space-between;gap:28px;padding:15px 24px;border-radius:40px;background:var(--df-ink);color:white!important;font-size:14px;font-weight:500;text-decoration:none;transition:transform .2s,background .2s}
.df-button:hover {transform:translateY(-3px);background:var(--df-blue)}
.df-button span,.df-text-link span {font-size:22px;line-height:1}
.df-text-link {display:inline-flex;align-items:center;gap:22px;color:var(--df-ink);font-size:14px;font-weight:500;text-decoration:none;border-bottom:1px solid currentColor;padding:9px 0}
.df-clients {padding-block:24px 70px;border-top:1px solid var(--df-line)}
.df-clients>.df-eyebrow {justify-content:center;margin-bottom:30px!important;color:var(--df-muted)}
.df-logo-grid {display:grid;grid-template-columns:repeat(6,1fr);gap:12px 28px}
.df-logo {display:flex;align-items:center;justify-content:center;min-height:78px;padding:10px 12px}
.df-logo img {width:100%;height:56px;object-fit:contain;filter:none;mix-blend-mode:normal;opacity:1;transition:transform .2s}
.df-logo:hover img {filter:none;opacity:1}
.df-section {padding-block:100px}
.df-section-head {display:grid;grid-template-columns:1fr 2fr;gap:48px;margin-bottom:50px}
.df-section-head>.df-eyebrow {padding-top:10px}
.df-home h2 {font-size:clamp(36px,4vw,58px);margin:0 0 24px;max-width:770px}
.df-section-intro {font-size:17px;line-height:1.8;max-width:610px;color:var(--df-muted)}
.df-services {background:#ebefe7;border-top:1px solid var(--df-line)}
.df-services-grid {display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.df-service {position:relative;display:flex;flex-direction:column;align-items:flex-start;min-height:300px;padding:32px;background:var(--df-paper);border:1px solid #dfe4da;border-radius:5px;text-decoration:none;transition:background .25s,transform .25s}
.df-service:hover {background:var(--df-lime);transform:translateY(-5px)}
.df-number {font-size:11px;letter-spacing:.05em;color:var(--df-muted);font-family:monospace}
.df-service-arrow {position:absolute;right:30px;top:27px;font-size:27px;font-weight:300}
.df-service h3 {font-size:27px;line-height:1.1;margin:48px 0 17px;letter-spacing:-.04em}
.df-service p {font-size:14px;line-height:1.75;color:var(--df-muted)}
.df-approach {background:var(--df-dark);color:var(--df-paper)}
.df-approach .df-eyebrow {color:var(--df-lime)}
.df-approach .df-section-intro,.df-approach .df-number {color:#b8c9c9}
.df-steps {display:grid;grid-template-columns:repeat(3,1fr);gap:48px;margin-top:65px}
.df-step {border-top:1px solid #f7f8f23a;padding-top:20px}
.df-step h3 {font-size:25px;margin:32px 0 20px;letter-spacing:-.035em}
.df-step p {font-size:15px;line-height:1.85;color:#b8c9c9}
.df-about-grid {display:grid;grid-template-columns:1fr 1.15fr;gap:100px;align-items:center}
.df-about .df-text-link {margin-top:24px}
.df-about-art {height:370px;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;background:var(--df-lime);border-radius:6px}
.df-about-art span {position:absolute;width:180px;height:180px;border:1px solid var(--df-ink);border-radius:50%;transform:translateX(-60px)}
.df-about-art span:nth-child(2){transform:translateX(-36px)}.df-about-art span:nth-child(3){transform:translateX(-12px)}.df-about-art span:nth-child(4){transform:translateX(12px)}.df-about-art span:nth-child(5){transform:translateX(36px)}.df-about-art span:nth-child(6){transform:translateX(60px)}
.df-home-body {padding-block:0 80px;max-width:900px}
.df-testimonials {background:#edf0e8;border-top:1px solid var(--df-line)}
.df-quotes {display:grid;grid-template-columns:repeat(2,1fr);gap:32px;margin-top:40px}
.df-quotes figure {margin:0;padding:32px;background:var(--df-paper);border:1px solid var(--df-line);border-radius:5px}
.df-quotes blockquote {font-size:19px;line-height:1.75;letter-spacing:-.015em;margin:0 0 28px}
.df-quotes figcaption {display:flex;flex-direction:column;font-size:13px;gap:5px}.df-quotes figcaption span{color:var(--df-muted)}
.df-cta {position:relative;padding-block:100px;overflow:hidden;background:var(--df-blue);color:white}
.df-cta>.df-wrap {position:relative;z-index:1}
.df-cta h2 {max-width:800px;font-size:clamp(45px,5.5vw,78px)}
.df-cta p:not(.df-eyebrow) {max-width:620px;font-size:18px;color:#e0e9ff}
.df-button-light {background:var(--df-lime);color:var(--df-ink)!important;margin-top:32px}
.df-button-light:hover {background:#e7ffaa}
.df-cta-orbit {position:absolute;width:650px;height:650px;right:-160px;top:-90px;border:1px solid #ffffff30;border-radius:50%;box-shadow:0 0 0 65px #ffffff08,0 0 0 130px #ffffff06,0 0 0 195px #ffffff04}
.df-footer.site-footer {background:var(--df-paper);color:var(--df-ink);border:0;margin-top:0}
.df-footer-top {display:flex;justify-content:space-between;align-items:center;gap:35px;padding-block:65px 45px}
.df-footer-nav {display:flex;flex-wrap:wrap;justify-content:flex-end;gap:14px 25px;max-width:750px}
.df-footer-nav a {font-size:13px;text-decoration:none;color:var(--df-muted)}
.df-footer-nav a:hover {color:var(--df-blue)}
.df-footer-bottom {border-top:1px solid var(--df-line);display:flex;align-items:center;justify-content:space-between;padding-block:25px;font-size:11px;color:var(--df-muted)}
.df-footer-bottom a {font-size:25px;color:var(--df-ink);text-decoration:none}
.df-page-hero {padding-block:84px 0}
.df-page h1 {font-size:clamp(46px,6vw,84px);max-width:1040px;margin:0 0 28px}
.df-page-intro {font-size:21px;line-height:1.75;color:var(--df-muted);max-width:800px;margin:0}
.df-rule {height:1px;background:var(--df-line);margin-top:60px}
.df-prose.post-body {color:var(--df-ink);font-family:var(--font-ui,Arial),Helvetica,sans-serif;font-size:17px;line-height:1.85}
.df-page .df-prose {padding-block:45px 95px;max-width:900px;margin-top:0}
.df-prose.post-body h2 {font-size:34px;letter-spacing:-.035em;line-height:1.2;margin:2em 0 .65em}
.df-prose.post-body h3 {font-size:24px;letter-spacing:-.025em;line-height:1.3;margin:1.6em 0 .65em}
.df-prose.post-body a {color:var(--df-blue)}
.df-prose.post-body img {border-radius:5px;max-height:650px;object-fit:contain}
.df-prose.post-body blockquote {border-color:var(--df-blue);color:var(--df-muted)}
.df-prose.post-body p {margin-block:1em}
a:focus-visible,button:focus-visible {outline:3px solid var(--df-blue);outline-offset:5px}
@keyframes df-float {0%,100%{translate:0 0}50%{translate:0 -14px}}
@media(min-width:1500px){.df-hero{min-height:740px}}
@media(max-width:1050px){.df-wrap{width:calc(100% - 64px)}.df-nav.site-nav{gap:18px}.df-hero{padding-block:65px;min-height:590px}.df-hero h1{font-size:62px}.df-about-grid{gap:55px}.df-search-symbol{border-width:17px}.df-search-symbol:after{width:19px;height:65px}.df-services-grid{grid-template-columns:repeat(2,1fr)}.df-logo-grid{grid-template-columns:repeat(5,1fr)}}
@media(max-width:760px){.df-wrap{width:calc(100% - 40px)}.df-header-inner{min-height:86px;flex-wrap:wrap;gap:0}.df-brand img{width:148px;max-height:60px}.df-header[data-nav-ready] .nav-toggle{display:inline-flex;margin-left:auto;border-radius:25px;border-color:var(--df-line);font-family:var(--font-ui,Arial),Helvetica,sans-serif;font-size:12px;letter-spacing:0;text-transform:none;padding:12px 16px}.df-header .df-nav.site-nav{width:100%;flex-basis:100%;flex-direction:column;align-items:stretch;padding-block:10px 22px;gap:0}.df-header[data-nav-ready] .df-nav.site-nav{display:none}.df-header[data-nav-open] .df-nav.site-nav{display:flex}.df-nav.site-nav a{padding:12px 4px;border-top:1px solid var(--df-line);font-size:15px}.df-nav.site-nav a:last-child{margin-top:8px;text-align:center}.df-hero{grid-template-columns:1fr;gap:15px;padding-block:55px 28px}.df-hero h1{font-size:clamp(47px,10vw,70px);max-width:600px}.df-intro{font-size:17px}.df-visual{max-width:450px;margin-inline:auto;aspect-ratio:1.18}.df-hero-copy{position:relative;z-index:1}.df-eyebrow{font-size:10px;margin-bottom:22px!important}.df-clients{padding-block:26px 45px}.df-logo-grid{grid-template-columns:repeat(4,1fr);gap:5px 13px}.df-logo{padding:5px;min-height:65px}.df-logo img{height:42px}.df-section{padding-block:65px}.df-section-head{grid-template-columns:1fr;gap:0;margin-bottom:32px}.df-section-head>.df-eyebrow{padding:0}.df-home h2{font-size:40px}.df-services-grid{gap:12px}.df-service{padding:24px;min-height:275px}.df-service h3{font-size:23px}.df-service-arrow{right:23px;top:20px}.df-steps{gap:25px;margin-top:42px}.df-step h3{font-size:22px}.df-step p{font-size:14px}.df-about-grid{grid-template-columns:1fr;gap:40px}.df-about-art{height:290px}.df-home-body{padding-block:0 60px}.df-quotes{grid-template-columns:1fr;gap:18px}.df-quotes figure{padding:28px}.df-quotes blockquote{font-size:17px}.df-cta{padding-block:65px}.df-cta h2{font-size:48px}.df-cta p:not(.df-eyebrow){font-size:17px}.df-footer-top{align-items:flex-start;padding-block:44px 30px;flex-direction:column;gap:28px}.df-footer-nav{justify-content:flex-start;gap:15px 24px}.df-page-hero{padding-top:55px}.df-page h1{font-size:48px}.df-page-intro{font-size:18px}.df-rule{margin-top:40px}.df-prose.post-body{font-size:16px}.df-page .df-prose{padding-block:26px 65px}.df-prose.post-body h2{font-size:29px}}
@media(max-width:480px){.df-hero h1{font-size:47px}.df-actions{gap:18px}.df-button{padding:14px 20px;gap:22px}.df-text-link{font-size:13px;gap:14px}.df-services-grid{grid-template-columns:1fr}.df-service{min-height:250px}.df-service h3{margin-top:36px}.df-logo-grid{grid-template-columns:repeat(3,1fr)}.df-logo img{height:40px}.df-steps{grid-template-columns:1fr;gap:30px}.df-step h3{margin-top:20px}.df-step p{font-size:15px}.df-home h2{font-size:36px}.df-cta h2{font-size:44px}.df-visual{margin-top:12px}.df-page h1{font-size:43px;overflow-wrap:anywhere}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.df-home *,.df-header *{animation:none!important;transition:none!important}}

/* Preserved rich-content layouts: team, client work, and customer quotations. */
.df-eyebrow:empty {display:none}
.df-page .df-prose:has(> .define-person > a) {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:32px;max-width:1100px}
.df-page .df-prose:has(> .define-person > a)>p {grid-column:1/-1;margin:0 0 18px}
.df-page .define-person:has(>a) {margin:0;padding:24px;background:#edf0e8;border:1px solid var(--df-line);border-radius:6px}
.df-prose .define-person>a {display:block}
.df-prose.post-body .define-person>a>img {display:block;width:100%;height:310px;object-fit:cover;object-position:center 25%;filter:grayscale(.35);background:#e4e9e0}
.df-prose .define-person h4 {font-size:26px;line-height:1.2;letter-spacing:-.03em;margin:24px 0 7px}
.df-prose .define-person h4 a {color:var(--df-ink);text-decoration:none}
.df-prose.post-body .define-person p {font-size:14px;margin:0;color:var(--df-muted)}
.df-prose .define-person p a {color:var(--df-muted);text-decoration:none}
.df-prose.post-body .define-person>img {width:260px;max-height:330px;object-fit:cover;object-position:top;float:left;margin:0 35px 22px 0}
.df-prose .define-person:after {content:"";display:block;clear:both}
.df-prose .define-logo-grid {display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:24px 32px;align-items:center;padding-block:20px 35px}
.df-prose.post-body .define-logo-grid img {width:100%;height:70px;object-fit:contain;border-radius:0;mix-blend-mode:normal;filter:none}
.df-prose .define-testimonials {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;align-items:start}
.df-page .df-prose:has(>.define-testimonials) {max-width:1200px}
.df-prose.post-body .define-testimonials blockquote {margin:0;padding:30px;border:1px solid var(--df-line);background:#edf0e8;border-radius:5px;color:var(--df-ink);font-style:normal;font-size:16px;line-height:1.85}
.df-prose .define-testimonials q {quotes:none}
.df-prose .define-testimonials strong {display:block;font-size:12px;line-height:1.65;margin-top:24px;color:var(--df-muted);white-space:pre-line}
.df-prose.post-body ol:has(a[href="/services/search-engine-optimization/"]) {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;list-style:none;padding:0;margin:30px 0 44px;counter-reset:services}
.df-prose.post-body ol:has(a[href="/services/search-engine-optimization/"]) li {padding:28px;background:#edf0e8;border:1px solid var(--df-line);border-radius:5px;font-size:19px;line-height:1.5;counter-increment:services}
.df-prose.post-body ol:has(a[href="/services/search-engine-optimization/"]) li:before {content:"0" counter(services);display:block;font-size:11px;color:var(--df-muted);font-family:monospace;margin-bottom:30px}
.df-prose.post-body p>a:only-child:has(strong) {display:inline-block;font-size:15px;padding-block:12px;text-decoration-thickness:1px;text-underline-offset:5px}
@media(max-width:760px){.df-page .df-prose:has(>.define-person>a){gap:18px}.df-page .define-person:has(>a){padding:18px}.df-prose.post-body .define-person>a>img{height:220px}.df-prose .define-person h4{font-size:22px}.df-prose .define-logo-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.df-prose .define-testimonials{grid-template-columns:1fr}.df-prose.post-body .define-testimonials blockquote{padding:26px}}
@media(max-width:480px){.df-page .df-prose:has(>.define-person>a){grid-template-columns:1fr}.df-prose.post-body .define-person>a>img{height:300px}.df-prose.post-body .define-person>img{float:none;width:100%;max-height:380px;margin:0 0 22px;object-fit:contain}.df-prose.post-body ol:has(a[href="/services/search-engine-optimization/"]){grid-template-columns:1fr}.df-prose.post-body .define-logo-grid img{height:55px}}

/* The original New York skyline anchors the publisher-focused homepage. */
.df-hero.df-hero-photo {position:relative;display:flex;isolation:isolate;min-height:650px;padding-block:84px 88px;background:#101c24;color:#fff;overflow:hidden}
.df-hero-image {position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover;object-position:center 48%;z-index:-2;animation:df-skyline-intro 1.2s ease-out both}
.df-hero-photo:after {content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(9,21,29,.86) 0%,rgba(9,21,29,.76) 30%,rgba(9,21,29,.40) 60%,rgba(9,21,29,.08) 100%)}
.df-hero-inner {position:relative;z-index:1}
.df-hero-photo .df-hero-copy {max-width:820px}
.df-hero-photo h1 {font-size:clamp(52px,5.5vw,82px);max-width:800px;color:#fff;text-wrap:balance}
.df-hero-photo h1 em {color:var(--df-lime)}
.df-hero-photo .df-eyebrow {color:#fff}
.df-hero-photo .df-dot {background:var(--df-lime);box-shadow:0 0 0 5px #d2f56a22}
.df-hero-photo .df-intro {color:#f0f3f5;max-width:650px;font-size:19px;line-height:1.75}
.df-hero-photo .df-button {background:var(--df-lime);color:var(--df-ink)!important}
.df-hero-photo .df-button:hover {background:#e2ff97}
.df-hero-photo .df-text-link {color:#fff}
.df-hero-photo a:focus-visible {outline-color:var(--df-lime)}
.df-clients {padding-block:70px 80px;border-top:0}
.df-client-heading {display:grid;grid-template-columns:1.15fr 1fr;align-items:start;gap:0 80px;margin-bottom:34px}
.df-client-heading>.df-eyebrow {grid-column:1/-1;color:var(--df-muted);margin-bottom:18px!important}
.df-client-heading h2 {font-size:clamp(32px,3.5vw,48px);margin-bottom:0}
.df-client-heading>.df-section-intro {font-size:16px;padding-top:3px;max-width:530px}
.df-logo-grid {grid-template-columns:repeat(4,minmax(0,1fr));gap:0 22px;background:#fff;border:1px solid var(--df-line);padding:10px 20px;border-radius:5px}
.df-logo {padding:8px 10px;min-height:172px;overflow:hidden}
.df-logo img {display:block;width:100%;height:156px;object-fit:contain;filter:none;opacity:1;mix-blend-mode:normal}
.df-logo:hover img {transform:translateY(-3px)}
.df-page .df-prose:has(>.define-logo-grid) {max-width:var(--df-width)}
.df-prose .define-logo-grid {grid-template-columns:repeat(4,minmax(0,1fr));gap:0 22px;background:#fff;border:1px solid var(--df-line);border-radius:5px;padding:18px 24px}
.df-prose.post-body .define-logo-grid img {display:block;width:100%;height:168px;padding:8px;object-fit:contain;filter:none;opacity:1;mix-blend-mode:normal}
@keyframes df-skyline-intro {from{transform:scale(1.025)}to{transform:scale(1)}}
@media(max-width:1050px){.df-hero.df-hero-photo{min-height:600px}.df-hero-photo .df-hero-copy{max-width:720px}.df-client-heading{gap:0 40px}.df-logo-grid,.df-prose .define-logo-grid{gap:0 8px}.df-logo{padding:5px;min-height:150px}.df-logo img{height:140px}.df-prose.post-body .define-logo-grid img{height:150px}}
@media(max-width:760px){.df-hero.df-hero-photo{min-height:640px;padding-block:58px 65px}.df-hero-image{object-position:55% center}.df-hero-photo:after{background:linear-gradient(90deg,rgba(9,21,29,.86),rgba(9,21,29,.60))}.df-hero-photo h1{font-size:clamp(44px,8.8vw,66px)}.df-hero-photo .df-intro{font-size:17px;max-width:580px}.df-client-heading{grid-template-columns:1fr;gap:20px}.df-client-heading>.df-eyebrow{margin-bottom:0!important}.df-client-heading h2{font-size:36px}.df-client-heading>.df-section-intro{font-size:15px;padding:0}.df-clients{padding-block:48px 55px}.df-logo-grid,.df-prose .define-logo-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:0 10px;padding:10px}.df-logo{min-height:128px;padding:4px}.df-logo img{height:120px}.df-prose.post-body .define-logo-grid img{height:130px;padding:5px}}
@media(max-width:480px){.df-hero.df-hero-photo{min-height:660px;padding-block:48px 56px}.df-hero-photo h1{font-size:44px}.df-hero-photo .df-actions{gap:20px}.df-client-heading h2{font-size:32px}.df-logo img{height:110px}.df-logo{min-height:120px}.df-prose.post-body .define-logo-grid img{height:120px}}
@media(prefers-reduced-motion:reduce){.df-hero-image{animation:none}}

```
## `public/define-interiors.css`

```css
/* Interior editorial system. Scoped independently of the approved homepage. */
body:has(.di-page) main {max-width:none;width:100%;margin:0;padding:0}
.di-page {--di-ink:#142b32;--di-paper:#f7f8f2;--di-muted:#586b71;--di-line:#d9dfd8;--di-blue:#2161dd;--di-lime:#d2f56a;color:var(--di-ink);font-family:var(--font-ui,Arial),sans-serif;overflow:clip}
.di-page * {box-sizing:border-box}
.di-wrap {width:calc(100% - 96px);max-width:1280px;margin-inline:auto}
.di-page h1,.di-page h2,.di-page h3,.di-page h4 {font-family:var(--font-heading,Arial),sans-serif;font-weight:500;letter-spacing:-.045em;line-height:1.12;color:inherit;text-wrap:balance}
.di-page a {color:var(--di-blue);text-underline-offset:4px;text-decoration-thickness:1px}
.di-page a:focus-visible {outline:3px solid var(--di-blue);outline-offset:5px}
.di-page a:hover {text-decoration-color:currentColor}
.di-hero {position:relative;background:#edf0e9}
.di-hero-grid {display:grid;grid-template-columns:minmax(0,1.75fr) minmax(260px,.8fr);gap:64px;align-items:center;min-height:425px;padding-block:68px 66px}
.di-hero-copy {position:relative;z-index:1}
.di-eyebrow {display:flex;align-items:center;gap:13px;color:var(--di-blue);font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.18em;line-height:1.6;margin:0 0 22px}
.di-eyebrow:not(:empty):before {content:"";display:block;width:26px;height:1px;background:currentColor}
.di-eyebrow:empty {display:none}
.di-title {font-size:clamp(42px,4.7vw,68px);margin:0;max-width:900px}
.di-intro {font-size:17px;line-height:1.8;color:var(--di-muted);max-width:650px;margin:24px 0 0}
.di-hero-visual {position:relative;display:grid;place-items:center;min-width:0}
.di-hero-image {width:100%;height:285px;display:block;object-fit:cover;border-radius:2px;box-shadow:12px 12px 0 #dce3d8}
.di-hero-visual:has(.di-hero-image) .di-art {display:none}
.di-art {position:relative;width:290px;max-width:100%;aspect-ratio:1;isolation:isolate;overflow:hidden}
.di-art:before,.di-art:after {content:"";position:absolute;background:#142b3228;z-index:1}
.di-art:before {width:100%;height:1px;top:50%;left:0}
.di-art:after {height:100%;width:1px;left:50%;top:0}
.di-art-lines {position:absolute;inset:10%;transform:rotate(-30deg)}
.di-art-lines i {position:absolute;inset:0;border:1px solid #142b3260;border-radius:50%;transform:scaleX(.22)}
.di-art-lines i:nth-child(2){transform:scaleX(.35)}.di-art-lines i:nth-child(3){transform:scaleX(.48)}.di-art-lines i:nth-child(4){transform:scaleX(.61)}.di-art-lines i:nth-child(5){transform:scaleX(.74)}.di-art-lines i:nth-child(6){transform:scaleX(.87)}.di-art-lines i:nth-child(7){transform:scaleX(1)}.di-art-lines i:nth-child(8){transform:rotate(90deg)}
.di-art-disc {position:absolute;inset:23%;border-radius:50%;background:var(--di-lime);z-index:-1;transform:translate(18%,-15%)}
.di-art-point {position:absolute;width:15px;height:15px;border-radius:50%;background:var(--di-blue);top:23%;right:21%;box-shadow:0 0 0 7px #2161dd0b}
.di-art-axis {position:absolute;inset:0;border:1px solid #142b3218;border-radius:50%}
.di-hero-rule {height:1px;width:100%;background:var(--di-line);position:relative;overflow:hidden}
.di-hero-rule span {display:block;width:16%;height:100%;background:var(--di-blue);animation:di-rule-enter 1.2s cubic-bezier(.2,.7,.2,1) both}
.di-layout {display:grid;grid-template-columns:205px minmax(0,1fr);gap:74px;padding-block:64px 110px;align-items:start}
.di-rail {min-width:0;align-self:stretch}
.di-rail-inner {position:sticky;top:32px}
.di-rail-label {font-size:10px;line-height:1.6;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--di-muted);margin:0 0 16px}
.di-rail-label:empty {display:none}
.di-contents {margin-bottom:36px}
.di-contents[hidden] {display:none}
.di-contents-nav {display:flex;flex-direction:column;gap:0;border-left:1px solid var(--di-line)}
.di-contents-nav a {display:block;color:var(--di-muted);font-size:12px;line-height:1.55;text-decoration:none;padding:8px 0 8px 16px;border-left:2px solid transparent;margin-left:-1px;transition:color .2s,border-color .2s}
.di-contents-nav a:hover,.di-contents-nav a[aria-current="location"] {color:var(--di-blue);border-color:var(--di-blue)}
.di-related {border-top:1px solid var(--di-line);padding-top:20px}
.di-related nav {display:flex;flex-direction:column}
.di-related a {display:flex;align-items:baseline;justify-content:space-between;gap:12px;padding:12px 0;border-bottom:1px solid var(--di-line);font-size:13px;line-height:1.5;text-decoration:none;color:var(--di-ink)}
.di-related a>span:last-child {font-size:17px;color:var(--di-blue);flex-shrink:0;transition:transform .2s}
.di-related a:hover>span:last-child {transform:translate(2px,-2px)}
.di-rail-mark {display:flex;align-items:center;gap:6px;margin-top:42px;height:24px}
.di-rail-mark span {display:block;width:18px;height:18px;border:1px solid #142b3240;border-radius:50%}.di-rail-mark span:nth-child(2){margin-left:-13px}.di-rail-mark span:nth-child(3){margin-left:-13px;background:var(--di-lime);border-color:var(--di-lime)}
.di-prose {max-width:910px;min-width:0;color:var(--di-ink);font-family:var(--font-ui,Arial),sans-serif;font-size:16px;line-height:1.9;margin:0}
.di-prose>:first-child {margin-top:0}
.di-prose>p {max-width:770px;margin:0 0 1.5em}
.di-prose>p:first-child {font-size:19px;line-height:1.85;letter-spacing:-.012em;margin-bottom:34px;color:var(--di-ink)}
.di-prose h2 {font-size:31px;line-height:1.22;margin:52px 0 22px;scroll-margin-top:32px}
.di-prose h3 {font-size:24px;line-height:1.25;margin:38px 0 18px;scroll-margin-top:32px}
.di-prose h4 {font-size:21px;margin:30px 0 16px}
.di-prose p {margin-block:0 1.3em}
.di-prose ul,.di-prose ol {padding-left:1.25em;margin:25px 0 35px}
.di-prose li {padding-left:.2em;margin-block:10px;max-width:760px}
.di-prose li::marker {color:var(--di-blue)}
.di-prose strong {font-weight:600}
.di-prose img {display:block;max-width:100%;height:auto;border-radius:3px}
.di-prose>p>img,.di-prose>figure,.di-prose>img {margin-block:32px}
.di-prose figure {margin-inline:0}
.di-prose figcaption {font-size:12px;line-height:1.7;color:var(--di-muted);margin-top:14px}
.di-prose iframe {max-width:100%}
.di-prose blockquote {margin:38px 0;padding:25px 30px;border-left:3px solid var(--di-blue);background:#edf0e9;font-size:20px;line-height:1.7;font-style:normal;color:var(--di-ink)}
.di-prose hr {border:0;border-top:1px solid var(--di-line);margin:42px 0}
.di-prose table {border-collapse:collapse;width:100%;font-size:14px;margin:30px 0;display:block;overflow-x:auto}
.di-prose th,.di-prose td {padding:12px 16px;border:1px solid var(--di-line);text-align:left}
.di-prose th {background:#edf0e9}
.di-prose code {font-size:.85em;background:#e8ede4;padding:.15em .3em;border-radius:3px}
.di-prose pre {overflow:auto;background:var(--di-ink);color:white;padding:24px;border-radius:4px}
.di-prose pre code {background:none;padding:0}
.di-prose p>a:only-child:has(strong) {display:inline-flex;padding:14px 0;border-bottom:1px solid #2161dd55;text-decoration:none;font-size:15px}
/* Service details: a visible sequence of editorial sections and explicit lists. */
.di-page[data-kind="service"] .di-prose {counter-reset:sections}
.di-page[data-kind="service"] .di-prose>h2 {border-top:1px solid var(--di-line);padding-top:26px;counter-increment:sections;display:flex;align-items:baseline;gap:20px}
.di-page[data-kind="service"] .di-prose>h2:before {content:counter(sections,decimal-leading-zero);font-family:var(--font-ui,Arial),sans-serif;font-size:11px;font-weight:500;letter-spacing:.04em;color:var(--di-blue);flex-shrink:0}
.di-page[data-kind="service"] .di-prose>ul {list-style:none;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.di-page[data-kind="service"] .di-prose>ul>li {margin:0;padding:20px 22px;background:#edf0e9;border:1px solid var(--di-line);font-size:14px;line-height:1.75;border-radius:2px}
.di-page[data-kind="service"] .di-prose>ul>li:before {content:"↗";display:block;color:var(--di-blue);font-size:20px;margin-bottom:10px}
/* People: generous portraits, consistent roles, and a complete useful rail. */
.di-page[data-kind="team"] .di-hero {background:var(--di-ink);color:var(--di-paper)}
.di-page[data-kind="team"] .di-eyebrow {color:var(--di-lime)}
.di-page[data-kind="team"] .di-intro {color:#becdcc}
.di-page[data-kind="team"] .di-art-lines i {border-color:#f7f8f260}
.di-page[data-kind="team"] .di-art:before,.di-page[data-kind="team"] .di-art:after {background:#f7f8f230}
.di-page[data-kind="team"] .di-art-disc {background:#2161dd}
.di-page[data-kind="team"] .di-art-point {background:var(--di-lime)}
.di-page[data-kind="team"] .define-team-grid {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:40px 28px}
.di-page[data-kind="team"] .di-prose>p,.di-page[data-kind="team"] .di-prose>h2 {grid-column:1/-1}
.di-page[data-kind="team"] .di-prose>p {margin-bottom:0}
.di-page .define-person {min-width:0}
.di-page[data-kind="team"] .define-person {position:relative;margin:0}
.di-page[data-kind="team"] .define-person>a {display:block;overflow:hidden;background:#e3e9e0;border-radius:3px}
.di-page[data-kind="team"] .define-person>a>img {width:100%;height:315px;object-fit:cover;object-position:center 25%;transition:transform .5s}
.di-page[data-kind="team"] .define-person:hover>a>img {transform:scale(1.035)}
.di-page[data-kind="team"] .define-person h4 {font-size:26px;line-height:1.2;margin:22px 0 7px;padding-right:20px}
.di-page[data-kind="team"] .define-person h4 a {color:var(--di-ink);text-decoration:none}
.di-page[data-kind="team"] .define-person:after {content:"↗";position:absolute;right:0;bottom:29px;color:var(--di-blue);font-size:25px}
.di-page[data-kind="team"] .define-person p {font-size:12px;letter-spacing:.015em;line-height:1.6;color:var(--di-muted);margin:0;padding-right:20px}
.di-page[data-kind="team"] .define-person p a {text-decoration:none;color:var(--di-muted)}
.di-page[data-kind="profile"] .di-hero-grid {grid-template-columns:minmax(0,1.6fr) minmax(260px,.85fr)}
.di-page[data-kind="profile"] .di-hero-image {height:335px;width:100%;max-width:350px;object-position:center 22%;box-shadow:14px 14px 0 var(--di-lime)}
.di-page[data-kind="profile"] .define-person>img {width:230px;float:left;margin:0 28px 20px 0;max-height:290px;object-fit:cover;object-position:top}
.di-page[data-kind="profile"] .define-person:after {content:"";display:block;clear:both}
/* Clients and testimonials retain original brand colors and source attribution. */
.di-page[data-kind="work"] .di-art-disc {inset:10%;background:var(--di-lime)}
.di-page[data-kind="work"] .di-art-lines {transform:rotate(20deg);inset:15%}
.di-page .define-logo-grid {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;background:var(--di-line);border:1px solid var(--di-line);margin-block:28px 20px}
.di-page .define-logo-grid img {display:block;width:100%;height:158px;object-fit:contain;padding:10px 14px;background:white;border-radius:0;filter:none;opacity:1;mix-blend-mode:normal}
.di-page .define-testimonials {columns:2;column-gap:24px}
.di-page .define-testimonials blockquote {break-inside:avoid;display:inline-block;width:100%;margin:0 0 24px;padding:28px;border:1px solid var(--di-line);border-radius:3px;background:#edf0e9;font-size:16px;line-height:1.85}
.di-page .define-testimonials blockquote:nth-child(3n+1) {background:var(--di-ink);color:var(--di-paper);border-color:var(--di-ink)}
.di-page .define-testimonials blockquote:nth-child(5n) {background:var(--di-lime);color:var(--di-ink);border-color:var(--di-lime)}
.di-page .define-testimonials q {quotes:none}
.di-page .define-testimonials strong {display:block;margin-top:24px;padding-top:18px;border-top:1px solid #87999255;font-size:11px;font-weight:500;line-height:1.8;white-space:pre-line}
/* Journal: modular magazine grid, rather than an unstyled archive list. */
.di-page[data-kind="journal"] .define-journal-grid {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px}
.di-page[data-kind="journal"] .di-prose>p {grid-column:1/-1;margin:0 0 10px}
.di-page[data-kind="journal"] .define-journal-grid>article {position:relative;padding:30px;background:#edf0e9;border:1px solid var(--di-line);border-radius:3px;min-width:0;transition:border-color .2s,background .2s}
.di-page[data-kind="journal"] .define-journal-grid>article:hover {background:#e7ece1;border-color:#b6c2b0}
.di-page[data-kind="journal"] .define-journal-grid>article>p:first-child {font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--di-muted);margin-bottom:18px}
.di-page[data-kind="journal"] .define-journal-grid>article h2 {font-size:25px;line-height:1.25;letter-spacing:-.035em;margin:0 0 20px;text-wrap:pretty}
.di-page[data-kind="journal"] .define-journal-grid>article h2 a {color:inherit;text-decoration:none}
.di-page[data-kind="journal"] .define-journal-grid>article h2 a:after {content:"↗";display:block;color:var(--di-blue);font-size:24px;margin-top:24px}
.di-page[data-kind="journal"] .define-journal-grid>article>p {font-size:14px;line-height:1.85;margin-bottom:0;color:var(--di-muted)}
.di-page[data-kind="journal"] .define-journal-grid>article img {width:100%;max-height:240px;object-fit:cover;margin:0 0 24px}
.di-page[data-kind="journal"] .define-journal-grid>article:first-of-type {grid-column:1/-1;background:var(--di-ink);color:var(--di-paper);padding:38px}
.di-page[data-kind="journal"] .define-journal-grid>article:first-of-type h2 {font-size:37px;max-width:680px}
.di-page[data-kind="journal"] .define-journal-grid>article:first-of-type p {color:#becdcc}
.di-page[data-kind="journal"] .define-journal-grid>article:first-of-type h2 a:after {color:var(--di-lime)}
.di-page[data-kind="journal"] .define-journal-grid>article:first-of-type img {max-height:330px}
.di-page[data-kind="article"] .di-hero-grid {grid-template-columns:minmax(0,1fr) minmax(210px,.38fr);gap:70px;min-height:400px}
.di-page[data-kind="article"] .di-title {font-size:clamp(37px,4.2vw,59px);letter-spacing:-.045em;line-height:1.12}
.di-page[data-kind="article"] .di-hero-image {height:220px;object-fit:contain;background:white;padding:10px;box-shadow:8px 8px 0 #dce3d8}
.di-page[data-kind="article"] .di-art {width:225px}
.di-page[data-kind="article"] .di-prose {max-width:790px;font-size:17px;line-height:1.95}
.di-page[data-kind="article"] .di-prose>p:first-child {font-size:20px}
.di-page[data-kind="article"] .di-prose h2 {font-size:31px;letter-spacing:-.035em}
/* Contact and legal pages have deliberately quieter reading and action surfaces. */
.di-page[data-kind="contact"] .di-hero {background:var(--di-blue);color:white}
.di-page[data-kind="contact"] .di-eyebrow {color:var(--di-lime)}
.di-page[data-kind="contact"] .di-intro {color:#e1eaff}
.di-page[data-kind="contact"] .di-art-lines i {border-color:#ffffff70}
.di-page[data-kind="contact"] .di-art-point {background:var(--di-ink)}
.di-page[data-kind="contact"] .di-prose {padding:38px;background:#edf0e9;border:1px solid var(--di-line);border-radius:3px}
.di-page[data-kind="contact"] .di-prose a[href^="mailto:"] {display:inline-block;font-size:clamp(20px,2.5vw,32px);line-height:1.3;letter-spacing:-.03em;overflow-wrap:anywhere;padding-block:8px}
.di-page[data-kind="legal"] .di-hero-grid {min-height:300px;padding-block:55px}
.di-page[data-kind="legal"] .di-title {font-size:52px}
.di-page[data-kind="legal"] .di-art {width:180px;opacity:.6}
@keyframes di-rule-enter {from{transform:translateX(-100%)}to{transform:translateX(0)}}
@media(min-width:1600px){.di-hero-grid{min-height:460px}}
@media(max-width:1100px){.di-wrap{width:calc(100% - 64px)}.di-hero-grid{gap:40px;grid-template-columns:minmax(0,1.6fr) minmax(220px,.75fr)}.di-title{font-size:54px}.di-art{width:250px}.di-layout{grid-template-columns:180px minmax(0,1fr);gap:44px}.di-page[data-kind="team"] .define-person>a>img{height:260px}.di-page .define-testimonials{column-gap:18px}.di-page .define-testimonials blockquote{padding:23px;font-size:15px}.di-page[data-kind="journal"] .define-journal-grid{gap:20px}.di-page[data-kind="journal"] .define-journal-grid>article{padding:25px}.di-page[data-kind="journal"] .define-journal-grid>article h2{font-size:22px}.di-page .define-logo-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.di-page .define-logo-grid img{height:130px}}
@media(max-width:800px){.di-wrap{width:calc(100% - 40px)}.di-hero-grid{gap:28px;grid-template-columns:minmax(0,1fr) 170px;min-height:370px;padding-block:48px}.di-title{font-size:44px}.di-intro{font-size:15px;line-height:1.8;margin-top:20px}.di-art{width:170px}.di-hero-image{height:220px;box-shadow:7px 7px 0 #dce3d8}.di-eyebrow{font-size:9px;margin-bottom:18px}.di-layout{grid-template-columns:1fr;gap:35px;padding-block:35px 65px}.di-rail{order:2;border-top:1px solid var(--di-line);padding-top:24px}.di-rail-inner{position:static;display:grid;grid-template-columns:1fr 1fr;gap:30px}.di-contents{margin:0}.di-related{padding:0;border:0}.di-rail-mark{display:none}.di-prose{max-width:none;font-size:16px}.di-prose>p{max-width:none}.di-prose>p:first-child{font-size:18px;margin-bottom:28px}.di-prose h2{font-size:28px;margin-top:40px}.di-prose h3{font-size:23px}.di-page[data-kind="team"] .define-person>a>img{height:310px}.di-page[data-kind="profile"] .di-hero-grid{grid-template-columns:minmax(0,1fr) 220px}.di-page[data-kind="profile"] .di-hero-image{height:280px;box-shadow:8px 8px 0 var(--di-lime)}.di-page[data-kind="article"] .di-hero-grid{grid-template-columns:1fr;gap:30px;min-height:0}.di-page[data-kind="article"] .di-hero-visual:not(:has(.di-hero-image)){display:none}.di-page[data-kind="article"] .di-hero-image{max-width:600px;height:auto;max-height:330px;box-shadow:none}.di-page[data-kind="article"] .di-title{font-size:44px}.di-page[data-kind="article"] .di-prose{max-width:none;font-size:16px}.di-page[data-kind="article"] .di-prose>p:first-child{font-size:18px}.di-page .define-logo-grid img{height:160px}.di-page[data-kind="journal"] .define-journal-grid>article h2{font-size:24px}.di-page[data-kind="journal"] .define-journal-grid>article:first-of-type{padding:30px}.di-page[data-kind="journal"] .define-journal-grid>article:first-of-type h2{font-size:32px}}
@media(max-width:560px){.di-hero-grid{grid-template-columns:1fr;gap:28px;padding-block:42px;min-height:0}.di-title{font-size:41px;letter-spacing:-.055em}.di-intro{font-size:16px}.di-hero-visual:not(:has(.di-hero-image)){display:none}.di-hero-image{height:220px;max-width:100%;object-fit:cover}.di-prose h2{font-size:27px}.di-prose blockquote{font-size:18px;padding:22px}.di-rail-inner{grid-template-columns:1fr;gap:28px}.di-page[data-kind="service"] .di-prose>ul{grid-template-columns:1fr}.di-page[data-kind="team"] .define-team-grid{grid-template-columns:1fr;gap:34px}.di-page[data-kind="team"] .define-person>a>img{height:355px}.di-page[data-kind="team"] .define-person h4{font-size:27px}.di-page[data-kind="profile"] .di-hero-grid{grid-template-columns:1fr}.di-page[data-kind="profile"] .di-hero-image{height:330px;max-width:100%;object-position:center 22%}.di-page[data-kind="profile"] .define-person>img{float:none;width:100%;max-height:350px;object-fit:contain;margin:0 0 25px}.di-page .define-testimonials{columns:1}.di-page .define-testimonials blockquote{padding:27px;font-size:16px}.di-page .define-logo-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.di-page .define-logo-grid img{height:140px;padding:8px}.di-page[data-kind="journal"] .define-journal-grid{grid-template-columns:1fr;gap:20px}.di-page[data-kind="journal"] .define-journal-grid>article{padding:26px}.di-page[data-kind="journal"] .define-journal-grid>article:first-of-type{padding:28px}.di-page[data-kind="journal"] .define-journal-grid>article:first-of-type h2{font-size:30px}.di-page[data-kind="journal"] .define-journal-grid>article h2{font-size:27px}.di-page[data-kind="article"] .di-title{font-size:38px}.di-page[data-kind="contact"] .di-prose{padding:27px}.di-page[data-kind="legal"] .di-title{font-size:40px}}
@media(prefers-reduced-motion:reduce){.di-page *, .di-page *:before,.di-page *:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.di-page[data-kind="team"] .define-person:hover>a>img{transform:none}}

.di-page .define-journal-grid {margin-top:32px}
.di-page .define-journal-date {display:block;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--di-muted);margin:0 0 18px}
.di-page .define-journal-grid>article:first-of-type .define-journal-date {color:#becdcc}
.di-page .define-journal-image {display:block;background:#fff;margin-bottom:26px;overflow:hidden;border-radius:2px}
.di-page[data-kind="journal"] .define-journal-grid>article .define-journal-image img {height:190px;max-height:190px;margin:0;object-fit:contain;background:#fff;padding:8px}
.di-page[data-kind="journal"] .define-journal-grid>article:first-of-type .define-journal-image img {height:300px;max-height:300px;object-fit:cover;padding:0}
.di-page .define-team-grid {margin-top:34px}
@media(max-width:560px){.di-page[data-kind="journal"] .define-journal-grid>article:first-of-type .define-journal-image img{height:230px}.di-page .define-journal-grid{margin-top:25px}}

.di-page[data-kind="journal"] .define-journal-grid>article .define-journal-image img[src$="time-inc-logo.gif"],.di-page[data-kind="journal"] .define-journal-grid>article .define-journal-image img[src$="hearst.jpg"] {object-fit:contain;height:200px;max-height:200px;padding:55px;background:white}
@media(max-width:560px){.di-page[data-kind="journal"] .define-journal-grid>article .define-journal-image img[src$="time-inc-logo.gif"],.di-page[data-kind="journal"] .define-journal-grid>article .define-journal-image img[src$="hearst.jpg"]{height:160px;padding:30px}}

```
## `public/define-services.css`

```css
/* Services is an editable showcase; all rules are scoped to its own page. */
.ds-page {overflow:clip;background:var(--df-paper);color:var(--df-ink)}
.ds-page .di-wrap {width:calc(100% - 96px);max-width:1280px;margin-inline:auto}
.ds-page h1,.ds-page h2,.ds-page h3 {font-family:var(--font-heading);letter-spacing:-.055em;line-height:1.06;font-weight:500}
.ds-page .di-eyebrow {font-family:var(--font-ui);font-size:11px;font-weight:500;line-height:1.6;letter-spacing:.12em;text-transform:uppercase;margin:0 0 28px}
.ds-hero {padding-block:58px 78px}
.ds-eyebrow {display:flex;align-items:center;gap:12px}
.ds-live-dot {width:7px;height:7px;background:var(--df-blue);border-radius:50%;box-shadow:0 0 0 5px #2161dd10}
.ds-hero-grid {display:grid;grid-template-columns:1.15fr 1fr;gap:36px;align-items:center}
.ds-hero h1 {font-size:clamp(64px,6.6vw,96px);margin:0 0 32px;max-width:760px}
.ds-hero h1 em {font-style:normal;color:var(--df-blue);display:block}
.ds-deck {font-size:18px;line-height:1.8;color:var(--df-muted);max-width:540px;margin:0}
.ds-actions {display:flex;align-items:center;gap:25px;flex-wrap:wrap;margin-top:35px}
.ds-button {display:inline-flex;justify-content:space-between;align-items:center;gap:28px;border-radius:40px;padding:17px 25px;background:var(--df-ink);color:white;text-decoration:none;font-size:13px;font-weight:500;transition:background .2s,transform .2s}
.ds-button:hover {background:var(--df-blue);transform:translateY(-3px)}
.ds-button>span,.ds-link>span {font-size:22px;line-height:1}
.ds-link {display:inline-flex;align-items:center;gap:18px;color:var(--df-ink);font-size:13px;text-decoration:none;border-bottom:1px solid #142b3260;padding-block:10px}
.ds-diagram {position:relative;isolation:isolate;aspect-ratio:1.03;width:100%;max-width:540px;margin-left:auto}
.ds-grid {position:absolute;inset:-20px;background:linear-gradient(#142b3208 1px,transparent 1px),linear-gradient(90deg,#142b3208 1px,transparent 1px);background-size:28px 28px;mask-image:radial-gradient(ellipse,#000 20%,transparent 68%)}
.ds-orbit {position:absolute;left:50%;top:49%;border:1px solid #142b3235;border-radius:50%;transform:translate(-50%,-50%)}
.ds-orbit-a {width:88%;height:88%;border-style:dashed;animation:ds-revolve 65s linear infinite}
.ds-orbit-b {width:64%;height:64%;border-color:#2161dd60}
.ds-orbit-c {width:95%;height:32%;transform:translate(-50%,-50%) rotate(-40deg)}
.ds-satellite {position:absolute;width:13px;height:13px;border-radius:50%;background:var(--df-blue);z-index:2;animation:ds-breathe 5s ease-in-out infinite}
.ds-satellite-a {top:34%;left:9%}.ds-satellite-b {bottom:27%;right:8%;width:9px;height:9px;background:var(--df-ink);animation-delay:-2s}
.ds-node {position:absolute;display:flex;align-items:center;gap:12px;z-index:2;font-size:12px;letter-spacing:-.015em;padding:18px 24px;background:white;border:1px solid #142b3226;border-radius:5px;box-shadow:0 15px 35px #142b3207}
.ds-node-center {left:50%;top:49%;transform:translate(-50%,-50%);background:var(--df-lime);border:0;flex-direction:column;gap:16px;padding:30px 34px;font-size:18px;white-space:nowrap}
.ds-node-top {top:10%;right:4%;transform:rotate(5deg);animation:ds-drift 7s ease-in-out infinite}
.ds-node-bottom {bottom:10%;left:2%;transform:rotate(-5deg);animation:ds-drift 9s ease-in-out infinite reverse}
.ds-crosshair {position:relative;width:44px;height:44px;border:1px solid var(--df-ink);border-radius:50%}
.ds-crosshair:before,.ds-crosshair:after {content:"";position:absolute;background:var(--df-ink);top:50%;left:50%;transform:translate(-50%,-50%)}
.ds-crosshair:before {width:58px;height:1px}.ds-crosshair:after {width:1px;height:58px}
.ds-tiny-bars {display:flex;align-items:end;gap:3px;height:18px}.ds-tiny-bars i {width:4px;background:var(--df-blue);height:50%}.ds-tiny-bars i:nth-child(2){height:75%}.ds-tiny-bars i:nth-child(3){height:100%}
.ds-node-mark {font-size:22px;color:var(--df-blue)}
.ds-diagram-caption {position:absolute;bottom:-16px;left:0;right:0;text-align:center;font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:var(--df-muted)}
.ds-capabilities {background:#edf0e8;border-block:1px solid var(--df-line);padding-block:72px 82px;scroll-margin-top:35px}
.ds-section-head {display:grid;grid-template-columns:1.1fr 1fr;gap:0 80px;margin-bottom:42px;align-items:end}
.ds-section-head .di-eyebrow {grid-column:1/-1;margin-bottom:20px}
.ds-section-head h2 {font-size:clamp(35px,4vw,56px);margin:0;white-space:pre-line}
.ds-section-head>p:last-child {font-size:16px;line-height:1.8;color:var(--df-muted);max-width:460px;margin:0}
.ds-cards {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.ds-card {display:flex;flex-direction:column;padding:30px;background:var(--df-paper);border:1px solid var(--df-line);border-radius:4px;position:relative;transition:transform .3s,box-shadow .3s,border-color .3s}
.ds-card:hover {transform:translateY(-7px);box-shadow:0 24px 40px #142b320a;border-color:#2161dd60}
.ds-card-top {display:flex;align-items:flex-start;justify-content:space-between;min-height:115px}
.ds-count {font-family:monospace;font-size:11px;color:var(--df-muted)}
.ds-card h3 {font-size:30px;margin:10px 0 20px;max-width:230px}.ds-card h3 a {color:inherit;text-decoration:none}
.ds-card-description {font-size:15px;line-height:1.8;color:var(--df-muted);margin:0 0 28px}
.ds-card-tags {font-size:10px!important;text-transform:uppercase;letter-spacing:.07em;line-height:1.9!important;color:var(--df-muted);margin:auto 0 24px;padding-top:10px}
.ds-card-link {display:flex;align-items:center;justify-content:space-between;gap:15px;border-top:1px solid var(--df-line);padding-top:20px;text-decoration:none;font-size:12px;font-weight:500;color:var(--df-ink)}
.ds-card-link span {font-size:25px;color:var(--df-blue);transition:transform .2s}.ds-card-link:hover span {transform:translate(3px,-3px)}
.ds-glyph {height:84px;width:105px;position:relative;margin:0 0 0 auto;overflow:hidden}
.ds-glyph i {display:block;position:absolute;border:1px solid var(--df-blue);border-radius:50%;width:62px;height:62px;left:21px;top:10px;transition:transform .5s}
.ds-glyph i:nth-child(2){transform:translateX(-14px)}.ds-glyph i:nth-child(3){transform:translateX(14px)}.ds-glyph i:nth-child(4){transform:translateY(-10px)}.ds-glyph i:nth-child(5){transform:translateY(10px)}
.ds-glyph-02 i {border-radius:0;border-width:0 0 1px;width:76px;height:28px;transform:rotate(-25deg)!important;left:15px;top:4px}.ds-glyph-02 i:nth-child(2){top:15px}.ds-glyph-02 i:nth-child(3){top:26px}.ds-glyph-02 i:nth-child(4){top:37px}.ds-glyph-02 i:nth-child(5){top:48px}
.ds-glyph-03 i {border-radius:0;width:42px;height:42px;top:20px;left:31px}.ds-glyph-03 i:nth-child(2){transform:translate(-12px,-12px)}.ds-glyph-03 i:nth-child(3){transform:translate(12px,12px)}.ds-glyph-03 i:nth-child(4){transform:translate(-24px,-24px)}.ds-glyph-03 i:nth-child(5){transform:translate(24px,24px)}
.ds-card:hover .ds-glyph {rotate:8deg;transition:rotate .5s}
.ds-approach {display:grid;grid-template-columns:.85fr 1.4fr;gap:95px;padding-block:100px;align-items:start}
.ds-approach-aside {position:sticky;top:40px}
.ds-approach-aside h2 {font-size:clamp(35px,3.5vw,50px);margin:0 0 40px;white-space:pre-line}
.ds-approach-aside blockquote {margin:0;padding:22px 0 22px 20px;border-left:3px solid var(--df-blue);font-family:var(--font-heading);font-size:23px;line-height:1.4;color:var(--df-blue)}
.ds-lines {display:flex;gap:9px;margin-top:45px;height:80px;align-items:flex-end}.ds-lines i {width:30px;height:40%;background:#2161dd14;border-top:1px solid var(--df-blue)}.ds-lines i:nth-child(2){height:55%}.ds-lines i:nth-child(3){height:70%}.ds-lines i:nth-child(4){height:85%}.ds-lines i:nth-child(5){height:100%}
.ds-page .ds-body {max-width:none;width:100%;margin:0;padding:0;font-size:16px;line-height:1.85}
.ds-page .ds-body>p:first-child {margin-top:0}
.ds-body ol {list-style:none;counter-reset:ds-outcome;display:grid;grid-template-columns:1fr 1fr;gap:18px;margin:25px 0 38px;padding:0}
.ds-body ol li {counter-increment:ds-outcome;margin:0;padding:22px;background:#edf0e8;border-top:2px solid var(--df-blue);font-size:16px;line-height:1.6}
.ds-body ol li:before {content:"0" counter(ds-outcome);display:block;font:11px monospace;color:var(--df-muted);margin-bottom:20px}
.ds-body p:has(>a:only-child) {margin-block:25px 40px}.ds-body a {color:var(--df-blue);text-decoration-thickness:1px;text-underline-offset:4px}
.ds-closing {padding-block:72px;background:var(--df-ink);color:var(--df-paper);position:relative}
.ds-closing>.di-wrap {display:grid;grid-template-columns:1.2fr 1fr;gap:80px;align-items:center}
.ds-closing .di-eyebrow {color:var(--df-lime)}
.ds-closing h2 {font-size:clamp(40px,4.5vw,64px);margin:0;white-space:pre-line}
.ds-closing p:not(.di-eyebrow) {font-size:17px;line-height:1.8;color:#c4d2d3;max-width:470px;margin:0 0 30px}
.ds-button-lime {background:var(--df-lime);color:var(--df-ink)}.ds-button-lime:hover {background:#e2ff97}
@keyframes ds-revolve {to{transform:translate(-50%,-50%) rotate(360deg)}}
@keyframes ds-drift {50%{translate:0 -12px}}
@keyframes ds-breathe {50%{box-shadow:0 0 0 7px #2161dd12}}
@media(max-width:1000px){.ds-page .di-wrap{width:calc(100% - 64px)}.ds-hero h1{font-size:66px}.ds-hero-grid{gap:24px}.ds-node{padding:14px 17px;font-size:10px}.ds-node-center{padding:25px;font-size:15px}.ds-actions{gap:18px}.ds-button{padding:15px 20px;gap:18px}.ds-section-head{gap:30px}.ds-card{padding:24px}.ds-card h3{font-size:26px}.ds-card-description{font-size:14px}.ds-approach{gap:50px;grid-template-columns:.9fr 1.4fr}.ds-closing>.di-wrap{gap:40px}}
@media(max-width:760px){.ds-page .di-wrap{width:calc(100% - 40px)}.ds-hero{padding-block:35px 45px}.ds-hero-grid{grid-template-columns:1fr;gap:30px}.ds-hero h1{font-size:clamp(53px,9vw,72px);margin-bottom:25px}.ds-deck{font-size:16px}.ds-diagram{max-width:430px;margin:0 auto;aspect-ratio:1.15}.ds-node-top{top:6%}.ds-node-bottom{bottom:8%}.ds-node-center{padding:25px;font-size:17px}.ds-section-head{grid-template-columns:1fr;gap:22px;margin-bottom:30px}.ds-section-head .di-eyebrow{margin:0}.ds-section-head h2{font-size:39px}.ds-capabilities{padding-block:50px}.ds-cards{grid-template-columns:1fr;gap:20px}.ds-card{padding:28px}.ds-card-top{min-height:90px}.ds-card h3{max-width:none;font-size:31px;margin-top:0}.ds-card-description{font-size:16px}.ds-card-tags{margin-top:10px}.ds-card-link{font-size:14px}.ds-approach{grid-template-columns:1fr;gap:38px;padding-block:60px}.ds-approach-aside{position:static}.ds-approach-aside h2{font-size:40px;margin-bottom:24px}.ds-lines{display:none}.ds-body ol{gap:12px}.ds-body ol li{padding:18px;font-size:15px}.ds-closing{padding-block:55px}.ds-closing>.di-wrap{grid-template-columns:1fr;gap:30px}.ds-closing h2{font-size:45px}}
@media(max-width:380px){.ds-hero h1{font-size:47px}.ds-body ol{grid-template-columns:1fr}.ds-node-top{right:0}.ds-node-bottom{left:0}}
@media(prefers-reduced-motion:reduce){.ds-page *{animation:none!important;transition:none!important;scroll-behavior:auto!important}.ds-card:hover,.ds-button:hover{transform:none}}

.ds-page .ds-button {color:white}
.ds-page .ds-button-lime {color:var(--df-ink)}
.ds-page .ds-link,.ds-page .ds-card-link {color:var(--df-ink)}

```
