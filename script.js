/**
 * 3 Patti Sky APK Guide - script.js
 * Pure vanilla JavaScript. No dependencies.
 * Covers: mobile nav, FAQ accordion, smooth scroll,
 * lazy images, reading progress, active TOC.
 */

(function () {
  'use strict';

  /* ==========================================
     MOBILE NAVIGATION TOGGLE
     ========================================== */
  var navToggle = document.getElementById('navToggle');
  var mainNav   = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    var navList = mainNav.querySelector('.nav-links');

    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isOpen);
      if (navList) navList.classList.toggle('open', !isOpen);
    });

    // Close nav when a link is tapped (mobile)
    if (navList) {
      navList.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          navToggle.setAttribute('aria-expanded', 'false');
          navList.classList.remove('open');
        });
      });
    }

    // Close nav on outside click
    document.addEventListener('click', function (e) {
      if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        if (navList) navList.classList.remove('open');
      }
    });
  }

  /* ==========================================
     FAQ ACCORDION
     ========================================== */
  var faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var isExpanded = btn.getAttribute('aria-expanded') === 'true';
      var answerId   = btn.getAttribute('aria-controls');
      var answerEl   = document.getElementById(answerId);

      // Collapse all
      faqButtons.forEach(function (b) {
        b.setAttribute('aria-expanded', 'false');
        var aId = b.getAttribute('aria-controls');
        var aEl = document.getElementById(aId);
        if (aEl) aEl.classList.remove('open');
      });

      // Toggle clicked item
      if (!isExpanded && answerEl) {
        btn.setAttribute('aria-expanded', 'true');
        answerEl.classList.add('open');
      }
    });

    // Keyboard support
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

  /* ==========================================
     SMOOTH SCROLL FOR ANCHOR LINKS
     ========================================== */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = link.getAttribute('href').slice(1);
      var target   = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  /* ==========================================
     LAZY LOADING FOR IMAGES
     ========================================== */
  var lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window && lazyImages.length) {
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '200px 0px' });

    lazyImages.forEach(function (img) {
      imageObserver.observe(img);
    });
  }

  /* ==========================================
     ACTIVE TOC HIGHLIGHT ON SCROLL
     ========================================== */
  var tocLinks = document.querySelectorAll('.toc-list a');
  var sections = [];

  tocLinks.forEach(function (link) {
    var id = link.getAttribute('href').slice(1);
    var section = document.getElementById(id);
    if (section) sections.push(section);
  });

  if (tocLinks.length && sections.length) {
    var activeTocItem = function () {
      var scrollPos = window.pageYOffset + 120;
      var currentId = sections[0] ? sections[0].id : '';

      sections.forEach(function (section) {
        if (section.offsetTop <= scrollPos) {
          currentId = section.id;
        }
      });

      tocLinks.forEach(function (link) {
        link.removeAttribute('aria-current');
        link.style.fontWeight = '600';
        if (link.getAttribute('href') === '#' + currentId) {
          link.setAttribute('aria-current', 'true');
          link.style.fontWeight = '800';
        }
      });
    };

    window.addEventListener('scroll', activeTocItem, { passive: true });
    activeTocItem();
  }

  /* ==========================================
     READING PROGRESS BAR (OPTIONAL)
     ========================================== */
  var progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', function () {
      var scrollTop  = window.pageYOffset;
      var docHeight  = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var progress   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = Math.min(progress, 100) + '%';
    }, { passive: true });
  }

})();
