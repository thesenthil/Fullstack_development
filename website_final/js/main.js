/* ═══════════════════════════════════════════════════════════
   DIGITAL BYTE SOLUTIONS — Main JavaScript
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAV SCROLL EFFECT ──────────────────────────────────── */
  const nav = document.getElementById('nav');
  const handleNavScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  /* ── MOBILE HAMBURGER ───────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ── SMOOTH ACTIVE NAV LINK ─────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-link');
  const observeSection = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observeSection.observe(s));

  /* ── REVEAL ON SCROLL ───────────────────────────────────── */
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => revealObserver.observe(el));

  /* ── COUNTER ANIMATION ──────────────────────────────────── */
  const counters = document.querySelectorAll('.stat-num[data-count]');
  let countersDone = false;
  const counterObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !countersDone) {
      countersDone = true;
      counters.forEach(el => animateCounter(el));
    }
  }, { threshold: 0.5 });
  if (counters.length) counterObserver.observe(counters[0].closest('.hero-stats'));

  function animateCounter(el) {
    const target = parseInt(el.dataset.count);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toLocaleString();
    }, 16);
  }

  /* ── TERMINAL TYPEWRITER ────────────────────────────────── */
  const terminalLines = [
    { type: 'cmd',     text: 'whoami' },
    { type: 'out',     text: 'digital-byte-student' },
    { type: 'cmd',     text: 'ls courses/' },
    { type: 'out',     text: 'ai_ml/  mern/  mean/  java/  python/  cloud/  data_science/  digital_marketing/  cyber_security/  soft_skills/' },
    { type: 'cmd',     text: 'python train_model.py --epochs 50' },
    { type: 'comment', text: 'Training... Epoch 50/50 — Accuracy: 97.4%' },
    { type: 'out',     text: '✓ Model saved to ./output/model_v2.pt' },
    { type: 'cmd',     text: 'npm run dev' },
    { type: 'out',     text: '  ➜  Local:   http://localhost:3000/' },
    { type: 'comment', text: '  ➜  MERN App running in dev mode' },
    { type: 'cmd',     text: 'git push origin main' },
    { type: 'out',     text: '✓ Deployed to digitalbyte.solutions' },
  ];

  const body = document.getElementById('terminalBody');
  if (body) {
    let lineIdx = 0;
    let charIdx = 0;
    let currentEl = null;
    let currentText = '';

    function nextLine() {
      if (lineIdx >= terminalLines.length) {
        lineIdx = 0;
        body.innerHTML = '';
      }
      const { type, text } = terminalLines[lineIdx];
      const div = document.createElement('div');
      div.className = 't-line';

      if (type === 'cmd') {
        div.innerHTML = `<span class="t-prompt">→</span> <span class="t-cmd"></span>`;
        currentEl = div.querySelector('.t-cmd');
      } else if (type === 'out') {
        div.innerHTML = `<span class="t-out"></span>`;
        currentEl = div.querySelector('.t-out');
      } else {
        div.innerHTML = `<span class="t-comment"></span>`;
        currentEl = div.querySelector('.t-comment');
      }
      body.appendChild(div);
      currentText = text;
      charIdx = 0;
      typeChar();
    }

    function typeChar() {
      if (charIdx <= currentText.length) {
        currentEl.textContent = currentText.slice(0, charIdx);
        charIdx++;
        setTimeout(typeChar, type === 'cmd' ? 55 : 18);
      } else {
        lineIdx++;
        setTimeout(nextLine, type === 'cmd' ? 400 : 200);
        // Keep scroll at bottom
        body.scrollTop = body.scrollHeight;
      }
    }

    const { type } = terminalLines[lineIdx] ?? { type: 'cmd' };
    setTimeout(nextLine, 800);
  }

  /* ── FLOATING PARTICLES ─────────────────────────────────── */
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 3 + 1;
        p.style.cssText = `
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          width: ${size}px;
          height: ${size}px;
          animation-duration: ${Math.random() * 6 + 4}s;
          animation-delay: ${Math.random() * 4}s;
          opacity: 0;
        `;
        particlesContainer.appendChild(p);
      }, i * 200);
    }
  }

  /* ── TESTIMONIAL SLIDER ─────────────────────────────────── */
  const track = document.getElementById('testimonialTrack');
  const dotsContainer = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (track) {
    const cards = track.querySelectorAll('.testimonial-card');
    let current = 0;
    let autoInterval;

    // Create dots
    cards.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });

    function goTo(idx) {
      current = (idx + cards.length) % cards.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      dotsContainer.querySelectorAll('.dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }

    function autoNext() { goTo(current + 1); }
    autoInterval = setInterval(autoNext, 5000);

    prevBtn?.addEventListener('click', () => { clearInterval(autoInterval); goTo(current - 1); autoInterval = setInterval(autoNext, 5000); });
    nextBtn?.addEventListener('click', () => { clearInterval(autoInterval); goTo(current + 1); autoInterval = setInterval(autoNext, 5000); });

    // Touch swipe
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) {
        clearInterval(autoInterval);
        goTo(dx < 0 ? current + 1 : current - 1);
        autoInterval = setInterval(autoNext, 5000);
      }
    });
  }

  /* ── CONTACT FORM ───────────────────────────────────────── */
  const submitBtn = document.getElementById('submitForm');
  const formSuccess = document.getElementById('formSuccess');

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const name    = document.getElementById('fname').value.trim();
      const phone   = document.getElementById('fphone').value.trim();
      const email   = document.getElementById('femail').value.trim();
      const course  = document.getElementById('fcourse').value;

      if (!name || !phone || !email || !course) {
        // Highlight empty fields
        [['fname', name], ['fphone', phone], ['femail', email], ['fcourse', course]].forEach(([id, val]) => {
          const el = document.getElementById(id);
          if (!val) {
            el.style.borderColor = '#ff6b6b';
            el.addEventListener('input', () => el.style.borderColor = '', { once: true });
          }
        });
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
      setTimeout(() => {
        formSuccess.classList.add('show');
        submitBtn.textContent = 'Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #4ade80, #22c55e)';
        // Clear form
        ['fname','fphone','femail','fcourse','fmessage'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = '';
        });
      }, 1200);
    });
  }

  /* ── DOWNLOAD ALL BROCHURES ─────────────────────────────── */
  const downloadAllBtn = document.getElementById('downloadAll');
  const brochureFiles = [
    { href: 'brochures/ai_ml.html',       name: 'DBS_AI_ML_Brochure.html'       },
    { href: 'brochures/mern.html',         name: 'DBS_MERN_Brochure.html'        },
    { href: 'brochures/mean.html',         name: 'DBS_MEAN_Brochure.html'        },
    { href: 'brochures/java.html',         name: 'DBS_Java_Brochure.html'        },
    { href: 'brochures/python.html',       name: 'DBS_Python_Brochure.html'      },
    { href: 'brochures/cloud_html.html',   name: 'DBS_Cloud_Brochure.html'       },
    { href: 'brochures/data_science.html', name: 'DBS_DataScience_Brochure.html' },
    { href: 'brochures/digital_marketing.html', name: 'DBS_DigitalMarketing_Brochure.html' },
    { href: 'brochures/cyber_security.html',    name: 'DBS_CyberSecurity_Brochure.html'    },
    { href: 'brochures/soft_skills.html',       name: 'DBS_SoftSkills_Brochure.html'       },
  ];

  if (downloadAllBtn) {
    downloadAllBtn.addEventListener('click', () => {
      downloadAllBtn.disabled = true;
      downloadAllBtn.innerHTML = '⏳ Starting Downloads…';
      brochureFiles.forEach((file, i) => {
        setTimeout(() => {
          const a = document.createElement('a');
          a.href = file.href;
          a.download = file.name;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          if (i === brochureFiles.length - 1) {
            setTimeout(() => {
              downloadAllBtn.innerHTML = '✅ All Downloaded!';
              setTimeout(() => {
                downloadAllBtn.disabled = false;
                downloadAllBtn.innerHTML = `
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download All (8 Files)`;
              }, 3000);
            }, 500);
          }
        }, i * 600);
      });
    });
  }

  /* ── BACK TO TOP ────────────────────────────────────────── */
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop?.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── NAV ACTIVE STYLE INJECTION ─────────────────────────── */
  const style = document.createElement('style');
  style.textContent = `.nav-link.active { color: var(--teal); }`;
  document.head.appendChild(style);

});
