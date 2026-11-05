# Tate Martinelli Yoga

Website for Tate Martinelli's yoga studio. Plain HTML/CSS/JS — no build step, no dependencies. Open `index.html` in a browser (or `python3 -m http.server`).

Design source: Figma `TateMartinelli2026` → mid-fi → **Home 1** (node `49:11`).

## Status

Implements Figma `TateMartinelli2026` → **Home v4 (Desktop)** (node `219:139`): Fraunces (headings, SOFT 100 / WONK 0) + Figtree (body), Figma palette, hero and yoga-styles photo overlays. Mobile layout is inferred (only the desktop frame is designed).

## Structure

```
index.html            all content (one page); sections commented with Figma node ids
css/tokens.css        ALL design values: fonts, colors, type scale, overlays, spacing
css/base.css          reset + type classes (.wordmark, .display, .subheading, .body*, .lead*, .label, .meta)
css/components.css    layout & components; mobile-first, breakpoints at 600px and 900px
assets/images/        Pose1 (hero), IMG_0270 (yoga styles), TateHeadshot (about)
```

## How to customize

- **Fonts** — loaded from Google Fonts in `index.html`; families in `tokens.css`.
- **Colors / overlays** — `tokens.css` (`--brand-*`, `--rose-*`, `--overlay-*`).
- **Images** — `<img>` tags in `index.html`. Use JPEG/PNG/WebP, not HEIC (`IMG_0270.heic` was converted to `IMG_0270.jpeg`).

## Content notes / open TODOs

- Contact form has no backend (`action="#"`); needs a form service or mailto flow.
- Nav hides its text links under 600px (only Book shows); no mobile menu designed.
- Dark mode (`data-theme="dark"`) is no longer designed for; the Figma palette is light only.
- Instagram link assumes `instagram.com/yoginitate`.

## Conventions for future work

- Keep copy in HTML; keep styling values in `tokens.css` only (no hard-coded colors/fonts elsewhere).
- Add a note to `CHANGELOG.md` for each push.
