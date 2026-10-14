# Launch review follow-up — 2026-10-14

Current work implements the boss’s launch review and the user-approved blue design. See [the itemized checklist](launch-review.md) and [private Google Workspace form setup](../integrations/contact/README.md).

Implemented: blue design, typography, portrait and logo updates, team dropdown, current-page rail filtering, Insights/archive dates, route redirects, unique descriptions, sitemap, Pages crawl exclusion, 1200×630 social image and private-recipient contact integration. Public content remains editable in Pages → English. Contact now uses `define-contact`; homepage adds editable team and testimonial-image fields. Historical body text and quotes are preserved except explicitly requested corrections. All old client logos remain.

Validation: zero site-check errors (seven reviewed same-origin template advisories), full 38-page build, 36 distinct descriptions and sitemap entries, eight mocked contact tests, Cloudflare function compilation, and 72 desktop/mobile route checks without overflow, broken images, H1 failures or JavaScript exceptions. Hover/keyboard/mobile/no-JS navigation verified. Contact field mutation verified in DOM text, preserving provenance spans, then restored and rebuilt. No actual email was sent and authenticated CMS editing was not exercised.

Remaining: Workspace owner authorization, Apps Script/Turnstile/Pages configuration and inbox verification; approved privacy policy; custom-domain launch and removal of the prelaunch robots restriction. Local Wrangler is in a different account; publishing uses the existing GitHub integration. Preserve these as blockers, not completed delivery.

Remote main/staging advanced together to `3abdda1` (Lanza 0.1.29 upgrade) during implementation; no concurrent content edits. Reconciled that upgrade in `ba5d445`, retaining 0.1.29 and regenerating the dependency lock for the sitemap integration. Tenant package is 0.1.29; no shared Lanza software changes or new npm release are needed.

Historical recovery note: the sibling rescue and old checkouts cited below were removed at the user’s explicit request. This tenant retains the migrated assets/content.

---

# Interior design overhaul — 2026-10-13

Current request: overhaul every interior page while preserving the approved homepage. All 35 interior CMS entries now use tailored layouts: a dedicated Services preset, service detail navigation, portrait-led profiles and team cards, illustrated journal/case-study cards, full-color client gallery, and colored testimonial columns. CSS geometry provides motion with reduced-motion support. Original service copy, profile/article prose and all 15 testimonials are preserved; new editorial introductions carry agent provenance. No email delivery was added.

CMS: Pages → English contains every entry. Services uses `templates/define-services/fields.json`; its hero, strategy-diagram labels, three capability cards and closing CTA are editable slots in `content/pages/en/services.md`. Other interiors use the expanded `templates/define-page/fields.json` contract, including kind, hero imagery and related links. Existing body editing and URL mappings remain intact. Homepage entry, preset and base stylesheet are unchanged.

Validation: `npm run check:site` passes with zero errors and five reviewed same-origin CSS/JS advisories. Full Lanza build passes with 38 static pages; existing empty-taxonomy and bundle-size warnings remain. Chrome checked all 36 content routes at 1440px and 390px: 72 checks, zero overflow, broken images or JavaScript errors, one H1 per page (`interior-browser-verification.json`). All built local asset/link targets exist. Desktop full-page homepage screenshots from local and existing production are byte-identical (SHA256 `5c6f104bfb5b3c42bf9c08d87f4462a4489636178716ea4544db677971304e0d`). Authenticated CMS editing has not been browser-tested. Shared Lanza software/package was not changed; tenant dependency remains 0.1.28.

Delivery: source commit `df6726e6ddd5e3fc31febdcc37b9d9c3b3ff4407` pushed to main and staging after reconciliation. Cloudflare production `5fc8ced3-10e6-4834-9bc9-32a55da511f0` and staging `a17b293f-bf2d-44e9-a962-8b1be530c7bf` succeeded. Actual production Services returns the new hero, diagram and stylesheet. Live Chrome validation repeats all 72 desktop/mobile checks with zero failures (`interior-live-verification.json`). TOC anchor navigation and no-JavaScript body/related links verified; Services animation changes from `ds-revolve` to `none` with reduced motion. Superdesign Services draft: https://p.superdesign.dev/draft/0b8645ef-9548-44b9-8830-fcf79f0e0886 . The remaining domain, email, policy and historical-link tasks below still apply.

# Publisher-focused homepage revision — 2026-10-13

Requested follow-up: restore the original NYC skyline photo, emphasize publisher clients, and enlarge client logos in their original colors. Homepage copy remains in Pages → English → Home; new skyline and client-section fields belong to `templates/define-home/fields.json`. All 35 homepage logos are retained, ordered with publishers/media first. Original rich-body copy and historical quotes remain intact. Full-color logo styling also applies to Our Work.

Validation: site checker passes with zero errors and the same two reviewed CSS/script advisories. Full Lanza build passes (38 static pages). Chrome checks on the homepage and Our Work at 1440px/390px show all 35 logos loading, no horizontal overflow or JavaScript errors, and computed logo filter `none` / opacity `1`. Homepage logo image boxes increased from 56px to 156px desktop and 40px to 110px phone; the logo files retain their original brand colors. Skyline loads from the rescued original asset. Deployed from `0f74e705a757824b7e5777f7de36c9d28043cd65`; production deployment `d2adfbb4-4825-48ca-bce7-fd8cc47dbb22` and staging `1bad928f-feff-4838-b352-205896e276bc` succeeded. Verified the actual Pages production URL in Chrome: publisher page title, original skyline loaded at intrinsic 1831px width, 35 client logos with Hearst first, computed filter `none`, and 156px desktop logo image height. Domain connection and contact delivery remain deferred as recorded below.

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
