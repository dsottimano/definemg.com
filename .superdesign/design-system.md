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

## Implementation constraints

Preserve the approved photographic homepage hero and section layout. Apply restrained blue tonal surfaces to capability cards, testimonials and profile photo offsets. Remove orbit graphics and numbering from presentation and CMS labels. Use an editorial Services hero without decorative orbit art; keep the existing headline, calls to action, capability cards, approach content, and closing section structure. Increase eyebrows to a readable consistent 13–14px. Navigation must accommodate team bios through accessible hover/focus and mobile interaction. Keep real portraits and original client logos; normalize their frames without distorting images. Preserve author copy unless the requested edits require changes; new prose needs Lanza origin metadata. All designed pages remain editable presets + slots with one fields.json contract.

## Services iteration context bundle

Use this file (compact tokens and direction), templates/define-services/template.html, content/pages/en/services.md, templates/parts/header.html and templates/parts/footer.html. Include public/define-services.css only if exact existing component reproduction is needed; avoid theme.md full raw dumps. No node_modules, lockfile, media blobs, or duplicate full layout/theme documents. Baseline generated from actual source before implementation changes; refresh changed context before later iterations.
