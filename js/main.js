/* ════════════════════════════════════════════════
   LUCAS BABETTO ATELIER
   JavaScript — Interações e Animações Premium
   ════════════════════════════════════════════════ */

'use strict';

/* ──────────────────────────────────────────────
   PAGE LOADER
──────────────────────────────────────────────── */
const loader = document.getElementById('pageLoader');
const body = document.body;

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('hidden');
    body.style.overflow = '';
    // Trigger hero animations
    document.querySelector('.hero').classList.add('revealed');
  }, 1200);
});

// Prevent scroll during load
body.style.overflow = 'hidden';

/* ──────────────────────────────────────────────
   CUSTOM CURSOR
──────────────────────────────────────────────── */
const dot  = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

const hoverTargets = 'a, button, .colecao-card, .gal-item, .dep-card, .whatsapp-btn';

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left  = mouseX + 'px';
  dot.style.top   = mouseY + 'px';
});

// Smooth ring follow
function animateRing() {
  ringX += (mouseX - ringX) * 0.10;
  ringY += (mouseY - ringY) * 0.10;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// Ring hover state
document.querySelectorAll(hoverTargets).forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
});

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
  dot.style.opacity  = '0';
  ring.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
  dot.style.opacity  = '1';
  ring.style.opacity = '1';
});

/* ──────────────────────────────────────────────
   NAVBAR — Scroll & Mobile
──────────────────────────────────────────────── */
const navbar     = document.getElementById('navbar');
const navToggle  = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
});

// Mobile menu
navToggle.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
});

function closeMenu() {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

mobileClose.addEventListener('click', closeMenu);

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

// Close menu on ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

/* ──────────────────────────────────────────────
   SMOOTH SCROLL
──────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = navbar.offsetHeight + 20;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ──────────────────────────────────────────────
   INTERSECTION OBSERVER — Reveal Animations
──────────────────────────────────────────────── */
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger delay
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay * 120);
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply observer to reveal elements
const revealElements = document.querySelectorAll('.reveal-up');
revealElements.forEach((el, i) => {
  el.dataset.delay = i % 4;
  revealObserver.observe(el);
});

// Also observe sections for general fade
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll('section').forEach(sec => {
  sectionObserver.observe(sec);
});

// Cards stagger
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cards = entry.target.querySelectorAll('.colecao-card, .dep-card, .step, .gal-item');
      cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 100 + i * 100);
      });
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.colecao-grid, .dep-grid, .processo-steps, .galeria-masonry').forEach(el => {
  cardObserver.observe(el);
});

/* ──────────────────────────────────────────────
   COUNTER ANIMATION
──────────────────────────────────────────────── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 2000;
  const step = Math.max(1, Math.floor(target / 60));
  let current = 0;

  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = current.toLocaleString('pt-BR');
  }, duration / (target / step));
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num').forEach(animateCounter);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

const statsEl = document.querySelector('.sobre-stats');
if (statsEl) counterObserver.observe(statsEl);

/* ──────────────────────────────────────────────
   PARALLAX — Hero
──────────────────────────────────────────────── */
const heroImg = document.querySelector('.hero-img');
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      if (heroImg && scrollY < window.innerHeight) {
        heroImg.style.transform = `scale(1.05) translateY(${scrollY * 0.15}px)`;
      }
      ticking = false;
    });
    ticking = true;
  }
});

/* ──────────────────────────────────────────────
   FLOAT WPP — Show on Scroll
──────────────────────────────────────────────── */
const floatWpp = document.getElementById('floatWpp');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    floatWpp.style.transform = 'scale(1)';
    floatWpp.style.opacity   = '1';
  } else {
    floatWpp.style.transform = 'scale(0.8)';
    floatWpp.style.opacity   = '0';
  }
});

// Init hidden
floatWpp.style.transform = 'scale(0.8)';
floatWpp.style.opacity   = '0';
floatWpp.style.transition = 'transform 0.4s ease, opacity 0.4s ease';

/* ──────────────────────────────────────────────
   NAV LINK ACTIVE STATE
──────────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const activateNav = () => {
  const scrollY = window.scrollY + 120;

  sections.forEach(sec => {
    const top    = sec.offsetTop;
    const height = sec.offsetHeight;
    const id     = sec.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
};

window.addEventListener('scroll', activateNav);

/* ──────────────────────────────────────────────
   ADICIONAR ESTILOS ACTIVE AO NAV LINK
──────────────────────────────────────────────── */
const navStyle = document.createElement('style');
navStyle.textContent = `
  .nav-link.active { color: #fff !important; }
  .nav-link.active::after { width: 100% !important; }
`;
document.head.appendChild(navStyle);

/* ──────────────────────────────────────────────
   WHATSAPP BUTTON — Pulse on hover
──────────────────────────────────────────────── */
const mainWppBtn = document.getElementById('mainWhatsappBtn');
if (mainWppBtn) {
  mainWppBtn.addEventListener('mouseenter', () => {
    mainWppBtn.style.animation = 'none';
  });
}

/* ──────────────────────────────────────────────
   HOVER TILT — Cards
──────────────────────────────────────────────── */
function tiltEffect(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const cx   = rect.left + rect.width  / 2;
  const cy   = rect.top  + rect.height / 2;
  const dx   = (e.clientX - cx) / (rect.width  / 2);
  const dy   = (e.clientY - cy) / (rect.height / 2);

  card.style.transform = `perspective(600px) rotateX(${-dy * 3}deg) rotateY(${dx * 3}deg) translateY(-4px)`;
}

function resetTilt(e) {
  e.currentTarget.style.transform = '';
}

document.querySelectorAll('.dep-card').forEach(card => {
  card.addEventListener('mousemove', tiltEffect);
  card.addEventListener('mouseleave', resetTilt);
});

/* ──────────────────────────────────────────────
   IMAGEM FALLBACK — Substitui imagens que falham
──────────────────────────────────────────────── */
const fallbackImages = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  'https://images.unsplash.com/photo-1594938298603-c8148c4b4ae4?w=800&q=80',
  'https://images.unsplash.com/photo-1506634572416-48cdfe1e0e53?w=800&q=80',
];

let fbIdx = 0;
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    if (!this.dataset.retried) {
      this.dataset.retried = 'true';
      this.src = fallbackImages[fbIdx % fallbackImages.length];
      fbIdx++;
    }
  });
});

/* ──────────────────────────────────────────────
   MARQUEE — Pause on hover
──────────────────────────────────────────────── */
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
  marqueeTrack.addEventListener('mouseenter', () => {
    marqueeTrack.style.animationPlayState = 'paused';
  });
  marqueeTrack.addEventListener('mouseleave', () => {
    marqueeTrack.style.animationPlayState = 'running';
  });
}

/* ──────────────────────────────────────────────
   INIT COMPLETE LOG
──────────────────────────────────────────────── */
console.log('%cLucas Babetto Atelier', 'font-size:20px; font-family:Georgia,serif; color:#C9A84C; font-style:italic;');
console.log('%cSite carregado com excelência.', 'font-size:12px; font-family:monospace; color:#5A5A5A;');
