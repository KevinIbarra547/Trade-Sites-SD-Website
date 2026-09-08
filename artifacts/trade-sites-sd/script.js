(function () {
  'use strict';

  // 'js' and 'js-reveal' are set by the inline script in <head>, before first paint.

  var language = 'en';

  var mobileMenu = document.getElementById('mobile-menu');
  var menuToggle = document.getElementById('mobile-menu-toggle');
  var languageToggle = document.getElementById('language-toggle');
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
      languageToggle.textContent = language === 'en' ? 'Español' : 'English';
      languageToggle.setAttribute('aria-label', language === 'en' ? 'Ver en español' : 'View in English');
    }
  }

  function observeReveals() {
    var items = document.querySelectorAll('.reveal');
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

  // Sticky call bar: reveal once the hero is behind you. Throttled, and the
  // listener detaches on the first hit so it cannot re-animate while scrolling.
  var stickyBar = document.querySelector('.mobile-action');
  var heroSection = document.getElementById('home');
  if (stickyBar && heroSection) {
    var pending = false;
    var checkSticky = function () {
      pending = false;
      if (window.pageYOffset < heroSection.offsetHeight * 0.8) return;
      stickyBar.classList.add('is-visible');
      window.removeEventListener('scroll', onScroll);
    };
    var onScroll = function () {
      if (pending) return;
      pending = true;
      window.setTimeout(checkSticky, 150);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    checkSticky();
  }

  setLanguage(document.documentElement.lang === 'es' ? 'es' : 'en');
  observeReveals();
}());

(function () {
  'use strict';

  var frame = document.getElementById('compare-frame');
  var handle = document.getElementById('compare-handle');
  if (!frame || !handle) return;

  var position = 50;
  var dragging = false;

  function render() {
    var rounded = Math.round(position);
    frame.style.setProperty('--compare-pos', position + '%');
    handle.setAttribute('aria-valuenow', String(rounded));
    handle.setAttribute('aria-valuetext', rounded + '% without a website, ' + (100 - rounded) + '% with a Trade Sites SD page');
  }

  function setPosition(next) {
    position = Math.min(100, Math.max(0, next));
    render();
  }

  function positionFromX(clientX) {
    var rect = frame.getBoundingClientRect();
    return rect.width ? ((clientX - rect.left) / rect.width) * 100 : position;
  }

  function stopDrag() { dragging = false; }

  handle.addEventListener('pointerdown', function (event) {
    dragging = true;
    if (handle.setPointerCapture) handle.setPointerCapture(event.pointerId);
  });
  window.addEventListener('pointermove', function (event) {
    if (!dragging) return;
    event.preventDefault();
    setPosition(positionFromX(event.clientX));
  });
  window.addEventListener('pointerup', stopDrag);
  window.addEventListener('pointercancel', stopDrag);

  handle.addEventListener('keydown', function (event) {
    var step = event.shiftKey ? 10 : 2;
    var next = null;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') next = position - step;
    else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') next = position + step;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = 100;
    if (next === null) return;
    event.preventDefault();
    setPosition(next);
  });

  render();
}());

/* Copy button for the review request message on the onboarding pages. Returns
   early everywhere else. navigator.clipboard needs a secure context, so it is
   absent on plain http and in some in-app browsers; the execCommand path
   covers those, and if both fail the message is selected so the client can
   copy it by hand rather than being told nothing happened. */
(function () {
  'use strict';

  var buttons = document.querySelectorAll('[data-copy-target]');
  if (!buttons.length) return;

  function legacyCopy(text) {
    var field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.top = '-1000px';
    document.body.appendChild(field);
    field.select();
    var copied = false;
    try { copied = document.execCommand('copy'); } catch (error) { copied = false; }
    document.body.removeChild(field);
    return copied;
  }

  function selectText(node) {
    if (!window.getSelection || !document.createRange) return;
    var range = document.createRange();
    range.selectNodeContents(node);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  buttons.forEach(function (button) {
    var source = document.getElementById(button.getAttribute('data-copy-target'));
    var status = document.getElementById(button.getAttribute('data-copy-status'));
    if (!source || !status) return;

    var resetTimer = null;

    function report(message) {
      status.textContent = message;
      status.hidden = false;
      window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(function () { status.hidden = true; }, 4000);
    }

    function done() { report(button.getAttribute('data-copied-label')); }

    function fallback() {
      var text = source.textContent.trim();
      if (legacyCopy(text)) { done(); return; }
      selectText(source);
      report(button.getAttribute('data-manual-label'));
    }

    button.addEventListener('click', function () {
      var text = source.textContent.trim();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, fallback);
        return;
      }
      fallback();
    });
  });
}());
