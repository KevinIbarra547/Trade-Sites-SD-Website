(function () {
  'use strict';

  var language = 'en';
  var pageTitles = {
    home: 'Home',
    work: 'The work',
    services: 'Services',
    process: 'Process',
    about: 'About Kevin',
    contact: 'Contact',
    'not-found': 'Page not found'
  };
  var pageDescriptions = {
    home: 'Affordable hire-me websites for San Diego trade workers. Built by Kevin Ibarra.',
    work: 'See the first honest build from Trade Sites SD and learn how the portfolio is growing.',
    services: 'Focused, affordable website services for San Diego trade workers.',
    process: 'A simple path from first text to a live hire-me website.',
    about: 'Meet Kevin Ibarra and learn why Trade Sites SD started with his dad.',
    contact: 'Start a conversation with Kevin about a hire-me website for your trade.',
    'not-found': 'This Trade Sites SD page could not be found.'
  };

  var mobileMenu = document.getElementById('mobile-menu');
  var menuToggle = document.getElementById('mobile-menu-toggle');
  var languageToggle = document.getElementById('language-toggle');
  var mobileLanguageToggle = document.getElementById('mobile-language-toggle');
  var contactForm = document.getElementById('contact-form');
  var formSuccess = document.getElementById('form-success');
  var sendAnother = document.getElementById('send-another');

  function getRoute() {
    var raw = window.location.hash.replace(/^#/, '').replace(/^\//, '').split('?')[0];
    if (!raw || raw === 'home') return 'home';
    return Object.prototype.hasOwnProperty.call(pageTitles, raw) ? raw : 'not-found';
  }

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

  function refreshRoute() {
    var route = getRoute();
    document.querySelectorAll('.page-view').forEach(function (page) {
      var active = page.getAttribute('data-page') === route;
      page.classList.toggle('is-active', active);
      page.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
    document.querySelectorAll('[data-route-link]').forEach(function (link) {
      var active = link.getAttribute('data-route-link') === route;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    document.title = (pageTitles[route] || pageTitles['not-found']) + ' · Trade Sites SD';
    var description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', pageDescriptions[route] || pageDescriptions['not-found']);
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.setTimeout(function () {
      var firstHeading = document.querySelector('#page-' + route + ' h1');
      if (firstHeading) firstHeading.setAttribute('tabindex', '-1');
    }, 0);
    observeReveals();
  }

  function observeReveals() {
    var items = document.querySelectorAll('.page-view.is-active .reveal, .page-view.is-active .reveal-delay');
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
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function () {
      var target = link.getAttribute('href');
      if (target && target.length > 1) window.setTimeout(refreshRoute, 0);
    });
  });
  window.addEventListener('hashchange', refreshRoute);

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

  setLanguage('en');
  refreshRoute();
}());
