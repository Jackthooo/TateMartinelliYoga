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

    fredoka: {
      label: 'Fredoka + Inter',
      google: ['Fredoka:wght@500'],
    },
    tanker: {
      label: 'Tanker (local file) + Inter',
      google: [],
    },
    cabinet: {
      label: 'Cabinet Grotesk + Inter',
      google: [],
    },
    chillax: {
      label: 'Chillax + Inter',
      google: [],
    },
    quilon: {
      label: 'Quilon + Inter',
      google: [],
    },
    alpino: {
      label: 'Alpino + Inter',
      google: [],
    },
    shrikhand: {
      label: 'Shrikhand + Inter',
      google: ['Shrikhand'],
    },
    bespoke: {
      label: 'Bespoke Serif + Inter',
      google: [],
    },
    'clash-display': {
      label: 'Clash Display + Inter',
      google: [],
    },
    'clash-grotesk': {
      label: 'Clash Grotesk + Inter',
      google: [],
    },
    ranade: {
      label: 'Ranade + Inter',
      google: [],
    },
    satoshi: {
      label: 'Satoshi + Inter',
      google: [],
    },
    zodiak: {
      label: 'Zodiak + Inter',
      google: [],
    },
    lilita: {
      label: 'Lilita One + Inter',
      google: ['Lilita+One'],   // single weight (400), not variable
    },
    rubik: {
      label: 'Rubik + Inter',
      google: ['Rubik:ital,wght@0,300..900;1,300..900'],   // variable 300–900, with italics
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
