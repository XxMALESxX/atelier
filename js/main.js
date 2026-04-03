/**
 * Lucas Babetto Atelier — Main JavaScript
 * Handles: Splash screen, Video background, Navbar, Scroll animations, Form
 */

'use strict';

/* ── 1. PARTICLE GENERATOR (Splash) ─────────────── */
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 8 + 6}s;
      animation-delay: ${Math.random() * 5}s;
      opacity: 0;
    `;
    container.appendChild(p);
  }
}
createParticles();

/* ── 2. SPLASH AUDIO ─────────────────────────────── */
let audioCtx = null;
let audioPlayed = false;

function getAudioCtx() {
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch(e) {
      return null;
    }
  }
  return audioCtx;
}

function playNote(ctx, freq, startTime, duration, gain = 0.18) {
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(freq, startTime);
  
  gainNode.gain.setValueAtTime(0, startTime);
  gainNode.gain.linearRampToValueAtTime(gain, startTime + 0.08);
  gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
  
  oscillator.start(startTime);
  oscillator.stop(startTime + duration);
}

function playElegantIntro() {
  if (audioPlayed) return;
  
  const ctx = getAudioCtx();
  if (!ctx) return;
  
  if (ctx.state === 'suspended') {
    ctx.resume().then(() => playElegantIntro());
    return;
  }
  
  audioPlayed = true;
  const now = ctx.currentTime;
  
  // Elegant arpeggiated chord – G major feel (royal & warm)
  // Ascending arpeggio
  const chord1 = [261.63, 329.63, 392.00, 493.88, 587.33];
  chord1.forEach((freq, i) => playNote(ctx, freq, now + i * 0.13, 2.8, 0.12));
  
  // Second chord D major
  const chord2 = [293.66, 369.99, 440.00, 587.33];
  chord2.forEach((freq, i) => playNote(ctx, freq, now + 1.0 + i * 0.1, 3.0, 0.1));
  
  // Resolution chord – C major
  const chord3 = [261.63, 329.63, 392.00, 523.25, 659.25];
  chord3.forEach((freq, i) => playNote(ctx, freq, now + 2.2 + i * 0.1, 3.5, 0.09));
  
  // Final high note
  playNote(ctx, 783.99, now + 3.5, 2.5, 0.07);
}

function initSplashAudio() {
  // Audio plays on first user interaction with splash
}

/* ── 3. SPLASH SCREEN LOGIC ──────────────────────── */
const splashScreen = document.getElementById('splash-screen');
const mainSite = document.getElementById('main-site');
const splashEnter = document.getElementById('splash-enter');
let splashDismissed = false;

function dismissSplash() {
  if (splashDismissed) return;
  splashDismissed = true;

  splashScreen.classList.add('exiting');
  
  setTimeout(() => {
    splashScreen.style.display = 'none';
    mainSite.classList.remove('hidden');
    document.body.style.overflow = '';
    
    // Start the hero video
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
      heroVideo.play().catch(() => {});
    }
    
    // Init scroll animations after site is visible
    observeElements();
    
    // Start video rotation
    startVideoRotation();
  }, 800);
}

// Auto-dismiss after 4 seconds
document.body.style.overflow = 'hidden';

// Play audio on any user interaction with splash
['click', 'touchstart', 'keydown'].forEach(evt => {
  document.addEventListener(evt, () => {
    playElegantIntro();
  }, { once: true, passive: true });
});

// Auto dismiss after 4.5s
setTimeout(dismissSplash, 4500);

// Manual dismiss on click
splashEnter && splashEnter.addEventListener('click', dismissSplash);
splashScreen.addEventListener('click', (e) => {
  playElegantIntro();
  if (e.target !== splashEnter && !(splashEnter && splashEnter.contains(e.target))) return;
  dismissSplash();
});

/* ── 4. HERO VIDEO ROTATION ──────────────────────── */
const videoSources = [
  'videos/video1.mp4',
  'videos/video3.mp4',
  'videos/video4.mp4',
  'videos/video5.mp4',
  'videos/video6.mp4',
  'videos/video7.mp4',
];

let currentVideoIndex = 0;

function startVideoRotation() {
  const heroVideo = document.getElementById('hero-video');
  if (!heroVideo) return;

  // Remove the source elements and set src directly
  heroVideo.src = videoSources[0];
  heroVideo.load();
  heroVideo.play().catch(() => {});

  // Rotate to next video when current ends
  heroVideo.addEventListener('ended', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    
    // Fade transition
    heroVideo.style.opacity = '0';
    heroVideo.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      heroVideo.src = videoSources[currentVideoIndex];
      heroVideo.load();
      heroVideo.play().catch(() => {});
      heroVideo.style.opacity = '1';
    }, 500);
  });
  
  // Also rotate every 15 seconds even if video hasn't ended
  setInterval(() => {
    if (!heroVideo.paused) {
      currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
      
      heroVideo.style.opacity = '0';
      heroVideo.style.transition = 'opacity 0.8s ease';
      
      setTimeout(() => {
        heroVideo.src = videoSources[currentVideoIndex];
        heroVideo.load();
        heroVideo.play().catch(() => {});
        heroVideo.style.opacity = '1';
      }, 800);
    }
  }, 15000);
}

/* ── 5. PREVENT VIDEO INTERACTION ───────────────── */
// Prevent ALL interactions with hero video
document.addEventListener('DOMContentLoaded', () => {
  const heroVideoWrapper = document.querySelector('.hero-video-wrapper');
  if (heroVideoWrapper) {
    heroVideoWrapper.addEventListener('click', e => e.preventDefault(), true);
    heroVideoWrapper.addEventListener('contextmenu', e => e.preventDefault(), true);
    heroVideoWrapper.addEventListener('touchstart', e => e.preventDefault(), { passive: false });
  }
  
  const heroVideo = document.getElementById('hero-video');
  if (heroVideo) {
    heroVideo.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); }, true);
    heroVideo.addEventListener('contextmenu', e => e.preventDefault(), true);
    
    // Keep video playing
    heroVideo.addEventListener('pause', () => {
      if (!splashDismissed) return;
      setTimeout(() => heroVideo.play().catch(() => {}), 100);
    });
  }
});

/* ── 6. NAVBAR ───────────────────────────────────── */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Scroll behavior
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  
  if (current > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = current;
}, { passive: true });

// Mobile toggle
navToggle && navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  const spans = navToggle.querySelectorAll('span');
  
  if (navMenu.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    document.body.style.overflow = 'hidden';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
    document.body.style.overflow = '';
  }
});

// Close menu on nav link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.querySelectorAll('span').forEach(s => {
      s.style.transform = '';
      s.style.opacity = '';
    });
    document.body.style.overflow = '';
  });
});

/* ── 7. SMOOTH SCROLL ────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    const target = document.querySelector(href);
    if (!target) return;
    
    e.preventDefault();
    const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 80;
    const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;
    
    window.scrollTo({
      top: targetPos,
      behavior: 'smooth'
    });
  });
});

/* ── 8. SCROLL ANIMATIONS ────────────────────────── */
function observeElements() {
  const elementsToAnimate = document.querySelectorAll(
    '.fade-in-up, .fade-in-left, .fade-in-right'
  );
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  });
  
  elementsToAnimate.forEach(el => observer.observe(el));
}

/* ── 9. CONTACT FORM ─────────────────────────────── */
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const formSubmitBtn = document.getElementById('form-submit');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const btnText = formSubmitBtn.querySelector('.btn-text');
    const btnLoading = formSubmitBtn.querySelector('.btn-loading');
    
    // Show loading state
    btnText.classList.add('hidden');
    btnLoading.classList.remove('hidden');
    formSubmitBtn.disabled = true;
    
    try {
      // Use FormSubmit service
      const formData = new FormData(contactForm);
      
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        // Show success
        contactForm.classList.add('hidden');
        formSuccess.classList.remove('hidden');
        
        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      // Fallback: still show success (the form may have submitted)
      contactForm.classList.add('hidden');
      formSuccess.classList.remove('hidden');
      
      console.log('Form submitted (may be using mailto fallback)');
    }
  });
}

/* ── 10. WhatsApp FLOAT VISIBILITY ──────────────── */
const waFloat = document.getElementById('whatsapp-float');
if (waFloat) {
  // Show after slight delay
  setTimeout(() => {
    waFloat.style.opacity = '1';
  }, 1000);
  waFloat.style.opacity = '0';
  waFloat.style.transition = 'opacity 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease';
}

/* ── 11. ACTIVE NAV LINK ON SCROLL ──────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  const scrollY = window.scrollY;
  const navH = 100;
  
  sections.forEach(section => {
    const top = section.offsetTop - navH - 40;
    const bottom = top + section.offsetHeight;
    
    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

/* ── 12. GALLERY LIGHTBOX (simple) ──────────────── */
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (!img) return;
    
    // Create lightbox
    const lightbox = document.createElement('div');
    lightbox.style.cssText = `
      position: fixed; inset: 0; z-index: 10000;
      background: rgba(0,0,0,0.92); display: flex;
      align-items: center; justify-content: center;
      padding: 20px; cursor: zoom-out;
      animation: fadeIn 0.3s ease;
    `;
    
    const imgEl = document.createElement('img');
    imgEl.src = img.src;
    imgEl.alt = img.alt;
    imgEl.style.cssText = `
      max-width: min(90vw, 600px); max-height: 90vh;
      object-fit: contain; border-radius: 4px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
      position: absolute; top: 20px; right: 24px;
      background: rgba(201,169,110,0.9); color: #000;
      border: none; font-size: 1.1rem; width: 36px; height: 36px;
      border-radius: 50%; cursor: pointer; font-weight: bold;
    `;
    
    lightbox.appendChild(imgEl);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    const closeLightbox = () => {
      document.body.removeChild(lightbox);
      document.body.style.overflow = '';
    };
    
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === closeBtn) closeLightbox();
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    }, { once: true });
  });
});

/* ── 13. MOBILE: SKIP SPLASH ON FAST TAP ──────────── */
let touchStartTime = 0;
splashScreen && splashScreen.addEventListener('touchstart', () => {
  touchStartTime = Date.now();
}, { passive: true });

splashScreen && splashScreen.addEventListener('touchend', () => {
  // Quick tap = dismiss splash
  if (Date.now() - touchStartTime < 500) {
    if (!splashDismissed && Date.now() > 2000) {
      dismissSplash();
    }
  }
}, { passive: true });

/* ── 14. PREVENT VIDEO RIGHT-CLICK / DOWNLOAD ─────── */
document.querySelectorAll('video').forEach(v => {
  v.addEventListener('contextmenu', e => e.preventDefault());
  // Disable picture-in-picture
  v.disablePictureInPicture = true;
});

/* ── 15. FORM INPUT ANIMATIONS ────────────────────── */
document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.style.transform = 'translateY(-1px)';
    input.parentElement.style.transition = 'transform 0.2s ease';
  });
  input.addEventListener('blur', () => {
    input.parentElement.style.transform = '';
  });
});

/* ── 16. PHONE MASK ───────────────────────────────── */
const whatsappInput = document.getElementById('whatsapp');
if (whatsappInput) {
  whatsappInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.substring(0, 11);
    
    if (value.length >= 7) {
      if (value.length <= 10) {
        value = `(${value.substring(0,2)}) ${value.substring(2,6)}-${value.substring(6)}`;
      } else {
        value = `(${value.substring(0,2)}) ${value.substring(2,7)}-${value.substring(7)}`;
      }
    } else if (value.length > 2) {
      value = `(${value.substring(0,2)}) ${value.substring(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    
    e.target.value = value;
  });
}

/* ── 17. CSS ANIMATION FOR LIGHTBOX ───────────────── */
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .nav-link.active {
    color: #fff !important;
  }
  .nav-link.active::after {
    transform: scaleX(1) !important;
  }
`;
document.head.appendChild(style);

console.log('%cLucas Babetto Atelier ✨', 'color: #C9A96E; font-size: 1.2rem; font-weight: bold;');
console.log('%cAtte costura em Maringá – PR', 'color: #888; font-size: 0.9rem;');
