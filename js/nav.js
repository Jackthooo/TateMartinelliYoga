// nav.js — mobile menu. Markup contract: button.nav__toggle[aria-controls=<menu id>]
// toggles .is-open on the menu and the nav bar; closes on link click, Escape, or outside click.
const toggle = document.querySelector('.nav__toggle');
const nav = toggle && toggle.closest('.nav');
const menu = toggle && document.getElementById(toggle.getAttribute('aria-controls'));

if (toggle && menu && nav) {
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
    nav.classList.toggle('is-open', open);
  };

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (event) => { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setOpen(false); });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav')) setOpen(false);
  });
}
