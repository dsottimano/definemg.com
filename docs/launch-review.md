# Launch review — 2026-10-14

User approved the blue Services design for implementation. Work belongs to this tenant. Shared Lanza source is unchanged; dependency is public `lanza-site` 0.1.29. No custom-domain cutover is included.

## Implemented

- Contact: dedicated CMS preset, validated fields, spam-verification integration, signed Google Workspace delivery adapter, honest unavailable state and LinkedIn alternative. No recipient address in public assets or source. **Not yet delivering**; owner setup and real delivery verification are required.
- Sitemap: official Astro sitemap integration, `/sitemap.xml` index alias, 36 canonical published URLs; drafts, redirected `/posts/`, admin and infrastructure excluded.
- Crawl protection: `robots.txt` disallows all crawling until launch; Pages root, branch and deployment hosts receive `X-Robots-Tag: noindex, nofollow` through `_headers`. Existing platform security headers retained. Remove the robots restriction only at approved custom-domain launch; keep Pages hostname exclusions.
- All 36 content pages have distinct descriptions. Original titles/H1s preserved except the requested Blog → Insights name.
- Blue palette, surfaces and hover states; readable 14px eyebrows and dates; decorative numbering, orbit diagrams and rail circles removed. Existing skyline hero and overall layout retained.
- Homepage team portraits, four testimonial company logos, styled rich-text section, corrected link spacing and missing “the”. Original quotations and attribution preserved.
- AI search, AI Overviews, agentic AI and content licensing contextualized across current marketing content. Historical articles remain historical; no invented contemporary claims inserted into them.
- Team dropdown works on hover, keyboard and mobile; all biography links remain available without JavaScript. Explore Define omits the current destination and includes Contact Us.
- Team introduction names all four people. Uniform portrait boxes and pale blue profile backplates. Dave original photo recovered at 481×538, replacing 340×380; this is still a modest-resolution source, not a fabricated upscale.
- Dave now `/team/dave-sottimano/`; training now `/services/enterprise-seo-training/`. Old paths redirect with 301, with and without trailing slash. Existing internal links updated.
- Our Work retains all 35 old logos and adds the eight requested logos (43 total). Equal boxes and padding reduce oversized solid marks. Asset sources are in `public/media/brands/SOURCES.txt`.
- Insights leads with both 2026 posts and separates the archive. Visible dates use English month names. MozCon labels use confirmed talk years (2014/2015); exact event dates were not invented from the old September 29, 2017 migration/publication timestamps. BREAKING image uses cover without white padding.
- New 1200×630 PNG share image and editable SEO image setting. Footer adds LinkedIn and privacy; the arrow is labeled by its home destination. Contact link leads to the private-recipient form instead of exposing a mailto address.

## Remaining launch dependencies

- Deploy/authorize the private Google Apps Script and configure the owning Cloudflare Pages account plus Turnstile. Follow `integrations/contact/README.md`. No actual email has been sent. Local readiness is intentionally false without secrets.
- Owner-approved privacy policy: source was empty, and no legal text was invented. User has been asked for approved text or a document URL.
- Custom-domain cutover and the final robots change require the existing domain launch work. The current public preview is still prelaunch.

## Verification

- `npm run check:site`: zero errors; seven reviewed advisories for same-origin styles/scripts and the contact form.
- Full Lanza build passes with 38 static pages. Existing empty-taxonomy and large-bundle warnings remain.
- 36 unique descriptions; 36 sitemap URLs; original client logos retained; built local links/assets checked.
- First Chrome pass: 72 route/viewport checks (1440px and 390px), no overflow, broken images, JavaScript errors or H1 count failures. `launch-browser-verification.json` records results. Follow-up interaction checks cover desktop hover, keyboard Escape, mobile toggles, no-JS biography links and unavailable form behavior.
- Contact CMS slot mutation: changed the name-label value, built and verified the rendered value, then restored content and rebuilt successfully. Other new homepage fields render the saved portraits and testimonial logos.
- Eight contact tests pass, covering refusal, origin/field validation, Turnstile hostname/action, HMAC, replay, recipient confinement, quota and provider failures. These use mocked delivery and do not establish inbox delivery.
- Required Wrangler 3.114.17 Pages Functions compile passes. Local runtime GET `/api/contact` correctly reports unavailable without bindings. That older local runtime warns that it falls back to compatibility date 2025-07-18; no new runtime API is required by this adapter.
- Authenticated CMS editing, actual Google authorization and real mail delivery remain unverified.
