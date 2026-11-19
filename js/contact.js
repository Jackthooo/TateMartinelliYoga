// contact.js — submits the contact form to Web3Forms without leaving the page.
// Markup contract: form.form[action] with a .form__status element inside.
const form = document.querySelector('.form');
if (form) {
  const status = form.querySelector('.form__status');
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    button.disabled = true;
    status.textContent = 'Sending…';
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      form.reset();
      status.textContent = 'Thank you! Your message was sent. I’ll be in touch soon.';
    } catch {
      status.textContent = 'Something went wrong. Please try again, or email me directly.';
    } finally {
      button.disabled = false;
    }
  });
}
