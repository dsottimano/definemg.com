# Define Media Group migration — 2026-10-13

## Current handoff

Migrated the live DefineMG main pages and 19 original published articles into 36 English CMS Pages. All public content is under `content/pages/en/`, using the `define-home` or `define-page` preset. Original nested URLs are retained by `data/site.json.urls`. The starter post remains a draft. Data, words, templates and media belong to this tenant; shared Lanza source was not changed. Public npm dependency remains exactly `lanza-site` 0.1.28.

Recovered current source HTML and media into the local sibling `../definemg-rescue` before the old hosting could disappear. The old EmDash backup included fabricated starter content and deleted drafts; those were excluded. All original client logos are local. The homepage includes 35 client logos; Our Work retains its additional logos. Original favicon retained. Historical attribution in testimonials is copied from the source, not a claim about current job titles.

## Verification before publishing

- `npm run check:site`: zero errors; two reviewed advisory warnings for the tenant stylesheet and small same-origin navigation script.
- `node node_modules/lanza-site/bin/lanza.mjs build`: passed, 38 static HTML pages including infrastructure.
- Changed and rendered each of the 36 pages’ editable title fields, then restored all source files and rebuilt. See `render-verification.json`.
- Confirmed draft starter exclusion and no missing local links or images in the built HTML.
- Initial desktop/mobile homepage browser check: no broken images, horizontal overflow or page JavaScript errors; mobile navigation opens.
- Full browser pass: all 36 content routes at 1440px and 390px widths (72 checks), no horizontal overflow, missing images or incorrect heading counts. Reduced-motion animation stops. See `browser-verification.json`.
- Production deployed successfully from `ea841ebec2979b27e08230c0c6f30a7b329de99f`: Cloudflare deployment `3003b1b7-122f-48d8-a8e9-ab14f1fbf145`, GitHub check `115489033910`. Staging deployment `2e8c7b44-e512-422c-a5ca-ab0bc1d9f82e` also succeeded.
- Verified actual https://definemg-com-6aba0b1759de.pages.dev/ in Chrome: new heading, all 35 homepage client logos, no image or JavaScript errors. Main sections and `/admin/` sign-in return 200. All 36 published content routes returned HTTP 200 using curl; see `live-verification.json`. A Python urllib probe was rejected with 403 by the request path/environment, while Chrome and curl succeeded.
- Handoff-only commit uses Cloudflare’s documented `[CF-Pages-Skip]` prefix to leave the verified launch deployment running. No public site files changed after the launch commit.

Existing package build warnings concern empty author/tag/category collections and a large bundled chunk. These do not block the successful build. CSS animation honors reduced motion. The CMS editor itself was not browser-tested while authenticated.

## Remaining work

- [ ] Connect the custom domain after authorization and DNS access. The Pages site is in a different Cloudflare account from the local Wrangler login. GitHub-integrated deployment is the available publishing path.
- [ ] Set up a real contact destination and delivery. The user explicitly deferred email setup; no working form or delivery is claimed. Contact shows an honest availability notice.
- [ ] Supply a privacy policy if needed. The source policy was empty and no legal text was invented.
- [ ] Review older article external links and historical claims. Original embedded videos/presentations now have direct source links because the current preset renderer rejects iframe bodies. No shared software workaround was introduced.

The old `/aaron-mefford/` profile is missing from the old sitemap, backup and live access. Its one historical link wrapper was removed while retaining the original name. Case Studies previously served a homepage fallback; it now links to the two preserved original case-study articles. The new blog index links all 19 migrated articles.
