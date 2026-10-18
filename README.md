<!--
  README.md
  Setup, ranking criteria, data format, assumptions, and verification summary
  for the Top Claude Code Skills & Plugins static web app.
-->

# Top Claude Code Skills & Plugins

A static, responsive catalog of Claude Code skills (`SKILL.md` packages). You can search it, filter it, and open any skill to see copy-ready install steps. It is built with Bootstrap 5.3.8 and vanilla JavaScript. There is no build step and no backend.


<img width="1725" height="759" alt="Screenshot 2026-10-15 at 1 18 41 PM" src="https://github.com/user-attachments/assets/c3afa52d-5322-40d3-b269-1ffe676abb4f" />

<br/>
<br/>


<img width="1401" height="1004" alt="Screenshot 2026-10-15 at 1 20 10 PM" src="https://github.com/user-attachments/assets/84053a41-d161-4481-8586-5a19b23ffe92" />


## Run it

### Option 1: Double-click

1. Open the project folder in Finder or Explorer.
2. Double-click `index.html`.

The page opens from `file://`. The data loads from `data/skills.js` through a normal `<script>` tag, so no server is needed. Bootstrap loads from the jsDelivr CDN, so you need an internet connection.

### Option 2: Static server

1. Open a terminal in the project folder.
2. Run:

   ```bash
   python3 -m http.server 8000
   ```

3. Open <http://localhost:8000/> in a browser.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page markup, Bootstrap CDN links (pinned and SRI-checked), modal shell |
| `css/styles.css` | Small overrides: accent color, focus states, code blocks |
| `js/app.js` | Search, filters, sort, batched rendering, modal, copy, theme toggle |
| `data/skills.js` | `window.SKILLS = [...]`, every entry as strict JSON |
| `REVIEW.md` | Independent review findings, followed by a Resolution section listing what was fixed |

## Ranking criteria

The order of skills is an editorial judgment based on these criteria, in priority order:

1. **Official / first-party status.** Skills that Anthropic publishes (`anthropics/skills`, `anthropics/claude-plugins-official`, `anthropics/claude-code`) rank first.
2. **Community adoption.** GitHub stars of the source repository, and whether the plugin is listed in Anthropic's official plugin marketplace. For example, obra/superpowers (~299k stars) ranks above smaller vendor collections.
3. **Breadth of usefulness.** General workflows (debugging, TDD, code review, documents) rank above stack-specific skills (Expo, Terraform, Cloudflare).
4. **Maintenance activity.** Every source repository received a push within the 14 days before it was checked on 2026-10-15.

## Verification summary

Every shipped entry is verified. The page always shows live verified and unverified counts computed from `window.SKILLS`.

Each entry's `SKILL.md` was fetched from GitHub through the authenticated GitHub API, the first batch on 2026-10-15 and the second on 2026-10-18. Each second-batch entry's front-matter `name` was also checked against the entry name. Every `source` URL returned HTTP 200. Every `/plugin install <plugin>@<marketplace>` command was checked against that repository's `.claude-plugin/marketplace.json`. No URLs, authors, or star counts were invented. 
## Data format

`data/skills.js` assigns a JSON array to `window.SKILLS`. Keep it strict JSON: double quotes, no trailing commas, no comments inside the array, and no functions. Each entry has these fields:

| Field | Type | Notes |
| --- | --- | --- |
| `rank` | integer | Unique; a new entry takes the next unused number |
| `name` | string | Skill name from the `SKILL.md` front matter |
| `summary` | string | One sentence, 160 characters or fewer |
| `category` | string | Exactly one of: Code Generation, Testing, Debugging, Refactoring, Documentation, DevOps, Git/Version Control, Data, Security, Productivity, Frontend, Backend |
| `install` | array of `{ "step": string, "command": string \| null }` | Numbered steps; `command` is shown in a copyable code block |
| `prerequisites` | string[] | |
| `dependencies` | string[] | May be empty |
| `usage` | array of `{ "prompt": string, "result": string }` | At least one |
| `source` | string \| null | Must be `null` when `verified` is `false` |
| `author` | string \| null | |
| `tags` | string[] | Used by search |
| `verified` | boolean | `true` only when the source is confirmed |
| `verificationNote` | string | How the entry was verified, or why it couldn't be |

## Add a new skill

You only edit `data/skills.js`. The UI picks up the change automatically.

1. Open `data/skills.js`.
2. Add a comma after the last entry's closing `}`.
3. Paste a new entry. Below is a complete, valid example. It is a personal skill you wrote yourself, so it has no public source and is marked unverified. Change `rank` to the next unused number:

   ```json
   {
     "rank": 9999,
     "name": "release-notes",
     "summary": "Drafts release notes from merged pull requests since the last git tag, grouped by feature, fix, and chore.",
     "category": "Git/Version Control",
     "install": [
       {
         "step": "Create the skill directory in your personal skills folder.",
         "command": "mkdir -p ~/.claude/skills/release-notes"
       },
       {
         "step": "Create SKILL.md with the required YAML front matter (name and description), followed by your instructions.",
         "command": "printf '%s\\n' '---' 'name: release-notes' 'description: Draft release notes from merged PRs since the last tag. Use when asked for release notes or a changelog.' '---' '' 'Collect merged PRs with gh since the latest tag and group them by type.' > ~/.claude/skills/release-notes/SKILL.md"
       },
       {
         "step": "Restart Claude Code so the new skill is discovered.",
         "command": null
       }
     ],
     "prerequisites": ["Claude Code installed and signed in", "git"],
     "dependencies": ["GitHub CLI (gh) authenticated"],
     "usage": [
       {
         "prompt": "Draft release notes for everything merged since v2.3.0.",
         "result": "Claude lists merged PRs since the tag and writes grouped release notes in Markdown."
       }
     ],
     "source": null,
     "author": null,
     "tags": ["release", "changelog", "git"],
     "verified": false,
     "verificationNote": "Personal example skill; no public source to verify."
   }
   ```

4. Save the file, then reload the page.
5. Optional: check the array is still valid JSON. Run this from the project folder (requires Node.js):

   ```bash
   node -e 'const s=require("fs").readFileSync("data/skills.js","utf8");const a=JSON.parse(s.slice(s.indexOf("window.SKILLS = ")+16).trim().replace(/;$/,""));console.log(a.length+" entries, valid JSON")'
   ```

To replace a skill instead of adding one, overwrite an existing entry and reuse its rank.

## Features

- Two catalogs with a Skills / Plugins tab bar at the top: `index.html` (top skills) and `plugins.html` (every plugin in the official `anthropics/claude-plugins-official` marketplace, with their `/plugin install` commands).

- Live search across name, summary, and tags. All words must match.
- Category filter, a "Verified only" switch, and sorting by rank, name (A–Z), or favorites. The "Anthropic Official" sort option shows only Anthropic's own skills or plugins (sourced from an `anthropics/` repository, not counting the third-party plugins under `external_plugins/`).
- Cards render in batches of 24. A "Load more" button shows how many remain and moves focus to the first new card.
- Detail modal shows install steps, prerequisites, dependencies, usage, source, author, and tags. Each command and prompt has a Copy button that changes to "Copied" for 2 seconds.
- A message appears when nothing matches, with a button to clear search and filters.
- Light/dark toggle using `data-bs-theme`. It defaults to `prefers-color-scheme`, and your choice is remembered in `localStorage` when storage is available.
- Installable PWA: when served over http(s), `sw.js` caches the page, data, icons, and the pinned Bootstrap files, so the catalog can be installed and works offline. Bump `CACHE_VERSION` in `sw.js` after changing any of those files. From `file://` the service worker is skipped and the page works as before.
- Accessibility: cards can be focused and opened with Enter or Space, focus returns to the card when the modal closes, Tab and Shift+Tab wrap inside the open modal, Copy results are announced to screen readers, there is a skip link, results are announced in a live region, and colors are tuned for WCAG AA in both themes.

## Assumptions

1. **"Top" is editorial.** No public ranking of skills exists, so the ranking criteria above define the order.
2. **Only real `SKILL.md` files count.** Every entry maps to one `SKILL.md` in a public repository. Slash-command-only plugins, MCP servers, and generic tips are excluded.
3. **Sources are limited to well-known publishers.** Anthropic, obra/superpowers, Vercel, Trail of Bits, Sentry, Cloudflare, Supabase, Expo, HashiCorp, and Hugging Face. Using only these let every entry be verified, which is why there are 0 unverified entries. The UI still fully supports unverified entries (badge and filter).
4. **Plugin installs are preferred.** When the source repository has a Claude Code plugin marketplace, install steps use `/plugin marketplace add` and `/plugin install`. Otherwise they clone the repository (POSIX shell, safe to re-run) and copy the skill folder's contents into `~/.claude/skills/<name>/`, using the front-matter `name` as the folder name.
5. **`author` is the publishing organization** (for example, "Anthropic" or "Trail of Bits"). It is not an individual's name, to avoid misattribution.
6. **Source links point to the `main` branch.** They can move if upstream repositories reorganize.
7. **Summaries, usage prompts, and expected results** were written for this catalog from each skill's front-matter description. They are not quoted from upstream.
8. **Dependencies** list what the skill's `SKILL.md` calls for (for example, `pypdf` or `pptxgenjs`). They may not be exhaustive.
9. **Internet access is needed** for the Bootstrap CDN on first load (after that, the service worker serves it offline when the page is served over http(s)). No other external requests are made. If the CDN cannot be reached, the page shows a message saying so.
10. **Plugin-installed skills are namespaced** as `plugin:skill` (for example, `superpowers:systematic-debugging`).
11. **Install steps assume Claude Code's `/plugin` commands.** The same actions are available as `claude plugin ...` from a shell.
