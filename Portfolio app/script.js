/* ============================================
   Portfolio Website – JavaScript
   Handles interactivity, animations, navigation,
   form validation, and scroll effects
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // ---------- Typing Animation ----------
  initTypingAnimation();

  // ---------- Navbar Scroll Effect ----------
  initNavbarScroll();

  // ---------- Mobile Menu ----------
  initMobileMenu();

  // ---------- Active Nav Highlighting ----------
  initActiveNavHighlighting();

  // ---------- Scroll Reveal Animations ----------
  initScrollReveal();

  // ---------- Language Bar Animations ----------
  initLanguageBars();

  // ---------- Counter Animations ----------
  initCounterAnimations();

  // ---------- Back to Top ----------
  initBackToTop();

  // ---------- Contact Form Validation ----------
  initContactForm();

  // ---------- Smooth Scroll ----------
  initSmoothScroll();
});


// =============================================
// TYPING ANIMATION
// =============================================
function initTypingAnimation() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const phrases = [
    'Computer Science Undergraduate',
    'Software Engineering Enthusiast',
    'Quality Assurance Learner',
    'Web Developer',
    'UI/UX Design Explorer',
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Pause before new phrase
    }

    setTimeout(type, typingSpeed);
  }

  // Start typing after a delay
  setTimeout(type, 1000);
}


// =============================================
// NAVBAR SCROLL EFFECT
// =============================================
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}


// =============================================
// MOBILE MENU
// =============================================
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');

  if (!hamburger || !mobileMenu || !overlay) return;

  function toggleMenu() {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  // Close on nav link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMenu();
    }
  });
}


// =============================================
// ACTIVE NAV HIGHLIGHTING
// =============================================
function initActiveNavHighlighting() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length === 0 || navLinks.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -80% 0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}


// =============================================
// SCROLL REVEAL ANIMATIONS
// =============================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if (revealElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Don't unobserve – keep it one-shot
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}


// =============================================
// LANGUAGE BAR ANIMATIONS
// =============================================
function initLanguageBars() {
  const bars = document.querySelectorAll('.lang-bar-fill');

  if (bars.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetWidth = entry.target.getAttribute('data-width');
        entry.target.style.width = targetWidth;
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => observer.observe(bar));
}


// =============================================
// COUNTER ANIMATIONS
// =============================================
function initCounterAnimations() {
  const counters = document.querySelectorAll('[data-count]');

  if (counters.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-count'));
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 30;
  const duration = 1500;
  const stepTime = duration / 30;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + '+';
  }, stepTime);
}


// =============================================
// BACK TO TOP
// =============================================
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


// =============================================
// CONTACT FORM VALIDATION
// =============================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = [
    { id: 'form-name', errorId: 'error-name', validator: (v) => v.trim().length > 0 },
    { id: 'form-email', errorId: 'error-email', validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
    { id: 'form-subject', errorId: 'error-subject', validator: (v) => v.trim().length > 0 },
    { id: 'form-message', errorId: 'error-message', validator: (v) => v.trim().length > 0 },
  ];

  // Live validation on blur
  fields.forEach(({ id, errorId, validator }) => {
    const input = document.getElementById(id);
    const error = document.getElementById(errorId);
    if (!input || !error) return;

    input.addEventListener('blur', () => {
      if (!validator(input.value)) {
        input.classList.add('error');
        error.classList.add('visible');
      } else {
        input.classList.remove('error');
        error.classList.remove('visible');
      }
    });

    input.addEventListener('input', () => {
      if (validator(input.value)) {
        input.classList.remove('error');
        error.classList.remove('visible');
      }
    });
  });

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    fields.forEach(({ id, errorId, validator }) => {
      const input = document.getElementById(id);
      const error = document.getElementById(errorId);
      if (!input || !error) return;

      if (!validator(input.value)) {
        input.classList.add('error');
        error.classList.add('visible');
        isValid = false;
      } else {
        input.classList.remove('error');
        error.classList.remove('visible');
      }
    });

    if (isValid) {
      // Show success toast
      showToast('Message sent successfully! I\'ll get back to you soon.', 'success');

      // Reset form
      form.reset();

      // Remove error states
      fields.forEach(({ id, errorId }) => {
        const input = document.getElementById(id);
        const error = document.getElementById(errorId);
        if (input) input.classList.remove('error');
        if (error) error.classList.remove('visible');
      });
    } else {
      showToast('Please fill in all fields correctly.', 'error');
    }
  });
}


// =============================================
// TOAST NOTIFICATION
// =============================================
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.className = `toast ${type}`;

  // Trigger show
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Auto hide after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}


// =============================================
// SMOOTH SCROLL
// =============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
