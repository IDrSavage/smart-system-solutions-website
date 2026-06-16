/* ============================================================
   Smart System Solutions — interactions
   ============================================================ */
(function () {
  'use strict';
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------- SVG icons ---------- */
  const I = {
    building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01"/></svg>',
    camera:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 7h13l3 3v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/><circle cx="9" cy="13" r="3"/><path d="M18 11l4-2v8l-4-2"/></svg>',
    network:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5v4M12 11.5 6.5 17M12 11.5 17.5 17"/></svg>',
    server:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/></svg>',
    cable:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4v4a4 4 0 0 0 4 4h8a4 4 0 0 1 4 4v4"/><path d="M2 4h4M2 8h4M18 16h4M18 20h4"/></svg>',
    finger:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 11v3a6 6 0 0 1-1 3"/><path d="M8 11a4 4 0 0 1 8 0v2a9 9 0 0 1-1 4"/><path d="M5 13v-2a7 7 0 0 1 13-3"/><path d="M15 16a13 13 0 0 1-1 4"/></svg>',
    phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>',
    kiosk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="2" width="14" height="16" rx="2"/><path d="M9 22h6M12 18v4M8 6h8M8 10h5"/></svg>',
    queue:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="7" r="3"/><path d="M3 21v-1a6 6 0 0 1 12 0v1"/><path d="M17 7h4M17 11h4M17 15h4"/></svg>',
    gate:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 21V5a2 2 0 0 1 2-2M20 21V5a2 2 0 0 0-2-2"/><path d="M4 21h16M9 21V9l6-3v15"/></svg>',
    screen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="3" width="20" height="13" rx="2"/><path d="M8 21h8M12 16v5"/></svg>',
    code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg>',
    web:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M2 9h20M6 6.5h.01M9 6.5h.01"/><path d="M9 22l1.5-4M15 22l-1.5-4"/></svg>',
    api:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 8 3 12l4 4M17 8l4 4-4 4"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/></svg>',
    shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    ai:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4"/><circle cx="12" cy="12" r="1.6"/></svg>',
    mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="4"/><path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1"/></svg>'
  };

  /* ---------- Services data ---------- */
  const services = [
    // حلول الاتصالات والتقنية
    { c:'tech', i:I.building, t:'المباني الذكية', d:'أنظمة تحكّم وأتمتة متكاملة للمنشآت والمنازل ترفع الكفاءة والراحة والأمان.' },
    { c:'tech', i:I.camera, t:'كاميرات المراقبة والأنظمة الأمنية', d:'حلول مراقبة وحماية على مدار الساعة بأحدث التقنيات عالية الدقة.' },
    { c:'tech', i:I.network, t:'البنية التحتية لشبكات البيانات', d:'تصميم وتنفيذ شبكات موثوقة وعالية الأداء تربط أعمالك بكفاءة.' },
    { c:'tech', i:I.server, t:'السيرفرات والسويتشات والراوترات', d:'توريد وتركيب وصيانة معدات الشبكات بأعلى معايير الاحترافية.' },
    { c:'tech', i:I.cable, t:'كابلات الإنترنت والألياف البصرية', d:'تمديد وصيانة الكابلات والألياف بأعلى المعايير وأقل زمن انقطاع.' },
    { c:'tech', i:I.finger, t:'أجهزة الحضور والانصراف', d:'أنظمة بصمة ودوام دقيقة وسهلة الإدارة تنظّم وقت موظفيك.' },
    { c:'tech', i:I.phone, t:'السنترالات وأنظمة الهاتف', d:'اتصالات داخلية وخارجية بكفاءة عالية تخدم منشأتك دون حدود.' },
    { c:'tech', i:I.kiosk, t:'أجهزة الخدمة الذاتية', d:'أكشاك ذكية تسرّع تقديم خدماتك وترفع رضا عملائك.' },
    { c:'tech', i:I.queue, t:'أنظمة تنظيم الطوابير', d:'تنظيم انسيابي يقلّل وقت الانتظار ويحسّن تجربة المراجعين.' },
    { c:'tech', i:I.gate, t:'البوابات الإلكترونية', d:'تحكّم آمن وذكي في الدخول والخروج لمنشآتك.' },
    { c:'tech', i:I.screen, t:'الشاشات الإلكترونية', d:'شاشات عرض وإعلانات رقمية احترافية تبرز علامتك التجارية.' },
    // الحلول البرمجية (شراكتك)
    { c:'soft', i:I.code, t:'تطوير البرمجيات والأنظمة والتطبيقات', d:'أنظمة وتطبيقات مخصّصة مبنية باحترافية تناسب طبيعة أعمالك.', badge:'تطوير' },
    { c:'soft', i:I.web, t:'تصميم وتطوير المواقع والمتاجر', d:'مواقع ومتاجر إلكترونية سريعة وجذّابة تحوّل الزوار إلى عملاء.', badge:'تطوير' },
    { c:'soft', i:I.api, t:'الربط البرمجي (APIs) وقواعد البيانات', d:'تكامل سلس وآمن بين أنظمتك وبياناتك لتدفّق عمل موحّد.', badge:'تطوير' },
    { c:'soft', i:I.shield, t:'الأمن السيبراني وحماية البيانات', d:'حماية أنظمتك وبياناتك من التهديدات والاختراق بأحدث الممارسات.', badge:'تطوير' },
    { c:'soft', i:I.ai, t:'الذكاء الاصطناعي وأتمتة المهام', d:'حلول ذكية تختصر الوقت وترفع الكفاءة وتؤتمت مهامك المتكررة.', badge:'تطوير' },
    { c:'soft', i:I.mail, t:'البريد الرسمي والنطاقات', d:'بريد إلكتروني احترافي ونطاقات سعودية وعالمية باسم مؤسستك.', badge:'تطوير' }
  ];

  const why = [
    { t:'خبرة واحترافية', d:'فريق متخصّص يقدّم حلولاً مدروسة بأعلى معايير الجودة والإتقان.' },
    { t:'حلول متكاملة', d:'كل ما تحتاجه من حلول تقنية وبرمجية تحت سقف واحد وشريك واحد.' },
    { t:'جودة وأمان', d:'نلتزم بالجودة والأمان في كل ما نقدّم لضمان أفضل النتائج.' },
    { t:'دعم فني مستمر', d:'فريق دعم جاهز لمساندتك ومتابعة أنظمتك بعد التسليم.' },
    { t:'تقنية متطوّرة', d:'نواكب أحدث التقنيات لنقدّم لك حلولاً تصنع الفرق.' },
    { t:'شريك نجاح', d:'نضع نجاحك هدفنا ونبني معك شراكة طويلة الأمد قائمة على الثقة.' }
  ];

  const process = [
    { t:'الاستشارة والتحليل', d:'نفهم احتياجك ونحلّل متطلباتك بدقة لوضع التصور الأمثل.' },
    { t:'التصميم والتخطيط', d:'نصمّم الحل ونرسم خطة تنفيذ واضحة ومتفق عليها.' },
    { t:'التنفيذ والتطوير', d:'ننفّذ المشروع باحترافية وجودة عالية وفي الوقت المحدد.' },
    { t:'التسليم والدعم', d:'نسلّم الحل جاهزاً ونقدّم الدعم الفني المستمر لضمان استمراريته.' }
  ];

  /* ---------- Render services ---------- */
  const grid = $('#servicesGrid');
  if (grid) {
    grid.innerHTML = services.map(s => `
      <article class="svc-card reveal" data-cat="${s.c}">
        ${s.badge ? `<span class="svc-badge">${s.badge}</span>` : ''}
        <div class="svc-ic">${s.i}</div>
        <h3>${s.t}</h3>
        <p>${s.d}</p>
      </article>`).join('');

    // pointer glow
    $$('.svc-card', grid).forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });

    // filters
    $$('.filter').forEach(btn => btn.addEventListener('click', () => {
      $$('.filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      $$('.svc-card', grid).forEach(card => {
        const show = f === 'all' || card.dataset.cat === f;
        card.classList.toggle('is-hidden', !show);
      });
    }));
  }

  /* ---------- Render why ---------- */
  const whyGrid = $('#whyGrid');
  if (whyGrid) whyGrid.innerHTML = why.map((w, n) => `
    <article class="why-card reveal reveal-d${(n % 3) + 1}">
      <div class="why-num">0${n + 1}</div>
      <h3>${w.t}</h3><p>${w.d}</p>
    </article>`).join('');

  /* ---------- Render process ---------- */
  const procGrid = $('#processGrid');
  if (procGrid) procGrid.innerHTML = process.map((p, n) => `
    <article class="proc-card reveal reveal-d${n + 1}">
      <div class="proc-step">0${n + 1}</div>
      <h3>${p.t}</h3><p>${p.d}</p>
    </article>`).join('');

  /* ---------- Render gallery ---------- */
  const galEl = $('#gallery');
  const TOTAL = 45, SHOWN = 12;
  const galSrcs = Array.from({ length: TOTAL }, (_, n) =>
    `assets/img/gallery/g${String(n + 1).padStart(2, '0')}.jpg`);
  if (galEl) {
    galEl.innerHTML = galSrcs.map((src, n) => `
      <figure class="gallery-item${n >= SHOWN ? ' is-hidden' : ''}" data-idx="${n}">
        <img src="${src}" alt="من أعمال Smart System Solutions" loading="lazy" />
      </figure>`).join('');

    const moreBtn = $('#moreBtn');
    let expanded = false;
    if (moreBtn) moreBtn.addEventListener('click', () => {
      expanded = !expanded;
      $$('.gallery-item', galEl).forEach((it, n) => {
        if (n >= SHOWN) it.classList.toggle('is-hidden', !expanded);
      });
      moreBtn.textContent = expanded ? 'عرض أقل' : 'عرض المزيد';
      if (!expanded) galEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    /* lightbox */
    const lb = $('#lightbox'), lbImg = $('#lbImg');
    let cur = 0;
    const openLB = i => { cur = i; lbImg.src = galSrcs[i]; lb.classList.add('open'); document.body.style.overflow = 'hidden'; };
    const closeLB = () => { lb.classList.remove('open'); document.body.style.overflow = ''; };
    const step = d => { cur = (cur + d + TOTAL) % TOTAL; lbImg.src = galSrcs[cur]; };
    galEl.addEventListener('click', e => {
      const fig = e.target.closest('.gallery-item');
      if (fig) openLB(+fig.dataset.idx);
    });
    $('#lbClose').addEventListener('click', closeLB);
    $('#lbPrev').addEventListener('click', () => step(1));   // RTL: prev = +1 visually
    $('#lbNext').addEventListener('click', () => step(-1));
    lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
    document.addEventListener('keydown', e => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') closeLB();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); revealIO.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(el => revealIO.observe(el));

  /* ---------- Counters ---------- */
  const counters = $$('[data-count]');
  const cIO = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target, target = +el.dataset.count, suf = el.dataset.suffix || '';
      let v = 0; const dur = 1400, t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        v = Math.floor((1 - Math.pow(1 - p, 3)) * target);
        el.textContent = v + suf;
        if (p < 1) requestAnimationFrame(tick); else el.textContent = target + suf;
      };
      requestAnimationFrame(tick);
      cIO.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => cIO.observe(el));

  /* ---------- Navbar ---------- */
  const nav = $('#nav'), navToggle = $('#navToggle'), navLinks = $('#navLinks');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
    $('#toTop').classList.toggle('show', window.scrollY > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open);
  });
  $$('a', navLinks).forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open'); navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  }));

  /* active link */
  const sections = $$('main section[id]');
  const navMap = {};
  $$('a', navLinks).forEach(a => { const id = a.getAttribute('href').slice(1); if (id) navMap[id] = a; });
  const secIO = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        $$('a', navLinks).forEach(a => a.classList.remove('active'));
        if (navMap[en.target.id]) navMap[en.target.id].classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => secIO.observe(s));

  $('#toTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  $('#year').textContent = new Date().getFullYear();

  /* ---------- Theme toggle (dark / light) ---------- */
  const root = document.documentElement;
  const themeBtn = $('#themeToggle');
  const setTheme = (t) => {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('sss-theme', t); } catch (e) {}
  };
  if (themeBtn) themeBtn.addEventListener('click', () => {
    setTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  });

  /* ---------- Contact form → Google Sheet ----------
     ضع رابط نشر Google Apps Script (Web App) هنا ليصلك كل طلب في الشيت.
     طريقة الإعداد موضّحة في ملف GOOGLE-SHEET-SETUP.md.
     إذا تُرك فارغاً، يفتح النموذج بريد info@smsyso.com كحل بديل (وليس واتساب). */
  const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxX9cZhJsvVQJpCZsuA2zupogevaLuvfqdYZtcgqFBf30KLErI9yvcIQS736NdE3Oz2-Q/exec';

  const form = $('#contactForm'), statusEl = $('#cfStatus'), submitBtn = $('#cfSubmit');
  const setStatus = (msg, type) => { if (statusEl) { statusEl.textContent = msg; statusEl.className = 'form-status' + (type ? ' ' + type : ''); } };

  if (form) form.addEventListener('submit', async e => {
    e.preventDefault();
    const f = form.elements;
    if (!f.name.value.trim() || !f.message.value.trim()) {
      setStatus('فضلاً اكتب اسمك ورسالتك.', 'err');
      (!f.name.value.trim() ? f.name : f.message).focus();
      return;
    }
    const data = {
      name: f.name.value.trim(), phone: f.phone.value.trim(),
      service: f.service.value, message: f.message.value.trim(),
      page: location.href, time: new Date().toLocaleString('ar-SA')
    };

    if (!SHEET_ENDPOINT) {
      const body = [`الاسم: ${data.name}`, `الجوال: ${data.phone}`, `الخدمة: ${data.service}`, `الرسالة: ${data.message}`].join('\n');
      window.location.href = `mailto:info@smsyso.com?subject=${encodeURIComponent('طلب جديد من الموقع')}&body=${encodeURIComponent(body)}`;
      setStatus('يتم فتح بريدك لإرسال الطلب إلى info@smsyso.com', 'ok');
      return;
    }

    const original = submitBtn.innerHTML;
    submitBtn.disabled = true; submitBtn.textContent = 'جارٍ الإرسال...';
    setStatus('', '');
    try {
      await fetch(SHEET_ENDPOINT, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(data)
      });
      setStatus('✅ تم إرسال رسالتك بنجاح، سنتواصل معك قريباً.', 'ok');
      form.reset();
    } catch (err) {
      setStatus('❌ تعذّر الإرسال، حاول مجدداً أو تواصل عبر واتساب.', 'err');
    } finally {
      submitBtn.disabled = false; submitBtn.innerHTML = original;
    }
  });

  /* ---------- Preloader ---------- */
  window.addEventListener('load', () => {
    setTimeout(() => $('#preloader').classList.add('done'), 350);
  });

  /* ---------- Hero network canvas ---------- */
  const canvas = $('#netCanvas');
  if (canvas && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ctx = canvas.getContext('2d');
    let w, h, nodes = [], raf;
    const DPR = Math.min(devicePixelRatio || 1, 2);
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = canvas.width = r.width * DPR; h = canvas.height = r.height * DPR;
      const count = Math.min(Math.floor(r.width * r.height / 14000), 90);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35 * DPR, vy: (Math.random() - 0.5) * 0.35 * DPR
      }));
    };
    const LINK = 150 * DPR;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y, dist = Math.hypot(dx, dy);
          if (dist < LINK) {
            ctx.strokeStyle = `rgba(155,81,224,${(1 - dist / LINK) * 0.5})`;
            ctx.lineWidth = DPR * 0.6;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = 'rgba(176,106,230,.9)';
        ctx.beginPath(); ctx.arc(n.x, n.y, DPR * 1.6, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    resize(); draw();
    let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { cancelAnimationFrame(raf); resize(); draw(); }, 200); });
  }
})();
