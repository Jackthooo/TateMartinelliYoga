// main.js — only behavior on the site: the offerings accordion.
// Markup contract: button.accordion__trigger[aria-expanded][aria-controls=<panel id>]
// and the panel toggles via the [hidden] attribute. No dependencies.
document.querySelectorAll('.accordion__trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const panel = document.getElementById(trigger.getAttribute('aria-controls'));
    const open = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!open));
    if (panel) panel.hidden = open;
  });
});
