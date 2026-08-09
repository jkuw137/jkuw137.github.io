/*
  ================================================================
  ✦ SITE BEHAVIOUR — you generally shouldn't need to edit this file.
  For text changes, edit content.js instead.
  ================================================================
*/

(function () {
  "use strict";

  var LANG_KEY = "joe-kuwano-site-lang";

  /* ---------------- Language ---------------- */

  function getInitialLang() {
    var saved = null;
    try {
      saved = localStorage.getItem(LANG_KEY);
    } catch (e) {
      /* localStorage unavailable (private browsing etc.) — fall back below */
    }
    return saved === "ja" || saved === "en" ? saved : "en";
  }

  function applyContent(lang) {
    var dict = SITE_CONTENT[lang];
    if (!dict) return;

    Object.keys(dict).forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      if (HTML_CONTENT_KEYS.indexOf(id) !== -1) {
        el.innerHTML = dict[id];
      } else {
        el.textContent = dict[id];
      }
    });

    document.documentElement.setAttribute("lang", lang);
  }

  function setLang(lang) {
    applyContent(lang);
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
      /* ignore — language just won't persist across visits */
    }
  }

  var currentLang = getInitialLang();
  applyContent(currentLang);

  var langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      currentLang = currentLang === "en" ? "ja" : "en";
      setLang(currentLang);
    });
  }

  /* ---------------- Nav: scroll shadow + mobile menu ---------------- */

  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 8) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  if (navLinks && nav) {
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        if (navToggle) navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- Hero starfield ---------------- */

  var canvas = document.getElementById("sky");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var stars = [];
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      var rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      buildStars(rect.width, rect.height);
    }

    function buildStars(w, h) {
      var count = Math.round((w * h) / 9000);
      stars = [];
      for (var i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h * 0.85,
          r: Math.random() * 1.2 + 0.3,
          phase: Math.random() * Math.PI * 2,
          speed: 0.4 + Math.random() * 0.6,
        });
      }
    }

    function draw(time) {
      var w = canvas.width / dpr;
      var h = canvas.height / dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      stars.forEach(function (s) {
        var twinkle = reduceMotion ? 0.75 : 0.55 + 0.45 * Math.sin(time * 0.001 * s.speed + s.phase);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(234, 240, 251, " + (twinkle * 0.9).toFixed(3) + ")";
        ctx.fill();
      });
      if (!reduceMotion) {
        requestAnimationFrame(draw);
      }
    }

    resize();
    window.addEventListener("resize", resize);
    requestAnimationFrame(draw);
    if (reduceMotion) {
      // draw a single static frame instead of animating
      draw(0);
    }
  }

  /* ---------------- Scroll reveal ---------------- */

  var revealTargets = document.querySelectorAll(
    ".project-card, .art-slot, .art-piece, .log__entry, .section-head"
  );

  revealTargets.forEach(function (el) {
    el.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // No IntersectionObserver support — just show everything
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
