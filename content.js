/*
  ================================================================
  ✦ SITE CONTENT — edit this file to change any text on the site.
  ================================================================

  How it works:
  - Every key below matches an "id" in index.html (e.g. "heroTitle"
    matches <h1 id="heroTitle">).
  - There are two blocks: `en` (English) and `ja` (Japanese).
  - Edit the text on the right of each colon. Keep the quote marks.
  - A few entries contain HTML (like <span> or <br>) — that's normal,
    it's marked in the HTML_KEYS list further down. Leave the tags
    in place, just edit the words around them.
  - Don't rename the keys (the part before the colon) — script.js
    uses them to find the right element on the page.
  - After saving, just refresh index.html in your browser to see
    the change. No build step needed.

  To add a brand new translatable element later: give it an id in
  index.html, then add that same id as a key in BOTH blocks below.
*/

const SITE_CONTENT = {
  en: {
    // Nav
    navWork: "Work",
    navArt: "Sketchbook",
    navAbout: "About",
    navLog: "Mission Log",
    navContact: "Contact",
    langToggle: "日本語",
    navCta: "Say hello",

    // Hero
    heroEyebrow: "Mechanical Engineer · Aerospace Enthusiast",
    heroTitle: `Hi, I'm <span class="hero__name">Joe Kuwano.</span><br>
      I build hardware<br> that likes to fly.`,
    heroSub: "From motor mounts to full flight stacks — I design, prototype, and test mechanical systems, with a soft spot for anything that leaves the ground.",
    btnWork: "See my work",
    resumeLink: "Download résumé",

    // Work section
    workEyebrow: "Selected Work",
    workHeading: "Projects I've launched",
    workSub: "A few things I've designed, built, and tested — from student competition teams to university research groups.",

    proj1Code: "JAN 2026 – MAY 2026",
    proj1Title: "Custom Shortcut Controller",
    proj1Desc: "Prototyped a custom ESP32-based HID to speed up digital art workflows and reduce hand strain, with fully custom firmware and an ergonomic enclosure.",
    proj1Link: "View project ↗",

    proj2Code: "MAR 2024 – NOV 2024",
    proj2Title: "Electric Go-Kart — Composite Chassis",
    proj2Desc: "Helped design and manufacture a full carbon-fiber chassis for an EVolocity competition entry — wet lay-up, vacuum bagging, and mould fabrication, built to carry a full 80kg+ driver load.",
    proj2Link: "View project ↗",

    proj3Code: "MAR 2026 – JUN 2026",
    proj3Title: "Mini-Warman Competition",
    proj3Desc: "Collaborated on an autonomous system to collect, transport, and deposit tennis balls — designing gear trains and arm mechanisms for torque and control, applying Design-for-Production principles for reliable assembly.",
    proj3Link: "View project ↗",

    proj4Code: "MAR 2026 – PRESENT",
    proj4Title: "University of Auckland Rocketry",
    proj4Desc: "Member of the University of Auckland Rocketry club, working on collaborative rocket design and manufacture — using simulation software to model centre of pressure and gravity and predict flight performance.",
    proj4Link: "View project ↗",

    proj5Code: "JUL 2026 – PRESENT",
    proj5Title: "NZ Undergraduate Space Challenge",
    proj5Desc: "Part of a multidisciplinary team designing a payload module for integration into a 3U CubeSat headed to Low Earth Orbit — working across disciplines to solve real mission constraints.",
    proj5Link: "View project ↗",

    // Sketchbook / art
    artEyebrow: "Illustrations",
    artHeading: "Sketchbook",
    artSub: "I draw as much as I build. This is a space for my own hand-drawn illustrations — no AI-generated images here.",
    artSlotLabel1: "+ Add your artwork",
    artCaption1: "Illustration title — medium, year",
    artSlotLabel2: "+ Add your artwork",
    artCaption2: "Illustration title — medium, year",
    artSlotLabel3: "+ Add your artwork",
    artCaption3: "Illustration title — medium, year",
    artSlotLabel4: "+ Add your artwork",
    artCaption4: "Illustration title — medium, year",
    artSlotLabel5: "+ Add your artwork",
    artCaption5: "Illustration title — medium, year",
    artSlotLabel6: "+ Add your artwork",
    artCaption6: "Illustration title — medium, year",

    // About
    aboutEyebrow: "About",
    aboutHeading: "Grounded in mechanics.<br>Reaching for orbit.",
    aboutPara1: "I'm a mechanical engineering student in Auckland with a habit of chasing anything that flies — go-karts, rockets, CubeSats. I like building things with my hands as much as I like modelling them in CAD, and I try to bring the same care to a hand-drawn illustration as I do to a machined part.",
    aboutPara2: "Currently splitting my time between University of Auckland Rocketry and the NZ Undergraduate Space Challenge, while sketching in whatever hours are left over.",
    toolkitLabel: "Toolkit",
    toolkitDesignTitle: "Design",
    toolkitDesignText: "Fusion 360, SolidWorks",
    toolkitAnalysisTitle: "Analysis",
    toolkitAnalysisText: "OpenRocket, basic FEA",
    toolkitFabTitle: "Fabrication",
    toolkitFabText: "Laser cutting, 3D printing, composite lay-up",
    toolkitElecTitle: "Electronics",
    toolkitElecText: "Arduino, ESP32, soldering",

    // Mission log
    logEyebrow: "Mission Log",
    logHeading: "How I got here",
    logSub: "Projects and milestones, in order.",

    log1Title: "NZ Undergraduate Space Challenge",
    log1Org: "Payload Team",
    log1Detail: "Designing a payload module for a 3U CubeSat bound for low Earth orbit.",

    log2Title: "University of Auckland Rocketry",
    log2Org: "Club Member",
    log2Detail: "Simulating rocket flight performance and contributing to design and manufacture.",

    log3Title: "Mini-Warman Competition",
    log3Org: "Team Member",
    log3Detail: "Designed gear trains and arm mechanisms for an autonomous ball-handling robot.",

    log4Title: "Custom Shortcut Controller",
    log4Org: "Personal Project",
    log4Detail: "Designed a custom ESP32 HID with programmable macros to improve digital art workflow.",

    log5Title: "Electric Go-Kart — Composite Chassis",
    log5Org: "EVolocity Team",
    log5Detail: "Helped manufacture a full carbon-fiber chassis rated for an 80kg+ driver load.",

    log6Title: "Started Engineering Degree",
    log6Org: "University of Auckland",
    log6Detail: "Add the year you started, and anything else worth noting.",

    // Contact
    contactEyebrow: "Get in touch",
    contactHeading: "Send a transmission",
    contactSub: "Open to new projects, roles, and collaborations. I usually reply within a day or two.",
    linkedinLink: "LinkedIn ↗",
    githubLink: "GitHub ↗",
    resumeLink2: "Résumé ↗",

    // Footer
    footerText: "✦ Built by Joe Kuwano, somewhere under the same sky as everyone else.",
  },

  ja: {
    // Nav
    navWork: "実績",
    navArt: "スケッチブック",
    navAbout: "プロフィール",
    navLog: "ミッションログ",
    navContact: "お問い合わせ",
    langToggle: "English",
    navCta: "連絡する",

    // Hero
    heroEyebrow: "機械工学専攻 · 航空宇宙が好きです",
    heroTitle: `はじめまして、<span class="hero__name">Joe Kuwano</span>です。<br>
      空へ向かう<br>ハードウェアをつくっています。`,
    heroSub: "モーターマウントから統合フライトシステムまで—機械システムの設計・試作・試験を行っています。地上を離れるものには、特別な思い入れがあります。",
    btnWork: "実績を見る",
    resumeLink: "履歴書をダウンロード",

    // Work section
    workEyebrow: "主な実績",
    workHeading: "取り組んできたプロジェクト",
    workSub: "学生コンペティションチームから大学の研究グループまで、これまでに設計・製作・試験してきたプロジェクトの一部です。",

    proj1Code: "2026年1月 – 2026年5月",
    proj1Title: "カスタムショートカットコントローラー",
    proj1Desc: "デジタルアートの制作を効率化し、手への負担を減らすため、ESP32を用いたカスタムHIDデバイスを試作しました。ファームウェアと人間工学に基づいた筐体はすべて自作です。",
    proj1Link: "プロジェクトを見る ↗",

    proj2Code: "2024年3月 – 2024年11月",
    proj2Title: "電動ゴーカート — カーボンコンポジットシャシー",
    proj2Desc: "EVolocityコンペティション出場車両のフルカーボンファイバーシャシーの設計・製作に携わりました。ウェットレイアップ、真空バッギング、型製作を経験し、80kg以上のドライバー荷重に耐える軽量かつ堅牢なフレームを完成させました。",
    proj2Link: "プロジェクトを見る ↗",

    proj3Code: "2026年3月 – 2026年6月",
    proj3Title: "Mini-Warman競技会",
    proj3Desc: "テニスボールを収集・運搬・排出する自律システムをチームで開発しました。トルクと制御性を高めるためのギアトレインとアーム機構を設計し、確実な組み立てを実現するためDesign for Production(DfP)の原則を適用しました。",
    proj3Link: "プロジェクトを見る ↗",

    proj4Code: "2026年3月 – 現在",
    proj4Title: "オークランド大学ロケットリー部",
    proj4Desc: "オークランド大学ロケットリー部のメンバーとして、ロケットの共同設計・製作に取り組んでいます。シミュレーションソフトウェアを用いて圧力中心と重心をモデル化し、飛行性能を予測しています。",
    proj4Link: "プロジェクトを見る ↗",

    proj5Code: "2026年7月 – 現在",
    proj5Title: "NZ Undergraduate Space Challenge",
    proj5Desc: "低軌道(LEO)へ打ち上げられる3U CubeSatに搭載するペイロードモジュールの設計に、多分野混成チームの一員として取り組んでいます。分野を超えて連携し、実際のミッション制約に対する解決策を模索しています。",
    proj5Link: "プロジェクトを見る ↗",

    // Sketchbook / art
    artEyebrow: "イラスト",
    artHeading: "スケッチブック",
    artSub: "ものづくりと同じくらい、絵を描くことも好きです。ここに並ぶのはすべて自分の手で描いたイラストで、AI生成画像は使用していません。",
    artSlotLabel1: "+ 作品を追加",
    artCaption1: "作品タイトル — 画材、制作年",
    artSlotLabel2: "+ 作品を追加",
    artCaption2: "作品タイトル — 画材、制作年",
    artSlotLabel3: "+ 作品を追加",
    artCaption3: "作品タイトル — 画材、制作年",
    artSlotLabel4: "+ 作品を追加",
    artCaption4: "作品タイトル — 画材、制作年",
    artSlotLabel5: "+ 作品を追加",
    artCaption5: "作品タイトル — 画材、制作年",
    artSlotLabel6: "+ 作品を追加",
    artCaption6: "作品タイトル — 画材、制作年",

    // About
    aboutEyebrow: "プロフィール",
    aboutHeading: "機構工学に軸足を置き、<br>軌道を目指す。",
    aboutPara1: "オークランドで機械工学を学ぶ学生で、飛ぶものならなんでも追いかけてしまう性分です—ゴーカート、ロケット、CubeSatまで。CADでモデリングするのと同じくらい、自分の手で何かをつくることが好きで、機械部品をつくるときと同じ丁寧さを、手描きのイラストにも注いでいます。",
    aboutPara2: "現在はUniversity of Auckland RocketryとNZ Undergraduate Space Challengeの両方に取り組みながら、残った時間でスケッチを描いています。",
    toolkitLabel: "使用ツール",
    toolkitDesignTitle: "設計",
    toolkitDesignText: "Fusion 360, SolidWorks",
    toolkitAnalysisTitle: "解析",
    toolkitAnalysisText: "OpenRocket, 基礎的なFEA",
    toolkitFabTitle: "製作",
    toolkitFabText: "レーザーカット、3Dプリント、複合材レイアップ",
    toolkitElecTitle: "電子工作",
    toolkitElecText: "Arduino, ESP32, はんだ付け",

    // Mission log
    logEyebrow: "ミッションログ",
    logHeading: "これまでの歩み",
    logSub: "プロジェクトとマイルストーンを時系列で紹介します。",

    log1Title: "NZ Undergraduate Space Challenge",
    log1Org: "ペイロードチーム",
    log1Detail: "低軌道へ打ち上げられる3U CubeSat用のペイロードモジュールを設計しています。",

    log2Title: "オークランド大学ロケットリー部",
    log2Org: "部員",
    log2Detail: "ロケットの飛行性能をシミュレーションし、設計・製作に貢献しています。",

    log3Title: "Mini-Warman競技会",
    log3Org: "チームメンバー",
    log3Detail: "ボールを扱う自律ロボットのギアトレインとアーム機構を設計しました。",

    log4Title: "カスタムショートカットコントローラー",
    log4Org: "個人プロジェクト",
    log4Detail: "デジタルアート制作を効率化する、プログラム可能なマクロ機能付きのESP32 HIDを設計しました。",

    log5Title: "電動ゴーカート — カーボンコンポジットシャシー",
    log5Org: "EVolocityチーム",
    log5Detail: "80kg以上のドライバー荷重に対応するフルカーボンファイバーシャシーの製作に携わりました。",

    log6Title: "工学部に入学",
    log6Org: "オークランド大学",
    log6Detail: "入学年やその他の情報をここに追加してください。",

    // Contact
    contactEyebrow: "お問い合わせ",
    contactHeading: "メッセージを送る",
    contactSub: "新しいプロジェクトやお仕事のご相談、コラボレーションを歓迎します。通常1〜2日以内に返信いたします。",
    linkedinLink: "LinkedIn ↗",
    githubLink: "GitHub ↗",
    resumeLink2: "履歴書 ↗",

    // Footer
    footerText: "✦ Joe Kuwanoが、みんなと同じ空の下でつくりました。",
  },
};

// Keys whose value contains HTML tags (like <span> or <br>) rather than
// plain text. script.js uses this list to know which elements should be
// filled with innerHTML instead of textContent. Add a key here if you
// ever put HTML inside a new content string.
const HTML_CONTENT_KEYS = ["heroTitle", "aboutHeading"];
