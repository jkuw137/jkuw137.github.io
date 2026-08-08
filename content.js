/* =====================================================================
   CONTENT.JS
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to change anything on the
   site: headings, bio, projects, gallery images, and contact links —
   in both English (en) and Japanese (ja).

   Every piece of text is written as  { en: "...", ja: "..." }
   Edit the value inside the quotes, save, and refresh the page.
   No build step, nothing to install.

   ------------------------------------------------------------------
   HOW TO ADD YOUR OWN ARTWORK
   ------------------------------------------------------------------
   1. Drop your image file into the /assets/art folder
      (e.g. assets/art/sketch-01.jpg — jpg, png and webp all work).
   2. Scroll down to `gallery.images` near the bottom of this file
      and add a line like:
          { src: "assets/art/sketch-01.jpg", caption: { en: "Title", ja: "タイトル" } }
   3. Save and refresh. That's it — the gallery grid and the lightbox
      pop-up update automatically.
   The gallery starts empty on purpose, with a friendly placeholder,
   so the site looks complete before you've added anything.

   You can do the same thing for a project thumbnail — just set the
   project's `image` field to a path in /assets/art.
   ===================================================================== */

const SITE_CONTENT = {

  meta: {
    name: "Joe Kuwano",
    siteTitle: { en: "Joe Kuwano — Engineering Portfolio", ja: "Joe Kuwano — エンジニアリング・ポートフォリオ" },
  },

  nav: {
    about:    { en: "About",    ja: "概要" },
    projects: { en: "Projects", ja: "プロジェクト" },
    gallery:  { en: "Gallery",  ja: "ギャラリー" },
    contact:  { en: "Contact",  ja: "連絡先" },
  },

  hero: {
    eyebrow:  { en: "Engineering Portfolio", ja: "エンジニアリング・ポートフォリオ" },
    tagline:  {
      en: "Mechanical design and embedded electronics, built with a soft spot for rockets, small satellites, and the odd hand-drawn sketch.",
      ja: "機械設計と組み込み電子回路を軸に活動しています。ロケットや小型衛星、そして時々の手描きスケッチも好きです。",
    },
    ctaProjects: { en: "See the projects", ja: "プロジェクトを見る" },
    ctaGallery:  { en: "See the art",      ja: "イラストを見る" },
    scrollCue:   { en: "Scroll",           ja: "スクロール" },
  },

  about: {
    eyebrow: { en: "About", ja: "About" },
    heading: { en: "A little about me", ja: "自己紹介" },
    body: {
      en: "I'm an engineering student based in Auckland, New Zealand, with a particular interest in mechanical design, composite manufacturing, and embedded electronics. Most of what I build sits somewhere between CAD and the workshop bench — laser cutting, 3D printing, soldering, firmware — and I like following a project from an early sketch through to something that actually works. Space and aerospace projects are what pulled me toward engineering in the first place, and they're still what I enjoy working on most. Outside of that, I draw — you'll find some of it in the gallery below.",
      ja: "ニュージーランド・オークランドを拠点に工学を学んでいます。特に機械設計、複合材製造、組み込み電子回路に関心があります。手掛けるものの多くはCAD設計と実際の工作の両方にまたがっており、レーザーカット、3Dプリント、はんだ付け、ファームウェア開発など、初期のスケッチから実際に動くものへ仕上げていく過程が好きです。もともと宇宙・航空宇宙分野への関心が工学を志すきっかけであり、今でも一番楽しんで取り組んでいる分野です。工学以外では絵を描くことも好きで、その一部を下のギャラリーに掲載しています。",
    },
    facts: [
      { en: "Auckland, New Zealand", ja: "ニュージーランド・オークランド" },
      { en: "Mechanical & Embedded Systems", ja: "機械工学・組み込みシステム" },
      { en: "University of Auckland", ja: "オークランド大学" },
    ],
  },

  projects: {
    eyebrow: { en: "Projects", ja: "Projects" },
    heading: { en: "Things I've built", ja: "手がけたプロジェクト" },
    intro: {
      en: "A mix of coursework, competition teams, and personal builds — spanning CAD design, composite manufacturing, embedded electronics, and rocketry.",
      ja: "授業課題、競技チームでの活動、個人制作など様々です。CAD設計、複合材製造、組み込み電子回路、ロケット工学に及びます。",
    },
    featuredTag: { en: "Featured", ja: "注目" },
    linkLabel:   { en: "View project ↗", ja: "プロジェクトを見る ↗" },
    profileLabel:{ en: "View on GitHub ↗", ja: "GitHubで見る ↗" },

    // ---- Add or edit projects here. Copy an object below to add one. ----
    list: [
      {
        id: "shortcut-controller",
        featured: true,
        title: { en: "Custom Shortcut Controller", ja: "カスタム・ショートカット・コントローラー" },
        date:  { en: "January 2026 – May 2026", ja: "2026年1月 – 2026年5月" },
        tech: ["Fusion", "Arduino IDE", "3D Printing", "ESP32", "Soldering & Electronics"],
        link: "https://github.com/jkuw137/Custom-ESP-32-HID-Device",
        linkType: "repo",
        image: null, // e.g. "assets/art/shortcut-controller.jpg"
        bullets: {
          en: [
            "Prototyped a custom human interface device to speed up digital art workflows and reduce hand strain during long sessions.",
            "Designed and iterated an ergonomic electronics enclosure across several print revisions.",
            "Evaluated design constraints such as tolerancing and material limitations.",
            "Built hardware and firmware to support programmable macros and custom device inputs.",
          ],
          ja: [
            "デジタルアート制作の作業効率向上と、長時間作業による手への負担軽減を目的に、専用のヒューマンインターフェースデバイスを試作。",
            "人間工学に基づいた電子部品用エンクロージャを設計し、複数回の3Dプリント試作を通じて改良を重ねた。",
            "寸法公差や素材の制約といった設計条件を検討・評価。",
            "プログラム可能なマクロやカスタム入力に対応するハードウェアとファームウェアを開発。",
          ],
        },
      },
      {
        id: "go-kart-chassis",
        featured: false,
        title: { en: "Electric Go-Kart Composite Chassis", ja: "電動ゴーカート用コンポジット・シャシー" },
        date:  { en: "March 2024 – November 2024", ja: "2024年3月 – 2024年11月" },
        tech: ["Fusion", "Laser Cutting", "Composite Manufacturing"],
        link: "https://github.com/jkuw137",
        linkType: "profile",
        image: null,
        bullets: {
          en: [
            "Contributed to the design and manufacture of a full carbon-fibre chassis as part of an EVolocity competition team.",
            "Gained hands-on exposure to composite manufacturing processes, including wet lay-up, vacuum bagging, and mould fabrication.",
            "Helped deliver a lightweight, structurally robust frame capable of supporting a full driver load of over 80 kg.",
          ],
          ja: [
            "EVolocity大会に出場するチームの一員として、フルカーボンファイバー製シャシーの設計・製作に携わる。",
            "ウェットレイアップ、真空バギング、型製作など、複合材製造プロセスを実地で経験。",
            "80kgを超えるドライバー荷重に対応できる、軽量かつ構造的に堅牢なフレームの実現に貢献。",
          ],
        },
      },
      {
        id: "mini-warman",
        featured: false,
        title: { en: "Mini-Warman Competition", ja: "Mini-Warman 大会" },
        date:  { en: "March 2026 – June 2026", ja: "2026年3月 – 2026年6月" },
        tech: ["Fusion", "Arduino", "3D Printing", "Laser Cutting", "Electronics"],
        link: "https://github.com/jkuw137",
        linkType: "profile",
        image: null,
        bullets: {
          en: [
            "Collaborated on an autonomous system for collecting, transporting, and depositing tennis balls as part of a team.",
            "Conducted analyses to design gear trains and arm mechanisms for improved torque and control.",
            "Applied Design for Production principles to support fast design iteration and reliable assembly.",
          ],
          ja: [
            "テニスボールの収集・運搬・排出を行う自律システムの開発に、チームの一員として取り組んだ。",
            "トルクと制御性の向上に向けて、ギア機構やアーム機構の解析・設計を実施。",
            "Design for Production(DfP)の考え方を適用し、迅速な設計反復と組立の信頼性向上を両立。",
          ],
        },
      },
      {
        id: "rocketry",
        featured: false,
        title: { en: "University of Auckland Rocketry", ja: "オークランド大学ロケット部" },
        date:  { en: "March 2026 – Present", ja: "2026年3月 – 現在" },
        tech: ["Fusion", "OpenRocket", "Laser Cutting", "Manufacturing"],
        link: "https://github.com/jkuw137",
        linkType: "profile",
        image: null,
        bullets: {
          en: [
            "Member of the University of Auckland Rocketry Club, participating in collaborative projects and technical workshops focused on rocket design and manufacture.",
            "Used simulation software to model a rocket's centre of pressure and centre of gravity to predict flight performance.",
          ],
          ja: [
            "オークランド大学ロケット部の一員として、ロケットの設計・製作に関する共同プロジェクトや技術ワークショップに参加。",
            "シミュレーションソフトウェアを用いてロケットの圧力中心・重心を解析し、飛行性能を予測。",
          ],
        },
      },
      {
        id: "space-challenge",
        featured: false,
        title: { en: "NZ Undergraduate Space Challenge", ja: "NZ Undergraduate Space Challenge" },
        date:  { en: "July 2026 – Present", ja: "2026年7月 – 現在" },
        tech: ["Systems Engineering", "CubeSat Payload"],
        link: "https://github.com/jkuw137",
        linkType: "profile",
        image: null,
        bullets: {
          en: [
            "Member of a multidisciplinary team designing a payload module for integration into a 3U CubeSat to be launched into low Earth orbit.",
            "Collaborating across multiple disciplines to develop practical solutions for a real-world space mission.",
          ],
          ja: [
            "低軌道(LEO)へ打ち上げ予定の3U CubeSatに搭載するペイロードモジュールの設計を、学際的なチームの一員として担当。",
            "複数分野のメンバーと連携し、実際の宇宙ミッションに向けた実用的な解決策の検討に取り組んでいる。",
          ],
        },
      },
    ],
  },

  gallery: {
    eyebrow: { en: "Gallery", ja: "Gallery" },
    heading: { en: "Sketchbook", ja: "スケッチブック" },
    intro: {
      en: "Original illustration and digital art — all hand-drawn by me, nothing AI-generated.",
      ja: "オリジナルのイラスト・デジタルアート作品です。すべて自分の手で描いたもので、AI生成の画像は使用していません。",
    },
    emptyTitle: { en: "Artwork coming soon", ja: "近日公開" },
    emptyBody: {
      en: "This space is reserved for hand-drawn illustration. Add image files to /assets/art and list them in content.js to have them appear here.",
      ja: "この欄には手描きのイラストを掲載する予定です。/assets/art に画像を追加し、content.js に記載すると表示されます。",
    },

    // ---- Add your artwork here, e.g.: ----
    // { src: "assets/art/piece-01.jpg", caption: { en: "Title of the piece", ja: "作品タイトル" } },
    images: [],
  },

  contact: {
    eyebrow: { en: "Contact", ja: "Contact" },
    heading: { en: "Get in touch", ja: "お問い合わせ" },
    intro: {
      en: "Feel free to reach out, or take a look at more of my work on GitHub.",
      ja: "お気軽にご連絡ください。GitHubでも他のプロジェクトをご覧いただけます。",
    },
    githubLabel: { en: "GitHub", ja: "GitHub" },
    githubUrl: "https://github.com/jkuw137",
    emailLabel: { en: "Email", ja: "メール" },
    // EDIT ME — replace with your real email address
    email: "your-email@example.com",
  },

  footer: {
    text: { en: "Built by Joe Kuwano.", ja: "Joe Kuwano 制作。" },
  },
};
