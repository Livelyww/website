/* ═══════════════════════════════════════════════════════════
   LIVELY — livelyww.com
   script.js
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Theme toggle ───────────────────────────────────────── */
  const html = document.documentElement;
  const toggleBtn = document.querySelector('[data-theme-toggle]');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let currentTheme = prefersDark ? 'dark' : 'light';
  html.setAttribute('data-theme', currentTheme);

  function setThemeIcon(theme) {
    if (!toggleBtn) return;
    toggleBtn.innerHTML = theme === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    toggleBtn.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
  }
  setThemeIcon(currentTheme);

  toggleBtn && toggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', currentTheme);
    setThemeIcon(currentTheme);
  });

  /* ── Nav scroll behaviour ───────────────────────────────── */
  const nav = document.getElementById('site-nav');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }, { passive: true });

  /* ── Mobile nav toggle ──────────────────────────────────── */
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('nav-mobile');

  navToggle && navToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });

  /* ── Smooth scroll for anchor links ─────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile nav if open
        mobileMenu && mobileMenu.classList.remove('open');
      }
    });
  });

  /* ── Animate score bars on scroll ───────────────────────── */
  const scoreBars = document.querySelectorAll('.score-bar, .hub-bar');
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'width 1s cubic-bezier(0.16, 1, 0.3, 1)';
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  scoreBars.forEach(bar => {
    // Store the final width from style
    const finalWidth = bar.style.width || bar.getAttribute('data-width') || '70%';
    bar.style.width = '0%';
    bar.setAttribute('data-final', finalWidth);
    barObserver.observe(bar);
  });

  // Trigger width after brief delay for initial elements
  const triggerBarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.width = entry.target.getAttribute('data-final');
        }, 150);
        triggerBarObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  scoreBars.forEach(bar => triggerBarObserver.observe(bar));

  /* ── Flywheel card stagger on scroll ─────────────────────── */
  const flywheelCards = document.querySelectorAll('.flywheel-card');
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = (i * 0.08) + 's';
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  flywheelCards.forEach(card => staggerObserver.observe(card));

  /* ── Hero scroll hint fade ───────────────────────────────── */
  const scrollHint = document.querySelector('.hero-scroll-hint');
  if (scrollHint) {
    window.addEventListener('scroll', () => {
      scrollHint.style.opacity = window.scrollY > 100 ? '0' : '1';
    }, { passive: true });
  }

})();
