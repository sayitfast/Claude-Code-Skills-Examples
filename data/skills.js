/*
 * data/skills.js
 * Curated list of 100 Claude Code skills. The value assigned to window.SKILLS is a plain JSON array
 * (double quotes, no trailing commas, no functions) so it can be copied into a .json file as-is.
 * A .js file is used instead of .json because fetch() of local files is blocked under file://.
 * Edit entries here only; the UI reads window.SKILLS and needs no changes.
 */
window.SKILLS = [
  {
    "rank": 1,
    "name": "skill-creator",
    "summary": "Creates, edits, and evaluates Claude skills, including running evals and tuning a skill's description for more reliable triggering.",
    "category": "Productivity",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install example-skills@anthropic-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for example-skills:skill-creator. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "Python 3 (for the bundled eval scripts)"
    ],
    "usage": [
      {
        "prompt": "Use the skill-creator skill to turn my release-checklist notes in docs/release.md into a reusable skill.",
        "result": "Claude interviews you, drafts a SKILL.md with front matter, and can run test prompts to check it triggers."
      }
    ],
    "source": "https://github.com/anthropics/skills/tree/main/skills/skill-creator",
    "author": "Anthropic",
    "tags": [
      "skills",
      "authoring",
      "evals",
      "meta"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/skills/skills/skill-creator via the GitHub API on 2026-10-15; installable via the anthropic-agent-skills marketplace (plugin example-skills)."
  },
  {
    "rank": 2,
    "name": "frontend-design",
    "summary": "Guides distinctive, intentional visual design for new or reshaped UIs, covering aesthetic direction, typography, and avoiding templated defaults.",
    "category": "Frontend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install example-skills@anthropic-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for example-skills:frontend-design. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Build a landing page for a coffee subscription service with a bold, non-generic visual style.",
        "result": "Claude picks a clear aesthetic direction and produces HTML/CSS with deliberate typography, color, and layout choices."
      }
    ],
    "source": "https://github.com/anthropics/skills/tree/main/skills/frontend-design",
    "author": "Anthropic",
    "tags": [
      "ui",
      "design",
      "css",
      "typography"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/skills/skills/frontend-design via the GitHub API on 2026-10-15; installable via the anthropic-agent-skills marketplace (plugin example-skills)."
  },
  {
    "rank": 3,
    "name": "pdf",
    "summary": "Reads, extracts, merges, splits, fills, watermarks, encrypts, and OCRs PDF files with Python tooling.",
    "category": "Data",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install document-skills@anthropic-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for document-skills:pdf. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "Python 3"
    ],
    "dependencies": [
      "pypdf",
      "pdfplumber",
      "pytesseract and pdf2image (for OCR)"
    ],
    "usage": [
      {
        "prompt": "Use the PDF skill to extract the form fields from contracts/nda.pdf and fill them from client.json.",
        "result": "Claude lists the fillable fields, writes a fill script, and saves a completed PDF."
      }
    ],
    "source": "https://github.com/anthropics/skills/tree/main/skills/pdf",
    "author": "Anthropic",
    "tags": [
      "pdf",
      "documents",
      "ocr",
      "forms"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/skills/skills/pdf via the GitHub API on 2026-10-15; installable via the anthropic-agent-skills marketplace (plugin document-skills)."
  },
  {
    "rank": 4,
    "name": "docx",
    "summary": "Creates, reads, edits, and manipulates Word .docx and .dotx documents, including tracked changes and templates.",
    "category": "Documentation",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install document-skills@anthropic-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for document-skills:docx. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "Node.js 18+"
    ],
    "dependencies": [
      "docx (npm)",
      "pandoc (for reading existing documents)"
    ],
    "usage": [
      {
        "prompt": "Create a two-page project proposal as proposal.docx with a title page, headings, and a budget table.",
        "result": "Claude generates a formatted .docx file using the docx library and reports where it was saved."
      }
    ],
    "source": "https://github.com/anthropics/skills/tree/main/skills/docx",
    "author": "Anthropic",
    "tags": [
      "word",
      "docx",
      "documents",
      "office"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/skills/skills/docx via the GitHub API on 2026-10-15; installable via the anthropic-agent-skills marketplace (plugin document-skills)."
  },
  {
    "rank": 5,
    "name": "xlsx",
    "summary": "Opens, edits, analyzes, and creates spreadsheets (.xlsx, .xlsm, .csv, .tsv), including formulas, formatting, and charts.",
    "category": "Data",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install document-skills@anthropic-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for document-skills:xlsx. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "Python 3"
    ],
    "dependencies": [
      "openpyxl",
      "pandas",
      "LibreOffice (optional, for formula recalculation)"
    ],
    "usage": [
      {
        "prompt": "Open sales.xlsx, add a month-over-month growth column with formulas, and highlight negative values.",
        "result": "Claude edits the workbook with live formulas and conditional formatting and saves it."
      }
    ],
    "source": "https://github.com/anthropics/skills/tree/main/skills/xlsx",
    "author": "Anthropic",
    "tags": [
      "excel",
      "spreadsheet",
      "csv",
      "formulas"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/skills/skills/xlsx via the GitHub API on 2026-10-15; installable via the anthropic-agent-skills marketplace (plugin document-skills)."
  },
  {
    "rank": 6,
    "name": "pptx",
    "summary": "Creates, reads, and edits PowerPoint .pptx decks, from pitch decks to extracting text from existing slides.",
    "category": "Documentation",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install document-skills@anthropic-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for document-skills:pptx. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "Node.js 18+"
    ],
    "dependencies": [
      "pptxgenjs (npm)"
    ],
    "usage": [
      {
        "prompt": "Make a 6-slide deck summarizing Q3 results from q3-notes.md.",
        "result": "Claude builds a .pptx with a consistent layout, titles, and bullet content for each slide."
      }
    ],
    "source": "https://github.com/anthropics/skills/tree/main/skills/pptx",
    "author": "Anthropic",
    "tags": [
      "powerpoint",
      "slides",
      "presentations",
      "office"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/skills/skills/pptx via the GitHub API on 2026-10-15; installable via the anthropic-agent-skills marketplace (plugin document-skills)."
  },
  {
    "rank": 7,
    "name": "mcp-builder",
    "summary": "Guides building high-quality MCP servers in Python (FastMCP) or TypeScript (MCP SDK) that wrap external APIs as well-designed tools.",
    "category": "Backend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install example-skills@anthropic-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for example-skills:mcp-builder. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "Python 3.10+ or Node.js 18+"
    ],
    "dependencies": [
      "mcp / FastMCP (Python) or @modelcontextprotocol/sdk (TypeScript)"
    ],
    "usage": [
      {
        "prompt": "Use mcp-builder to create an MCP server that exposes our internal ticketing REST API.",
        "result": "Claude plans the tool surface, scaffolds the server, and adds evaluation questions to test it."
      }
    ],
    "source": "https://github.com/anthropics/skills/tree/main/skills/mcp-builder",
    "author": "Anthropic",
    "tags": [
      "mcp",
      "api",
      "typescript",
      "python"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/skills/skills/mcp-builder via the GitHub API on 2026-10-15; installable via the anthropic-agent-skills marketplace (plugin example-skills)."
  },
  {
    "rank": 8,
    "name": "webapp-testing",
    "summary": "Tests local web apps with Playwright: verifies frontend behavior, captures screenshots, and reads browser logs.",
    "category": "Testing",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install example-skills@anthropic-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for example-skills:webapp-testing. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "Python 3"
    ],
    "dependencies": [
      "playwright (Python) with Chromium installed via: playwright install chromium"
    ],
    "usage": [
      {
        "prompt": "Start the dev server and verify the signup form shows an error for an invalid email. Take a screenshot.",
        "result": "Claude writes and runs a Playwright script, reports pass/fail, and saves a screenshot."
      }
    ],
    "source": "https://github.com/anthropics/skills/tree/main/skills/webapp-testing",
    "author": "Anthropic",
    "tags": [
      "playwright",
      "e2e",
      "browser",
      "qa"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/skills/skills/webapp-testing via the GitHub API on 2026-10-15; installable via the anthropic-agent-skills marketplace (plugin example-skills)."
  },
  {
    "rank": 9,
    "name": "claude-api",
    "summary": "Reference for the Claude API and Anthropic SDKs: model IDs, streaming, tool use, caching, token counting, and migrations.",
    "category": "Backend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install claude-api@anthropic-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for claude-api:claude-api. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "anthropic (Python) or @anthropic-ai/sdk (TypeScript), depending on your project"
    ],
    "usage": [
      {
        "prompt": "Add streaming responses with prompt caching to our Claude API call in src/chat.ts.",
        "result": "Claude consults the bundled reference and updates the code with current SDK patterns and model IDs."
      }
    ],
    "source": "https://github.com/anthropics/skills/tree/main/skills/claude-api",
    "author": "Anthropic",
    "tags": [
      "anthropic",
      "llm",
      "sdk",
      "api"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/skills/skills/claude-api via the GitHub API on 2026-10-15; installable via the anthropic-agent-skills marketplace (plugin claude-api)."
  },
  {
    "rank": 10,
    "name": "systematic-debugging",
    "summary": "Enforces a root-cause-first debugging process for any bug, test failure, or unexpected behavior before proposing fixes.",
    "category": "Debugging",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install superpowers@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for superpowers:systematic-debugging. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "The checkout test fails intermittently on CI. Debug it systematically.",
        "result": "Claude gathers evidence, forms and tests hypotheses, identifies the root cause, then proposes a targeted fix."
      }
    ],
    "source": "https://github.com/obra/superpowers/tree/main/skills/systematic-debugging",
    "author": "obra (Superpowers)",
    "tags": [
      "debugging",
      "root-cause",
      "methodology"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at obra/superpowers/skills/systematic-debugging via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin superpowers)."
  },
  {
    "rank": 11,
    "name": "test-driven-development",
    "summary": "Applies strict red-green-refactor TDD whenever implementing a feature or bug fix, writing a failing test before code.",
    "category": "Testing",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install superpowers@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for superpowers:test-driven-development. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "Your project's test runner"
    ],
    "usage": [
      {
        "prompt": "Add a slugify() helper to utils using TDD.",
        "result": "Claude writes a failing test, runs it, implements the minimum code to pass, then refactors."
      }
    ],
    "source": "https://github.com/obra/superpowers/tree/main/skills/test-driven-development",
    "author": "obra (Superpowers)",
    "tags": [
      "tdd",
      "testing",
      "methodology"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at obra/superpowers/skills/test-driven-development via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin superpowers)."
  },
  {
    "rank": 12,
    "name": "brainstorming",
    "summary": "Runs a structured question-led design session before any creative or feature work so requirements are clear first.",
    "category": "Productivity",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install superpowers@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for superpowers:brainstorming. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "I want to add team workspaces to our app. Let's brainstorm it.",
        "result": "Claude asks focused questions one at a time, explores options, and writes up a validated design."
      }
    ],
    "source": "https://github.com/obra/superpowers/tree/main/skills/brainstorming",
    "author": "obra (Superpowers)",
    "tags": [
      "design",
      "planning",
      "requirements"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at obra/superpowers/skills/brainstorming via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin superpowers)."
  },
  {
    "rank": 13,
    "name": "writing-plans",
    "summary": "Turns a spec into a detailed, step-by-step implementation plan before any code is touched.",
    "category": "Productivity",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install superpowers@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for superpowers:writing-plans. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Write an implementation plan for the design in docs/workspaces-design.md.",
        "result": "Claude produces a plan file with small, ordered tasks, exact file paths, and verification steps."
      }
    ],
    "source": "https://github.com/obra/superpowers/tree/main/skills/writing-plans",
    "author": "obra (Superpowers)",
    "tags": [
      "planning",
      "specs",
      "workflow"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at obra/superpowers/skills/writing-plans via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin superpowers)."
  },
  {
    "rank": 14,
    "name": "subagent-driven-development",
    "summary": "Executes an implementation plan by dispatching a fresh subagent per task, with review between tasks.",
    "category": "Productivity",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install superpowers@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for superpowers:subagent-driven-development. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Execute docs/plans/workspaces.md using subagent-driven development.",
        "result": "Claude runs each task in a separate subagent, reviews the results, and tracks progress through the plan."
      }
    ],
    "source": "https://github.com/obra/superpowers/tree/main/skills/subagent-driven-development",
    "author": "obra (Superpowers)",
    "tags": [
      "subagents",
      "execution",
      "workflow"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at obra/superpowers/skills/subagent-driven-development via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin superpowers)."
  },
  {
    "rank": 15,
    "name": "verification-before-completion",
    "summary": "Requires running verification commands and checking their output before claiming work is complete, fixed, or passing.",
    "category": "Testing",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install superpowers@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for superpowers:verification-before-completion. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Fix the failing lint step and tell me when it's done.",
        "result": "Claude runs the linter and tests, shows the actual output, and only then reports success."
      }
    ],
    "source": "https://github.com/obra/superpowers/tree/main/skills/verification-before-completion",
    "author": "obra (Superpowers)",
    "tags": [
      "verification",
      "quality",
      "ci"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at obra/superpowers/skills/verification-before-completion via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin superpowers)."
  },
  {
    "rank": 16,
    "name": "claude-md-improver",
    "summary": "Audits all CLAUDE.md files in a repository against quality templates, reports issues, and applies targeted improvements.",
    "category": "Documentation",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install claude-md-management@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for claude-md-management:claude-md-improver. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Audit the CLAUDE.md files in this repo and improve them.",
        "result": "Claude scans every CLAUDE.md, outputs a quality report, then makes focused updates."
      }
    ],
    "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-md-management/skills/claude-md-improver",
    "author": "Anthropic",
    "tags": [
      "claude-md",
      "docs",
      "audit",
      "context"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/claude-plugins-official/plugins/claude-md-management/skills/claude-md-improver via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin claude-md-management)."
  },
  {
    "rank": 17,
    "name": "claude-automation-recommender",
    "summary": "Analyzes a codebase and recommends Claude Code automations such as hooks, subagents, skills, plugins, and MCP servers.",
    "category": "Productivity",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install claude-code-setup@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for claude-code-setup:claude-automation-recommender. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "What Claude Code automations would help in this repository?",
        "result": "Claude inspects the stack and workflows and returns a prioritized list of hooks, skills, and MCP servers to add."
      }
    ],
    "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-code-setup/skills/claude-automation-recommender",
    "author": "Anthropic",
    "tags": [
      "hooks",
      "automation",
      "setup",
      "plugins"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/claude-plugins-official/plugins/claude-code-setup/skills/claude-automation-recommender via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin claude-code-setup)."
  },
  {
    "rank": 18,
    "name": "claude-security",
    "summary": "Scans a whole codebase or a diff for vulnerabilities and turns findings into targeted, panel-verified patch files.",
    "category": "Security",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install claude-security@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for claude-security:claude-security. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Run Claude Security on the changes in this branch.",
        "result": "Claude scans the diff, reports verified findings, and can generate patch files you apply yourself."
      }
    ],
    "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-security/skills/claude-security",
    "author": "Anthropic",
    "tags": [
      "security",
      "sast",
      "patches",
      "audit"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/claude-plugins-official/plugins/claude-security/skills/claude-security via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin claude-security)."
  },
  {
    "rank": 19,
    "name": "skill-development",
    "summary": "Explains skill structure, progressive disclosure, and writing effective descriptions when adding skills to a plugin.",
    "category": "Productivity",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install plugin-dev@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for plugin-dev:skill-development. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Add a skill to my plugin that teaches Claude our API error conventions.",
        "result": "Claude creates the skill directory and a SKILL.md with a trigger-friendly description and lean body."
      }
    ],
    "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/plugin-dev/skills/skill-development",
    "author": "Anthropic",
    "tags": [
      "skills",
      "plugins",
      "authoring"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/claude-plugins-official/plugins/plugin-dev/skills/skill-development via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin plugin-dev)."
  },
  {
    "rank": 20,
    "name": "hook-development",
    "summary": "Guides creating Claude Code hooks (PreToolUse, PostToolUse, Stop, and more) for validation and event-driven automation.",
    "category": "DevOps",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install plugin-dev@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for plugin-dev:hook-development. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Create a PreToolUse hook that blocks edits to files under migrations/.",
        "result": "Claude writes the hook configuration and script and explains how to test it."
      }
    ],
    "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/plugin-dev/skills/hook-development",
    "author": "Anthropic",
    "tags": [
      "hooks",
      "automation",
      "plugins"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/claude-plugins-official/plugins/plugin-dev/skills/hook-development via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin plugin-dev)."
  },
  {
    "rank": 21,
    "name": "plugin-structure",
    "summary": "Explains Claude Code plugin layout, plugin.json, and how to organize commands, agents, skills, and hooks.",
    "category": "Productivity",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install plugin-dev@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for plugin-dev:plugin-structure. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Scaffold a new Claude Code plugin called team-tools with one skill and one command.",
        "result": "Claude creates the directory tree and a valid .claude-plugin/plugin.json."
      }
    ],
    "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/plugin-dev/skills/plugin-structure",
    "author": "Anthropic",
    "tags": [
      "plugins",
      "scaffolding",
      "manifest"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/claude-plugins-official/plugins/plugin-dev/skills/plugin-structure via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin plugin-dev)."
  },
  {
    "rank": 22,
    "name": "build-mcp-server",
    "summary": "Walks through building an MCP server that wraps an API or exposes tools to Claude, from design to testing.",
    "category": "Backend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install mcp-server-dev@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for mcp-server-dev:build-mcp-server. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "Node.js 18+ or Python 3.10+"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Build an MCP server that exposes our weather API as tools.",
        "result": "Claude helps choose transport and tool design, then scaffolds and tests the server."
      }
    ],
    "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/mcp-server-dev/skills/build-mcp-server",
    "author": "Anthropic",
    "tags": [
      "mcp",
      "server",
      "api",
      "tools"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/claude-plugins-official/plugins/mcp-server-dev/skills/build-mcp-server via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin mcp-server-dev)."
  },
  {
    "rank": 23,
    "name": "doc-coauthoring",
    "summary": "Runs a structured co-authoring workflow for docs, proposals, technical specs, and decision records.",
    "category": "Documentation",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install example-skills@anthropic-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for example-skills:doc-coauthoring. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Help me co-write a technical spec for migrating our queue to SQS.",
        "result": "Claude gathers context, outlines the doc, drafts sections with you, and refines for readers."
      }
    ],
    "source": "https://github.com/anthropics/skills/tree/main/skills/doc-coauthoring",
    "author": "Anthropic",
    "tags": [
      "writing",
      "specs",
      "proposals"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/skills/skills/doc-coauthoring via the GitHub API on 2026-10-15; installable via the anthropic-agent-skills marketplace (plugin example-skills)."
  },
  {
    "rank": 24,
    "name": "web-artifacts-builder",
    "summary": "Builds elaborate multi-component HTML artifacts with React, Tailwind CSS, and shadcn/ui, bundled into one file.",
    "category": "Frontend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install example-skills@anthropic-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for example-skills:web-artifacts-builder. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "Node.js 18+"
    ],
    "dependencies": [
      "Bundled init and bundle scripts (use npm/pnpm)"
    ],
    "usage": [
      {
        "prompt": "Build an interactive budget planner artifact with tabs and charts.",
        "result": "Claude scaffolds a React project, builds the components, and bundles a single HTML file."
      }
    ],
    "source": "https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder",
    "author": "Anthropic",
    "tags": [
      "react",
      "tailwind",
      "shadcn",
      "artifacts"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/skills/skills/web-artifacts-builder via the GitHub API on 2026-10-15; installable via the anthropic-agent-skills marketplace (plugin example-skills)."
  },
  {
    "rank": 25,
    "name": "executing-plans",
    "summary": "Executes a written implementation plan inline, task by task, with checkpoints, when subagents are not used.",
    "category": "Productivity",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install superpowers@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for superpowers:executing-plans. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Execute docs/plans/search.md yourself, task by task.",
        "result": "Claude works through the plan in order, verifying each task and pausing at checkpoints."
      }
    ],
    "source": "https://github.com/obra/superpowers/tree/main/skills/executing-plans",
    "author": "obra (Superpowers)",
    "tags": [
      "execution",
      "planning",
      "workflow"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at obra/superpowers/skills/executing-plans via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin superpowers)."
  },
  {
    "rank": 26,
    "name": "requesting-code-review",
    "summary": "Requests a structured code review of completed work against requirements before merging.",
    "category": "Git/Version Control",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install superpowers@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for superpowers:requesting-code-review. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "I've finished the auth refactor. Request a code review before I merge.",
        "result": "Claude dispatches a reviewer with the diff and requirements and summarizes the issues found."
      }
    ],
    "source": "https://github.com/obra/superpowers/tree/main/skills/requesting-code-review",
    "author": "obra (Superpowers)",
    "tags": [
      "code-review",
      "quality",
      "merge"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at obra/superpowers/skills/requesting-code-review via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin superpowers)."
  },
  {
    "rank": 27,
    "name": "receiving-code-review",
    "summary": "Handles code review feedback with technical rigor: verifies each suggestion instead of blindly agreeing or implementing.",
    "category": "Git/Version Control",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install superpowers@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for superpowers:receiving-code-review. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Here are the reviewer's comments on my PR. Address them.",
        "result": "Claude checks each comment against the code, pushes back where it's wrong, and fixes valid issues."
      }
    ],
    "source": "https://github.com/obra/superpowers/tree/main/skills/receiving-code-review",
    "author": "obra (Superpowers)",
    "tags": [
      "code-review",
      "feedback",
      "quality"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at obra/superpowers/skills/receiving-code-review via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin superpowers)."
  },
  {
    "rank": 28,
    "name": "using-git-worktrees",
    "summary": "Creates an isolated git worktree workspace before starting feature work so the main checkout stays clean.",
    "category": "Git/Version Control",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install superpowers@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for superpowers:using-git-worktrees. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "git"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Start work on the billing feature in an isolated workspace.",
        "result": "Claude creates a new worktree and branch, sets up dependencies, and confirms tests pass there."
      }
    ],
    "source": "https://github.com/obra/superpowers/tree/main/skills/using-git-worktrees",
    "author": "obra (Superpowers)",
    "tags": [
      "git",
      "worktrees",
      "isolation"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at obra/superpowers/skills/using-git-worktrees via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin superpowers)."
  },
  {
    "rank": 29,
    "name": "dispatching-parallel-agents",
    "summary": "Splits two or more independent tasks across parallel subagents when they share no state or ordering.",
    "category": "Productivity",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install superpowers@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for superpowers:dispatching-parallel-agents. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "These three test files fail for unrelated reasons. Fix them in parallel.",
        "result": "Claude dispatches one subagent per independent failure and integrates their results."
      }
    ],
    "source": "https://github.com/obra/superpowers/tree/main/skills/dispatching-parallel-agents",
    "author": "obra (Superpowers)",
    "tags": [
      "subagents",
      "parallel",
      "workflow"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at obra/superpowers/skills/dispatching-parallel-agents via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin superpowers)."
  },
  {
    "rank": 30,
    "name": "finishing-a-development-branch",
    "summary": "Guides integrating finished work: verifies tests, then offers merge, PR, keep, or discard options.",
    "category": "Git/Version Control",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install superpowers@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for superpowers:finishing-a-development-branch. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "git"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "The feature is done and tests pass. Let's finish this branch.",
        "result": "Claude re-runs tests, presents integration options, and carries out the one you choose."
      }
    ],
    "source": "https://github.com/obra/superpowers/tree/main/skills/finishing-a-development-branch",
    "author": "obra (Superpowers)",
    "tags": [
      "git",
      "merge",
      "pull-request"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at obra/superpowers/skills/finishing-a-development-branch via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin superpowers)."
  },
  {
    "rank": 31,
    "name": "writing-skills",
    "summary": "Applies a test-first approach to creating and editing skills, verifying they work before deployment.",
    "category": "Productivity",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install superpowers@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for superpowers:writing-skills. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Write a skill that teaches Claude our database migration rules.",
        "result": "Claude baselines behavior without the skill, writes it, and verifies the change in behavior."
      }
    ],
    "source": "https://github.com/obra/superpowers/tree/main/skills/writing-skills",
    "author": "obra (Superpowers)",
    "tags": [
      "skills",
      "authoring",
      "testing"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at obra/superpowers/skills/writing-skills via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin superpowers)."
  },
  {
    "rank": 32,
    "name": "vercel-react-best-practices",
    "summary": "Applies Vercel Engineering's React and Next.js performance guidelines when writing, reviewing, or refactoring code.",
    "category": "Frontend",
    "install": [
      {
        "step": "Clone the source repository to a temporary folder (skipped if it is already there). Steps assume a POSIX shell such as bash or zsh.",
        "command": "[ -d /tmp/agent-skills ] || git clone --depth 1 https://github.com/vercel-labs/agent-skills.git /tmp/agent-skills"
      },
      {
        "step": "Copy the skill folder into your personal skills directory as ~/.claude/skills/vercel-react-best-practices/.",
        "command": "mkdir -p ~/.claude/skills/vercel-react-best-practices && cp -R /tmp/agent-skills/skills/react-best-practices/. ~/.claude/skills/vercel-react-best-practices/"
      },
      {
        "step": "Check SKILL.md starts with YAML front matter containing name and description (already present upstream).",
        "command": "head -n 5 ~/.claude/skills/vercel-react-best-practices/SKILL.md"
      },
      {
        "step": "Optional: for a project-scoped install, copy it into .claude/skills/vercel-react-best-practices/ in your repository instead.",
        "command": "mkdir -p .claude/skills/vercel-react-best-practices && cp -R /tmp/agent-skills/skills/react-best-practices/. .claude/skills/vercel-react-best-practices/"
      },
      {
        "step": "Restart Claude Code so the new skill is discovered.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "git"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Review app/dashboard/page.tsx for React performance problems.",
        "result": "Claude flags waterfalls, bundle bloat, and re-render issues and suggests fixes ranked by impact."
      }
    ],
    "source": "https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices",
    "author": "Vercel",
    "tags": [
      "react",
      "nextjs",
      "performance"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at vercel-labs/agent-skills/skills/react-best-practices via the GitHub API on 2026-10-15; installable by copying the skill folder."
  },
  {
    "rank": 33,
    "name": "web-design-guidelines",
    "summary": "Reviews UI code for compliance with Web Interface Guidelines covering accessibility, UX, and best practices.",
    "category": "Frontend",
    "install": [
      {
        "step": "Clone the source repository to a temporary folder (skipped if it is already there). Steps assume a POSIX shell such as bash or zsh.",
        "command": "[ -d /tmp/agent-skills ] || git clone --depth 1 https://github.com/vercel-labs/agent-skills.git /tmp/agent-skills"
      },
      {
        "step": "Copy the skill folder into your personal skills directory as ~/.claude/skills/web-design-guidelines/.",
        "command": "mkdir -p ~/.claude/skills/web-design-guidelines && cp -R /tmp/agent-skills/skills/web-design-guidelines/. ~/.claude/skills/web-design-guidelines/"
      },
      {
        "step": "Check SKILL.md starts with YAML front matter containing name and description (already present upstream).",
        "command": "head -n 5 ~/.claude/skills/web-design-guidelines/SKILL.md"
      },
      {
        "step": "Optional: for a project-scoped install, copy it into .claude/skills/web-design-guidelines/ in your repository instead.",
        "command": "mkdir -p .claude/skills/web-design-guidelines && cp -R /tmp/agent-skills/skills/web-design-guidelines/. .claude/skills/web-design-guidelines/"
      },
      {
        "step": "Restart Claude Code so the new skill is discovered.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "git"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Review my UI in src/components against web interface best practices.",
        "result": "Claude reports guideline violations with file and line references and suggested fixes."
      }
    ],
    "source": "https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines",
    "author": "Vercel",
    "tags": [
      "accessibility",
      "ux",
      "review",
      "ui"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at vercel-labs/agent-skills/skills/web-design-guidelines via the GitHub API on 2026-10-15; installable by copying the skill folder."
  },
  {
    "rank": 34,
    "name": "agent-development",
    "summary": "Guides writing Claude Code subagents: front matter, when-to-use descriptions, examples, tools, and colors.",
    "category": "Productivity",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install plugin-dev@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for plugin-dev:agent-development. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Create a subagent that reviews SQL migrations for safety.",
        "result": "Claude writes an agent definition file with a clear description, tool list, and examples."
      }
    ],
    "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/plugin-dev/skills/agent-development",
    "author": "Anthropic",
    "tags": [
      "subagents",
      "agents",
      "plugins"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/claude-plugins-official/plugins/plugin-dev/skills/agent-development via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin plugin-dev)."
  },
  {
    "rank": 35,
    "name": "command-development",
    "summary": "Explains how to create custom slash commands with front matter, arguments, and file references.",
    "category": "Productivity",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install plugin-dev@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for plugin-dev:command-development. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Create a /changelog command that summarizes commits since the last tag.",
        "result": "Claude writes the command file with arguments and the needed bash/file references."
      }
    ],
    "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/plugin-dev/skills/command-development",
    "author": "Anthropic",
    "tags": [
      "slash-commands",
      "plugins",
      "authoring"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/claude-plugins-official/plugins/plugin-dev/skills/command-development via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin plugin-dev)."
  },
  {
    "rank": 36,
    "name": "mcp-integration",
    "summary": "Shows how to add and configure MCP servers inside a Claude Code plugin using .mcp.json.",
    "category": "Backend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install plugin-dev@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for plugin-dev:mcp-integration. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Add our Postgres MCP server to this plugin.",
        "result": "Claude adds a .mcp.json entry using plugin-relative paths and explains required env vars."
      }
    ],
    "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/plugin-dev/skills/mcp-integration",
    "author": "Anthropic",
    "tags": [
      "mcp",
      "plugins",
      "configuration"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/claude-plugins-official/plugins/plugin-dev/skills/mcp-integration via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin plugin-dev)."
  },
  {
    "rank": 37,
    "name": "build-mcp-app",
    "summary": "Adds interactive UI widgets such as forms, pickers, and dashboards to an MCP server so they render in chat.",
    "category": "Frontend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install mcp-server-dev@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for mcp-server-dev:build-mcp-app. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "Node.js 18+"
    ],
    "dependencies": [
      "@modelcontextprotocol/sdk",
      "@modelcontextprotocol/ext-apps",
      "zod",
      "express"
    ],
    "usage": [
      {
        "prompt": "Add an interactive date-picker UI to my booking MCP tool.",
        "result": "Claude adds a UI resource and wires the tool to render it."
      }
    ],
    "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/mcp-server-dev/skills/build-mcp-app",
    "author": "Anthropic",
    "tags": [
      "mcp",
      "ui",
      "widgets"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/claude-plugins-official/plugins/mcp-server-dev/skills/build-mcp-app via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin mcp-server-dev)."
  },
  {
    "rank": 38,
    "name": "build-mcpb",
    "summary": "Packages a local MCP server as an .mcpb bundle, including its Node or Python runtime dependencies, for distribution.",
    "category": "DevOps",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install mcp-server-dev@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for mcp-server-dev:build-mcpb. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "Node.js 18+ or Python 3"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Package my local filesystem MCP server as an MCPB.",
        "result": "Claude writes the manifest, vendors dependencies, and produces an installable .mcpb file."
      }
    ],
    "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/mcp-server-dev/skills/build-mcpb",
    "author": "Anthropic",
    "tags": [
      "mcp",
      "packaging",
      "distribution"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/claude-plugins-official/plugins/mcp-server-dev/skills/build-mcpb via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin mcp-server-dev)."
  },
  {
    "rank": 39,
    "name": "playground",
    "summary": "Creates self-contained HTML playgrounds with controls and a live preview that output a ready-to-copy prompt.",
    "category": "Frontend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install playground@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for playground:playground. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Make a playground for exploring button styles.",
        "result": "Claude generates a single HTML file with controls, a live preview, and a copyable prompt."
      }
    ],
    "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/playground/skills/playground",
    "author": "Anthropic",
    "tags": [
      "html",
      "prototyping",
      "prompts"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/claude-plugins-official/plugins/playground/skills/playground via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin playground)."
  },
  {
    "rank": 40,
    "name": "session-report",
    "summary": "Generates an explorable HTML report of Claude Code usage (tokens, cache, subagents, skills) from local transcripts.",
    "category": "Productivity",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install session-report@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for session-report:session-report. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Generate a session report for my Claude Code usage this week.",
        "result": "Claude reads ~/.claude/projects transcripts and writes an HTML report of usage and costly prompts."
      }
    ],
    "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/session-report/skills/session-report",
    "author": "Anthropic",
    "tags": [
      "usage",
      "tokens",
      "reporting"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/claude-plugins-official/plugins/session-report/skills/session-report via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin session-report)."
  },
  {
    "rank": 41,
    "name": "writing-hookify-rules",
    "summary": "Explains hookify rule syntax and patterns for writing lightweight hook rules that warn on or block actions.",
    "category": "DevOps",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install hookify@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for hookify:writing-hookify-rules. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Write a hookify rule that warns whenever I run rm -rf.",
        "result": "Claude writes a hookify rule file with the matching pattern and message."
      }
    ],
    "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/hookify/skills/writing-rules",
    "author": "Anthropic",
    "tags": [
      "hooks",
      "rules",
      "guardrails"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/claude-plugins-official/plugins/hookify/skills/writing-rules via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin hookify)."
  },
  {
    "rank": 42,
    "name": "canvas-design",
    "summary": "Creates original static visual art, posters, and designs as .png or .pdf from a written design philosophy.",
    "category": "Frontend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install example-skills@anthropic-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for example-skills:canvas-design. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "Python 3"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Design a minimalist poster for our team hackathon as a PDF.",
        "result": "Claude writes a design philosophy, then renders an original poster to PDF."
      }
    ],
    "source": "https://github.com/anthropics/skills/tree/main/skills/canvas-design",
    "author": "Anthropic",
    "tags": [
      "design",
      "poster",
      "art",
      "pdf"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/skills/skills/canvas-design via the GitHub API on 2026-10-15; installable via the anthropic-agent-skills marketplace (plugin example-skills)."
  },
  {
    "rank": 43,
    "name": "theme-factory",
    "summary": "Styles slides, docs, reports, and HTML pages with one of ten preset color/font themes or a custom one.",
    "category": "Frontend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install example-skills@anthropic-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for example-skills:theme-factory. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Apply a professional theme to the slide deck we just created.",
        "result": "Claude shows theme options and restyles the artifact with consistent colors and fonts."
      }
    ],
    "source": "https://github.com/anthropics/skills/tree/main/skills/theme-factory",
    "author": "Anthropic",
    "tags": [
      "themes",
      "styling",
      "fonts",
      "colors"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/skills/skills/theme-factory via the GitHub API on 2026-10-15; installable via the anthropic-agent-skills marketplace (plugin example-skills)."
  },
  {
    "rank": 44,
    "name": "algorithmic-art",
    "summary": "Creates generative art with p5.js using seeded randomness and interactive parameter controls.",
    "category": "Frontend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install example-skills@anthropic-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for example-skills:algorithmic-art. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "p5.js (loaded from CDN)"
    ],
    "usage": [
      {
        "prompt": "Create a flow-field generative art piece with adjustable parameters.",
        "result": "Claude produces an interactive HTML p5.js sketch with seed and parameter controls."
      }
    ],
    "source": "https://github.com/anthropics/skills/tree/main/skills/algorithmic-art",
    "author": "Anthropic",
    "tags": [
      "p5js",
      "generative",
      "art"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/skills/skills/algorithmic-art via the GitHub API on 2026-10-15; installable via the anthropic-agent-skills marketplace (plugin example-skills)."
  },
  {
    "rank": 45,
    "name": "brand-guidelines",
    "summary": "Applies Anthropic's official brand colors and typography to artifacts that should have Anthropic's look and feel.",
    "category": "Frontend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install example-skills@anthropic-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for example-skills:brand-guidelines. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Restyle this one-pager using the brand guidelines.",
        "result": "Claude applies the brand palette and type styles consistently across the document."
      }
    ],
    "source": "https://github.com/anthropics/skills/tree/main/skills/brand-guidelines",
    "author": "Anthropic",
    "tags": [
      "branding",
      "colors",
      "typography"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/skills/skills/brand-guidelines via the GitHub API on 2026-10-15; installable via the anthropic-agent-skills marketplace (plugin example-skills)."
  },
  {
    "rank": 46,
    "name": "internal-comms",
    "summary": "Writes internal communications such as status reports, leadership updates, newsletters, and incident reports in house formats.",
    "category": "Documentation",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install example-skills@anthropic-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for example-skills:internal-comms. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Write a weekly status update from these notes for the leadership channel.",
        "result": "Claude produces a concise update in the matching format with progress, risks, and next steps."
      }
    ],
    "source": "https://github.com/anthropics/skills/tree/main/skills/internal-comms",
    "author": "Anthropic",
    "tags": [
      "writing",
      "status-reports",
      "communication"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/skills/skills/internal-comms via the GitHub API on 2026-10-15; installable via the anthropic-agent-skills marketplace (plugin example-skills)."
  },
  {
    "rank": 47,
    "name": "slack-gif-creator",
    "summary": "Creates animated GIFs optimized for Slack's size and dimension constraints, with validation tools.",
    "category": "Productivity",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install example-skills@anthropic-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for example-skills:slack-gif-creator. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "Python 3"
    ],
    "dependencies": [
      "pillow",
      "imageio",
      "numpy"
    ],
    "usage": [
      {
        "prompt": "Make me a GIF of a rocket launching for Slack.",
        "result": "Claude generates frames, assembles a GIF, and validates it against Slack's limits."
      }
    ],
    "source": "https://github.com/anthropics/skills/tree/main/skills/slack-gif-creator",
    "author": "Anthropic",
    "tags": [
      "gif",
      "slack",
      "animation"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/skills/skills/slack-gif-creator via the GitHub API on 2026-10-15; installable via the anthropic-agent-skills marketplace (plugin example-skills)."
  },
  {
    "rank": 48,
    "name": "vercel-composition-patterns",
    "summary": "React composition patterns for replacing boolean-prop sprawl with compound components and flexible, reusable APIs.",
    "category": "Refactoring",
    "install": [
      {
        "step": "Clone the source repository to a temporary folder (skipped if it is already there). Steps assume a POSIX shell such as bash or zsh.",
        "command": "[ -d /tmp/agent-skills ] || git clone --depth 1 https://github.com/vercel-labs/agent-skills.git /tmp/agent-skills"
      },
      {
        "step": "Copy the skill folder into your personal skills directory as ~/.claude/skills/vercel-composition-patterns/.",
        "command": "mkdir -p ~/.claude/skills/vercel-composition-patterns && cp -R /tmp/agent-skills/skills/composition-patterns/. ~/.claude/skills/vercel-composition-patterns/"
      },
      {
        "step": "Check SKILL.md starts with YAML front matter containing name and description (already present upstream).",
        "command": "head -n 5 ~/.claude/skills/vercel-composition-patterns/SKILL.md"
      },
      {
        "step": "Optional: for a project-scoped install, copy it into .claude/skills/vercel-composition-patterns/ in your repository instead.",
        "command": "mkdir -p .claude/skills/vercel-composition-patterns && cp -R /tmp/agent-skills/skills/composition-patterns/. .claude/skills/vercel-composition-patterns/"
      },
      {
        "step": "Restart Claude Code so the new skill is discovered.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "git"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Refactor the Modal component; it has 12 boolean props.",
        "result": "Claude redesigns it as compound components with a cleaner API and migrates call sites."
      }
    ],
    "source": "https://github.com/vercel-labs/agent-skills/tree/main/skills/composition-patterns",
    "author": "Vercel",
    "tags": [
      "react",
      "components",
      "composition"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at vercel-labs/agent-skills/skills/composition-patterns via the GitHub API on 2026-10-15; installable by copying the skill folder."
  },
  {
    "rank": 49,
    "name": "deploy-to-vercel",
    "summary": "Deploys apps and websites to Vercel, including preview deployments, and returns the live link.",
    "category": "DevOps",
    "install": [
      {
        "step": "Clone the source repository to a temporary folder (skipped if it is already there). Steps assume a POSIX shell such as bash or zsh.",
        "command": "[ -d /tmp/agent-skills ] || git clone --depth 1 https://github.com/vercel-labs/agent-skills.git /tmp/agent-skills"
      },
      {
        "step": "Copy the skill folder into your personal skills directory as ~/.claude/skills/deploy-to-vercel/.",
        "command": "mkdir -p ~/.claude/skills/deploy-to-vercel && cp -R /tmp/agent-skills/skills/deploy-to-vercel/. ~/.claude/skills/deploy-to-vercel/"
      },
      {
        "step": "Check SKILL.md starts with YAML front matter containing name and description (already present upstream).",
        "command": "head -n 5 ~/.claude/skills/deploy-to-vercel/SKILL.md"
      },
      {
        "step": "Optional: for a project-scoped install, copy it into .claude/skills/deploy-to-vercel/ in your repository instead.",
        "command": "mkdir -p .claude/skills/deploy-to-vercel && cp -R /tmp/agent-skills/skills/deploy-to-vercel/. .claude/skills/deploy-to-vercel/"
      },
      {
        "step": "Restart Claude Code so the new skill is discovered.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "git",
      "Node.js 18+",
      "A Vercel account"
    ],
    "dependencies": [
      "vercel CLI (npm install -g vercel)"
    ],
    "usage": [
      {
        "prompt": "Deploy this app to Vercel and give me the preview link.",
        "result": "Claude runs the Vercel deployment and returns the deployment URL."
      }
    ],
    "source": "https://github.com/vercel-labs/agent-skills/tree/main/skills/deploy-to-vercel",
    "author": "Vercel",
    "tags": [
      "vercel",
      "deploy",
      "hosting"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at vercel-labs/agent-skills/skills/deploy-to-vercel via the GitHub API on 2026-10-15; installable by copying the skill folder."
  },
  {
    "rank": 50,
    "name": "vercel-react-native-skills",
    "summary": "React Native and Expo best practices for performant mobile apps: lists, animations, and native modules.",
    "category": "Frontend",
    "install": [
      {
        "step": "Clone the source repository to a temporary folder (skipped if it is already there). Steps assume a POSIX shell such as bash or zsh.",
        "command": "[ -d /tmp/agent-skills ] || git clone --depth 1 https://github.com/vercel-labs/agent-skills.git /tmp/agent-skills"
      },
      {
        "step": "Copy the skill folder into your personal skills directory as ~/.claude/skills/vercel-react-native-skills/.",
        "command": "mkdir -p ~/.claude/skills/vercel-react-native-skills && cp -R /tmp/agent-skills/skills/react-native-skills/. ~/.claude/skills/vercel-react-native-skills/"
      },
      {
        "step": "Check SKILL.md starts with YAML front matter containing name and description (already present upstream).",
        "command": "head -n 5 ~/.claude/skills/vercel-react-native-skills/SKILL.md"
      },
      {
        "step": "Optional: for a project-scoped install, copy it into .claude/skills/vercel-react-native-skills/ in your repository instead.",
        "command": "mkdir -p .claude/skills/vercel-react-native-skills && cp -R /tmp/agent-skills/skills/react-native-skills/. .claude/skills/vercel-react-native-skills/"
      },
      {
        "step": "Restart Claude Code so the new skill is discovered.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "git"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Our FlatList of 2,000 items stutters. Fix it.",
        "result": "Claude applies list virtualization and memoization patterns and explains each change."
      }
    ],
    "source": "https://github.com/vercel-labs/agent-skills/tree/main/skills/react-native-skills",
    "author": "Vercel",
    "tags": [
      "react-native",
      "expo",
      "mobile",
      "performance"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at vercel-labs/agent-skills/skills/react-native-skills via the GitHub API on 2026-10-15; installable by copying the skill folder."
  },
  {
    "rank": 51,
    "name": "vercel-react-view-transitions",
    "summary": "Implements smooth, native-feeling animations with React's View Transition API and CSS view-transition pseudo-elements.",
    "category": "Frontend",
    "install": [
      {
        "step": "Clone the source repository to a temporary folder (skipped if it is already there). Steps assume a POSIX shell such as bash or zsh.",
        "command": "[ -d /tmp/agent-skills ] || git clone --depth 1 https://github.com/vercel-labs/agent-skills.git /tmp/agent-skills"
      },
      {
        "step": "Copy the skill folder into your personal skills directory as ~/.claude/skills/vercel-react-view-transitions/.",
        "command": "mkdir -p ~/.claude/skills/vercel-react-view-transitions && cp -R /tmp/agent-skills/skills/react-view-transitions/. ~/.claude/skills/vercel-react-view-transitions/"
      },
      {
        "step": "Check SKILL.md starts with YAML front matter containing name and description (already present upstream).",
        "command": "head -n 5 ~/.claude/skills/vercel-react-view-transitions/SKILL.md"
      },
      {
        "step": "Optional: for a project-scoped install, copy it into .claude/skills/vercel-react-view-transitions/ in your repository instead.",
        "command": "mkdir -p .claude/skills/vercel-react-view-transitions && cp -R /tmp/agent-skills/skills/react-view-transitions/. .claude/skills/vercel-react-view-transitions/"
      },
      {
        "step": "Restart Claude Code so the new skill is discovered.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "git"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Add a view transition when navigating from the product list to product details.",
        "result": "Claude wraps the elements in ViewTransition and adds matching CSS."
      }
    ],
    "source": "https://github.com/vercel-labs/agent-skills/tree/main/skills/react-view-transitions",
    "author": "Vercel",
    "tags": [
      "react",
      "animation",
      "view-transitions"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at vercel-labs/agent-skills/skills/react-view-transitions via the GitHub API on 2026-10-15; installable by copying the skill folder."
  },
  {
    "rank": 52,
    "name": "semgrep",
    "summary": "Runs an approved Semgrep security scan: detects languages, selects rulesets, and batches the scans.",
    "category": "Security",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add trailofbits/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install static-analysis@trailofbits"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for static-analysis:semgrep. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "semgrep CLI"
    ],
    "usage": [
      {
        "prompt": "Run a Semgrep security scan on this repository.",
        "result": "Claude proposes rulesets for approval, runs them, and summarizes findings."
      }
    ],
    "source": "https://github.com/trailofbits/skills/tree/main/plugins/static-analysis/skills/semgrep",
    "author": "Trail of Bits",
    "tags": [
      "semgrep",
      "sast",
      "security"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at trailofbits/skills/plugins/static-analysis/skills/semgrep via the GitHub API on 2026-10-15; installable via the trailofbits marketplace (plugin static-analysis)."
  },
  {
    "rank": 53,
    "name": "codeql",
    "summary": "Scans code for vulnerabilities using CodeQL's interprocedural data-flow and taint tracking analysis.",
    "category": "Security",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add trailofbits/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install static-analysis@trailofbits"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for static-analysis:codeql. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "CodeQL CLI (brew install --cask codeql)",
      "jq"
    ],
    "usage": [
      {
        "prompt": "Build a CodeQL database and run a security scan on this Go service.",
        "result": "Claude builds the database, runs the query suites, and reports results."
      }
    ],
    "source": "https://github.com/trailofbits/skills/tree/main/plugins/static-analysis/skills/codeql",
    "author": "Trail of Bits",
    "tags": [
      "codeql",
      "sast",
      "taint-analysis"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at trailofbits/skills/plugins/static-analysis/skills/codeql via the GitHub API on 2026-10-15; installable via the trailofbits marketplace (plugin static-analysis)."
  },
  {
    "rank": 54,
    "name": "property-based-testing",
    "summary": "Writes, reviews, and debugs property-based tests with Hypothesis, fast-check, proptest, and more.",
    "category": "Testing",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add trailofbits/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install property-based-testing@trailofbits"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for property-based-testing:property-based-testing. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "A property-testing library for your language, e.g. Hypothesis or fast-check"
    ],
    "usage": [
      {
        "prompt": "Write property-based tests for our date-range parser.",
        "result": "Claude identifies invariants and writes property tests covering the whole input domain."
      }
    ],
    "source": "https://github.com/trailofbits/skills/tree/main/plugins/property-based-testing/skills/property-based-testing",
    "author": "Trail of Bits",
    "tags": [
      "property-testing",
      "hypothesis",
      "fast-check"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at trailofbits/skills/plugins/property-based-testing/skills/property-based-testing via the GitHub API on 2026-10-15; installable via the trailofbits marketplace (plugin property-based-testing)."
  },
  {
    "rank": 55,
    "name": "differential-review",
    "summary": "Performs security-focused review of code changes, using git blame, blast-radius analysis, and test-coverage checks.",
    "category": "Security",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add trailofbits/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install differential-review@trailofbits"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for differential-review:differential-review. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "git"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Do a security differential review of the changes on this branch.",
        "result": "Claude analyzes the diff in context and writes a report of security-relevant risks."
      }
    ],
    "source": "https://github.com/trailofbits/skills/tree/main/plugins/differential-review/skills/differential-review",
    "author": "Trail of Bits",
    "tags": [
      "security",
      "code-review",
      "diff"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at trailofbits/skills/plugins/differential-review/skills/differential-review via the GitHub API on 2026-10-15; installable via the trailofbits marketplace (plugin differential-review)."
  },
  {
    "rank": 56,
    "name": "variant-analysis",
    "summary": "Hunts for other instances of a bug already found, tracing variants of one root cause across a codebase.",
    "category": "Security",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add trailofbits/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install variant-analysis@trailofbits"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for variant-analysis:variant-analysis. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "We found an SQL injection in users.py. Find variants elsewhere.",
        "result": "Claude generalizes the pattern and searches the codebase for similar instances."
      }
    ],
    "source": "https://github.com/trailofbits/skills/tree/main/plugins/variant-analysis/skills/variant-analysis",
    "author": "Trail of Bits",
    "tags": [
      "vulnerabilities",
      "variants",
      "security"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at trailofbits/skills/plugins/variant-analysis/skills/variant-analysis via the GitHub API on 2026-10-15; installable via the trailofbits marketplace (plugin variant-analysis)."
  },
  {
    "rank": 57,
    "name": "supply-chain-risk-auditor",
    "summary": "Audits dependencies for supply-chain risk: advisories, abandoned upstreams, publisher concentration, and install scripts.",
    "category": "Security",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add trailofbits/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install supply-chain-risk-auditor@trailofbits"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for supply-chain-risk-auditor:supply-chain-risk-auditor. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Audit this project's npm dependencies for supply-chain risk.",
        "result": "Claude checks advisories and maintainer signals and reports risky packages."
      }
    ],
    "source": "https://github.com/trailofbits/skills/tree/main/plugins/supply-chain-risk-auditor/skills/supply-chain-risk-auditor",
    "author": "Trail of Bits",
    "tags": [
      "dependencies",
      "supply-chain",
      "security"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at trailofbits/skills/plugins/supply-chain-risk-auditor/skills/supply-chain-risk-auditor via the GitHub API on 2026-10-15; installable via the trailofbits marketplace (plugin supply-chain-risk-auditor)."
  },
  {
    "rank": 58,
    "name": "modern-python",
    "summary": "Configures Python projects with modern tooling (uv, ruff, ty) and migrates from pip, Poetry, mypy, or black.",
    "category": "Backend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add trailofbits/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install modern-python@trailofbits"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for modern-python:modern-python. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "uv"
    ],
    "usage": [
      {
        "prompt": "Migrate this project from Poetry to uv and set up ruff.",
        "result": "Claude converts the project config, adds dev dependencies, and verifies the toolchain works."
      }
    ],
    "source": "https://github.com/trailofbits/skills/tree/main/plugins/modern-python/skills/modern-python",
    "author": "Trail of Bits",
    "tags": [
      "python",
      "uv",
      "ruff",
      "tooling"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at trailofbits/skills/plugins/modern-python/skills/modern-python via the GitHub API on 2026-10-15; installable via the trailofbits marketplace (plugin modern-python)."
  },
  {
    "rank": 59,
    "name": "gh-cli",
    "summary": "Enforces authenticated gh CLI workflows instead of unauthenticated fetches when working with GitHub URLs, PRs, and issues.",
    "category": "Git/Version Control",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add trailofbits/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install gh-cli@trailofbits"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for gh-cli:gh-cli. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "GitHub CLI (gh) authenticated via gh auth login"
    ],
    "usage": [
      {
        "prompt": "Summarize the open review comments on PR #42.",
        "result": "Claude uses gh to read the PR and summarizes the review threads."
      }
    ],
    "source": "https://github.com/trailofbits/skills/tree/main/plugins/gh-cli/skills/gh-cli",
    "author": "Trail of Bits",
    "tags": [
      "github",
      "gh",
      "pull-requests"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at trailofbits/skills/plugins/gh-cli/skills/gh-cli via the GitHub API on 2026-10-15; installable via the trailofbits marketplace (plugin gh-cli)."
  },
  {
    "rank": 60,
    "name": "devcontainer-setup",
    "summary": "Creates devcontainers with Claude Code, language tooling (Python/Node/Rust/Go), and persistent volumes.",
    "category": "DevOps",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add trailofbits/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install devcontainer-setup@trailofbits"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for devcontainer-setup:devcontainer-setup. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "Docker",
      "VS Code Dev Containers or the devcontainer CLI"
    ],
    "usage": [
      {
        "prompt": "Add a devcontainer to this Node project with Claude Code preinstalled.",
        "result": "Claude writes .devcontainer files with tooling and volume configuration."
      }
    ],
    "source": "https://github.com/trailofbits/skills/tree/main/plugins/devcontainer-setup/skills/devcontainer-setup",
    "author": "Trail of Bits",
    "tags": [
      "devcontainer",
      "docker",
      "sandbox"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at trailofbits/skills/plugins/devcontainer-setup/skills/devcontainer-setup via the GitHub API on 2026-10-15; installable via the trailofbits marketplace (plugin devcontainer-setup)."
  },
  {
    "rank": 61,
    "name": "sharp-edges",
    "summary": "Identifies error-prone APIs, dangerous configurations, and footgun designs that enable security mistakes.",
    "category": "Security",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add trailofbits/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install sharp-edges@trailofbits"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for sharp-edges:sharp-edges. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Review our crypto helper module for sharp edges.",
        "result": "Claude points out misuse-prone APIs and suggests safer designs."
      }
    ],
    "source": "https://github.com/trailofbits/skills/tree/main/plugins/sharp-edges/skills/sharp-edges",
    "author": "Trail of Bits",
    "tags": [
      "api-design",
      "security",
      "footguns"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at trailofbits/skills/plugins/sharp-edges/skills/sharp-edges via the GitHub API on 2026-10-15; installable via the trailofbits marketplace (plugin sharp-edges)."
  },
  {
    "rank": 62,
    "name": "semgrep-rule-creator",
    "summary": "Creates custom Semgrep rules to detect vulnerabilities, bug patterns, and project-specific code patterns.",
    "category": "Security",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add trailofbits/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install semgrep-rule-creator@trailofbits"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for semgrep-rule-creator:semgrep-rule-creator. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "semgrep CLI"
    ],
    "usage": [
      {
        "prompt": "Write a Semgrep rule that flags requests.get calls without a timeout.",
        "result": "Claude writes the rule plus test cases and validates it with semgrep."
      }
    ],
    "source": "https://github.com/trailofbits/skills/tree/main/plugins/semgrep-rule-creator/skills/semgrep-rule-creator",
    "author": "Trail of Bits",
    "tags": [
      "semgrep",
      "rules",
      "static-analysis"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at trailofbits/skills/plugins/semgrep-rule-creator/skills/semgrep-rule-creator via the GitHub API on 2026-10-15; installable via the trailofbits marketplace (plugin semgrep-rule-creator)."
  },
  {
    "rank": 63,
    "name": "sarif-parsing",
    "summary": "Parses, aggregates, and deduplicates SARIF results from static analysis tools like CodeQL and Semgrep.",
    "category": "Security",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add trailofbits/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install static-analysis@trailofbits"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for static-analysis:sarif-parsing. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "jq"
    ],
    "usage": [
      {
        "prompt": "Parse results.sarif and deduplicate the alerts by rule.",
        "result": "Claude processes the SARIF and produces a deduplicated summary of findings."
      }
    ],
    "source": "https://github.com/trailofbits/skills/tree/main/plugins/static-analysis/skills/sarif-parsing",
    "author": "Trail of Bits",
    "tags": [
      "sarif",
      "static-analysis",
      "triage"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at trailofbits/skills/plugins/static-analysis/skills/sarif-parsing via the GitHub API on 2026-10-15; installable via the trailofbits marketplace (plugin static-analysis)."
  },
  {
    "rank": 64,
    "name": "mutation-testing",
    "summary": "Configures mutation-testing campaigns, analyzes surviving mutants, and finds bugs hidden by testing gaps.",
    "category": "Testing",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add trailofbits/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install mutation-testing@trailofbits"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for mutation-testing:mutation-testing. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "mewt or muton (mutation testing tools named in the skill)"
    ],
    "usage": [
      {
        "prompt": "Set up mutation testing for the parser module and analyze survivors.",
        "result": "Claude configures the campaign and explains which surviving mutants reveal test gaps."
      }
    ],
    "source": "https://github.com/trailofbits/skills/tree/main/plugins/mutation-testing/skills/mutation-testing",
    "author": "Trail of Bits",
    "tags": [
      "mutation-testing",
      "coverage",
      "quality"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at trailofbits/skills/plugins/mutation-testing/skills/mutation-testing via the GitHub API on 2026-10-15; installable via the trailofbits marketplace (plugin mutation-testing)."
  },
  {
    "rank": 65,
    "name": "constant-time-analysis",
    "summary": "Detects timing side-channel vulnerabilities in cryptographic code across C, C++, Go, and other languages.",
    "category": "Security",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add trailofbits/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install constant-time-analysis@trailofbits"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for constant-time-analysis:constant-time-analysis. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Check our HMAC verification code for timing side channels.",
        "result": "Claude flags secret-dependent branches or comparisons and proposes constant-time fixes."
      }
    ],
    "source": "https://github.com/trailofbits/skills/tree/main/plugins/constant-time-analysis/skills/constant-time-analysis",
    "author": "Trail of Bits",
    "tags": [
      "cryptography",
      "side-channels",
      "timing"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at trailofbits/skills/plugins/constant-time-analysis/skills/constant-time-analysis via the GitHub API on 2026-10-15; installable via the trailofbits marketplace (plugin constant-time-analysis)."
  },
  {
    "rank": 66,
    "name": "entry-point-analyzer",
    "summary": "Finds state-changing entry points in smart contracts and categorizes them by access level for security audits.",
    "category": "Security",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add trailofbits/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install entry-point-analyzer@trailofbits"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for entry-point-analyzer:entry-point-analyzer. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "List the state-changing entry points in contracts/ and their access levels.",
        "result": "Claude produces a categorized table of externally callable state-changing functions."
      }
    ],
    "source": "https://github.com/trailofbits/skills/tree/main/plugins/entry-point-analyzer/skills/entry-point-analyzer",
    "author": "Trail of Bits",
    "tags": [
      "smart-contracts",
      "audit",
      "solidity"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at trailofbits/skills/plugins/entry-point-analyzer/skills/entry-point-analyzer via the GitHub API on 2026-10-15; installable via the trailofbits marketplace (plugin entry-point-analyzer)."
  },
  {
    "rank": 67,
    "name": "coverage-analysis",
    "summary": "Measures what a fuzzing campaign reaches using llvm-cov, lcov, or fuzzer output, and turns gaps into harness fixes.",
    "category": "Testing",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add trailofbits/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install testing-handbook-skills@trailofbits"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for testing-handbook-skills:coverage-analysis. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "llvm-cov or lcov"
    ],
    "usage": [
      {
        "prompt": "Show what code our libFuzzer campaign isn't reaching.",
        "result": "Claude generates a coverage report and suggests harness or seed changes for uncovered regions."
      }
    ],
    "source": "https://github.com/trailofbits/skills/tree/main/plugins/testing-handbook-skills/skills/coverage-analysis",
    "author": "Trail of Bits",
    "tags": [
      "fuzzing",
      "coverage",
      "llvm"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at trailofbits/skills/plugins/testing-handbook-skills/skills/coverage-analysis via the GitHub API on 2026-10-15; installable via the trailofbits marketplace (plugin testing-handbook-skills)."
  },
  {
    "rank": 68,
    "name": "find-bugs",
    "summary": "Finds bugs, security vulnerabilities, and code quality issues in the current branch's local changes.",
    "category": "Debugging",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add getsentry/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install sentry-skills@sentry-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for sentry-skills:find-bugs. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "git"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Find bugs in the changes on my current branch.",
        "result": "Claude reviews the branch diff and lists concrete bugs with locations and fixes."
      }
    ],
    "source": "https://github.com/getsentry/skills/tree/main/skills/find-bugs",
    "author": "Sentry",
    "tags": [
      "bugs",
      "review",
      "security"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at getsentry/skills/skills/find-bugs via the GitHub API on 2026-10-15; installable via the sentry-skills marketplace (plugin sentry-skills)."
  },
  {
    "rank": 69,
    "name": "iterate-pr",
    "summary": "Iterates on a pull request until actionable CI passes and high/medium review feedback is addressed.",
    "category": "Git/Version Control",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add getsentry/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install sentry-skills@sentry-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for sentry-skills:iterate-pr. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "GitHub CLI (gh) authenticated"
    ],
    "usage": [
      {
        "prompt": "Iterate on my PR until CI is green.",
        "result": "Claude reads CI failures and review comments, pushes fixes, and repeats until checks pass."
      }
    ],
    "source": "https://github.com/getsentry/skills/tree/main/skills/iterate-pr",
    "author": "Sentry",
    "tags": [
      "pull-request",
      "ci",
      "review"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at getsentry/skills/skills/iterate-pr via the GitHub API on 2026-10-15; installable via the sentry-skills marketplace (plugin sentry-skills)."
  },
  {
    "rank": 70,
    "name": "commit",
    "summary": "Creates Sentry-style conventional commit messages with issue references for every commit request.",
    "category": "Git/Version Control",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add getsentry/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install sentry-skills@sentry-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for sentry-skills:commit. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "git"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Commit these changes.",
        "result": "Claude stages the changes and writes a conventional commit message with an issue reference."
      }
    ],
    "source": "https://github.com/getsentry/skills/tree/main/skills/commit",
    "author": "Sentry",
    "tags": [
      "git",
      "commits",
      "conventional-commits"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at getsentry/skills/skills/commit via the GitHub API on 2026-10-15; installable via the sentry-skills marketplace (plugin sentry-skills)."
  },
  {
    "rank": 71,
    "name": "code-review",
    "summary": "Reviews code following Sentry engineering practices, covering security, performance, testing, and design.",
    "category": "Git/Version Control",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add getsentry/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install sentry-skills@sentry-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for sentry-skills:code-review. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Review the changes in this pull request.",
        "result": "Claude gives structured feedback grouped by security, performance, tests, and design."
      }
    ],
    "source": "https://github.com/getsentry/skills/tree/main/skills/code-review",
    "author": "Sentry",
    "tags": [
      "code-review",
      "quality",
      "pull-request"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at getsentry/skills/skills/code-review via the GitHub API on 2026-10-15; installable via the sentry-skills marketplace (plugin sentry-skills)."
  },
  {
    "rank": 72,
    "name": "pr-writer",
    "summary": "Creates or refreshes reviewer-facing pull request titles and descriptions.",
    "category": "Git/Version Control",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add getsentry/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install sentry-skills@sentry-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for sentry-skills:pr-writer. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "git"
    ],
    "dependencies": [
      "GitHub CLI (gh) for opening or updating PRs"
    ],
    "usage": [
      {
        "prompt": "Write the PR title and description for this branch.",
        "result": "Claude summarizes the change, motivation, and testing in a reviewer-friendly PR body."
      }
    ],
    "source": "https://github.com/getsentry/skills/tree/main/skills/pr-writer",
    "author": "Sentry",
    "tags": [
      "pull-request",
      "writing",
      "git"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at getsentry/skills/skills/pr-writer via the GitHub API on 2026-10-15; installable via the sentry-skills marketplace (plugin sentry-skills)."
  },
  {
    "rank": 73,
    "name": "security-review",
    "summary": "Reviews code for vulnerabilities such as injection, XSS, and authentication or authorization flaws (OWASP-style).",
    "category": "Security",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add getsentry/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install sentry-skills@sentry-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for sentry-skills:security-review. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Do a security review of the API handlers in src/api.",
        "result": "Claude reports vulnerabilities with severity, evidence, and remediation steps."
      }
    ],
    "source": "https://github.com/getsentry/skills/tree/main/skills/security-review",
    "author": "Sentry",
    "tags": [
      "security",
      "owasp",
      "review"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at getsentry/skills/skills/security-review via the GitHub API on 2026-10-15; installable via the sentry-skills marketplace (plugin sentry-skills)."
  },
  {
    "rank": 74,
    "name": "code-simplifier",
    "summary": "Simplifies recently modified code for clarity, consistency, and maintainability while preserving behavior.",
    "category": "Refactoring",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add getsentry/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install sentry-skills@sentry-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for sentry-skills:code-simplifier. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Simplify the code I changed today.",
        "result": "Claude refactors the changed code for readability without altering functionality."
      }
    ],
    "source": "https://github.com/getsentry/skills/tree/main/skills/code-simplifier",
    "author": "Sentry",
    "tags": [
      "refactoring",
      "readability",
      "cleanup"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at getsentry/skills/skills/code-simplifier via the GitHub API on 2026-10-15; installable via the sentry-skills marketplace (plugin sentry-skills)."
  },
  {
    "rank": 75,
    "name": "agents-md",
    "summary": "Creates and maintains concise AGENTS.md and CLAUDE.md project instruction files for coding agents.",
    "category": "Documentation",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add getsentry/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install sentry-skills@sentry-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for sentry-skills:agents-md. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Create an AGENTS.md for this repository.",
        "result": "Claude inspects the repo and writes a concise instruction file with commands and conventions."
      }
    ],
    "source": "https://github.com/getsentry/skills/tree/main/skills/agents-md",
    "author": "Sentry",
    "tags": [
      "agents-md",
      "claude-md",
      "docs"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at getsentry/skills/skills/agents-md via the GitHub API on 2026-10-15; installable via the sentry-skills marketplace (plugin sentry-skills)."
  },
  {
    "rank": 76,
    "name": "gha-security-review",
    "summary": "Reviews GitHub Actions workflows for exploitation risks such as injection and unsafe triggers.",
    "category": "Security",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add getsentry/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install sentry-skills@sentry-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for sentry-skills:gha-security-review. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Audit our .github/workflows for security issues.",
        "result": "Claude flags risky triggers, script injection, and permission problems with fixes."
      }
    ],
    "source": "https://github.com/getsentry/skills/tree/main/skills/gha-security-review",
    "author": "Sentry",
    "tags": [
      "github-actions",
      "ci",
      "security"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at getsentry/skills/skills/gha-security-review via the GitHub API on 2026-10-15; installable via the sentry-skills marketplace (plugin sentry-skills)."
  },
  {
    "rank": 77,
    "name": "claude-settings-audit",
    "summary": "Analyzes a repository to generate recommended Claude Code settings.json permissions for its tech stack.",
    "category": "Productivity",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add getsentry/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install sentry-skills@sentry-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for sentry-skills:claude-settings-audit. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Recommend Claude Code permissions for this repo.",
        "result": "Claude detects the stack and proposes a settings.json allowlist of safe commands."
      }
    ],
    "source": "https://github.com/getsentry/skills/tree/main/skills/claude-settings-audit",
    "author": "Sentry",
    "tags": [
      "settings",
      "permissions",
      "setup"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at getsentry/skills/skills/claude-settings-audit via the GitHub API on 2026-10-15; installable via the sentry-skills marketplace (plugin sentry-skills)."
  },
  {
    "rank": 78,
    "name": "create-branch",
    "summary": "Creates git branches following Sentry naming conventions when starting new work.",
    "category": "Git/Version Control",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add getsentry/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install sentry-skills@sentry-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for sentry-skills:create-branch. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "git"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Create a branch for fixing the login timeout bug.",
        "result": "Claude creates and switches to a conventionally named branch."
      }
    ],
    "source": "https://github.com/getsentry/skills/tree/main/skills/create-branch",
    "author": "Sentry",
    "tags": [
      "git",
      "branches",
      "conventions"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at getsentry/skills/skills/create-branch via the GitHub API on 2026-10-15; installable via the sentry-skills marketplace (plugin sentry-skills)."
  },
  {
    "rank": 79,
    "name": "supabase-postgres-best-practices",
    "summary": "Postgres best practices from Supabase for schema design, indexing, queries, and security, for Postgres anywhere.",
    "category": "Data",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add supabase/agent-skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install postgres-best-practices@supabase-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for postgres-best-practices:supabase-postgres-best-practices. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Design a table for user subscriptions with the right indexes.",
        "result": "Claude writes the migration with appropriate types, constraints, and indexes, explaining each."
      }
    ],
    "source": "https://github.com/supabase/agent-skills/tree/main/skills/supabase-postgres-best-practices",
    "author": "Supabase",
    "tags": [
      "postgres",
      "sql",
      "database",
      "indexes"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at supabase/agent-skills/skills/supabase-postgres-best-practices via the GitHub API on 2026-10-15; installable via the supabase-agent-skills marketplace (plugin postgres-best-practices)."
  },
  {
    "rank": 80,
    "name": "supabase",
    "summary": "Helps with any Supabase task: database, auth, edge functions, realtime, storage, and client libraries.",
    "category": "Backend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add supabase/agent-skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install supabase@supabase-agent-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for supabase:supabase. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "A Supabase project"
    ],
    "dependencies": [
      "supabase-js / @supabase/ssr"
    ],
    "usage": [
      {
        "prompt": "Add email/password auth with Supabase to our Next.js app.",
        "result": "Claude sets up the Supabase client, auth routes, and session handling."
      }
    ],
    "source": "https://github.com/supabase/agent-skills/tree/main/skills/supabase",
    "author": "Supabase",
    "tags": [
      "supabase",
      "auth",
      "edge-functions"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at supabase/agent-skills/skills/supabase via the GitHub API on 2026-10-15; installable via the supabase-agent-skills marketplace (plugin supabase)."
  },
  {
    "rank": 81,
    "name": "cloudflare",
    "summary": "Helps discover and choose Cloudflare products for apps, APIs, AI agents, storage, networking, and security.",
    "category": "Backend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add cloudflare/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install cloudflare@cloudflare"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for cloudflare:cloudflare. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Which Cloudflare products should I use for a file-upload API with auth?",
        "result": "Claude recommends a product combination and explains the architecture."
      }
    ],
    "source": "https://github.com/cloudflare/skills/tree/main/skills/cloudflare",
    "author": "Cloudflare",
    "tags": [
      "cloudflare",
      "architecture",
      "serverless"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at cloudflare/skills/skills/cloudflare via the GitHub API on 2026-10-15; installable via the cloudflare marketplace (plugin cloudflare)."
  },
  {
    "rank": 82,
    "name": "wrangler",
    "summary": "Runs and troubleshoots Wrangler CLI commands for local development, previews, deployment, and resources.",
    "category": "DevOps",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add cloudflare/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install cloudflare@cloudflare"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for cloudflare:wrangler. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "Node.js 18+",
      "A Cloudflare account"
    ],
    "dependencies": [
      "wrangler (npm)"
    ],
    "usage": [
      {
        "prompt": "Deploy this Worker to production with Wrangler.",
        "result": "Claude runs the correct wrangler commands and resolves configuration errors."
      }
    ],
    "source": "https://github.com/cloudflare/skills/tree/main/skills/wrangler",
    "author": "Cloudflare",
    "tags": [
      "wrangler",
      "cloudflare",
      "deploy"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at cloudflare/skills/skills/wrangler via the GitHub API on 2026-10-15; installable via the cloudflare marketplace (plugin cloudflare)."
  },
  {
    "rank": 83,
    "name": "workers-best-practices",
    "summary": "Cloudflare Workers best practices for writing, reviewing, and configuring production applications.",
    "category": "Backend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add cloudflare/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install cloudflare@cloudflare"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for cloudflare:workers-best-practices. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Review my Worker in src/index.ts for production readiness.",
        "result": "Claude flags issues with bindings, error handling, and performance and suggests fixes."
      }
    ],
    "source": "https://github.com/cloudflare/skills/tree/main/skills/workers-best-practices",
    "author": "Cloudflare",
    "tags": [
      "cloudflare",
      "workers",
      "edge"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at cloudflare/skills/skills/workers-best-practices via the GitHub API on 2026-10-15; installable via the cloudflare marketplace (plugin cloudflare)."
  },
  {
    "rank": 84,
    "name": "durable-objects",
    "summary": "Builds, debugs, and reviews Cloudflare Durable Objects code for persistent state and coordination.",
    "category": "Backend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add cloudflare/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install cloudflare@cloudflare"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for cloudflare:durable-objects. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "A Cloudflare account"
    ],
    "dependencies": [
      "wrangler (npm)"
    ],
    "usage": [
      {
        "prompt": "Build a Durable Object that powers a collaborative counter.",
        "result": "Claude writes the Durable Object class, bindings, and Worker routing."
      }
    ],
    "source": "https://github.com/cloudflare/skills/tree/main/skills/durable-objects",
    "author": "Cloudflare",
    "tags": [
      "cloudflare",
      "durable-objects",
      "state"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at cloudflare/skills/skills/durable-objects via the GitHub API on 2026-10-15; installable via the cloudflare marketplace (plugin cloudflare)."
  },
  {
    "rank": 85,
    "name": "agents-sdk",
    "summary": "Builds, debugs, and reviews applications that use the Cloudflare Agents SDK (agents package).",
    "category": "Backend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add cloudflare/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install cloudflare@cloudflare"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for cloudflare:agents-sdk. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "Node.js 18+"
    ],
    "dependencies": [
      "agents (npm)"
    ],
    "usage": [
      {
        "prompt": "Create a chat agent with the Cloudflare Agents SDK.",
        "result": "Claude scaffolds an agent with state and a chat endpoint using the agents package."
      }
    ],
    "source": "https://github.com/cloudflare/skills/tree/main/skills/agents-sdk",
    "author": "Cloudflare",
    "tags": [
      "cloudflare",
      "agents",
      "ai"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at cloudflare/skills/skills/agents-sdk via the GitHub API on 2026-10-15; installable via the cloudflare marketplace (plugin cloudflare)."
  },
  {
    "rank": 86,
    "name": "web-perf",
    "summary": "Audits and optimizes website loading and interaction performance, Core Web Vitals, and Lighthouse scores.",
    "category": "Frontend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add cloudflare/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install cloudflare@cloudflare"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for cloudflare:web-perf. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Why is our LCP 4 seconds on the home page? Fix it.",
        "result": "Claude diagnoses the slow resources and applies targeted performance fixes."
      }
    ],
    "source": "https://github.com/cloudflare/skills/tree/main/skills/web-perf",
    "author": "Cloudflare",
    "tags": [
      "performance",
      "core-web-vitals",
      "lighthouse"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at cloudflare/skills/skills/web-perf via the GitHub API on 2026-10-15; installable via the cloudflare marketplace (plugin cloudflare)."
  },
  {
    "rank": 87,
    "name": "hf-cli",
    "summary": "Uses the Hugging Face Hub CLI (hf) to download, upload, and manage models, datasets, Spaces, repos, and jobs.",
    "category": "Data",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add huggingface/skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install hf-cli@huggingface-skills"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for hf-cli:hf-cli. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "huggingface_hub CLI (hf)"
    ],
    "usage": [
      {
        "prompt": "Download the Qwen tokenizer files from the Hub into ./models.",
        "result": "Claude runs the right hf download command and confirms the files."
      }
    ],
    "source": "https://github.com/huggingface/skills/tree/main/skills/hf-cli",
    "author": "Hugging Face",
    "tags": [
      "huggingface",
      "models",
      "datasets",
      "cli"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at huggingface/skills/skills/hf-cli via the GitHub API on 2026-10-15; installable via the huggingface-skills marketplace (plugin hf-cli)."
  },
  {
    "rank": 88,
    "name": "huggingface-llm-trainer",
    "summary": "Fine-tunes language and vision models with TRL or Unsloth on Hugging Face Jobs, including SFT, DPO, and GRPO.",
    "category": "Data",
    "install": [
      {
        "step": "Clone the source repository to a temporary folder (skipped if it is already there). Steps assume a POSIX shell such as bash or zsh.",
        "command": "[ -d /tmp/skills ] || git clone --depth 1 https://github.com/huggingface/skills.git /tmp/skills"
      },
      {
        "step": "Copy the skill folder into your personal skills directory as ~/.claude/skills/huggingface-llm-trainer/.",
        "command": "mkdir -p ~/.claude/skills/huggingface-llm-trainer && cp -R /tmp/skills/skills/huggingface-llm-trainer/. ~/.claude/skills/huggingface-llm-trainer/"
      },
      {
        "step": "Check SKILL.md starts with YAML front matter containing name and description (already present upstream).",
        "command": "head -n 5 ~/.claude/skills/huggingface-llm-trainer/SKILL.md"
      },
      {
        "step": "Optional: for a project-scoped install, copy it into .claude/skills/huggingface-llm-trainer/ in your repository instead.",
        "command": "mkdir -p .claude/skills/huggingface-llm-trainer && cp -R /tmp/skills/skills/huggingface-llm-trainer/. .claude/skills/huggingface-llm-trainer/"
      },
      {
        "step": "Restart Claude Code so the new skill is discovered.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "git",
      "A Hugging Face account with Jobs access"
    ],
    "dependencies": [
      "hf CLI",
      "trl"
    ],
    "usage": [
      {
        "prompt": "Fine-tune a small model on my dataset with SFT using HF Jobs.",
        "result": "Claude writes the training script and job configuration and launches it."
      }
    ],
    "source": "https://github.com/huggingface/skills/tree/main/skills/huggingface-llm-trainer",
    "author": "Hugging Face",
    "tags": [
      "fine-tuning",
      "trl",
      "llm",
      "training"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at huggingface/skills/skills/huggingface-llm-trainer via the GitHub API on 2026-10-15; installable by copying the skill folder."
  },
  {
    "rank": 89,
    "name": "huggingface-datasets",
    "summary": "Uses the Hugging Face Dataset Viewer API to inspect splits, paginate and search rows, and read statistics.",
    "category": "Data",
    "install": [
      {
        "step": "Clone the source repository to a temporary folder (skipped if it is already there). Steps assume a POSIX shell such as bash or zsh.",
        "command": "[ -d /tmp/skills ] || git clone --depth 1 https://github.com/huggingface/skills.git /tmp/skills"
      },
      {
        "step": "Copy the skill folder into your personal skills directory as ~/.claude/skills/huggingface-datasets/.",
        "command": "mkdir -p ~/.claude/skills/huggingface-datasets && cp -R /tmp/skills/skills/huggingface-datasets/. ~/.claude/skills/huggingface-datasets/"
      },
      {
        "step": "Check SKILL.md starts with YAML front matter containing name and description (already present upstream).",
        "command": "head -n 5 ~/.claude/skills/huggingface-datasets/SKILL.md"
      },
      {
        "step": "Optional: for a project-scoped install, copy it into .claude/skills/huggingface-datasets/ in your repository instead.",
        "command": "mkdir -p .claude/skills/huggingface-datasets && cp -R /tmp/skills/skills/huggingface-datasets/. .claude/skills/huggingface-datasets/"
      },
      {
        "step": "Restart Claude Code so the new skill is discovered.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "git"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Show me the splits and 5 sample rows from the squad dataset.",
        "result": "Claude queries the Dataset Viewer API and prints the metadata and rows."
      }
    ],
    "source": "https://github.com/huggingface/skills/tree/main/skills/huggingface-datasets",
    "author": "Hugging Face",
    "tags": [
      "datasets",
      "huggingface",
      "api"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at huggingface/skills/skills/huggingface-datasets via the GitHub API on 2026-10-15; installable by copying the skill folder."
  },
  {
    "rank": 90,
    "name": "huggingface-gradio",
    "summary": "Builds Gradio web UIs and demos in Python, including components, event listeners, layouts, and chatbots.",
    "category": "Frontend",
    "install": [
      {
        "step": "Clone the source repository to a temporary folder (skipped if it is already there). Steps assume a POSIX shell such as bash or zsh.",
        "command": "[ -d /tmp/skills ] || git clone --depth 1 https://github.com/huggingface/skills.git /tmp/skills"
      },
      {
        "step": "Copy the skill folder into your personal skills directory as ~/.claude/skills/huggingface-gradio/.",
        "command": "mkdir -p ~/.claude/skills/huggingface-gradio && cp -R /tmp/skills/skills/huggingface-gradio/. ~/.claude/skills/huggingface-gradio/"
      },
      {
        "step": "Check SKILL.md starts with YAML front matter containing name and description (already present upstream).",
        "command": "head -n 5 ~/.claude/skills/huggingface-gradio/SKILL.md"
      },
      {
        "step": "Optional: for a project-scoped install, copy it into .claude/skills/huggingface-gradio/ in your repository instead.",
        "command": "mkdir -p .claude/skills/huggingface-gradio && cp -R /tmp/skills/skills/huggingface-gradio/. .claude/skills/huggingface-gradio/"
      },
      {
        "step": "Restart Claude Code so the new skill is discovered.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "git",
      "Python 3"
    ],
    "dependencies": [
      "gradio"
    ],
    "usage": [
      {
        "prompt": "Build a Gradio demo for our image classifier.",
        "result": "Claude writes a Gradio app with upload input and labeled output."
      }
    ],
    "source": "https://github.com/huggingface/skills/tree/main/skills/huggingface-gradio",
    "author": "Hugging Face",
    "tags": [
      "gradio",
      "python",
      "demo",
      "ui"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at huggingface/skills/skills/huggingface-gradio via the GitHub API on 2026-10-15; installable by copying the skill folder."
  },
  {
    "rank": 91,
    "name": "transformers-js",
    "summary": "Runs ML models directly in JavaScript/TypeScript with Transformers.js for NLP, vision, and audio tasks.",
    "category": "Frontend",
    "install": [
      {
        "step": "Clone the source repository to a temporary folder (skipped if it is already there). Steps assume a POSIX shell such as bash or zsh.",
        "command": "[ -d /tmp/skills ] || git clone --depth 1 https://github.com/huggingface/skills.git /tmp/skills"
      },
      {
        "step": "Copy the skill folder into your personal skills directory as ~/.claude/skills/transformers-js/.",
        "command": "mkdir -p ~/.claude/skills/transformers-js && cp -R /tmp/skills/skills/transformers-js/. ~/.claude/skills/transformers-js/"
      },
      {
        "step": "Check SKILL.md starts with YAML front matter containing name and description (already present upstream).",
        "command": "head -n 5 ~/.claude/skills/transformers-js/SKILL.md"
      },
      {
        "step": "Optional: for a project-scoped install, copy it into .claude/skills/transformers-js/ in your repository instead.",
        "command": "mkdir -p .claude/skills/transformers-js && cp -R /tmp/skills/skills/transformers-js/. .claude/skills/transformers-js/"
      },
      {
        "step": "Restart Claude Code so the new skill is discovered.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "git",
      "Node.js 18+"
    ],
    "dependencies": [
      "@huggingface/transformers (npm)"
    ],
    "usage": [
      {
        "prompt": "Add in-browser sentiment analysis to our React app.",
        "result": "Claude adds a Transformers.js pipeline and wires it to the UI."
      }
    ],
    "source": "https://github.com/huggingface/skills/tree/main/skills/transformers-js",
    "author": "Hugging Face",
    "tags": [
      "javascript",
      "ml",
      "browser"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at huggingface/skills/skills/transformers-js via the GitHub API on 2026-10-15; installable by copying the skill folder."
  },
  {
    "rank": 92,
    "name": "expo-router",
    "summary": "Expo Router navigation: file-based and dynamic routes, groups, native stacks, tabs, modals, and headers.",
    "category": "Frontend",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install expo@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for expo:expo-router. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "Node.js 18+"
    ],
    "dependencies": [
      "expo-router"
    ],
    "usage": [
      {
        "prompt": "Add a tab layout with Home and Settings using Expo Router.",
        "result": "Claude creates the route files and tab layout with correct conventions."
      }
    ],
    "source": "https://github.com/expo/skills/tree/main/plugins/expo/skills/expo-router",
    "author": "Expo",
    "tags": [
      "expo",
      "react-native",
      "navigation"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at expo/skills/plugins/expo/skills/expo-router via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin expo)."
  },
  {
    "rank": 93,
    "name": "eas-update",
    "summary": "Configures EAS Update for over-the-air JavaScript and asset updates and publishing to release channels.",
    "category": "DevOps",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install expo@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for expo:eas-update. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "An Expo account"
    ],
    "dependencies": [
      "eas-cli",
      "expo-updates"
    ],
    "usage": [
      {
        "prompt": "Set up EAS Update with preview and production channels.",
        "result": "Claude configures expo-updates and channels and shows the publish commands."
      }
    ],
    "source": "https://github.com/expo/skills/tree/main/plugins/expo/skills/eas-update",
    "author": "Expo",
    "tags": [
      "expo",
      "ota",
      "eas"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at expo/skills/plugins/expo/skills/eas-update via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin expo)."
  },
  {
    "rank": 94,
    "name": "eas-workflows",
    "summary": "Helps write EAS workflow YAML files for Expo CI/CD build and deploy pipelines.",
    "category": "DevOps",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install expo@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for expo:eas-workflows. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "An Expo account"
    ],
    "dependencies": [
      "eas-cli"
    ],
    "usage": [
      {
        "prompt": "Create an EAS workflow that builds iOS and Android on every push to main.",
        "result": "Claude writes a .eas/workflows YAML file with build jobs."
      }
    ],
    "source": "https://github.com/expo/skills/tree/main/plugins/expo/skills/eas-workflows",
    "author": "Expo",
    "tags": [
      "expo",
      "ci-cd",
      "eas"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at expo/skills/plugins/expo/skills/eas-workflows via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin expo)."
  },
  {
    "rank": 95,
    "name": "expo-upgrade",
    "summary": "Guidelines for upgrading Expo SDK versions and fixing the dependency issues that follow.",
    "category": "Refactoring",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-plugins-official"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install expo@claude-plugins-official"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for expo:expo-upgrade. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "Node.js 18+"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Upgrade this app to the latest Expo SDK.",
        "result": "Claude bumps the SDK, aligns dependencies, and fixes breaking changes."
      }
    ],
    "source": "https://github.com/expo/skills/tree/main/plugins/expo/skills/expo-upgrade",
    "author": "Expo",
    "tags": [
      "expo",
      "upgrade",
      "dependencies"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at expo/skills/plugins/expo/skills/expo-upgrade via the GitHub API on 2026-10-15; installable via the claude-plugins-official marketplace (plugin expo)."
  },
  {
    "rank": 96,
    "name": "terraform-style-guide",
    "summary": "Generates and reviews Terraform HCL following HashiCorp's official style conventions and best practices.",
    "category": "DevOps",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add hashicorp/agent-skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install terraform@hashicorp"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for terraform:terraform-style-guide. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "Terraform CLI"
    ],
    "usage": [
      {
        "prompt": "Write Terraform for an S3 bucket with versioning, following the style guide.",
        "result": "Claude produces idiomatic, well-organized HCL that follows HashiCorp conventions."
      }
    ],
    "source": "https://github.com/hashicorp/agent-skills/tree/main/plugins/terraform/skills/terraform-style-guide",
    "author": "HashiCorp",
    "tags": [
      "terraform",
      "hcl",
      "iac"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at hashicorp/agent-skills/plugins/terraform/skills/terraform-style-guide via the GitHub API on 2026-10-15; installable via the hashicorp marketplace (plugin terraform)."
  },
  {
    "rank": 97,
    "name": "terraform-test",
    "summary": "Writes and runs Terraform tests (.tftest.hcl) with run blocks, assertions, and mocked providers.",
    "category": "Testing",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add hashicorp/agent-skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install terraform@hashicorp"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for terraform:terraform-test. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "Terraform CLI 1.6+"
    ],
    "usage": [
      {
        "prompt": "Add Terraform tests for our VPC module.",
        "result": "Claude writes .tftest.hcl files with assertions and runs terraform test."
      }
    ],
    "source": "https://github.com/hashicorp/agent-skills/tree/main/plugins/terraform/skills/terraform-test",
    "author": "HashiCorp",
    "tags": [
      "terraform",
      "testing",
      "iac"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at hashicorp/agent-skills/plugins/terraform/skills/terraform-test via the GitHub API on 2026-10-15; installable via the hashicorp marketplace (plugin terraform)."
  },
  {
    "rank": 98,
    "name": "refactor-module",
    "summary": "Transforms monolithic Terraform configurations into reusable modules following HashiCorp module design principles.",
    "category": "Refactoring",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add hashicorp/agent-skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install terraform@hashicorp"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for terraform:refactor-module. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [
      "Terraform CLI"
    ],
    "usage": [
      {
        "prompt": "Refactor main.tf into reusable network and compute modules.",
        "result": "Claude extracts modules with inputs/outputs and adds moved blocks to preserve state."
      }
    ],
    "source": "https://github.com/hashicorp/agent-skills/tree/main/plugins/terraform/skills/refactor-module",
    "author": "HashiCorp",
    "tags": [
      "terraform",
      "modules",
      "refactoring"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at hashicorp/agent-skills/plugins/terraform/skills/refactor-module via the GitHub API on 2026-10-15; installable via the hashicorp marketplace (plugin terraform)."
  },
  {
    "rank": 99,
    "name": "new-terraform-provider",
    "summary": "Scaffolds a new Terraform provider with the Plugin Framework: Go module, server main.go, and provider schema.",
    "category": "Code Generation",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add hashicorp/agent-skills"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install terraform@hashicorp"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for terraform:new-terraform-provider. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in",
      "Go"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Scaffold a Terraform provider for our internal inventory API.",
        "result": "Claude creates the Go module layout, provider server, and schema with Configure."
      }
    ],
    "source": "https://github.com/hashicorp/agent-skills/tree/main/plugins/terraform/skills/new-terraform-provider",
    "author": "HashiCorp",
    "tags": [
      "terraform",
      "go",
      "providers"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at hashicorp/agent-skills/plugins/terraform/skills/new-terraform-provider via the GitHub API on 2026-10-15; installable via the hashicorp marketplace (plugin terraform)."
  },
  {
    "rank": 100,
    "name": "claude-opus-4-5-migration",
    "summary": "Migrates prompts and code from Sonnet 4.0/4.5 or Opus 4.1 to Opus 4.5, updating model strings and prompts.",
    "category": "Code Generation",
    "install": [
      {
        "step": "In Claude Code, add the marketplace that lists this plugin (skip if already added).",
        "command": "/plugin marketplace add anthropics/claude-code"
      },
      {
        "step": "Install the plugin that ships this skill.",
        "command": "/plugin install claude-opus-4-5-migration@claude-code-plugins"
      },
      {
        "step": "Restart Claude Code so the skill is discovered.",
        "command": null
      },
      {
        "step": "Confirm it loaded: ask Claude \"Which skills do you have available?\" and look for claude-opus-4-5-migration:claude-opus-4-5-migration. The SKILL.md front matter (name, description) ships with the plugin; no extra configuration is needed.",
        "command": null
      }
    ],
    "prerequisites": [
      "Claude Code installed and signed in"
    ],
    "dependencies": [],
    "usage": [
      {
        "prompt": "Migrate our API calls from Sonnet 4.5 to Opus 4.5.",
        "result": "Claude updates model IDs and adjusts prompts per the migration guidance."
      }
    ],
    "source": "https://github.com/anthropics/claude-code/tree/main/plugins/claude-opus-4-5-migration/skills/claude-opus-4-5-migration",
    "author": "Anthropic",
    "tags": [
      "migration",
      "anthropic",
      "models"
    ],
    "verified": true,
    "verificationNote": "SKILL.md confirmed at anthropics/claude-code/plugins/claude-opus-4-5-migration/skills/claude-opus-4-5-migration via the GitHub API on 2026-10-15; installable via the claude-code-plugins marketplace (plugin claude-opus-4-5-migration)."
  }
];
