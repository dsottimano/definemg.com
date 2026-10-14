# Key page dependency trees

These are renderer/data dependencies rather than ES imports: HTML presets contain no local imports. Shared shell includes styles and scripts explicitly; CSS and JS have no further local imports. Package internals are external dependencies and excluded. Images referenced through slots or rich bodies under public/media are assets, not component imports.

## //

Entry: `content/pages/en/home.md`

```text
content/pages/en/home.md
- templates/define-home/template.html
  - templates/define-home/fields.json (slot contract)
- templates/parts/header.html
  - public/define.css
  - public/define-interiors.css
  - data/menu.en.json (navigation data)
- templates/parts/footer.html
  - public/define.js
  - public/define-interiors.js
- data/site.json (locale/URL mappings)
- data/appearance.json (theme/fonts)
- data/seo.en.json (defaults)
- data/schema.json (CMS collection)
```

## /services/

Entry: `content/pages/en/services.md`

```text
content/pages/en/services.md
- templates/define-services/template.html
  - templates/define-services/fields.json (slot contract)
  - public/define-services.css
- templates/parts/header.html
  - public/define.css
  - public/define-interiors.css
  - data/menu.en.json (navigation data)
- templates/parts/footer.html
  - public/define.js
  - public/define-interiors.js
- data/site.json (locale/URL mappings)
- data/appearance.json (theme/fonts)
- data/seo.en.json (defaults)
- data/schema.json (CMS collection)
```

## /team/

Entry: `content/pages/en/team.md`

```text
content/pages/en/team.md
- templates/define-page/template.html (preset declared in JSON frontmatter)
- templates/parts/header.html
  - public/define.css
  - public/define-interiors.css
  - data/menu.en.json (navigation data)
- templates/parts/footer.html
  - public/define.js
  - public/define-interiors.js
- data/site.json (locale/URL mappings)
- data/appearance.json (theme/fonts)
- data/seo.en.json (defaults)
- data/schema.json (CMS collection)
```

## /dave-sottimano/

Entry: `content/pages/en/dave-sottimano.md`

```text
content/pages/en/dave-sottimano.md
- templates/define-page/template.html (preset declared in JSON frontmatter)
- templates/parts/header.html
  - public/define.css
  - public/define-interiors.css
  - data/menu.en.json (navigation data)
- templates/parts/footer.html
  - public/define.js
  - public/define-interiors.js
- data/site.json (locale/URL mappings)
- data/appearance.json (theme/fonts)
- data/seo.en.json (defaults)
- data/schema.json (CMS collection)
```

## /our-work/

Entry: `content/pages/en/our-work.md`

```text
content/pages/en/our-work.md
- templates/define-page/template.html (preset declared in JSON frontmatter)
- templates/parts/header.html
  - public/define.css
  - public/define-interiors.css
  - data/menu.en.json (navigation data)
- templates/parts/footer.html
  - public/define.js
  - public/define-interiors.js
- data/site.json (locale/URL mappings)
- data/appearance.json (theme/fonts)
- data/seo.en.json (defaults)
- data/schema.json (CMS collection)
```

## /blog/

Entry: `content/pages/en/blog.md`

```text
content/pages/en/blog.md
- templates/define-page/template.html (preset declared in JSON frontmatter)
- templates/parts/header.html
  - public/define.css
  - public/define-interiors.css
  - data/menu.en.json (navigation data)
- templates/parts/footer.html
  - public/define.js
  - public/define-interiors.js
- data/site.json (locale/URL mappings)
- data/appearance.json (theme/fonts)
- data/seo.en.json (defaults)
- data/schema.json (CMS collection)
```

## /contact/

Entry: `content/pages/en/contact.md`

```text
content/pages/en/contact.md
- templates/define-page/template.html (preset declared in JSON frontmatter)
- templates/parts/header.html
  - public/define.css
  - public/define-interiors.css
  - data/menu.en.json (navigation data)
- templates/parts/footer.html
  - public/define.js
  - public/define-interiors.js
- data/site.json (locale/URL mappings)
- data/appearance.json (theme/fonts)
- data/seo.en.json (defaults)
- data/schema.json (CMS collection)
```

## /services/search-engine-optimization/

Entry: `content/pages/en/search-engine-optimization.md`

```text
content/pages/en/search-engine-optimization.md
- templates/define-page/template.html (preset declared in JSON frontmatter)
- templates/parts/header.html
  - public/define.css
  - public/define-interiors.css
  - data/menu.en.json (navigation data)
- templates/parts/footer.html
  - public/define.js
  - public/define-interiors.js
- data/site.json (locale/URL mappings)
- data/appearance.json (theme/fonts)
- data/seo.en.json (defaults)
- data/schema.json (CMS collection)
```

## /services/audience-development/

Entry: `content/pages/en/audience-development.md`

```text
content/pages/en/audience-development.md
- templates/define-page/template.html (preset declared in JSON frontmatter)
- templates/parts/header.html
  - public/define.css
  - public/define-interiors.css
  - data/menu.en.json (navigation data)
- templates/parts/footer.html
  - public/define.js
  - public/define-interiors.js
- data/site.json (locale/URL mappings)
- data/appearance.json (theme/fonts)
- data/seo.en.json (defaults)
- data/schema.json (CMS collection)
```

## /services/investment-advisory-services/

Entry: `content/pages/en/investment-advisory-services.md`

```text
content/pages/en/investment-advisory-services.md
- templates/define-page/template.html (preset declared in JSON frontmatter)
- templates/parts/header.html
  - public/define.css
  - public/define-interiors.css
  - data/menu.en.json (navigation data)
- templates/parts/footer.html
  - public/define.js
  - public/define-interiors.js
- data/site.json (locale/URL mappings)
- data/appearance.json (theme/fonts)
- data/seo.en.json (defaults)
- data/schema.json (CMS collection)
```
