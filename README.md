# Tate Martinelli Yoga

Website for Tate Martinelli's yoga studio. Plain HTML/CSS/JS — no build step, no dependencies. Open `index.html` in a browser (or `python3 -m http.server`).

Design source: Figma `TateMartinelli2026` → mid-fi → **Home 1** (node `49:11`).

## Status

Bare-bones first pass: all copy from Home 1, in Figma order, black & white, responsive. Fonts, colors and images are intentionally **not** styled yet — they're set up to be dropped in.

## Structure

```
index.html            all content (one page); sections commented with Figma node ids
css/tokens.css        ALL design values: fonts, colors, type scale, spacing  <- edit this to style the site
css/base.css          reset + type hierarchy classes (.display, .heading-lg/md, .body, .eyebrow)
css/components.css    layout & components (nav, hero, accordion, columns, split, form); mobile-first, one 800px breakpoint
js/main.js            offerings accordion only
assets/fonts/         custom font files (see tokens.css for @font-face example)
assets/images/        images (see its README for how to fill image slots)
```

## How to customize

- **Fonts** — add files to `assets/fonts/`, add `@font-face` and change `--font-display` / `--font-body` in `tokens.css`. (Figma: Instrument Serif + Archivo.)
- **Colors** — change the semantic `--color-*` variables in `tokens.css`. Figma palette is listed in a comment there.
- **Images** — see `assets/images/README.md`.
- **Type sizes / spacing** — `tokens.css`; sizes use `clamp()` so they scale between mobile and desktop.

## Content notes / open TODOs

- Hero eyebrow reads "SAN FRANCISO" — copied verbatim from Figma; likely a typo for "San Francisco".
- Group Sessions accordion item has no body copy in Figma.
- Contact form has no backend (`action="#"`); needs a form service or mailto flow.
- "Check Availability" and "Ask about this →" link to `#contact` as placeholders.
- Instagram link assumes `instagram.com/yoginitate`.
- Nav is plain links wrapping on small screens; no mobile menu designed yet.

## Conventions for future work

- Keep copy in HTML; keep styling values in `tokens.css` only (no hard-coded colors/fonts elsewhere).
- Add a note to `CHANGELOG.md` for each push.
