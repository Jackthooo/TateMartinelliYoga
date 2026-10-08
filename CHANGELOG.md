# Changelog

## 2026-10-08 — Tate theme colors
- Installed the Tate Graphical theme guidance: `GUI.md`, `gui/`, and the graphical-ui / graphical-convert / graphical-audit skills in `.agents/skills/`. Added `CLAUDE.md` pointing to them.
- Applied the theme's colors only: Tate light/dark palette in `tokens.css`, semantic roles remapped onto it, buttons (primary, outline + hover, disabled), accordion, dividers, focus ring and contact form recolored. Dark mode is opt-in via `data-theme="dark"`.
- Fonts, type sizes, spacing and radii unchanged (still site tokens).
- Page max width 1200px (incl. gutters). Band colors (hero, Practice, Classes, Contact) still span the screen; content, the hero/journey images and the nav stay in the 1200px column. New `--page-bleed` / `--page-inset` tokens handle full-width sections.
- Offerings heading: "shaped around you" no longer italic (keeps accent color via `.highlight`).
- Temporary font switcher (`?fonts=figma|timeless`, add your own pairings): `js/font-trials.js` + `css/font-trials.css`. Inactive without the URL parameter; delete both once fonts are chosen.
- Font trials: Inter is the body font for every pairing; added Tanker, Cabinet Grotesk, Chillax, Quilon and Alpino (local variable fonts). New `--weight-heading` / `--weight-subheading` tokens (site default 400/400; the four variable-font pairings use 500/400).
- Font trials: fixed Shrikhand (CSS name was capitalized, didn't match the picker); added Bespoke Serif, Clash Display, Clash Grotesk, Ranade, Satoshi and Zodiak (headers 500, subheaders 400).
- Font trials: added Lilita One (Google, single weight 400) and Rubik (Google variable 300–900 with italics; headers 500, subheaders 400).

## 2026-10-07 — Initial bare-bones Home page
- Built `index.html` from Figma Home 1 (mid-fi, node 49:11) using only its text, in Figma section order: Nav, Hero, Offerings (accordion), Practice/Yoga Styles, My Journey, Classes, Contact (form).
- Token-driven CSS (`css/tokens.css`) so fonts, colors and images can be added later without touching layout.
- Responsive: stacked on mobile, side-by-side at ≥800px.
- Image slots are grey placeholders; no fonts or images added yet.
- Repo was initialized locally (clone failed: GitHub auth unavailable here); `origin` is set, nothing committed or pushed.
