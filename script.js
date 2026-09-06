function toggleLang() {
  const html = document.documentElement;
  const current = html.getAttribute('lang') || 'en';
  const next = current === 'en' ? 'ar' : 'en';
  html.setAttribute('lang', next);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.textContent = next === 'en' ? 'العربية' : 'English';
  });
}
