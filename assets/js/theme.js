/**
 * pico-corp — the only JavaScript the theme ships.
 *
 * Three jobs: the colour scheme toggle, the mobile navigation panel and the
 * condensed state of the sticky header. Everything else is CSS or native HTML.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "pc-scheme";
  var root = document.documentElement;

  /* ---- Colour scheme --------------------------------------------------
     The stored preference is applied by a small inline script in <head> so
     the page never paints in the wrong scheme. This only handles changes. */

  function systemScheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function effectiveScheme() {
    return root.getAttribute("data-theme") || systemScheme();
  }

  // Reflect the effective scheme on the button: the icon is chosen in CSS from
  // data-scheme, and the label always names the scheme the button switches to.
  function reflect(toggle, scheme) {
    toggle.setAttribute("data-scheme", scheme);
    toggle.setAttribute(
      "aria-label",
      scheme === "dark" ? toggle.dataset.labelLight : toggle.dataset.labelDark
    );
  }

  function setScheme(scheme, toggle) {
    root.setAttribute("data-theme", scheme);
    try {
      localStorage.setItem(STORAGE_KEY, scheme);
    } catch (err) {
      /* Private mode or blocked storage: the choice simply is not remembered. */
    }
    if (toggle) reflect(toggle, scheme);
  }

  var toggle = document.querySelector("[data-scheme-toggle]");

  if (toggle) {
    reflect(toggle, effectiveScheme());
    toggle.addEventListener("click", function () {
      setScheme(effectiveScheme() === "dark" ? "light" : "dark", toggle);
    });

    // Follow the system while the visitor has not made an explicit choice.
    var query = window.matchMedia("(prefers-color-scheme: dark)");
    var onSystemChange = function () {
      var stored = null;
      try {
        stored = localStorage.getItem(STORAGE_KEY);
      } catch (err) {
        /* ignore */
      }
      if (!stored) {
        reflect(toggle, systemScheme());
      }
    };
    if (typeof query.addEventListener === "function") {
      query.addEventListener("change", onSystemChange);
    }
  }

  /* ---- Mobile navigation --------------------------------------------- */

  var navToggle = document.querySelector("[data-nav-toggle]");
  var navPanel = document.getElementById("mobile-nav");

  if (navToggle && navPanel) {
    var setNav = function (open) {
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navPanel.setAttribute("data-open", open ? "true" : "false");
    };

    navToggle.addEventListener("click", function () {
      setNav(navToggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
        setNav(false);
        navToggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (navToggle.getAttribute("aria-expanded") !== "true") return;
      if (navPanel.contains(event.target) || navToggle.contains(event.target)) return;
      setNav(false);
    });

    // A resize into the desktop breakpoint leaves the panel hidden by CSS;
    // reset the state so the button reports the truth.
    var desktop = window.matchMedia("(min-width: 56rem)");
    if (typeof desktop.addEventListener === "function") {
      desktop.addEventListener("change", function (event) {
        if (event.matches) setNav(false);
      });
    }
  }

  /* ---- Sticky header ------------------------------------------------- */

  var header = document.querySelector("[data-site-header]");

  if (header) {
    var stuck = false;
    var onScroll = function () {
      var next = window.scrollY > 8;
      if (next !== stuck) {
        stuck = next;
        header.classList.toggle("is-stuck", stuck);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
