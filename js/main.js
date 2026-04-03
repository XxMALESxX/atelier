/**
 * LUCAS BABETTO ATELIER — MAIN JAVASCRIPT
 * Luxury Fashion Atelier | Maringá, PR
 */

'use strict';

/* ============================================================
   CONFIGURATION
   ============================================================ */
const CONFIG = {
  splashDuration: 3800,          // ms before auto-transition
  splashTransitionDuration: 900, // ms for fade-out animation
  navScrollThreshold: 60,        // px before navbar changes
  toEmail: 'atelier.lucasbabetto@gmail.com',

  // Background video sources (played sequentially, then loop)
  bgVideos: [
    'https://www.genspark.ai/api/files/s/KEHwLxz9?token=Z0FBQUFBQnAwQ2dyTExvNEliRWo3UUktbkNGSWNkb0JqZUhkOE9HUi1xdWtadDQ5azNGREtwc1VndWx0d3BiSUJ2OTlvNDlkTmkxRnRDR0J3ak1iNWFkbWxhdVlCd3FPV0NVdG02LV9naXF0amg0ZXgyVTFJM2ZoQk9BbHFqa0UzNmdUejlKUWE1SkJBSkJuVUlGYi1TUk5BZmY4TzdJdERNY1Q2cG5jMnhxNVMyNWpMT25GUkJtQjZyUHJPR1p4T09mZkREZEh4bzNuaThhMnRiOVZMV3RBUGhxd1VPNW9hRnFVUnhRUUxsejhyN1Vyekx6WTZ5Unptd1dXYU5TTi1RNzBuMjNHVHVVMXdtUGQyb2ZaVWprXzc4dVl2bmdHUWc9PQ',
    'https://www.genspark.ai/api/files/s/uGKrHUAf?token=Z0FBQUFBQnAwQ2dyaGE2c0I5QktOSDFUQm1hMzNESkJSeGNvWTdadHpxUHNMdk9LdFFKbVpWN2YwdGxIMVBYZFpMdWI0RTNIYTdVV1lSdHhCOC12VVpKWktlRzVOYzZrdFhxUFpjaEJycTFLWXZFWFZmMnpYLS1pcGtvMXcyN0NPdFg4UlRweWJtM19zMVl1QmFqTEI4amt5dng2THA2cGlfaUVHTmM1VW9TbkdNM2h1X2dVdXJZeW4zV2p2dEh5Nmt3ME9RaG1mb09PU0wtZG5adUxmNFpaRW5TQjdpRTZqZ0VEOTZCaGpZdWlVZXlxR0V6MmF2Zm9NZnF3S2ZtYTVidmRyV0tickQ0RGktQ0k3M1lCVXNxdVRVUWtrVXpGLXc9PQ',
    'https://www.genspark.ai/api/files/s/vfT5zPrD?token=Z0FBQUFBQnAwQ2dyOVdrZ1VkOUdJZWw2S1l5QjY2c2t2bUljak9zM0hDVWlITXZ5X2duWk9sOE1EdTdoVk5aTlhmekUtMUtBM3ctbVlZUWFxZ1NmU2ZyV3pJdTZLXzN3M2FtUjg3NnB6RzdRd0NDdzgtZkhiUG9RbnNYakNfc1VHVDdCbU1mSnVOcVRxelpweXA1T3E1Z1BwMkMyUGNZdlNlaEFVOFQ1V21lSzBDMThRZHdTZHpMbTJCTU40MUFvX21oZFNHT2MtdW9XZkhaNnVKVVJhMTc3YVRIR2ZRWlNNTWgza3hVN0xEQWZScHBoQkt0Y3U1ZEZqVlV5eHJKWWkyUzAxdXAxYXJkWHFEVWVqRGRFVWZCWnlfWmZjY0s2VHc9PQ',
    'https://www.genspark.ai/api/files/s/Obx8hDBd?token=Z0FBQUFBQnAwQ2dyQkRCTWYxaHRFd1AtTlRNSFBIaUhMclIwakdRNnZtZEh4aHFqTDJyNk9Eb2E2WFoxNWtCN1FXbllxbk9wT1Fiems1YkprUTZhaUk5Z3FPQVY4RWM1WlJDcWdwc3BaaXM0MTkwVjAxQnRmQW1uT3FITlJQT05tRVFRczlaLTZhUDJwelc1cjFnc3pfV0xST1hGZm9FaGQzWHVzN3RXUDI4V1M3eHBMQ29nYWp6UmYxX1lTcWNuelY4ajN6NWJLV05OWHdIWWdTQ2ZtTG15Q01idGFHbEdfSWh3TVlndnVZVFB4TUxnX0p6bDhxQ0I0andkczU1TnlKUmNuUjVjUXMtQ0dRY0dzZ3VvVVhUYjdkdmhlZndVc2c5PQ',
    'https://www.genspark.ai/api/files/s/zFHj3tDO?token=Z0FBQUFBQnAwQ2dyeE1FVnh0eVN0NEtEQXNqemNzOVhVQ1NEVll0UzVWT05ORGxDZ1FZWU81cE1ZMTVJQ25LUl95WEd5SHJ1U2pZd0p1eFB6NmRCS1k1YmN5Qks0eGNKM09oeVZydHF4UzlaVi04RXdSQ3oyWkV1TGZHbTQ4bS1NNHNsQ3JYYkh1UWl2RHlTblE0cXJERmNZby1mT0gydlJoeVpMZ0tnVkYwUmdCbFRBbmJ6anlxeTJYcjRyUk5oR0xYMHU1aWQyQ1B3VlVNQ24yeUxDeU9qUk1EdkZFMTJsSlp1Rjkydkg0WnIyUVRLamdYV2c0NkN2anEzanJkbGl6SDhBb20yTG9ZSVRpY2FxNmsxUnBSdW1xRHJiVm5mb1E5PQ'
  ]
};

/* ============================================================
   DOM HELPERS
   ============================================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ============================================================
   SPLASH SCREEN
   ============================================================ */
class SplashScreen {
  constructor() {
    this.splash = $('#splash-screen');
    this.mainSite = $('#main-site');
    this.audio = $('#splash-audio');
    this.dismissed = false;
    this.autoTimer = null;

    if (!this.splash) return;
    this.init();
  }

  init() {
    // Create particles
    this.createParticles();

    // Try to auto-play music
    this.tryPlayAudio();

    // Click anywhere to enter
    this.splash.addEventListener('click', () => this.dismiss());

    // Auto-dismiss after splashDuration
    this.autoTimer = setTimeout(() => this.dismiss(), CONFIG.splashDuration);
  }

  createParticles() {
    const container = $('#splash-particles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'splash-particle';
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 3}s;
        animation-duration: ${2.5 + Math.random() * 2}s;
        opacity: ${0.3 + Math.random() * 0.7};
        width: ${1 + Math.random() * 2}px;
        height: ${1 + Math.random() * 2}px;
      `;
      container.appendChild(p);
    }
  }

  tryPlayAudio() {
    if (!this.audio) return;
    this.audio.volume = 0.5;
    const playPromise = this.audio.play();
    if (playPromise) {
      playPromise.catch(() => {
        // Browser blocked autoplay — will play on first user interaction
        const playOnInteraction = () => {
          this.audio.play().catch(() => {});
          document.removeEventListener('touchstart', playOnInteraction);
          document.removeEventListener('mousedown', playOnInteraction);
        };
        document.addEventListener('touchstart', playOnInteraction, { once: true });
        document.addEventListener('mousedown', playOnInteraction, { once: true });
      });
    }
  }

  dismiss() {
    if (this.dismissed) return;
    this.dismissed = true;

    if (this.autoTimer) clearTimeout(this.autoTimer);

    // Fade out splash
    this.splash.classList.add('fade-out');

    // Fade in main site
    this.mainSite.classList.remove('hidden');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.mainSite.classList.add('visible');
      });
    });

    // Fade out audio
    if (this.audio && !this.audio.paused) {
      this.fadeOutAudio(this.audio, 800);
    }

    // Remove splash after transition
    setTimeout(() => {
      this.splash.style.display = 'none';
    }, CONFIG.splashTransitionDuration + 100);
  }

  fadeOutAudio(audio, duration) {
    const startVolume = audio.volume;
    const step = startVolume / (duration / 50);
    const timer = setInterval(() => {
      if (audio.volume > step) {
        audio.volume = Math.max(0, audio.volume - step);
      } else {
        audio.volume = 0;
        audio.pause();
        clearInterval(timer);
      }
    }, 50);
  }
}

/* ============================================================
   NAVIGATION
   ============================================================ */
class Navbar {
  constructor() {
    this.navbar = $('#navbar');
    this.hamburger = $('#nav-hamburger');
    this.mobileMenu = $('#nav-mobile-menu');
    this.mobileLinks = $$('.mobile-link');
    this.isOpen = false;

    if (!this.navbar) return;
    this.init();
  }

  init() {
    // Initial state
    this.navbar.classList.add('transparent');

    // Scroll handler
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    this.handleScroll();

    // Hamburger toggle
    if (this.hamburger) {
      this.hamburger.addEventListener('click', () => this.toggleMenu());
    }

    // Close mobile menu on link click
    this.mobileLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });
  }

  handleScroll() {
    const scrolled = window.scrollY > CONFIG.navScrollThreshold;
    if (scrolled) {
      this.navbar.classList.add('scrolled');
      this.navbar.classList.remove('transparent');
    } else {
      this.navbar.classList.add('transparent');
      this.navbar.classList.remove('scrolled');
    }
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.mobileMenu.classList.toggle('open', this.isOpen);

    // Animate hamburger
    const spans = this.hamburger.querySelectorAll('span');
    if (this.isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  }

  closeMenu() {
    this.isOpen = false;
    this.mobileMenu.classList.remove('open');
    const spans = this.hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
}

/* ============================================================
   VIDEO BACKGROUND MANAGER
   ============================================================ */
class VideoBackground {
  constructor() {
    this.video = $('#hero-video');
    this.currentIndex = 0;
    this.sources = CONFIG.bgVideos;

    if (!this.video) return;
    this.init();
  }

  init() {
    // Ensure video is muted and cannot be interacted with
    this.video.muted = true;
    this.video.loop = false; // We'll handle looping manually with playlist
    this.video.controls = false;
    this.video.playsInline = true;
    this.video.setAttribute('playsinline', '');
    this.video.setAttribute('disablepictureinpicture', '');
    this.video.setAttribute('controlslist', 'nodownload nofullscreen noremoteplayback');

    // Load first video
    this.loadVideo(0);

    // When video ends, go to next
    this.video.addEventListener('ended', () => this.nextVideo());

    // Try to play
    this.video.addEventListener('canplay', () => {
      this.video.play().catch(() => {
        // Fallback: try on user interaction
        document.addEventListener('click', () => this.video.play(), { once: true });
      });
    });

    // Prevent context menu (right-click) on video
    this.video.addEventListener('contextmenu', e => e.preventDefault());
  }

  loadVideo(index) {
    const src = this.sources[index];
    if (!src) return;

    // Smooth crossfade
    this.video.style.opacity = '0';
    this.video.src = src;
    this.video.load();

    this.video.addEventListener('canplaythrough', () => {
      this.video.style.transition = 'opacity 1.2s ease';
      this.video.style.opacity = '1';
      this.video.play().catch(() => {});
    }, { once: true });
  }

  nextVideo() {
    this.currentIndex = (this.currentIndex + 1) % this.sources.length;
    this.loadVideo(this.currentIndex);
  }
}

/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */
class ScrollAnimations {
  constructor() {
    this.elements = $$('.fade-in');
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Stagger delay for siblings
            const parent = entry.target.closest('.portfolio-grid, .about-features, .booking-wrapper, .contact-grid');
            let delay = 0;
            if (parent) {
              const siblings = [...parent.querySelectorAll('.fade-in')];
              const index = siblings.indexOf(entry.target);
              delay = index * 100;
            }
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
      });

      this.elements.forEach(el => observer.observe(el));
    } else {
      // Fallback: show all immediately
      this.elements.forEach(el => el.classList.add('visible'));
    }
  }
}

/* ============================================================
   PORTFOLIO FILTER TABS
   ============================================================ */
class PortfolioTabs {
  constructor() {
    this.tabs = $$('.tab-btn');
    this.cards = $$('.portfolio-card');
    this.init();
  }

  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const filter = tab.dataset.filter;

        // Update active tab
        this.tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Filter cards
        this.cards.forEach(card => {
          const type = card.dataset.type;
          const show = filter === 'all' || type === filter;

          if (show) {
            card.style.display = '';
            requestAnimationFrame(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              if (filter !== 'all' && card.dataset.type !== filter) {
                card.style.display = 'none';
              }
            }, 300);
          }
        });
      });
    });
  }
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
class Lightbox {
  constructor() {
    this.lightbox = $('#lightbox');
    this.lightboxImg = $('#lightbox-img');
    this.closeBtn = $('#lightbox-close');
    this.zoomBtns = $$('.portfolio-zoom-btn');
    this.init();
  }

  init() {
    if (!this.lightbox) return;

    this.zoomBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const img = btn.closest('.portfolio-card-img-wrapper').querySelector('img');
        if (img) this.open(img.src, img.alt);
      });
    });

    this.closeBtn?.addEventListener('click', () => this.close());

    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.lightbox.classList.contains('hidden')) {
        this.close();
      }
    });
  }

  open(src, alt = '') {
    if (!this.lightbox || !this.lightboxImg) return;
    this.lightboxImg.src = src;
    this.lightboxImg.alt = alt;
    this.lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.lightbox) return;
    this.lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

/* ============================================================
   BOOKING FORM
   ============================================================ */
class BookingForm {
  constructor() {
    this.form = $('#booking-form');
    this.successMsg = $('#form-success');
    this.submitBtn = $('#submit-btn');
    this.submitText = this.submitBtn?.querySelector('.btn-submit-text');
    this.submitLoading = this.submitBtn?.querySelector('.btn-submit-loading');

    if (!this.form) return;
    this.init();
  }

  init() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });

    // Real-time validation on blur
    const inputs = this.form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          this.validateField(input);
        }
      });
    });
  }

  validateField(field) {
    const errorEl = $(`#${field.id}-error`);
    let valid = true;

    if (field.required && !field.value.trim()) {
      valid = false;
    } else if (field.type === 'email' && field.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value.trim())) valid = false;
    }

    field.classList.toggle('error', !valid);
    if (errorEl) errorEl.classList.toggle('visible', !valid);

    return valid;
  }

  validateAll() {
    const fields = this.form.querySelectorAll('input[required], textarea[required]');
    let allValid = true;
    fields.forEach(field => {
      if (!this.validateField(field)) allValid = false;
    });
    return allValid;
  }

  async handleSubmit() {
    if (!this.validateAll()) return;

    const nome     = $('#nome').value.trim();
    const email    = $('#email').value.trim();
    const telefone = $('#telefone').value.trim();
    const mensagem = $('#mensagem').value.trim();

    // Show loading state
    this.setLoading(true);

    // Build mailto link as fallback (since we're a static site)
    const subject = encodeURIComponent(`Agendamento - ${nome} - Lucas Babetto Atelier`);
    const body = encodeURIComponent(
      `Olá Lucas,\n\nRecebi uma nova solicitação de agendamento:\n\n` +
      `Nome: ${nome}\n` +
      `E-mail: ${email}\n` +
      `Telefone/WhatsApp: ${telefone}\n\n` +
      `Mensagem:\n${mensagem}\n\n` +
      `---\nEnviado pelo site Lucas Babetto Atelier`
    );

    try {
      // Try to use Web3Forms or fall back to mailto
      const formData = {
        access_key: 'demo-fallback', // placeholder
        subject: `Agendamento - ${nome}`,
        from_name: nome,
        email: email,
        phone: telefone,
        message: mensagem,
        to: CONFIG.toEmail
      };

      // Attempt fetch to formsubmit.co service (no-key static form service)
      const formEl = document.createElement('form');
      formEl.method = 'POST';
      formEl.action = `https://formsubmit.co/${CONFIG.toEmail}`;
      formEl.target = '_blank';
      formEl.style.display = 'none';

      const fields = {
        '_subject':  `Novo Agendamento - ${nome}`,
        'name':      nome,
        'email':     email,
        'telefone':  telefone,
        'message':   mensagem,
        '_cc':       email,
        '_template': 'table',
        '_captcha':  'false',
        '_autoresponse': `Olá ${nome}! 💛\n\nRecebemos sua solicitação de agendamento no Lucas Babetto Atelier.\n\nEntraremos em contato em breve pelo e-mail ou número que você informou para confirmar a data e horário do seu atendimento.\n\nObrigado pela confiança!\n\nLucas Babetto Atelier\nR. Chicago, 16 - Jardim Los Angeles, Maringá - PR\nSegunda a Sexta-feira, com hora marcada\n\nInstagram: @lucas.babetto\nWhatsApp: +55 44 99900-3789`
      };

      Object.entries(fields).forEach(([key, val]) => {
        const input = document.createElement('input');
        input.type  = 'hidden';
        input.name  = key;
        input.value = val;
        formEl.appendChild(input);
      });

      document.body.appendChild(formEl);
      formEl.submit();
      setTimeout(() => document.body.removeChild(formEl), 1000);

      // Show success after short delay
      setTimeout(() => {
        this.setLoading(false);
        this.showSuccess();
      }, 1200);

    } catch (err) {
      // Absolute fallback: open mailto
      window.location.href = `mailto:${CONFIG.toEmail}?subject=${subject}&body=${body}`;
      this.setLoading(false);
      this.showSuccess();
    }
  }

  setLoading(loading) {
    if (!this.submitBtn) return;
    this.submitBtn.disabled = loading;
    this.submitText?.classList.toggle('hidden', loading);
    this.submitLoading?.classList.toggle('hidden', !loading);
  }

  showSuccess() {
    if (this.form) this.form.classList.add('hidden');
    if (this.successMsg) this.successMsg.classList.remove('hidden');
  }
}

/* ============================================================
   SMOOTH SCROLL
   ============================================================ */
class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    $$('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const navH = $('#navbar')?.offsetHeight || 80;
        const top = target.getBoundingClientRect().top + window.scrollY - navH;

        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }
}

/* ============================================================
   PARALLAX SCROLL (subtle for hero)
   ============================================================ */
class ParallaxHero {
  constructor() {
    this.heroContent = $('.hero-content');
    this.init();
  }

  init() {
    if (!this.heroContent) return;
    window.addEventListener('scroll', () => this.update(), { passive: true });
  }

  update() {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      const offset = scrollY * 0.25;
      this.heroContent.style.transform = `translateY(${offset}px)`;
      this.heroContent.style.opacity = 1 - scrollY / (window.innerHeight * 0.8);
    }
  }
}

/* ============================================================
   INSTAGRAM EMBED RESIZE FIX
   ============================================================ */
function initInstagramEmbed() {
  if (window.instgrm) {
    window.instgrm.Embeds.process();
  }
}

/* ============================================================
   UTILS
   ============================================================ */
function debounce(fn, wait = 100) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}

/* ============================================================
   CURSOR TRAIL (subtle gold dots on desktop)
   ============================================================ */
class CursorTrail {
  constructor() {
    if (window.matchMedia('(hover: none)').matches) return; // Skip on touch devices
    this.dots = [];
    this.mouse = { x: 0, y: 0 };
    this.init();
  }

  init() {
    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.spawnDot(e.clientX, e.clientY);
    });
  }

  spawnDot(x, y) {
    // Throttle: only spawn every 4th call roughly
    if (Math.random() > 0.2) return;

    const dot = document.createElement('div');
    dot.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: rgba(201, 169, 110, 0.6);
      pointer-events: none;
      z-index: 9990;
      transform: translate(-50%, -50%);
      transition: opacity 0.6s ease, transform 0.6s ease;
    `;
    document.body.appendChild(dot);

    requestAnimationFrame(() => {
      dot.style.opacity = '0';
      dot.style.transform = 'translate(-50%, -50%) scale(2)';
    });

    setTimeout(() => dot.remove(), 700);
  }
}

/* ============================================================
   COUNTER ANIMATION (optional nice touch for stats)
   ============================================================ */
function animateCounters() {
  const counters = $$('[data-count]');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.count);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current) + (counter.dataset.suffix || '');
    }, 16);
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Splash screen
  const splash = new SplashScreen();

  // 2. After splash, init the rest
  const initSite = () => {
    new Navbar();
    new VideoBackground();
    new ScrollAnimations();
    new PortfolioTabs();
    new Lightbox();
    new BookingForm();
    new SmoothScroll();
    new ParallaxHero();

    // Optional cursor trail on desktop
    if (!('ontouchstart' in window)) {
      new CursorTrail();
    }

    // Try Instagram embed
    setTimeout(initInstagramEmbed, 1000);
  };

  // Initialize site modules — either after splash transition, or right away
  if ($('#main-site') && !$('#main-site').classList.contains('hidden')) {
    initSite();
  } else {
    // Wait for splash to dismiss
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(m => {
        m.removedNodes.forEach(node => {
          if (node.id === 'splash-screen' || (node.style && node.style.display === 'none')) {
            initSite();
            observer.disconnect();
          }
        });
      });
    });

    // Also listen for class changes on main-site
    const mainSite = $('#main-site');
    if (mainSite) {
      const classObserver = new MutationObserver(() => {
        if (mainSite.classList.contains('visible')) {
          initSite();
          classObserver.disconnect();
        }
      });
      classObserver.observe(mainSite, { attributes: true, attributeFilter: ['class'] });
    }

    // Fallback: init after splash duration + some buffer
    setTimeout(initSite, CONFIG.splashDuration + 500);
  }
});

/* Also init on load for any race conditions */
window.addEventListener('load', () => {
  // Ensure videos play after all resources are loaded
  const heroVideo = $('#hero-video');
  if (heroVideo && heroVideo.paused) {
    heroVideo.play().catch(() => {});
  }
});
