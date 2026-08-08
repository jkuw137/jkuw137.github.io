/* =====================================================================
   SCRIPT.JS
   ---------------------------------------------------------------------
   Rendering and interaction logic only. There is no page copy in this
   file — everything displayed comes from content.js.
   ===================================================================== */
(function () {
  const C = SITE_CONTENT;
  let lang = localStorage.getItem('jk-lang') || 'en';

  function t(field) {
    if (field == null) return '';
    return field[lang] != null ? field[lang] : field.en;
  }

  function el(tag, attrs, children) {
    const e = document.createElement(tag);
    if (attrs) {
      for (const k in attrs) {
        if (k === 'text') e.textContent = attrs[k];
        else if (k === 'html') e.innerHTML = attrs[k];
        else e.setAttribute(k, attrs[k]);
      }
    }
    (children || []).forEach((c) => c && e.appendChild(c));
    return e;
  }

  /* ---------------- decorative star field ---------------- */
  function buildSky() {
    const sky = document.getElementById('skyLayer');
    const count = window.innerWidth < 600 ? 45 : 80;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const s = document.createElement('span');
      s.className = 'star' + (Math.random() > 0.85 ? ' big' : '');
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 92 + '%';
      s.style.animationDelay = (Math.random() * 4).toFixed(2) + 's';
      s.style.animationDuration = (3 + Math.random() * 3).toFixed(2) + 's';
      frag.appendChild(s);
    }
    sky.appendChild(frag);
  }

  /* ---------------- render sections from content.js ---------------- */
  function renderNav() {
    document.querySelectorAll('[data-nav]').forEach((a) => {
      const key = a.getAttribute('data-nav');
      a.textContent = t(C.nav[key]);
    });
  }

  function renderHero() {
    document.getElementById('heroEyebrow').textContent = t(C.hero.eyebrow);
    document.getElementById('heroTagline').textContent = t(C.hero.tagline);
    document.getElementById('heroCtaProjects').textContent = t(C.hero.ctaProjects);
    document.getElementById('heroCtaGallery').textContent = t(C.hero.ctaGallery);
    document.getElementById('scrollCueText').textContent = t(C.hero.scrollCue);
  }

  function renderAbout() {
    document.getElementById('aboutEyebrow').textContent = t(C.about.eyebrow);
    document.getElementById('aboutHeading').textContent = t(C.about.heading);
    document.getElementById('aboutBody').textContent = t(C.about.body);
    const facts = document.getElementById('aboutFacts');
    facts.innerHTML = '';
    (C.about.facts || []).forEach((f) => facts.appendChild(el('span', { text: t(f) })));
  }

  function projectThumb(p) {
    if (p.image) {
      return el('div', { class: 'pc-thumb' }, [el('img', { src: p.image, alt: t(p.title) })]);
    }
    // placeholder: a simple rocket glyph + hint text, ready for the user's own artwork
    const wrap = el('div', { class: 'pc-thumb' });
    wrap.innerHTML =
      '<div>' +
      '<svg width="30" height="30" viewBox="0 0 30 30"><path d="M15 4c5 5 5 15 0 20-5-5-5-15 0-20z" fill="#BFE0F5"/><circle cx="15" cy="12" r="1.6" fill="#1E2F5C"/></svg>' +
      '<div class="pc-thumb-hint">' + (lang === 'en' ? 'Add an image via content.js' : 'content.js で画像を追加') + '</div>' +
      '</div>';
    return wrap;
  }

  function renderProjects() {
    document.getElementById('projectsEyebrow').textContent = t(C.projects.eyebrow);
    document.getElementById('projectsHeading').textContent = t(C.projects.heading);
    document.getElementById('projectsIntro').textContent = t(C.projects.intro);

    const list = document.getElementById('projectList');
    list.innerHTML = '';

    C.projects.list.forEach((p) => {
      const linkText = p.linkType === 'repo' ? t(C.projects.linkLabel) : t(C.projects.profileLabel);
      const body = el('div', {}, [
        el('div', { class: 'pc-date', text: t(p.date) }),
        el('h3', { class: 'pc-title', text: t(p.title) }),
        el('div', { class: 'pc-tech' }, p.tech.map((x) => el('span', { text: x }))),
        el('ul', { class: 'pc-bullets' }, t(p.bullets).map ? t(p.bullets).map((b) => el('li', { text: b })) : []),
        p.link ? el('a', { class: 'pc-link', href: p.link, target: '_blank', rel: 'noopener', text: linkText }) : null,
      ]);

      const card = el('div', { class: 'project-card' + (p.featured ? ' featured' : '') }, [
        p.featured ? el('span', { class: 'pc-flag', text: t(C.projects.featuredTag) }) : null,
        projectThumb(p),
        body,
      ]);
      list.appendChild(card);
    });
  }

  function renderGallery() {
    document.getElementById('galleryEyebrow').textContent = t(C.gallery.eyebrow);
    document.getElementById('galleryHeading').textContent = t(C.gallery.heading);
    document.getElementById('galleryIntro').textContent = t(C.gallery.intro);

    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = '';

    if (!C.gallery.images || C.gallery.images.length === 0) {
      grid.appendChild(
        el('div', { class: 'gallery-empty' }, [
          el('h3', { text: t(C.gallery.emptyTitle) }),
          el('p', {
            html: t(C.gallery.emptyBody)
              .replace('/assets/art', '<code>/assets/art</code>')
              .replace('content.js', '<code>content.js</code>'),
          }),
        ])
      );
      return;
    }

    C.gallery.images.forEach((img) => {
      const caption = t(img.caption);
      const item = el('div', { class: 'gallery-item' }, [
        el('img', { src: img.src, alt: caption || '', loading: 'lazy' }),
        caption ? el('div', { class: 'gallery-caption', text: caption }) : null,
      ]);
      item.addEventListener('click', () => openLightbox(img.src, caption));
      grid.appendChild(item);
    });
  }

  function openLightbox(src, caption) {
    document.getElementById('lightboxImg').src = src;
    document.getElementById('lightboxImg').alt = caption || '';
    document.getElementById('lightboxCaption').textContent = caption || '';
    document.getElementById('lightbox').classList.add('open');
  }
  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.getElementById('lightboxImg').src = '';
  }

  function renderContact() {
    document.getElementById('contactEyebrow').textContent = t(C.contact.eyebrow);
    document.getElementById('contactHeading').textContent = t(C.contact.heading);
    document.getElementById('contactIntro').textContent = t(C.contact.intro);

    const wrap = document.getElementById('contactLinks');
    wrap.innerHTML = '';
    wrap.appendChild(
      el('a', { class: 'contact-card', href: C.contact.githubUrl, target: '_blank', rel: 'noopener' }, [
        el('span', { class: 'cc-label', text: t(C.contact.githubLabel) }),
        el('span', { class: 'cc-value', text: C.contact.githubUrl.replace('https://', '') }),
      ])
    );
    wrap.appendChild(
      el('a', { class: 'contact-card', href: 'mailto:' + C.contact.email }, [
        el('span', { class: 'cc-label', text: t(C.contact.emailLabel) }),
        el('span', { class: 'cc-value', text: C.contact.email }),
      ])
    );
  }

  function renderFooter() {
    document.getElementById('footerText').textContent = t(C.footer.text);
  }

  function updateLangButtons() {
    ['btnEn', 'btnEnFooter'].forEach((id) => document.getElementById(id).classList.toggle('active', lang === 'en'));
    ['btnJa', 'btnJaFooter'].forEach((id) => document.getElementById(id).classList.toggle('active', lang === 'ja'));
    document.getElementById('html-root').setAttribute('lang', lang);
    document.title = t(C.meta.siteTitle);
  }

  function renderAll() {
    updateLangButtons();
    renderNav();
    renderHero();
    renderAbout();
    renderProjects();
    renderGallery();
    renderContact();
    renderFooter();
  }

  function setLang(next) {
    lang = next;
    localStorage.setItem('jk-lang', lang);
    renderAll();
  }

  document.getElementById('btnEn').addEventListener('click', () => setLang('en'));
  document.getElementById('btnJa').addEventListener('click', () => setLang('ja'));
  document.getElementById('btnEnFooter').addEventListener('click', () => setLang('en'));
  document.getElementById('btnJaFooter').addEventListener('click', () => setLang('ja'));

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  document.getElementById('navToggleBtn').addEventListener('click', function () {
    const nav = document.getElementById('navInner');
    const open = nav.classList.toggle('open');
    this.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.primary-nav a').forEach((a) => {
    a.addEventListener('click', () => document.getElementById('navInner').classList.remove('open'));
  });

  buildSky();
  renderAll();
})();
