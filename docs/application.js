(() => {
  'use strict';
  const contacts = window.GRAPHISTE_CONTACTS || {};
  document.querySelectorAll('[data-contact]').forEach(link => {
    const key = link.dataset.contact;
    const value = contacts[key];
    if (typeof value !== 'string' || !value.trim()) return;
    if (key === 'email') { link.href = 'mailto:' + value; return; }
    if (key === 'phone') { link.href = value.startsWith('tel:') ? value : 'tel:' + value; return; }
    try {
      const url = new URL(value);
      if (url.protocol !== 'https:') return;
      link.href = url.href;
    } catch { /* conserve le lien de secours */ }
  });
})();
