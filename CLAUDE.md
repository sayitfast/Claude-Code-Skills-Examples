# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static catalog of 100 Claude Code skills: plain HTML, Bootstrap 5.3.8 (from the jsDelivr CDN, pinned with SRI hashes), and vanilla ES2020. There is no build step, no package.json, no backend and no test suite in the repo.

## Commands

- Run from disk: open `index.html` directly. It must keep working under `file://`.
- Run with a static server: `python3 -m http.server 8000`, then open http://localhost:8000/
- Check the data is valid JSON (run from the project folder; needs Node):
  ```bash
  node -e 'const s=require("fs").readFileSync("data/skills.js","utf8");const a=JSON.parse(s.slice(s.indexOf("window.SKILLS = ")+16).trim().replace(/;$/,""));console.log(a.length+" entries, valid JSON")'
  ```
- Render check without a browser UI:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --virtual-time-budget=4000 --dump-dom "file://$PWD/index.html"`
  The Claude in Chrome extension cannot open `file://` URLs, so test from-disk behavior with headless Chrome (CLI or DevTools protocol).

## Architecture

- **The data is a script, not JSON.** `data/skills.js` assigns a strict-JSON array to `window.SKILLS`: double quotes, no trailing commas, no comments or functions inside the array. It is a `.js` file because `fetch()` of local files is blocked under `file://`. Load order in `index.html` is: Bootstrap bundle, then `data/skills.js`, then `js/app.js`.
- **The UI reads only `window.SKILLS`.** Adding or editing a skill must never require UI changes. `js/app.js` is a single IIFE that handles filtering and sorting, renders cards in batches of 24 ("Load more"), and fills one shared Bootstrap modal using `textContent`, never `innerHTML`.
- **Entry schema** (the full table is in README.md): `rank` (unique, 1–100), `name`, `summary` (160 characters or fewer), `category` (one of 12 fixed values), `install` as an array of `{step, command|null}`, `prerequisites[]`, `dependencies[]`, `usage` as an array of `{prompt, result}`, `source` (URL or null), `author`, `tags[]`, `verified`, `verificationNote`.
- **Verification rule:** `verified: true` only when the source has actually been confirmed (for example via `gh api`). An unverified entry has `source: null`. Never invent URLs, authors or star counts. All 100 shipped entries were confirmed on 2026-10-15, and every `/plugin install X@Y` was checked against that repo's `.claude-plugin/marketplace.json`.

### How category colors work

- JS puts a `data-category="<Category>"` attribute on cards, the modal header and the category dropdown items.
- `css/styles.css` maps each category name to a `--cat` variable. Each theme defines its own `--cat-*` palette: light-mode values are darkened to at least 4.5:1 on white, and dark-mode values are bright on the `#1e1e1e` panels.
- To add a new category, change both theme blocks and the mapping list in `styles.css`. An unknown category falls back to `--cat-default` (grey).
- The category filter is a custom Bootstrap dropdown (`#categoryButton`/`#categoryMenu`), not a `<select>`, so it can show the color dots. The selected value lives in `state.category` and is changed through `setCategory()`.

### Theming

- The light/dark choice uses `data-bs-theme` on `<html>`. An inline script in `<head>` sets it before first paint, from `localStorage` or else `prefers-color-scheme`.
- The accent is lime (`--lime` for solid fills with dark text, `--accent` for lime-family text).
- Bootstrap compiles some colors into its CSS: focus glows, the switch thumb images, dropdown active backgrounds. Overriding `--bs-primary` doesn't reach these, so they are restated explicitly. Watch selector specificity: the dark-mode switch rule has to match Bootstrap's `:not(:checked):not(:focus)` selector.

### Accessibility behaviors (keep them when editing)

- Cards are `article[tabindex=0][role=button]` and open with Enter or Space.
- When the modal closes, focus returns to the card that opened it. `hidden.bs.modal` handles this, because Bootstrap only restores focus for data-attribute triggers.
- Tab and Shift+Tab are wrapped inside the modal by a keydown handler.
- Copy results are announced through the `#copyStatus` live region.
- If the Bootstrap CDN fails to load, `app.js` shows a visible message and stops.

## Project docs

- `README.md`: run instructions, ranking criteria, a complete add-a-skill example, and the list of assumptions.
- `REVIEW.md`: an independent reviewer's findings. Append to its Resolution section; never rewrite the reviewer's original findings.
