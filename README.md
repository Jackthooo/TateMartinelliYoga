# Tate Martinelli Yoga

Website for Tate Martinelli's yoga studio. Plain HTML/CSS/JS — no build step, no dependencies. Open `index.html` in a browser (or `python3 -m http.server`).

Design source: Figma `TateMartinelli2026` → mid-fi → **Home 1** (node `49:11`).

## Status

Bare-bones first pass: all copy from Home 1, in Figma order, responsive. Colors use the **Tate** Graphical theme (see `GUI.md`, values in `gui/themes/tate.md`). Fonts and images are intentionally **not** styled yet — they're set up to be dropped in.

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
- **Trying fonts** — open `index.html?fonts=figma` (or `timeless`, or any pairing you add) and use the picker in the bottom-right corner. Pairings live in `css/font-trials.css` + `js/font-trials.js`; normal visitors never load them. Once you pick one, copy its two font values and any `@font-face` into `tokens.css`, then delete both trial files and the `font-trials.js` `<script>` tag.
- **Adding font files** — use `.woff2` (convert `.otf`/`.ttf` with a converter such as transfonter.org if that's all you have). One file per weight/style, named `Family-Weight.woff2` (e.g. `TimelessGrotesk-Medium.woff2`), in `assets/fonts/`, alongside the font's license file. The `timeless` trial expects `TimelessGrotesk-Medium.woff2` (500) and `TimelessGrotesk-SemiBold.woff2` (600).
- **Colors** — semantic roles (`--color-text`, `--color-accent`, …) in `tokens.css` point at the Tate palette (`--color-1..4`, `--neutral-1..10`). Re-point a role to change one use; change the palette to re-theme. Dark mode is opt-in: `<html data-theme="dark">`.
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
