/*
 * js/app.js
 * UI logic for the Claude Code Skills and Plugins catalogs.
 * The page picks its data with <body data-catalog="skills|plugins">: window.SKILLS (data/skills.js)
 * or window.PLUGINS (data/plugins.js). Handles search, filters, sorting,
 * batched card rendering, the detail modal, copy-to-clipboard, favorites, and the theme toggle.
 * Vanilla ES2020, no framework, no build step.
 */
(() => {
  "use strict";

  const BATCH_SIZE = 24;
  const SEARCH_DELAY_MS = 120;
  const COPIED_MS = 2000;

  // Which catalog this page shows. Skills are ranked; plugins are not.
  const CATALOG = document.body.getAttribute("data-catalog") === "plugins"
    ? { data: window.PLUGINS, noun: "plugins", ranked: false }
    : { data: window.SKILLS, noun: "skills", ranked: true };
  const skills = Array.isArray(CATALOG.data) ? CATALOG.data : [];

  const els = {
    search: document.getElementById("searchInput"),
    categoryButton: document.getElementById("categoryButton"),
    categoryText: document.getElementById("categoryButtonText"),
    categoryMenu: document.getElementById("categoryMenu"),
    sort: document.getElementById("sortSelect"),
    verifiedOnly: document.getElementById("verifiedOnly"),
    grid: document.getElementById("skillGrid"),
    status: document.getElementById("resultStatus"),
    empty: document.getElementById("emptyState"),
    clear: document.getElementById("clearFilters"),
    loadMore: document.getElementById("loadMore"),
    counts: document.getElementById("verificationCounts"),
    modal: document.getElementById("skillModal"),
    modalTitle: document.getElementById("skillModalTitle"),
    modalBody: document.getElementById("skillModalBody"),
    themeToggle: document.getElementById("themeToggle"),
    themeText: document.getElementById("themeToggleText")
  };

  const state = { filtered: [], shown: 0, opener: null, category: "" };

  // Favorites are saved per catalog in localStorage, keyed by entry name.
  const FAVORITES_KEY = `favorites:${CATALOG.noun}`;
  const favorites = loadFavorites();

  // If the Bootstrap CDN failed to load, say so instead of failing silently.
  if (typeof window.bootstrap === "undefined") {
    els.status.textContent = "Bootstrap could not be loaded from the CDN. Check your internet connection and reload the page.";
    els.status.classList.add("text-danger");
    return;
  }

  const modal = new bootstrap.Modal(els.modal);
  const copyStatus = document.getElementById("copyStatus");

  // Bootstrap only restores focus for data-attribute triggers, so return focus to the card manually.
  els.modal.addEventListener("hidden.bs.modal", () => {
    if (state.opener && document.contains(state.opener)) state.opener.focus();
    state.opener = null;
  });

  // Wrap Tab and Shift+Tab inside the modal so focus never leaves it, even for one keystroke.
  els.modal.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    const focusable = [...els.modal.querySelectorAll("button, a[href], [tabindex]:not([tabindex='-1'])")]
      .filter((n) => n.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    } else if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  });

  /* Small DOM helper: create an element with classes, text, and attributes. */
  function el(tag, { cls, text, attrs } = {}) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    if (attrs) Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
    return node;
  }

  /* Read the saved favorites; storage can be missing or blocked, so fall back to none. */
  function loadFavorites() {
    try {
      const saved = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
      return new Set(Array.isArray(saved) ? saved : []);
    } catch (e) {
      return new Set();
    }
  }

  /* Write favorites back; if storage is unavailable they still last for this page view. */
  function saveFavorites() {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
    } catch (e) {
      /* storage unavailable */
    }
  }

  /* Add or remove a favorite, update the card's star, and announce the change. */
  function toggleFavorite(skill, card) {
    const added = !favorites.has(skill.name);
    if (added) favorites.add(skill.name);
    else favorites.delete(skill.name);
    saveFavorites();
    markFavorite(card, added);
    favoriteStatus.textContent = added ? `Added ${skill.name} to favorites.` : `Removed ${skill.name} from favorites.`;
  }

  /* Show or hide the star on a card. */
  function markFavorite(card, isFavorite) {
    card.classList.toggle("is-favorite", isFavorite);
    card.querySelector(".fav-star").classList.toggle("d-none", !isFavorite);
  }

  /* Live region for favorite announcements; the modal's copy region is hidden while the modal is closed. */
  const favoriteStatus = el("p", { cls: "visually-hidden", attrs: { role: "status", "aria-live": "polite" } });
  document.body.append(favoriteStatus);

  /* Right-click menu for cards, built from Bootstrap's dropdown styles. */
  const cardMenu = el("ul", { cls: "dropdown-menu card-menu shadow", attrs: { role: "menu" } });
  const cardMenuItem = el("button", { cls: "dropdown-item", attrs: { type: "button", role: "menuitem" } });
  const cardMenuLi = el("li", { attrs: { role: "none" } });
  cardMenuLi.append(cardMenuItem);
  cardMenu.append(cardMenuLi);
  document.body.append(cardMenu);
  const menuState = { skill: null, card: null };

  /* Open the card menu at the pointer, or beside the card when opened from the keyboard. */
  function openCardMenu(e, skill, card) {
    e.preventDefault();
    menuState.skill = skill;
    menuState.card = card;
    cardMenuItem.textContent = favorites.has(skill.name) ? "Remove from favorites" : "Add to favorites";
    cardMenu.classList.add("show");
    let x = e.clientX;
    let y = e.clientY;
    if (!x && !y) {
      const r = card.getBoundingClientRect();
      x = r.left + 16;
      y = r.top + 16;
    }
    const w = cardMenu.offsetWidth;
    const h = cardMenu.offsetHeight;
    cardMenu.style.left = `${Math.max(8, Math.min(x, window.innerWidth - w - 8))}px`;
    cardMenu.style.top = `${Math.max(8, Math.min(y, window.innerHeight - h - 8))}px`;
    cardMenuItem.focus();
  }

  /* Close the card menu; refocus the card when the menu had focus. */
  function closeCardMenu(refocus) {
    if (!cardMenu.classList.contains("show")) return;
    cardMenu.classList.remove("show");
    if (refocus && menuState.card && document.contains(menuState.card)) menuState.card.focus();
    menuState.skill = null;
    menuState.card = null;
  }

  cardMenuItem.addEventListener("click", () => {
    const { skill, card } = menuState;
    if (skill) toggleFavorite(skill, card);
    closeCardMenu(true);
  });
  cardMenu.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Tab") {
      e.preventDefault();
      closeCardMenu(true);
    }
  });
  document.addEventListener("pointerdown", (e) => {
    if (!cardMenu.contains(e.target)) closeCardMenu(false);
  });
  window.addEventListener("scroll", () => closeCardMenu(false), { passive: true });
  window.addEventListener("resize", () => closeCardMenu(false));

  /* Fill the category dropdown from the distinct categories present in the data.
     Each option shows the name on the left and its color dot aligned on the right. */
  function populateCategories() {
    const categories = ["", ...[...new Set(skills.map((s) => s.category))].sort()];
    categories.forEach((c) => {
      const li = el("li");
      const item = el("button", {
        cls: "dropdown-item",
        attrs: { type: "button", "data-value": c, "data-category": c, "aria-current": String(c === state.category) }
      });
      const row = el("span", { cls: "category-option" });
      row.append(el("span", { text: c || "All categories" }), el("span", { cls: "cat-dot", attrs: { "aria-hidden": "true" } }));
      item.append(row);
      item.addEventListener("click", () => {
        setCategory(c);
        refresh();
        els.categoryButton.focus();
      });
      li.append(item);
      els.categoryMenu.append(li);
    });
  }

  /* Show the chosen category on the dropdown button and mark it as current in the menu. */
  function setCategory(value) {
    state.category = value;
    els.categoryText.textContent = value || "All categories";
    els.categoryButton.setAttribute("data-category", value);
    els.categoryMenu.querySelectorAll(".dropdown-item").forEach((item) => {
      const current = item.getAttribute("data-value") === value;
      item.setAttribute("aria-current", String(current));
      item.classList.toggle("active", current);
    });
  }

  /* Show verified vs. unverified totals in the ranking note. */
  function renderCounts() {
    if (!els.counts) return;
    const verified = skills.filter((s) => s.verified).length;
    els.counts.textContent =
      ` Of ${skills.length} entries, ${verified} are verified against a public source and ${skills.length - verified} are unverified.`;
  }

  /* Return skills matching the current search text, category, and verified filter, sorted. */
  function applyFilters() {
    const q = els.search.value.trim().toLowerCase();
    const cat = state.category;
    const verifiedOnly = els.verifiedOnly ? els.verifiedOnly.checked : false;

    const result = skills.filter((s) => {
      if (cat && s.category !== cat) return false;
      if (verifiedOnly && !s.verified) return false;
      if (!q) return true;
      const haystack = [s.name, s.summary, s.description, s.author, ...(s.tags || [])].join(" ").toLowerCase();
      return q.split(/\s+/).every((term) => haystack.includes(term));
    });

    if (els.sort.value === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (els.sort.value === "category") {
      result.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
    } else if (els.sort.value === "favorites") {
      // Favorites first, then the page's usual order: rank for skills, name for plugins.
      result.sort((a, b) =>
        (favorites.has(b.name) - favorites.has(a.name)) ||
        (CATALOG.ranked ? a.rank - b.rank : a.name.localeCompare(b.name)));
    } else {
      result.sort((a, b) => a.rank - b.rank);
    }
    return result;
  }

  /* Build one card. The whole card is focusable and opens the modal on click, Enter, or Space. */
  function buildCard(skill) {
    const col = el("div", { cls: "col", attrs: { role: "listitem" } });
    const key = CATALOG.ranked ? skill.rank : skill.name;
    const nameId = `skill-name-${key}`;
    const summaryId = `skill-summary-${key}`;
    const catId = `skill-cat-${key}`;

    const card = el("article", {
      cls: "card h-100 skill-card",
      attrs: {
        "data-category": skill.category,
        tabindex: "0",
        role: "button",
        "aria-haspopup": "dialog",
        "aria-labelledby": nameId,
        "aria-describedby": `${catId} ${summaryId}`
      }
    });
    const isFavorite = favorites.has(skill.name);

    const body = el("div", { cls: "card-body d-flex flex-column" });
    // Top row: rank and name on the left, category color dot pinned to the top right.
    const top = el("div", { cls: "d-flex align-items-start gap-2 mb-2" });
    const title = el("h2", { cls: "h6 card-title mb-0 d-flex align-items-baseline gap-2 flex-grow-1 min-w-0" });
    if (CATALOG.ranked) {
      const rank = el("span", { cls: "skill-rank fw-semibold" });
      rank.append(el("span", { cls: "visually-hidden", text: "Rank " }), document.createTextNode(`#${skill.rank}`));
      title.append(rank);
    }
    title.append(el("span", { cls: "text-break", text: skill.name, attrs: { id: nameId } }));
    const star = el("span", { cls: "fav-star" });
    star.append(el("span", { text: "★", attrs: { "aria-hidden": "true" } }), el("span", { cls: "visually-hidden", text: "Favorite" }));
    title.append(star);
    const dot = el("span", { cls: "card-dot" });
    dot.append(
      el("span", { cls: "cat-dot", attrs: { "aria-hidden": "true", title: skill.category } }),
      el("span", { cls: "visually-hidden", text: `Category: ${skill.category}`, attrs: { id: catId } })
    );
    top.append(title, dot);
    body.append(top);

    if (!skill.verified) {
      body.append(el("span", { cls: "badge text-bg-warning align-self-start mb-2", text: "Unverified" }));
    }
    body.append(el("p", { cls: "card-text text-body-secondary mb-0", text: skill.summary, attrs: { id: summaryId } }));
    card.append(body);

    markFavorite(card, isFavorite);

    card.addEventListener("click", () => openModal(skill, card));
    card.addEventListener("contextmenu", (e) => openCardMenu(e, skill, card));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(skill, card);
      }
    });

    col.append(card);
    return col;
  }

  /* Append the next batch of cards to the grid and update the Load more button. */
  function renderNextBatch() {
    const next = state.filtered.slice(state.shown, state.shown + BATCH_SIZE);
    const frag = document.createDocumentFragment();
    next.forEach((s) => frag.append(buildCard(s)));
    els.grid.append(frag);
    state.shown += next.length;

    const remaining = state.filtered.length - state.shown;
    els.loadMore.classList.toggle("d-none", remaining <= 0);
    els.loadMore.textContent = `Load more (${remaining} remaining)`;
    els.status.textContent = state.filtered.length
      ? `Showing ${state.shown} of ${state.filtered.length} ${CATALOG.noun}`
      : `No ${CATALOG.noun} match the current search and filters.`;
  }

  /* Load more button handler: render the next batch and move focus to its first card. */
  function loadMore() {
    const start = state.shown;
    renderNextBatch();
    const firstNew = els.grid.children[start];
    if (firstNew) firstNew.querySelector(".skill-card").focus();
  }

  /* Re-run filtering and render from the first batch. */
  function refresh() {
    state.filtered = applyFilters();
    state.shown = 0;
    els.grid.replaceChildren();
    els.empty.classList.toggle("d-none", state.filtered.length > 0);
    renderNextBatch();
  }

  /* Copy text to the clipboard, with a fallback for contexts without the async Clipboard API. */
  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (e) {
        /* fall through to the legacy method */
      }
    }
    const ta = el("textarea", { attrs: { readonly: "", "aria-hidden": "true" } });
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    els.modal.append(ta); // inside the modal so Bootstrap's focus trap allows selection
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (e) {
      ok = false;
    }
    ta.remove();
    return ok;
  }

  /* Build a <pre><code> block with a Copy button that shows "Copied" for two seconds. */
  function codeBlock(text, label) {
    const wrap = el("div", { cls: "code-block" });
    const pre = el("pre");
    pre.append(el("code", { text }));
    const btn = el("button", {
      cls: "btn btn-sm btn-outline-secondary copy-btn",
      text: "Copy",
      attrs: { type: "button", "aria-label": `Copy ${label}` }
    });
    btn.addEventListener("click", async () => {
      const ok = await copyText(text);
      btn.textContent = ok ? "Copied" : "Copy failed";
      copyStatus.textContent = ok ? `Copied ${label} to the clipboard.` : `Could not copy ${label}.`;
      setTimeout(() => {
        btn.textContent = "Copy";
        copyStatus.textContent = "";
      }, COPIED_MS);
    });
    wrap.append(pre, btn);
    return wrap;
  }

  /* Build a titled section for the modal body. */
  function section(title) {
    const s = el("section", { cls: "mb-4" });
    s.append(el("h3", { cls: "h6 fw-semibold mb-2", text: title }));
    return s;
  }

  /* Render a simple bullet list, or a "None" note when empty. */
  function bulletList(items) {
    if (!items || !items.length) return el("p", { cls: "mb-0", text: "None." });
    const ul = el("ul", { cls: "mb-0" });
    items.forEach((i) => ul.append(el("li", { text: i })));
    return ul;
  }

  /* A paragraph holding one link that opens in a new tab. */
  function externalLink(url) {
    const p = el("p", { cls: "mb-1 text-break" });
    const a = el("a", { text: url, attrs: { href: url, target: "_blank", rel: "noopener noreferrer" } });
    a.append(el("span", { cls: "visually-hidden", text: " (opens in a new tab)" }));
    p.append(a);
    return p;
  }

  /* Fill and open the detail modal for a skill; opener is the card to refocus on close. */
  function openModal(skill, opener) {
    state.opener = opener || null;
    els.modalTitle.textContent = CATALOG.ranked ? `#${skill.rank} ${skill.name}` : skill.name;
    els.modalTitle.closest(".modal-header").setAttribute("data-category", skill.category);
    const body = els.modalBody;
    body.replaceChildren();

    const meta = el("div", { cls: "d-flex flex-wrap align-items-center gap-3 mb-3", attrs: { "data-category": skill.category } });
    meta.append(el("span", { cls: "cat-label", text: skill.category }));
    meta.append(el("span", {
      cls: skill.verified ? "badge badge-verified" : "badge text-bg-warning",
      text: skill.verified ? "Verified" : "Unverified"
    }));
    body.append(meta);
    body.append(el("p", { text: skill.description || skill.summary }));
    body.append(el("p", { cls: "text-body-secondary", text: skill.verificationNote }));

    // Install steps
    const inst = section("Install");
    const ol = el("ol", { cls: "install-steps ps-3 mb-0" });
    (skill.install || []).forEach((step, i) => {
      const li = el("li");
      li.append(el("p", { cls: "mb-2", text: step.step }));
      if (step.command) li.append(codeBlock(step.command, `step ${i + 1} command`));
      ol.append(li);
    });
    inst.append(ol);
    body.append(inst);

    // Skill-only sections; plugin entries do not carry these fields.
    if (Array.isArray(skill.prerequisites)) {
      const pre = section("Prerequisites");
      pre.append(bulletList(skill.prerequisites));
      body.append(pre);
    }

    if (Array.isArray(skill.dependencies)) {
      const deps = section("Dependencies");
      deps.append(bulletList(skill.dependencies));
      body.append(deps);
    }

    // Usage examples
    if (Array.isArray(skill.usage)) {
      const usage = section("Usage");
      skill.usage.forEach((u, i) => {
        usage.append(codeBlock(u.prompt, `example prompt ${i + 1}`));
        usage.append(el("p", { cls: "mt-2", text: `Expected result: ${u.result}` }));
      });
      body.append(usage);
    }

    // Source and author
    const src = section("Source");
    if (skill.source) {
      src.append(externalLink(skill.source));
    } else {
      src.append(el("p", { cls: "mb-1", text: "No confirmed source." }));
    }
    if (skill.homepage && skill.homepage !== skill.source) {
      const home = externalLink(skill.homepage);
      home.prepend(document.createTextNode("Homepage: "));
      src.append(home);
    }
    src.append(el("p", { cls: "mb-0", text: `Author: ${skill.author || (CATALOG.ranked ? "Unknown" : "Not listed in the marketplace")}` }));
    body.append(src);

    // Tags
    if (Array.isArray(skill.tags)) {
      const tags = section("Tags");
      const tagWrap = el("div", { cls: "d-flex flex-wrap gap-2" });
      skill.tags.forEach((t) => tagWrap.append(el("span", { cls: "badge border text-body-emphasis bg-body-tertiary fw-normal", text: t })));
      tags.append(tagWrap);
      body.append(tags);
    }

    modal.show();
  }

  /* Debounce helper for the live search input. */
  function debounce(fn, ms) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), ms);
    };
  }

  /* Theme: apply a theme, sync the toggle label, and optionally persist the choice. */
  function setTheme(theme, persist) {
    document.documentElement.setAttribute("data-bs-theme", theme);
    const isDark = theme === "dark";
    els.themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    els.themeText.textContent = isDark ? "Light" : "Dark";
    if (persist) {
      try {
        localStorage.setItem("theme", theme);
      } catch (e) {
        /* storage unavailable; theme still applies for this page view */
      }
    }
  }

  /* Wire up the theme toggle and follow system changes until the user picks a theme. */
  function initTheme() {
    setTheme(document.documentElement.getAttribute("data-bs-theme") || "light", false);
    els.themeToggle.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
      setTheme(next, true);
    });
    const mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
    if (mq && mq.addEventListener) {
      mq.addEventListener("change", (e) => {
        let stored = null;
        try {
          stored = localStorage.getItem("theme");
        } catch (err) {
          stored = null;
        }
        if (!stored) setTheme(e.matches ? "dark" : "light", false);
      });
    }
  }

  /* Reset search and all filters. */
  function clearAll() {
    els.search.value = "";
    setCategory("");
    if (els.verifiedOnly) els.verifiedOnly.checked = false;
    els.sort.selectedIndex = 0;
    refresh();
    els.search.focus();
  }

  /* Entry point. */
  function init() {
    initTheme();
    populateCategories();
    setCategory("");
    renderCounts();
    els.search.addEventListener("input", debounce(refresh, SEARCH_DELAY_MS));
    els.sort.addEventListener("change", refresh);
    if (els.verifiedOnly) els.verifiedOnly.addEventListener("change", refresh);
    els.clear.addEventListener("click", clearAll);
    els.loadMore.addEventListener("click", loadMore);
    refresh();
  }

  init();
})();
