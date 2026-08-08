// ============ NAV: scroll state + mobile toggle ============
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');

window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 40);
}, { passive: true });

navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('is-open'));
});

// ============ HERO SKY: twinkling stars + one shooting star ============
const canvas = document.getElementById('sky');
const ctx = canvas.getContext('2d');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let stars = [];
let shootingStar = null;
let dpr = Math.min(window.devicePixelRatio || 1, 2);

function resize() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  canvas.style.width = rect.width + 'px';
  canvas.style.height = rect.height + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  seedStars(rect.width, rect.height);
}

function seedStars(w, h) {
  const count = Math.floor((w * h) / 6500);
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h * 0.9,
    r: Math.random() * 1.3 + 0.3,
    baseAlpha: Math.random() * 0.5 + 0.35,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.6 + 0.3,
  }));
}

function maybeSpawnShootingStar(w, h) {
  if (shootingStar || reduceMotion) return;
  if (Math.random() < 0.0025) {
    const startX = Math.random() * w * 0.6;
    const startY = Math.random() * h * 0.3;
    shootingStar = {
      x: startX, y: startY,
      vx: 6 + Math.random() * 3,
      vy: 3 + Math.random() * 1.5,
      life: 1,
    };
  }
}

let t = 0;
function draw() {
  const w = canvas.width / dpr;
  const h = canvas.height / dpr;
  ctx.clearRect(0, 0, w, h);

  t += 0.016;

  stars.forEach(s => {
    const alpha = reduceMotion
      ? s.baseAlpha
      : s.baseAlpha + Math.sin(t * s.speed + s.phase) * 0.28;
    ctx.beginPath();
    ctx.fillStyle = `rgba(234, 240, 251, ${Math.max(0, alpha)})`;
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });

  maybeSpawnShootingStar(w, h);

  if (shootingStar) {
    const s = shootingStar;
    ctx.save();
    const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 8, s.y - s.vy * 8);
    grad.addColorStop(0, `rgba(255, 211, 122, ${s.life})`);
    grad.addColorStop(1, 'rgba(255, 211, 122, 0)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(s.x - s.vx * 8, s.y - s.vy * 8);
    ctx.stroke();
    ctx.restore();

    s.x += s.vx;
    s.y += s.vy;
    s.life -= 0.012;
    if (s.life <= 0 || s.x > w + 40 || s.y > h + 40) shootingStar = null;
  }

  requestAnimationFrame(draw);
}

resize();
window.addEventListener('resize', resize);
requestAnimationFrame(draw);

// ============ LANGUAGE TOGGLE (EN / 日本語) ============
// Add or edit translations here. `html: true` means the value is inserted
// with innerHTML (used only where a line break / <span> is needed).
const i18n = {
  navWork:        { en: "Work",              ja: "実績" },
  navArt:         { en: "Sketchbook",         ja: "スケッチブック" },
  navAbout:       { en: "About",              ja: "プロフィール" },
  navLog:         { en: "Mission Log",        ja: "ミッションログ" },
  navContact:     { en: "Contact",            ja: "お問い合わせ" },
  navCta:         { en: "Say hello",          ja: "連絡する" },

  heroEyebrow:    { en: "Mechanical Engineer · Aerospace Enthusiast", ja: "機械工学専攻・宇宙好き" },
  heroTitle:      { en: `Hi, I'm <span class="hero__name">Joe Kuwano.</span><br>I build hardware<br> that likes to fly.`,
                    ja: `こんにちは、<span class="hero__name">ジョー・クワノ</span>です。<br>空を飛ぶことが好きな<br>ハードウェアを作っています。`, html: true },
  heroSub:        { en: "From motor mounts to full flight stacks — I design, prototype, and test mechanical systems, with a soft spot for anything that leaves the ground.",
                    ja: "モーターマウントから飛行スタックまで、機械システムの設計・試作・試験を行っています。地上を離れるものには特に心惹かれます。" },
  btnWork:        { en: "See my work",        ja: "実績を見る" },
  resumeLink:     { en: "Download résumé",    ja: "履歴書をダウンロード" },

  workEyebrow:    { en: "Selected Work",      ja: "実績紹介" },
  workHeading:    { en: "Projects I've launched", ja: "手がけたプロジェクト" },
  workSub:        { en: "A few things I've designed, built, and tested — from student competition teams to university research groups.",
                    ja: "学生コンペティションから大学の研究チームまで、設計・製作・試験してきたプロジェクトの一部です。" },

  proj1Title:     { en: "Custom Shortcut Controller", ja: "カスタムショートカットコントローラー" },
  proj1Desc:      { en: "Prototyped a custom ESP32-based HID to speed up digital art workflows and reduce hand strain, with fully custom firmware and an ergonomic enclosure.",
                    ja: "デジタルアート制作のワークフローを効率化し、手への負担を減らすため、ESP32を用いたカスタムHID(ヒューマンインターフェースデバイス)を試作。ファームウェアと人間工学に基づいた筐体を独自に設計しました。" },
  proj1Link:      { en: "View project ↗",     ja: "プロジェクトを見る ↗" },

  proj2Title:     { en: "Electric Go-Kart — Composite Chassis", ja: "電動ゴーカート ― カーボン製シャシー" },
  proj2Desc:      { en: "Helped design and manufacture a full carbon-fiber chassis for an EVolocity competition entry — wet lay-up, vacuum bagging, and mould fabrication, built to carry a full 80kg+ driver load.",
                    ja: "EVolocity大会向けに、フルカーボン製シャシーの設計・製作に携わりました。ウェットレイアップ、真空バギング、型の製作を経験し、80kg以上のドライバー荷重に耐える軽量かつ堅牢なフレームを完成させました。" },
  proj2Link:      { en: "View project ↗",     ja: "プロジェクトを見る ↗" },

  proj3Title:     { en: "Mini-Warman Competition", ja: "ミニ・ウォーマン競技会" },
  proj3Desc:      { en: "Collaborated on an autonomous system to collect, transport, and deposit tennis balls — designing gear trains and arm mechanisms for torque and control, applying Design-for-Production principles for reliable assembly.",
                    ja: "テニスボールを収集・搬送・排出する自律システムの開発にチームで取り組みました。トルクと制御性を高めるギア機構やアーム機構を設計し、量産性を考慮した設計(DfP)の原則を適用しました。" },
  proj3Link:      { en: "View project ↗",     ja: "プロジェクトを見る ↗" },

  proj4Title:     { en: "University of Auckland Rocketry", ja: "オークランド大学ロケット部" },
  proj4Desc:      { en: "Member of the University of Auckland Rocketry club, working on collaborative rocket design and manufacture — using simulation software to model centre of pressure and gravity and predict flight performance.",
                    ja: "オークランド大学ロケット部のメンバーとして、ロケットの設計・製作にチームで取り組んでいます。シミュレーションソフトを用いて圧力中心と重心を解析し、飛行性能を予測しています。" },
  proj4Link:      { en: "View project ↗",     ja: "プロジェクトを見る ↗" },

  proj5Title:     { en: "NZ Undergraduate Space Challenge", ja: "NZ学部生スペースチャレンジ" },
  proj5Desc:      { en: "Part of a multidisciplinary team designing a payload module for integration into a 3U CubeSat headed to Low Earth Orbit — working across disciplines to solve real mission constraints.",
                    ja: "低軌道(LEO)に打ち上げられる3U CubeSatに搭載するペイロードモジュールを、学際的なチームで設計しています。分野を超えて協力し、実際のミッション制約に取り組んでいます。" },
  proj5Link:      { en: "View project ↗",     ja: "プロジェクトを見る ↗" },

  artEyebrow:     { en: "Illustrations",      ja: "イラスト" },
  artHeading:     { en: "Sketchbook",         ja: "スケッチブック" },
  artSub:         { en: "I draw as much as I build. This is a space for my own hand-drawn illustrations — no AI-generated images here.",
                    ja: "ものづくりと同じくらい絵を描くのが好きです。ここには自分の手描きイラストを載せています(AI生成画像は使用していません)。" },
  artSlotLabel1:  { en: "+ Add your artwork", ja: "＋ 作品を追加" },
  artSlotLabel2:  { en: "+ Add your artwork", ja: "＋ 作品を追加" },
  artSlotLabel3:  { en: "+ Add your artwork", ja: "＋ 作品を追加" },
  artSlotLabel4:  { en: "+ Add your artwork", ja: "＋ 作品を追加" },
  artSlotLabel5:  { en: "+ Add your artwork", ja: "＋ 作品を追加" },
  artSlotLabel6:  { en: "+ Add your artwork", ja: "＋ 作品を追加" },
  artCaption1:    { en: "Illustration title — medium, year", ja: "作品タイトル ― 画材、制作年" },
  artCaption2:    { en: "Illustration title — medium, year", ja: "作品タイトル ― 画材、制作年" },
  artCaption3:    { en: "Illustration title — medium, year", ja: "作品タイトル ― 画材、制作年" },
  artCaption4:    { en: "Illustration title — medium, year", ja: "作品タイトル ― 画材、制作年" },
  artCaption5:    { en: "Illustration title — medium, year", ja: "作品タイトル ― 画材、制作年" },
  artCaption6:    { en: "Illustration title — medium, year", ja: "作品タイトル ― 画材、制作年" },

  aboutEyebrow:   { en: "About",              ja: "プロフィール" },
  aboutHeading:   { en: "Grounded in mechanics.<br>Reaching for orbit.", ja: "機械工学を土台に、<br>宇宙を目指して。", html: true },
  aboutPara1:     { en: "I'm a mechanical engineering student in Auckland with a habit of chasing anything that flies — go-karts, rockets, CubeSats. I like building things with my hands as much as I like modelling them in CAD, and I try to bring the same care to a hand-drawn illustration as I do to a machined part.",
                    ja: "オークランドで機械工学を学ぶ学生です。ゴーカートからロケット、CubeSatまで、空を飛ぶものを追いかける癖があります。CADでモデリングするのと同じくらい、手を動かしてものを作るのが好きで、機械部品を仕上げるのと同じ丁寧さを手描きイラストにも注いでいます。" },
  aboutPara2:     { en: "Currently splitting my time between University of Auckland Rocketry and the NZ Undergraduate Space Challenge, while sketching in whatever hours are left over.",
                    ja: "現在は、オークランド大学ロケット部とNZ学部生スペースチャレンジの活動を並行して行いながら、空いた時間にスケッチを続けています。" },

  toolkitLabel:   { en: "Toolkit",            ja: "使用ツール" },
  toolkitDesignTitle:   { en: "Design",       ja: "設計" },
  toolkitAnalysisTitle: { en: "Analysis",     ja: "解析" },
  toolkitFabTitle:      { en: "Fabrication",  ja: "製作" },
  toolkitElecTitle:     { en: "Electronics",  ja: "電子工作" },

  logEyebrow:     { en: "Mission Log",        ja: "ミッションログ" },
  logHeading:     { en: "How I got here",     ja: "これまでの歩み" },
  logSub:         { en: "Projects and milestones, in order.", ja: "プロジェクトと出来事を、時系列で。" },

  log1Title: { en: "NZ Undergraduate Space Challenge", ja: "NZ学部生スペースチャレンジ" },
  log1Org:   { en: "Payload Team", ja: "ペイロードチーム" },
  log1Detail:{ en: "Designing a payload module for a 3U CubeSat bound for low Earth orbit.", ja: "低軌道行き3U CubeSat向けのペイロードモジュールを設計中。" },

  log2Title: { en: "University of Auckland Rocketry", ja: "オークランド大学ロケット部" },
  log2Org:   { en: "Club Member", ja: "部員" },
  log2Detail:{ en: "Simulating rocket flight performance and contributing to design and manufacture.", ja: "ロケットの飛行性能をシミュレーションし、設計・製作に貢献。" },

  log3Title: { en: "Mini-Warman Competition", ja: "ミニ・ウォーマン競技会" },
  log3Org:   { en: "Team Member", ja: "チームメンバー" },
  log3Detail:{ en: "Designed gear trains and arm mechanisms for an autonomous ball-handling robot.", ja: "自律型ボール操作ロボットのギア機構とアーム機構を設計。" },

  log4Title: { en: "Custom Shortcut Controller", ja: "カスタムショートカットコントローラー" },
  log4Org:   { en: "Personal Project", ja: "個人プロジェクト" },
  log4Detail:{ en: "Designed a custom ESP32 HID with programmable macros to improve digital art workflow.", ja: "デジタルアート制作を効率化するプログラム可能なマクロ付きESP32製HIDを設計。" },

  log5Title: { en: "Electric Go-Kart — Composite Chassis", ja: "電動ゴーカート ― カーボン製シャシー" },
  log5Org:   { en: "EVolocity Team", ja: "EVolocityチーム" },
  log5Detail:{ en: "Helped manufacture a full carbon-fiber chassis rated for an 80kg+ driver load.", ja: "80kg以上のドライバー荷重に対応するフルカーボン製シャシーの製作に貢献。" },

  log6Title: { en: "Started Engineering Degree", ja: "工学部に入学" },
  log6Org:   { en: "University of Auckland", ja: "オークランド大学" },
  log6Detail:{ en: "Add the year you started, and anything else worth noting.", ja: "入学年やその他の情報をここに追加してください。" },

  contactEyebrow: { en: "Get in touch",       ja: "お問い合わせ" },
  contactHeading: { en: "Send a transmission", ja: "メッセージを送る" },
  contactSub:     { en: "Open to new projects, roles, and collaborations. I usually reply within a day or two.",
                    ja: "新しいプロジェクトやお仕事のご相談、コラボレーションを歓迎します。通常1〜2日以内に返信します。" },
  linkedinLink:   { en: "LinkedIn ↗",         ja: "LinkedIn ↗" },
  githubLink:     { en: "GitHub ↗",           ja: "GitHub ↗" },
  resumeLink2:    { en: "Résumé ↗",           ja: "履歴書 ↗" },

  footerText:     { en: "✦ Built by Joe Kuwano, somewhere under the same sky as everyone else.",
                    ja: "✦ ジョー・クワノ制作。みんなと同じ空の下で。" },
};

function applyLanguage(lang) {
  Object.keys(i18n).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const entry = i18n[id];
    if (entry.html) {
      el.innerHTML = entry[lang];
    } else {
      el.textContent = entry[lang];
    }
  });
  document.documentElement.lang = lang;
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = lang === 'en' ? '日本語' : 'EN';
  try { localStorage.setItem('preferredLang', lang); } catch (e) { /* ignore */ }
}

const langToggle = document.getElementById('langToggle');
let currentLang = 'en';
try { currentLang = localStorage.getItem('preferredLang') || 'en'; } catch (e) { /* ignore */ }
applyLanguage(currentLang);

langToggle?.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ja' : 'en';
  applyLanguage(currentLang);
});
