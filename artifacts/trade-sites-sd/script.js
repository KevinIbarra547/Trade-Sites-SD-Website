(function () {
  'use strict';

  // First action: opt in to the reveal animation. Without this class the CSS
  // leaves every .reveal element visible, so no-JS renders the full page.
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    document.documentElement.classList.add('js-reveal');
  }

  var language = 'en';

  var mobileMenu = document.getElementById('mobile-menu');
  var menuToggle = document.getElementById('mobile-menu-toggle');
  var languageToggle = document.getElementById('language-toggle');
  var mobileLanguageToggle = document.getElementById('mobile-language-toggle');
  var contactForm = document.getElementById('contact-form');
  var formSuccess = document.getElementById('form-success');
  var sendAnother = document.getElementById('send-another');

  function closeMenu() {
    if (!mobileMenu || !menuToggle) return;
    mobileMenu.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('menu-open');
    var use = menuToggle.querySelector('use');
    if (use) use.setAttribute('href', '#icon-menu');
  }

  function openMenu() {
    if (!mobileMenu || !menuToggle) return;
    mobileMenu.hidden = false;
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close menu');
    document.body.classList.add('menu-open');
    var use = menuToggle.querySelector('use');
    if (use) use.setAttribute('href', '#icon-alert');
  }

  function setLanguage(next) {
    language = next || (language === 'en' ? 'es' : 'en');
    document.documentElement.lang = language;
    document.querySelectorAll('[data-en][data-es]').forEach(function (element) {
      element.textContent = element.getAttribute('data-' + language);
    });
    if (languageToggle) {
      languageToggle.textContent = language === 'en' ? 'ES' : 'EN';
      languageToggle.setAttribute('aria-label', language === 'en' ? 'Ver en español' : 'View in English');
    }
    if (mobileLanguageToggle) {
      mobileLanguageToggle.textContent = language === 'en' ? 'Ver en español' : 'View in English';
    }
  }

  function observeReveals() {
    var items = document.querySelectorAll('.reveal, .reveal-delay');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (item) { item.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries, current) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          current.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (item) { observer.observe(item); });
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      if (mobileMenu.hidden) openMenu(); else closeMenu();
    });
  }
  if (languageToggle) languageToggle.addEventListener('click', function () { setLanguage(); });
  if (mobileLanguageToggle) mobileLanguageToggle.addEventListener('click', function () { setLanguage(); });

  if (contactForm && formSuccess && sendAnother) {
    contactForm.addEventListener('submit', function (event) {
      // TODO: Replace this local success state with the Web3Forms endpoint and access key.
      event.preventDefault();
      contactForm.hidden = true;
      formSuccess.hidden = false;
    });
    sendAnother.addEventListener('click', function () {
      formSuccess.hidden = true;
      contactForm.hidden = false;
      contactForm.reset();
      var firstInput = contactForm.querySelector('input');
      if (firstInput) firstInput.focus();
    });
  }

  document.querySelectorAll('.mobile-menu a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  setLanguage('en');
  observeReveals();
}());
