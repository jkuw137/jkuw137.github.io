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
    navWork: "Projects",
    navArt: "Sketchbook",
    navAbout: "About",
    navLog: "Mission Log",
    navContact: "Contact",
    langToggle: "日本語",
    navCta: "Say hello",

    // Hero
    heroEyebrow: "Mechanical Engineer",
    heroTitle: `<span class="hero__name">Joe Kuwano's</span><br>
      Engineering Portfolio<br>`,
    heroSub: "I design, prototype, and test mechanical systems, with an interest for controls, dynamics and mechanics of materials.",
    btnWork: "See my work",
    resumeLink: "Download my CV",

    // Work section
    workEyebrow: "Selected Work",
    workHeading: "Projects:",
    workSub: "A few things I've designed, built, and tested — from student competition teams to university projects.",

    proj1Code: "JAN 2026 – MAY 2026",
    proj1Title: "Custom Shortcut Controller",
    proj1Desc: "Prototyped a custom ESP32-based HID to speed up digital art workflows and reduce hand strain, with fully custom firmware and an ergonomic enclosure.",
    proj1Link: "View project ↗",

    proj2Code: "MAR 2024 – NOV 2024",
    proj2Title: "Electric Go-Kart — Composite Chassis",
    proj2Desc: "Helped design and manufacture a full carbon-fiber chassis for an EVolocity competition entry. Gained experience in composite manufacturing proceedures such as lay-up, lamination, vacuum bagging, and mould fabrication, built to carry a full 80kg+ driver load.",
    proj2Link: "View project ↗",

    proj3Code: "MAR 2026 – JUN 2026",
    proj3Title: "Mini-Warman Competition",
    proj3Desc: "Collaborated on an autonomous system to collect, transport, and deposit tennis balls, designing gear trains and arm mechanisms for torque and control, applying Design-for-Production principles for reliable assembly.",
    proj3Link: "View project ↗",

    proj4Code: "MAR 2026 – PRESENT",
    proj4Title: "University of Auckland Rocketry",
    proj4Desc: "Member of the University of Auckland Rocketry club, working on collaborative rocket design and manufacture. Involved using simulation software to model centre of pressure and gravity and predict flight performance.",
    proj4Link: "View project ↗",

    proj5Code: "JUL 2026 – PRESENT",
    proj5Title: "NZ Undergraduate Space Challenge",
    proj5Desc: "Part of a multidisciplinary team designing a payload module for integration into a 3U CubeSat headed to Low Earth Orbit, working across disciplines to solve real mission constraints.",
    proj5Link: "View project ↗",

    // Sketchbook / art
    artEyebrow: "View Gallery",
    artHeading: "Illustrations",
    artSub: "This is a space for my own hand-drawn illustrations made with the help of my Custom Shortcut Controller project.",
    artSlotLabel1: "+ Add your artwork",
    artCaption1: "Illustration title — medium, year",
    artSlotLabel2: "+ Add your artwork",
    artCaption2: "Illustration title — medium, year",
    artSlotLabel3: "+ Add your artwork",
    artCaption3: "In Progress",
    artSlotLabel4: "Coming Soon",
    artCaption4: "In Progress",
    artSlotLabel5: "Coming Soon",
    artCaption5: "In Progress",
    artSlotLabel6: "Coming Soon",
    artCaption6: "In Progress",

    // About
    aboutEyebrow: "About",
    aboutHeading: "Student Mechanical Engineer.<br>.",
    aboutPara1: "I am a second-year mechanical engineering student at the University of Auckland with a strong foundation in problem-solving, teamwork, and technical skills with experience in mechanical design, manufacture, electronics and hardware.",
    aboutPara2: "Currently splitting my time between University of Auckland Rocketry and the NZ Undergraduate Space Challenge, while sketching in whatever hours are left over.",
    toolkitLabel: "Toolkit",
    toolkitDesignTitle: "Design",
    toolkitDesignText: "Fusion 360, SolidWorks",
    toolkitAnalysisTitle: "Analysis",
    toolkitAnalysisText: "OpenRocket, ANSYS FEA",
    toolkitFabTitle: "Fabrication",
    toolkitFabText: "Laser cutting, 3D printing, composite lay-up",
    toolkitElecTitle: "Electronics",
    toolkitElecText: "Arduino, ESP32, soldering",

    // Mission log
    logEyebrow: "Mission Log",
    logHeading: "How I got here",
    logSub: "Projects and milestones, in order.",

    log1Title: "NZ Undergraduate Space Challenge",
    log1Org: "Project Team",
    log1Detail: "Designing a payload module for a 3U CubeSat bound for low Earth orbit.",

    log2Title: "University of Auckland Rocketry",
    log2Org: "Club Member",
    log2Detail: "Simulating rocket flight performance and contributing to design and manufacture.",

    log3Title: "Mini-Warman Competition",
    log3Org: "Team Member",
    log3Detail: "Designed a chassis, gear trains, and arm mechanisms for an autonomous ball-handling robot.",

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
    contactHeading: "Send a Message",
    contactSub: "Open to new projects, roles, and collaborations.",
    linkedinLink: "LinkedIn ↗",
    githubLink: "GitHub ↗",
    resumeLink2: "CV ↗",

    // Footer
    footerText: "✦ Built by Joe Kuwano",
  },

    ja: {
      // Nav
      navWork: "作品",
      navArt: "スケッチブック",
      navAbout: "プロフィール",
      navLog: "活動記録",
      navContact: "お問い合わせ",
      langToggle: "English",
      navCta: "お気軽にどうぞ",
    
      // Hero
      heroEyebrow: "機械工学専攻",
      heroTitle: `<span class="hero__name">Joe Kuwano's</span><br>
        Engineering Portfolio<br>`,
      heroSub: "機械システムの設計・試作・検証に取り組んでいます。特に、制御、ダイナミクス、材料力学に関心があります。",
      btnWork: "作品を見る",
      resumeLink: "CVをダウンロード",
    
      // Work section
      workEyebrow: "主なプロジェクト",
      workHeading: "プロジェクト：",
      workSub: "学生競技チームから大学のプロジェクトまで、これまでに設計・製作・検証してきたものを紹介します。",
    
      proj1Code: "2026年1月 – 2026年5月",
      proj1Title: "カスタム・ショートカットコントローラー",
      proj1Desc: "デジタルアートの作業効率向上と手への負担軽減を目的に、ESP32ベースのカスタムHIDコントローラーを試作。独自ファームウェアと人間工学に基づいた筐体を設計しました。",
      proj1Link: "プロジェクトを見る ↗",
    
      proj2Code: "2024年3月 – 2024年11月",
      proj2Title: "電動ゴーカート — コンポジットシャシー",
      proj2Desc: "EVolocity競技会に向けた、フルカーボンファイバー製シャシーの設計・製作に携わりました。ウェットレイアップ、真空バッグ成形、金型製作を行い、80kgを超えるドライバーの荷重に耐えられる構造を実現しました。",
      proj2Link: "プロジェクトを見る ↗",
    
      proj3Code: "2026年3月 – 2026年6月",
      proj3Title: "Mini-Warman Competition",
      proj3Desc: "テニスボールを回収・運搬・投入する自律システムの開発にチームで取り組みました。トルクと制御を考慮したギヤトレインやアーム機構を設計し、信頼性の高い組立を実現するためDesign-for-Productionの考え方を取り入れました。",
      proj3Link: "プロジェクトを見る ↗",
    
      proj4Code: "2026年3月 – 現在",
      proj4Title: "University of Auckland Rocketry",
      proj4Desc: "University of Auckland Rocketryのメンバーとして、ロケットの設計・製作に取り組んでいます。シミュレーションソフトウェアを用いて、圧力中心と重心を解析し、飛行性能を予測しています。",
      proj4Link: "プロジェクトを見る ↗",
    
      proj5Code: "2026年7月 – 現在",
      proj5Title: "NZ Undergraduate Space Challenge",
      proj5Desc: "3U CubeSatに搭載され、低軌道（LEO）へ打ち上げられるペイロードモジュールを設計する学際的なチームの一員として活動しています。異なる分野のメンバーと協力し、実際のミッションにおける制約や課題に取り組んでいます。",
      proj5Link: "プロジェクトを見る ↗",
    
      // Sketchbook / art
      artEyebrow: "ギャラリーを見る",
      artHeading: "イラスト",
      artSub: "作るのと同じくらい、絵を描くことも好きです。ここでは、自作のショートカットコントローラープロジェクトを活用して制作した、手描きのイラストを紹介しています。",
      artSlotLabel1: "+ 作品を追加",
      artCaption1: "作品タイトル — 使用画材・制作年",
      artSlotLabel2: "+ 作品を追加",
      artCaption2: "作品タイトル — 使用画材・制作年",
      artSlotLabel3: "+ 作品を追加",
      artCaption3: "作品タイトル — 使用画材・制作年",
      artSlotLabel4: "+ 作品を追加",
      artCaption4: "作品タイトル — 使用画材・制作年",
      artSlotLabel5: "+ 作品を追加",
      artCaption5: "作品タイトル — 使用画材・制作年",
      artSlotLabel6: "+ 作品を追加",
      artCaption6: "作品タイトル — 使用画材・制作年",
    
      // About
      aboutEyebrow: "プロフィール",
      aboutHeading: "力学を基礎に。<br>軌道を目指して。",
      aboutPara1: "University of Aucklandで機械工学を専攻する2年生です。問題解決力、チームワーク、技術力を基盤に、機械設計・製作、電子工学、ハードウェアなどの分野で経験を積んでいます。",
      aboutPara2: "現在はUniversity of Auckland RocketryとNZ Undergraduate Space Challengeの活動に取り組みながら、残った時間にはスケッチを楽しんでいます。",
      toolkitLabel: "使用ツール・技術",
      toolkitDesignTitle: "設計",
      toolkitDesignText: "Fusion 360、SolidWorks",
      toolkitAnalysisTitle: "解析",
      toolkitAnalysisText: "OpenRocket、ANSYS FEA",
      toolkitFabTitle: "製作",
      toolkitFabText: "レーザー加工、3Dプリント、コンポジット成形",
      toolkitElecTitle: "電子工作",
      toolkitElecText: "Arduino、ESP32、はんだ付け",
    
      // Mission log
      logEyebrow: "活動記録",
      logHeading: "これまでの歩み",
      logSub: "これまでのプロジェクトと活動を時系列で紹介します。",
    
      log1Title: "NZ Undergraduate Space Challenge",
      log1Org: "プロジェクトチーム",
      log1Detail: "低軌道へ向かう3U CubeSatに搭載するペイロードモジュールを設計。",
    
      log2Title: "University of Auckland Rocketry",
      log2Org: "クラブメンバー",
      log2Detail: "ロケットの飛行性能をシミュレーションし、設計・製作に携わっています。",
    
      log3Title: "Mini-Warman Competition",
      log3Org: "チームメンバー",
      log3Detail: "自律型ボールハンドリングロボットのシャシー、ギヤトレイン、アーム機構を設計。",
    
      log4Title: "カスタム・ショートカットコントローラー",
      log4Org: "個人プロジェクト",
      log4Detail: "デジタルアートの作業効率向上を目的に、プログラム可能なマクロ機能を備えたESP32ベースのHIDを設計。",
    
      log5Title: "電動ゴーカート — コンポジットシャシー",
      log5Org: "EVolocity Team",
      log5Detail: "80kgを超えるドライバーの荷重に対応するフルカーボンファイバー製シャシーの製作に携わりました。",
    
      log6Title: "工学部入学",
      log6Org: "University of Auckland",
      log6Detail: "入学年や、記載したいその他の情報を追加してください。",
    
      // Contact
      contactEyebrow: "お問い合わせ",
      contactHeading: "メッセージを送る",
      contactSub: "新しいプロジェクト、インターンシップ・仕事、コラボレーションなどのお誘いを歓迎しています。",
      linkedinLink: "LinkedIn ↗",
      githubLink: "GitHub ↗",
      resumeLink2: "履歴書 ↗",
    
      // Footer
      footerText: "✦ Joe Kuwano 制作",
    
    // Footer
    footerText: "✦ Joe Kuwanoが、みんなと同じ空の下でつくりました。",
  },
};

// Keys whose value contains HTML tags (like <span> or <br>) rather than
// plain text. script.js uses this list to know which elements should be
// filled with innerHTML instead of textContent. Add a key here if you
// ever put HTML inside a new content string.
const HTML_CONTENT_KEYS = ["heroTitle", "aboutHeading"];
