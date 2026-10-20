// font-trials.js — TEMPORARY font comparison. Does nothing unless the URL has
// ?fonts=<pairing> (e.g. index.html?fonts=figma). When active it loads that
// pairing's fonts + css/font-trials.css and shows a picker in the corner.
// To remove: delete this file, its <script> tag in index.html, and css/font-trials.css.
(() => {
  // Body font shared by every pairing (set in css/font-trials.css), loaded for all.
  const SHARED_GOOGLE = ['Inter:wght@400;600'];

  // Each pairing picks a heading font. `google` = Google Fonts "family=" values
  // for that heading font; leave it [] for uploaded fonts (declared in css/font-trials.css).
  const PAIRINGS = {
    ultra: {
      label: 'Ultra + Inter',
      google: ['Ultra'],   // single weight (400)
    },
    bevan: {
      label: 'Bevan + Inter',
      google: ['Bevan'],   // single weight (400)
    },
    'alfa-slab-one': {
      label: 'Alfa Slab One + Inter',
      google: ['Alfa+Slab+One'],   // single weight (400)
    },
    chonburi: {
      label: 'Chonburi + Inter',
      google: ['Chonburi'],   // single weight (400)
    },
    kavoon: {
      label: 'Kavoon + Inter',
      google: ['Kavoon'],   // single weight (400)
    },
    'abril-fatface': {
      label: 'Abril Fatface + Inter',
      google: ['Abril+Fatface'],   // single weight (400)
    },
  };

  const params = new URLSearchParams(location.search);
  const current = params.get('fonts');
  if (current === null) return;

  const addStylesheet = (href) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  };

  addStylesheet('css/font-trials.css');
  const pairing = PAIRINGS[current];
  if (pairing) {
    document.documentElement.dataset.fonts = current;
    const families = [...SHARED_GOOGLE, ...pairing.google].map((f) => `family=${f}`).join('&');
    addStylesheet(`https://fonts.googleapis.com/css2?${families}&display=swap`);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const select = document.createElement('select');
    select.className = 'font-trials';
    select.setAttribute('aria-label', 'Font pairing (trial)');
    const options = [['', 'Site default (no trial fonts)'], ...Object.entries(PAIRINGS).map(([k, p]) => [k, p.label])];
    for (const [value, label] of options) {
      select.add(new Option(label, value, false, value === current));
    }
    select.addEventListener('change', () => {
      params.set('fonts', select.value);
      location.search = params.toString();
    });
    document.body.appendChild(select);
  });
})();
