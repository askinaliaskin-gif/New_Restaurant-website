(function () {
  "use strict";
  var C = window.SITE, $ = function (s, r) { return (r || document).querySelector(s); };
  var money = function (v) { return Number(v).toFixed(2) + " " + C.currency; };
  var get = function (p) { return p.split(".").reduce(function (o, k) { return o && o[k]; }, C); };
  var el = function (t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };
  var ph = function (t) { return '<span class="ph">' + t + "</span>"; };
  var priceHTML = function (v) { return v == null ? ph(C.priceNote) : '<span class="price">' + money(v) + "</span>"; };

  /* ---------- contenu depuis config.js ---------- */
  document.querySelectorAll("[data-cfg]").forEach(function (n) {
    var v = get(n.dataset.cfg); n.textContent = v; if (/^\[/.test(v)) n.innerHTML = ph(v.replace(/</g, "&lt;"));
  });
  var tabs = $("#catTabs"), panel = $("#catPanel"), cur = -1, btns = [];
  var hl = function (s) { return s.replace(/\[[^\]]+\]/g, function (m) { return ph(m); }); };
  function select(i, user) {
    if (i === cur) return; cur = i; var c = C.menu[i];
    btns.forEach(function (b, k) { b.setAttribute("aria-selected", k === i); b.tabIndex = k === i ? 0 : -1; });
    var h = "<h3>" + c.name + "</h3>" + (c.notes || []).map(function (n) { return '<p class="note">' + hl(n) + "</p>"; }).join("") + '<div class="groups">';
    c.groups.forEach(function (g) {
      h += "<div><h4>" + g.title + "</h4>" + g.items.map(function (d) {
        return '<div class="dish"><span><b>' + d[0] + "</b>" + (d[2] ? "<small>" + d[2] + "</small>" : "") + "</span>" + priceHTML(d[1]) + "</div>";
      }).join("") + "</div>";
    });
    panel.innerHTML = h + "</div>"; panel.setAttribute("aria-label", c.name);
    panel.classList.remove("in"); void panel.offsetWidth; panel.classList.add("in");
    var b = btns[i]; tabs.scrollTo({ left: b.offsetLeft - (tabs.clientWidth - b.offsetWidth) / 2, behavior: "smooth" });
    if (user && innerWidth < 900) { var r = panel.getBoundingClientRect(); if (r.top > innerHeight * 0.6 || r.top < 0) panel.scrollIntoView({ behavior: mq0.matches ? "auto" : "smooth", block: "start" }); }
  }
  var mq0 = window.matchMedia("(prefers-reduced-motion: reduce)");
  C.menu.forEach(function (c, i) {
    var b = el("button", "cat" + (c.featured ? " big" : ""), '<img src="' + c.img + '" alt="' + c.alt + '" loading="lazy"><span>' + c.name + "</span>");
    b.type = "button"; b.setAttribute("role", "tab"); b.setAttribute("aria-controls", "catPanel");
    b.onclick = function () { select(i, true); };
    b.onkeydown = function (e) { var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0; if (d) { e.preventDefault(); var n = (i + d + btns.length) % btns.length; select(n); btns[n].focus(); } };
    btns.push(b); tabs.appendChild(b);
  });
  select(0);
  var fig = $("#shopFig");
  fig.innerHTML = C.shopPhoto ? '<img class="shopph" src="' + C.shopPhoto + '" alt="' + C.shopPhotoAlt + '">' :
    '<div class="shopph" role="img" aria-label="Espace réservé pour une photo de l\'intérieur"><p>' + ph("[Photo de l'intérieur à ajouter : comptoir, broche, ambiance chaude]") + "</p></div>";
  var V = C.visit, phone = $("#phone");
  phone.innerHTML = V.phoneHref ? '<a href="' + V.phoneHref + '">' + V.phone + "</a>" : ph(V.phone);
  [["#dirBtn", V.directionsUrl], ["#callBtn", V.phoneHref]].forEach(function (x) {
    var a = $(x[0]);
    if (x[1]) { a.href = x[1]; if (/^http/.test(x[1])) { a.target = "_blank"; a.rel = "noopener"; } }
    else { a.setAttribute("aria-disabled", "true"); a.setAttribute("role", "link"); a.title = "Lien à ajouter dans config.js"; }
  });
  if (V.orderUrl) { var ob = el("a", "btn", "Commander"); ob.href = V.orderUrl; ob.target = "_blank"; ob.rel = "noopener"; $("#callBtn").parentNode.insertBefore(ob, $("#callBtn")); }
  $("#igBtn").href = V.instagram;
  var mb = $("#mapBox"), pi = $("#planImg"); pi.src = V.mapImage; pi.alt = V.mapAlt;
  function loadMap() {
    if (!V.mapEmbed || mb.classList.contains("live")) return;
    var f = document.createElement("iframe"); f.src = V.mapEmbed; f.title = "Carte Google Maps : " + V.street; f.loading = "lazy"; f.referrerPolicy = "no-referrer-when-downgrade";
    mb.appendChild(f); mb.classList.add("live");
  }
  if (!V.mapEmbed) $(".mapcta").hidden = true; else $("#mapLoad").onclick = loadMap;
  if (V.mapAutoLoad) loadMap();

  /* ---------- avis (défilement continu) ---------- */
  (function () {
    var R = C.reviews, car = $("#car"), vp = $("#rvp"), track = $("#rtrack"), mqR = window.matchMedia("(prefers-reduced-motion: reduce)");
    $("#avisSum").textContent = "Note Google Maps : " + R.rating + " sur 5 · " + R.count + " avis";
    var x = 0, setW = 0, step = 380, paused = false, hov = false, foc = false, drag = false, tw = null, last = 0, raf = 0, SPEED = 34, sx = 0, x0 = 0, tm;
    function card(r, hidden) {
      var a = el("article", "rcard"), s = el("div", "stars"), mid = el("div", "mid"), p = el("p", "who");
      s.setAttribute("role", "img"); s.setAttribute("aria-label", r.stars + " étoiles sur 5"); s.textContent = "★★★★★".slice(0, r.stars);
      if (r.text) { var q = el("blockquote"); q.textContent = "« " + r.text + " »"; mid.appendChild(q); }
      else if (!r.sub) { var n = el("p", "muted"); n.textContent = "Avis sans commentaire"; mid.appendChild(n); }
      if (r.sub) { var u = el("ul", "sub"); [["Cuisine", r.sub.cuisine], ["Service", r.sub.service], ["Ambiance", r.sub.ambiance]].forEach(function (x) { var li = el("li"); li.textContent = x[0] + " " + x[1] + "/5"; u.appendChild(li); }); mid.appendChild(u); }
      if (r.meta) { var m = el("p", "meta"); m.textContent = r.meta; mid.appendChild(m); }
      p.textContent = r.name; a.append(s, mid, p);
      if (hidden) a.setAttribute("aria-hidden", "true"); return a;
    }
    function build() {
      cancelAnimationFrame(raf); track.textContent = ""; track.style.transform = ""; vp.scrollLeft = 0;
      var it = R.items; if (!it.length) return;
      it.forEach(function (r) { track.appendChild(card(r)); });
      step = track.firstChild.offsetWidth + 20;
      if (mqR.matches) { car.classList.add("static"); return; }
      car.classList.remove("static");
      var n = Math.ceil((vp.clientWidth + 400) / track.scrollWidth), k;
      for (k = 1; k < n; k++) it.forEach(function (r) { track.appendChild(card(r, true)); });
      var len = track.children.length;
      for (k = 0; k < len; k++) track.appendChild(card(it[k % it.length], true));
      setW = track.children[len].offsetLeft - track.children[0].offsetLeft;
      last = performance.now(); raf = requestAnimationFrame(tick);
    }
    function tick(t) {
      var dt = Math.min(0.05, (t - last) / 1000), dx; last = t;
      if (tw) { var p = Math.min(1, (t - tw.t0) / 450); x = tw.a + (tw.b - tw.a) * (1 - Math.pow(1 - p, 3)); if (p === 1) tw = null; }
      else if (!paused && !hov && !foc && !drag) x -= SPEED * dt;
      if (!tw) { while (x <= -setW) x += setW; while (x > 0) x -= setW; }
      dx = x; while (dx <= -setW) dx += setW; while (dx > 0) dx -= setW;
      track.style.transform = "translate3d(" + dx + "px,0,0)"; raf = requestAnimationFrame(tick);
    }
    function nav(d) { if (car.classList.contains("static")) { vp.scrollBy({ left: d * step }); return; } tw = { a: x, b: x - d * step, t0: performance.now() }; }
    $("#rPrev").onclick = function () { nav(-1); }; $("#rNext").onclick = function () { nav(1); };
    var pb = $("#rPause"); pb.onclick = function () { paused = !paused; pb.setAttribute("aria-pressed", paused); pb.textContent = paused ? "Lecture" : "Pause"; };
    vp.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") hov = true; });
    vp.addEventListener("pointerleave", function () { hov = false; });
    car.addEventListener("focusin", function (e) { foc = e.target.matches(":focus-visible"); });
    car.addEventListener("focusout", function () { foc = false; });
    vp.addEventListener("pointerdown", function (e) { if (car.classList.contains("static")) return; drag = true; tw = null; sx = e.clientX; x0 = x; vp.setPointerCapture(e.pointerId); });
    vp.addEventListener("pointermove", function (e) { if (drag) x = x0 + e.clientX - sx; });
    ["pointerup", "pointercancel"].forEach(function (n) { vp.addEventListener(n, function () { drag = false; }); });
    addEventListener("resize", function () { clearTimeout(tm); tm = setTimeout(build, 200); });
    (mqR.addEventListener ? mqR.addEventListener("change", build) : mqR.addListener(build));
    build();
  })();

  /* ---------- héros piloté par le défilement ---------- */
  var root = document.documentElement, hero = $("#hero"), v = $("#hv"), hdr = $("#hdr"), scrim = $("#scrim");
  var scenes = [].slice.call(document.querySelectorAll(".scene"));
  var mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  var T = [[-1, 0, 2.3, 2.8], [3.1, 3.5, 6.2, 6.6], [6.9, 7.2, 7.5, 7.9], [9.4, 9.7, 99, 100]]; // secondes de la vidéo : fondu entrant/sortant
  var HOLD = 0.88, dur = 0, want = 0, seeking = false, ticking = false, failed = false;
  var ramp = function (t, a, b, c, d) { return Math.max(0, Math.min(1, (t - a) / (b - a), (d - t) / (d - c))); };
  var clamp = function (x) { return Math.max(0, Math.min(1, x)); };

  function isStatic() { return mq.matches || failed; }
  function applyMode() { root.classList.toggle("static", isStatic()); if (!isStatic()) update(); }
  var bg = $("#hbg").getContext("2d");
  function drawBg() { try { bg.drawImage(v, 0, 0, 96, 54); } catch (e) {} }
  function seek() {
    if (seeking || !dur) return;
    if (Math.abs(v.currentTime - want) < 1 / 48) return;
    seeking = true; v.currentTime = want;
  }
  function update() {
    ticking = false;
    var r = hero.offsetTop, dist = hero.offsetHeight - innerHeight, y = scrollY;
    hdr.classList.toggle("solid", isStatic() || y >= r + dist - 2);
    if (isStatic()) return;
    var p = clamp((y - r) / dist), t = clamp(p / HOLD) * (dur || 10);
    want = Math.min(t, (dur || 10) - 0.04); seek();
    scenes.forEach(function (s, i) {
      var o = ramp(t, T[i][0], T[i][1], T[i][2], T[i][3]);
      s.style.opacity = o; s.style.visibility = o < 0.02 ? "hidden" : "visible";
      if (o < 0.5) s.setAttribute("inert", ""); else s.removeAttribute("inert");
    });
    v.style.setProperty("--pan", (-0.05 * v.getBoundingClientRect().width * clamp((t - 8.6) / 0.6)) + "px"); // recentre sur les visages en portrait
    var white = clamp((t - 8.0) / 0.4) * clamp((9.5 - t) / 0.3);        // fondu blanc de la vidéo (~8,0 s à ~9,3 s)
    scrim.style.opacity = 1 - white;
    hdr.classList.toggle("light", t > 8.6 && t < 9.3 && y < r + dist - 2);
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  v.addEventListener("loadedmetadata", function () { dur = isFinite(v.duration) ? v.duration : 0; v.pause(); update(); });
  v.addEventListener("seeked", function () { seeking = false; drawBg(); seek(); });
  v.addEventListener("loadeddata", drawBg);
  v.addEventListener("error", function () { failed = true; applyMode(); });
  v.querySelector("source").addEventListener("error", function () { failed = true; applyMode(); });
  setTimeout(function () { if (!dur && v.readyState === 0) { failed = true; applyMode(); } }, 12000);
  addEventListener("scroll", req, { passive: true }); addEventListener("resize", req);
  (mq.addEventListener ? mq.addEventListener("change", applyMode) : mq.addListener(applyMode));
  if (v.readyState >= 1) v.dispatchEvent(new Event("loadedmetadata")); // métadonnées déjà chargées avant l'exécution du script
  if (v.readyState >= 2) drawBg();
  v.pause(); applyMode();
})();
