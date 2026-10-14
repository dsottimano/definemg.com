# Extractable components

These are design-canvas extraction candidates, not existing JS modules. Visual labels, images, icons and styling are fixed in the extraction; production text remains CMS editable.

## SiteHeader
- Source: `templates/parts/header.html`
- Category: layout
- Description: Brand, primary navigation, mobile toggle.
- Extractable props: activeItem, homeHref, menuOpen
- Hardcoded in design component: logo/image sources, text labels, arrow glyphs and CSS.

## SiteFooter
- Source: `templates/parts/footer.html`
- Category: layout
- Description: Brand, footer navigation, copyright and arrow.
- Extractable props: homeHref
- Hardcoded in design component: logo/image sources, text labels, arrow glyphs and CSS.

## InteriorShell
- Source: `templates/define-page/template.html`
- Category: layout
- Description: Page hero, optional image, rail and article.
- Extractable props: currentPath, showHeroImage, showRelatedLinks
- Hardcoded in design component: logo/image sources, text labels, arrow glyphs and CSS.

## ActionLink
- Source: `templates/define-services/template.html`
- Category: basic
- Description: Pill CTA and underlined secondary action.
- Extractable props: href
- Hardcoded in design component: logo/image sources, text labels, arrow glyphs and CSS.

## ServiceCard
- Source: `templates/define-services/template.html`
- Category: basic
- Description: Capability card with description, tags and detail link.
- Extractable props: href
- Hardcoded in design component: logo/image sources, text labels, arrow glyphs and CSS.

## ClientLogo
- Source: `templates/define-home/template.html`
- Category: basic
- Description: Contained logo box.
- Extractable props: none
- Hardcoded in design component: logo/image sources, text labels, arrow glyphs and CSS.

## TestimonialCard
- Source: `templates/define-home/template.html`
- Category: basic
- Description: Quotation and attributed name/role.
- Extractable props: none
- Hardcoded in design component: logo/image sources, text labels, arrow glyphs and CSS.
