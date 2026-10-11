/* =========================================================
   Gaul Brothers Construction — site interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Contact form delivery ----------
     Paste a form endpoint here (e.g. Formspree: "https://formspree.io/f/xxxxxxx")
     to have submissions emailed to you. If it's left blank, the form opens the
     visitor's email app with the message filled in, sent to CONTACT_EMAIL. */
  var FORM_ENDPOINT = "";
  var CONTACT_EMAIL = "info@gaulbrothers.com";

  var $ = function (s, ctx) { return (ctx || document).querySelector(s); };
  var $$ = function (s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); };

  /* ---------- Header: scrolled state ---------- */
  var header = $(".site-header");
  var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 20); };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile nav ---------- */
  var toggle = $(".nav-toggle");
  var nav = $("#site-nav");
  var setNav = function (open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.classList.toggle("is-open", open);
  };
  toggle.addEventListener("click", function () { setNav(toggle.getAttribute("aria-expanded") !== "true"); });
  $$("a", nav).forEach(function (a) { a.addEventListener("click", function () { setNav(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setNav(false); });

  /* ---------- Active nav link on scroll ---------- */
  var links = $$(".site-nav a[href^='#']:not(.btn)");
  if ("IntersectionObserver" in window) {
    var sectionObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (l) { l.classList.toggle("is-current", l.getAttribute("href") === "#" + entry.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(function (l) { var s = $(l.getAttribute("href")); if (s) sectionObs.observe(s); });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealAll = function () { $$(".reveal").forEach(function (el) { el.classList.add("is-visible"); }); };
  var observeReveals = function () {
    if (!("IntersectionObserver" in window)) return revealAll();
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    $$(".reveal:not(.is-visible)").forEach(function (el) { obs.observe(el); });
  };

  /* ---------- Project illustrations (shown until real photos are added) ---------- */
  var palettes = {
    kitchen: ["#2b3a36", "#d9cdb8", "#b9874a"],
    library: ["#2a1f17", "#8a6440", "#e2c597"],
    ceiling: ["#3a342c", "#efe8dc", "#b9874a"],
    desk:    ["#1f2326", "#c9a77c", "#f1ebe1"],
    bar:     ["#24160f", "#7a4a2a", "#d8a463"],
    stair:   ["#2e2720", "#a37b52", "#efe8dc"]
  };
  function art(type) {
    var p = palettes[type] || palettes.kitchen, bg = p[0], mid = p[1], hi = p[2];
    var s = '<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">' +
      '<defs><linearGradient id="g-' + type + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + bg + '"/><stop offset="1" stop-color="#0f0d0b"/></linearGradient></defs>' +
      '<rect width="400" height="500" fill="url(#g-' + type + ')"/>' +
      '<g fill="none" stroke="' + mid + '" stroke-width="2" opacity=".9">';
    var i;
    switch (type) {
      case "kitchen":
        s += '<rect x="40" y="70" width="320" height="120"/>';
        for (i = 0; i < 4; i++) s += '<rect x="' + (48 + i * 79) + '" y="78" width="71" height="104"/>';
        s += '<rect x="40" y="250" width="320" height="140"/><line x1="30" y1="250" x2="370" y2="250" stroke="' + hi + '" stroke-width="5"/>';
        for (i = 0; i < 4; i++) s += '<rect x="' + (48 + i * 79) + '" y="262" width="71" height="120"/><line x1="' + (74 + i * 79) + '" y1="275" x2="' + (94 + i * 79) + '" y2="275" stroke="' + hi + '" stroke-width="3"/>';
        s += '<path d="M120 430h160v30H120z" fill="' + mid + '" opacity=".35"/>';
        break;
      case "library":
        s += '<rect x="30" y="40" width="340" height="420"/>';
        for (i = 1; i < 6; i++) s += '<line x1="30" y1="' + (40 + i * 70) + '" x2="370" y2="' + (40 + i * 70) + '"/>';
        s += '<line x1="143" y1="40" x2="143" y2="460"/><line x1="257" y1="40" x2="257" y2="460"/>';
        for (var r = 0; r < 5; r++) for (i = 0; i < 9; i++) {
          var h = 34 + ((i * 7 + r * 11) % 22), x = 38 + i * 11 + (r % 2) * 116;
          s += '<rect x="' + x + '" y="' + (40 + (r + 1) * 70 - h) + '" width="8" height="' + h + '" fill="' + (i % 3 ? mid : hi) + '" stroke="none" opacity=".75"/>';
        }
        s += '<line x1="290" y1="30" x2="250" y2="470" stroke="' + hi + '" stroke-width="3"/><line x1="320" y1="30" x2="280" y2="470" stroke="' + hi + '" stroke-width="3"/>';
        for (i = 1; i < 11; i++) s += '<line x1="' + (290 - i * 3.6) + '" y1="' + (30 + i * 40) + '" x2="' + (320 - i * 3.6) + '" y2="' + (30 + i * 40) + '" stroke="' + hi + '"/>';
        break;
      case "ceiling":
        for (i = 0; i < 4; i++) for (var j = 0; j < 3; j++) {
          s += '<rect x="' + (30 + j * 115) + '" y="' + (30 + i * 72) + '" width="100" height="60"/><rect x="' + (40 + j * 115) + '" y="' + (40 + i * 72) + '" width="80" height="40" opacity=".5"/>';
        }
        s += '<line x1="0" y1="330" x2="400" y2="330" stroke="' + hi + '" stroke-width="4"/>';
        for (i = 0; i < 4; i++) s += '<rect x="' + (24 + i * 92) + '" y="380" width="76" height="90"/><rect x="' + (34 + i * 92) + '" y="390" width="56" height="70" opacity=".5"/>';
        s += '<line x1="0" y1="370" x2="400" y2="370"/>';
        break;
      case "desk":
        for (i = 0; i < 26; i++) s += '<line x1="' + (20 + i * 14) + '" y1="40" x2="' + (20 + i * 14) + '" y2="300" opacity=".55"/>';
        s += '<path d="M40 340 Q200 300 360 340 L360 450 Q200 420 40 450 Z" fill="' + mid + '" fill-opacity=".25"/>';
        s += '<path d="M30 330 Q200 288 370 330" stroke="' + hi + '" stroke-width="5"/>';
        for (i = 0; i < 12; i++) s += '<line x1="' + (52 + i * 27) + '" y1="' + (338 - Math.sin((i + .5) / 12 * Math.PI) * 30) + '" x2="' + (52 + i * 27) + '" y2="' + (448 - Math.sin((i + .5) / 12 * Math.PI) * 26) + '"/>';
        break;
      case "bar":
        s += '<rect x="30" y="50" width="340" height="170"/>';
        for (i = 1; i < 3; i++) s += '<line x1="30" y1="' + (50 + i * 57) + '" x2="370" y2="' + (50 + i * 57) + '" stroke="' + hi + '"/>';
        for (var k = 0; k < 3; k++) for (i = 0; i < 14; i++) s += '<rect x="' + (40 + i * 23) + '" y="' + (70 + k * 57) + '" width="10" height="' + (28 + (i % 3) * 4) + '" rx="4" fill="' + hi + '" stroke="none" opacity="' + (0.35 + (i % 4) * 0.15) + '"/>';
        s += '<rect x="20" y="290" width="360" height="16" fill="' + hi + '" stroke="none" opacity=".8"/><rect x="34" y="306" width="332" height="130"/>';
        for (i = 0; i < 8; i++) s += '<line x1="' + (34 + i * 41.5) + '" y1="306" x2="' + (34 + i * 41.5) + '" y2="436"/>';
        for (i = 0; i < 4; i++) s += '<line x1="' + (70 + i * 90) + '" y1="380" x2="' + (70 + i * 90) + '" y2="480" stroke="' + hi + '" stroke-width="3"/><ellipse cx="' + (70 + i * 90) + '" cy="380" rx="22" ry="6" fill="' + mid + '"/>';
        break;
      case "stair":
        var path = "M40 470";
        for (i = 0; i < 10; i++) path += " v-36 h32";
        s += '<path d="' + path + '" stroke="' + hi + '" stroke-width="3"/>';
        s += '<line x1="40" y1="400" x2="360" y2="40" stroke="' + hi + '" stroke-width="5"/>';
        for (i = 0; i < 10; i++) {
          var bx = 56 + i * 32, top = 400 - (bx - 40) * (360 / 320), bot = 470 - (i + 1) * 36;
          s += '<line x1="' + bx + '" y1="' + top + '" x2="' + bx + '" y2="' + bot + '"/>';
        }
        s += '<rect x="34" y="380" width="14" height="90" fill="' + mid + '" stroke="none"/>';
        break;
    }
    return s + "</g></svg>";
  }

  function media(p) {
    return p.image
      ? '<img src="' + p.image + '" alt="' + p.title + ', ' + p.location + '" loading="lazy">'
      : art(p.art);
  }
  function label(p) {
    var c = p.category.charAt(0).toUpperCase() + p.category.slice(1);
    return p.millwork ? c + " · Millwork" : c;
  }

  /* ---------- Project grid + filters ---------- */
  var grid = $("#project-grid");
  var projects = window.PROJECTS || [];
  grid.innerHTML = projects.map(function (p) {
    return '<button class="project-card reveal" data-id="' + p.id + '" data-category="' + p.category + '" data-millwork="' + !!p.millwork + '" aria-haspopup="dialog">' +
      '<div class="art">' + media(p) + "</div>" +
      '<div class="info"><span class="cat">' + label(p) + '</span><h3>' + p.title + '</h3><span class="loc">' + p.location + '</span><br><span class="more">View project →</span></div>' +
      "</button>";
  }).join("");

  $$(".filter").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var f = btn.dataset.filter;
      $$(".filter").forEach(function (b) { var on = b === btn; b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", String(on)); });
      $$(".project-card").forEach(function (card) {
        var show = f === "all" || (f === "millwork" ? card.dataset.millwork === "true" : card.dataset.category === f);
        card.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ---------- Project modal ---------- */
  var modal = $("#project-modal");
  var lastFocus = null;
  function openProject(id) {
    var p = projects.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    $("#modal-media").innerHTML = media(p);
    $("#modal-category").textContent = label(p) + " · " + p.location;
    $("#modal-title").textContent = p.title;
    $("#modal-desc").textContent = p.summary;
    var meta = [["Scope", p.scope], ["Duration", p.duration], ["Materials", p.materials]];
    $("#modal-meta").innerHTML = meta.filter(function (m) { return m[1]; })
      .map(function (m) { return "<dt>" + m[0] + "</dt><dd>" + m[1] + "</dd>"; }).join("");
    if (typeof modal.showModal === "function") modal.showModal(); else modal.setAttribute("open", "");
    document.body.style.overflow = "hidden";
  }
  function closeProject() {
    if (typeof modal.close === "function") modal.close(); else modal.removeAttribute("open");
  }
  grid.addEventListener("click", function (e) {
    var card = e.target.closest(".project-card");
    if (card) { lastFocus = card; openProject(card.dataset.id); }
  });
  $(".modal-close").addEventListener("click", closeProject);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeProject(); }); // backdrop click
  modal.addEventListener("close", function () {
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  });

  observeReveals();

  /* ---------- Contact form ---------- */
  var form = $("#contact-form");
  var status = $("#form-status");
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function setError(input, msg) {
    var field = input.closest(".field");
    field.classList.toggle("has-error", !!msg);
    $(".error", field).textContent = msg || "";
    input.setAttribute("aria-invalid", msg ? "true" : "false");
  }
  function validate(input) {
    var v = input.value.trim();
    if (input.required && !v) return setError(input, "This field is required."), false;
    if (input.type === "email" && v && !emailRe.test(v)) return setError(input, "Please enter a valid email address."), false;
    if (input.type === "tel" && v && v.replace(/\D/g, "").length < 10) return setError(input, "Please enter a 10-digit phone number."), false;
    setError(input, "");
    return true;
  }
  // Only fields with an error slot are validated.
  var inputs = $$(".field input, .field select, .field textarea", form).filter(function (el) {
    return $(".error", el.closest(".field"));
  });
  inputs.forEach(function (el) {
    el.addEventListener("blur", function () { validate(el); });
    el.addEventListener("input", function () { if (el.closest(".field").classList.contains("has-error")) validate(el); });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.className = "form-status";
    status.textContent = "";
    var ok = inputs.map(validate).every(Boolean);
    if (!ok) {
      var first = $(".has-error input, .has-error select, .has-error textarea", form);
      if (first) first.focus();
      return;
    }
    if (form._gotcha.value) return; // bot

    var data = new FormData(form);
    var btn = $("button[type=submit]", form);

    if (!FORM_ENDPOINT) {
      var body = "Name: " + data.get("name") + "\nEmail: " + data.get("email") + "\nPhone: " + (data.get("phone") || "-") +
        "\nProject type: " + data.get("type") + "\nTimeline: " + (data.get("timeline") || "Not sure yet") + "\n\n" + data.get("message");
      window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent("Estimate request: " + data.get("type")) + "&body=" + encodeURIComponent(body);
      status.classList.add("ok");
      status.textContent = "Your email app should open with your message ready to send.";
      return;
    }

    btn.disabled = true;
    btn.textContent = "Sending…";
    fetch(FORM_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } })
      .then(function (res) {
        if (!res.ok) throw new Error(res.status);
        form.reset();
        status.classList.add("ok");
        status.textContent = "Thanks! Your message has been sent. We'll be in touch within one business day.";
      })
      .catch(function () {
        status.classList.add("err");
        status.textContent = "Sorry, something went wrong. Please call us at (201) 223-5865.";
      })
      .finally(function () { btn.disabled = false; btn.textContent = "Send message"; });
  });

  /* ---------- Footer year ---------- */
  $("#year").textContent = new Date().getFullYear();
})();
