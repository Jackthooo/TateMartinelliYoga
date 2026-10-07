# Images

Drop site images here. Figma originals (not yet exported): `IMG_6903` (hero), `IMG_6909` (journey), and the sunset background on the "Practice" section.

Slots in `index.html` are marked `IMAGE SLOT` (`data-image-slot="hero" | "journey"`). To fill one, replace the placeholder div's contents:

```html
<div class="media hero__media" data-image-slot="hero">
  <img src="assets/images/hero.jpg" alt="Tate in a seated twist">
</div>
```

(`.media img` already handles cover-cropping.) Remove the `role="img"`/`aria-label` from the div once a real `<img>` with alt text is inside.

The Practice background is set via `--practice-bg` in `css/tokens.css`.
