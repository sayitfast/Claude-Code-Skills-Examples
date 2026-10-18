/*
 * data/plugins.js
 * Every plugin in the official Claude Code marketplace (anthropics/claude-plugins-official),
 * generated from its .claude-plugin/marketplace.json on 2026-10-15, sorted by name.
 * The value assigned to window.PLUGINS is a plain JSON array (double quotes, no trailing commas).
 * A .js file is used instead of .json because fetch() of local files is blocked under file://.
 */
window.PLUGINS = [
 {
  "name": "42crunch-api-security-testing",
  "summary": "Automate API security directly in Claude Code with 42Crunch - automatically audit OpenAPI specs, detect vulnerabilities aligned with OWASP API Security risks…",
  "description": "Automate API security directly in Claude Code with 42Crunch - automatically audit OpenAPI specs, detect vulnerabilities aligned with OWASP API Security risks (including BOLA/BFLA), and apply AI-powered fixes. Designed for AI-assisted development workflows, it provides continuous guardrails through an audit->scan->remediate->validate loop, ensuring APIs meet enterprise security standards before deployment.",
  "category": "Security",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install 42crunch-api-security-testing@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/42Crunch-AI/claude-plugins/tree/v1.5.5/plugins/api-security-testing",
  "homepage": "https://42crunch.com",
  "author": "42Crunch",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "activecampaign",
  "summary": "Marketing automation, CRM, and email marketing powered by ActiveCampaign. Manage contacts, campaigns, automations, deals, and get AI-powered marketing…",
  "description": "Marketing automation, CRM, and email marketing powered by ActiveCampaign. Manage contacts, campaigns, automations, deals, and get AI-powered marketing insights — all from Claude.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install activecampaign@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/ActiveCampaign/activecampaign-plugin",
  "homepage": "https://www.activecampaign.com",
  "author": "ActiveCampaign",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "adobe-for-creativity",
  "summary": "Harness Adobe's creative AI-powered tools to edit images, automate design workflows, and bring creative visions to life — from background removal to…",
  "description": "Harness Adobe's creative AI-powered tools to edit images, automate design workflows, and bring creative visions to life — from background removal to vectorization and professional retouching.",
  "category": "Design",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install adobe-for-creativity@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/adobe/skills/tree/main/plugins/creative-cloud/adobe-for-creativity",
  "homepage": "https://github.com/adobe/skills/tree/main/plugins/creative-cloud/adobe-for-creativity",
  "author": "Adobe",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "agent-sdk-dev",
  "summary": "Development kit for working with the Claude Agent SDK",
  "description": "Development kit for working with the Claude Agent SDK",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install agent-sdk-dev@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/agent-sdk-dev",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/plugins/agent-sdk-dev",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "agentforce-adlc",
  "summary": "Agentforce Agent Development Life Cycle — author, discover, scaffold, deploy, test, and optimize .agent files",
  "description": "Agentforce Agent Development Life Cycle — author, discover, scaffold, deploy, test, and optimize .agent files",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install agentforce-adlc@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/SalesforceAIResearch/agentforce-adlc",
  "homepage": "https://github.com/SalesforceAIResearch/agentforce-adlc",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "ai-plugins",
  "summary": "Set up endorctl and use Endor Labs to scan, prioritize, and fix security risks across your software supply chain",
  "description": "Set up endorctl and use Endor Labs to scan, prioritize, and fix security risks across your software supply chain",
  "category": "Other",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install ai-plugins@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/endorlabs/ai-plugins",
  "homepage": "https://www.endorlabs.com",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "aikido",
  "summary": "Aikido Security scanning for Claude Code — SAST, secrets, and IaC vulnerability detection powered by the Aikido MCP server.",
  "description": "Aikido Security scanning for Claude Code — SAST, secrets, and IaC vulnerability detection powered by the Aikido MCP server.",
  "category": "Other",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install aikido@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/AikidoSec/aikido-claude-plugin",
  "homepage": "https://github.com/AikidoSec/aikido-claude-plugin",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "airtable",
  "summary": "Airtable is the database and operations layer for your agents — whether running product, marketing, sales, ops, HR, or a custom business app. It combines…",
  "description": "Airtable is the database and operations layer for your agents — whether running product, marketing, sales, ops, HR, or a custom business app. It combines structured data with multiplayer visual surfaces (grid, kanban, calendar, gallery, timeline) humans and agents share — plus sync integrations to Jira, Salesforce, Zendesk, Google Drive, Databricks, and the rest of your stack, all backed by enterprise governance. This plugin makes Claude fluent in Airtable: creating bases and schema, working with records, and sharing UI for collaboration. Bundles the official Airtable MCP server.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install airtable@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/Airtable/skills/tree/main/plugins/airtable",
  "homepage": "https://www.airtable.com",
  "author": "Airtable",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "airwallex-agentos",
  "summary": "Bring Airwallex's global financial infrastructure to Claude. Orchestrate actions across your account in plain language, e.g., set up invoices from a PO…",
  "description": "Bring Airwallex's global financial infrastructure to Claude. Orchestrate actions across your account in plain language, e.g., set up invoices from a PO, onboard suppliers from invoices, and check current cash position across currencies. AgentOS bundles pre-built finance Skills with MCP servers. A public CLI connects your agent to Airwallex's capabilities.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install airwallex-agentos@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/airwallex/airwallex-marketplace/tree/master/plugins/airwallex-agentos",
  "homepage": "https://www.airwallex.com/docs",
  "author": "Airwallex",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "airwallex-dev",
  "summary": "Build Airwallex payment integrations in your own codebase. Generates the checkout, card-element, onboarding, and subscription-billing code for an Airwallex…",
  "description": "Build Airwallex payment integrations in your own codebase. Generates the checkout, card-element, onboarding, and subscription-billing code for an Airwallex integration and wires it into your project: Hosted Payment Page, Drop-in and Split Card elements, connected-account KYC onboarding, and Billing Hosted Checkout for subscriptions and card-saving. Also plans card-on-file merchant-initiated flows for AI providers such as top-ups and auto-recharge.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install airwallex-dev@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/airwallex/airwallex-marketplace/tree/master/plugins/airwallex-dev",
  "homepage": "https://www.airwallex.com/docs",
  "author": "Airwallex",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "aiven",
  "summary": "Easily deploy managed PostgreSQL (pg), Kafka, OpenSearch, Clickhouse and other databases, streaming and apps. Free tier available, up and running in minutes.",
  "description": "Easily deploy managed PostgreSQL (pg), Kafka, OpenSearch, Clickhouse and other databases, streaming and apps. Free tier available, up and running in minutes.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install aiven@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/aiven/aiven-ai-plugins",
  "homepage": "https://aiven.io",
  "author": "Aiven",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "alloydb",
  "summary": "Create, connect, and interact with an AlloyDB for PostgreSQL database and data.",
  "description": "Create, connect, and interact with an AlloyDB for PostgreSQL database and data.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install alloydb@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/gemini-cli-extensions/alloydb",
  "homepage": "https://cloud.google.com/alloydb",
  "author": "Google LLC",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "alloydb-omni",
  "summary": "Create, connect, and interact with an AlloyDB Omni database and data.",
  "description": "Create, connect, and interact with an AlloyDB Omni database and data.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install alloydb-omni@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/gemini-cli-extensions/alloydb-omni",
  "homepage": "https://github.com/gemini-cli-extensions/alloydb-omni",
  "author": "Google LLC",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "altimate-code",
  "summary": "Delegates dbt and warehouse work to altimate-code, a specialized CLI agent with 100+ purpose-built data tools (SQL analysis, column-level lineage, dbt…",
  "description": "Delegates dbt and warehouse work to altimate-code, a specialized CLI agent with 100+ purpose-built data tools (SQL analysis, column-level lineage, dbt build/test/run, warehouse profiling, FinOps, connectivity to Snowflake, BigQuery, Redshift, Databricks, Postgres, MySQL, DuckDB).",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install altimate-code@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/AltimateAI/altimate-claude-plugin/tree/main/plugins/altimate-code",
  "homepage": "https://www.altimate.ai",
  "author": "AltimateAI",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "amazon-location-service",
  "summary": "Guide developers through adding maps, places search, geocoding, routing, and other geospatial features with Amazon Location Service, including authentication…",
  "description": "Guide developers through adding maps, places search, geocoding, routing, and other geospatial features with Amazon Location Service, including authentication setup, SDK integration, and best practices.",
  "category": "Location",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install amazon-location-service@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/awslabs/agent-plugins/tree/main/plugins/amazon-location-service",
  "homepage": "https://github.com/awslabs/agent-plugins",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "amazon-selling-partner",
  "summary": "Connect your Amazon Seller Central account to Claude. Ask about sales, inventory, and listing performance and get recommendations grounded in your own data…",
  "description": "Connect your Amazon Seller Central account to Claude. Ask about sales, inventory, and listing performance and get recommendations grounded in your own data, then review and approve every listing, inventory or FBA action before it runs. Bundles the Amazon Selling Partner MCP server (Seller Central OAuth on first use). Currently in beta.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install amazon-selling-partner@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/amzn/selling-partner-agentic-toolkit",
  "homepage": "https://github.com/amzn/selling-partner-agentic-toolkit",
  "author": "Amazon",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "amd-skills",
  "summary": "AMD's verified Agent Skills in one plugin: route image/audio through local AI on Ryzen AI, serve LLMs on AMD Instinct GPUs with vLLM, optimize inference…",
  "description": "AMD's verified Agent Skills in one plugin: route image/audio through local AI on Ryzen AI, serve LLMs on AMD Instinct GPUs with vLLM, optimize inference throughput with Hyperloom, and analyze GPU kernel and PyTorch trace performance.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install amd-skills@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/amd/skills/tree/main/skills",
  "homepage": "https://developer.amd.com/",
  "author": "AMD",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "amplitude",
  "summary": "Use Amplitude as an expert analyst — instrument Amplitude, discover product opportunities, analyze charts, create dashboards, manage experiments, and…",
  "description": "Use Amplitude as an expert analyst — instrument Amplitude, discover product opportunities, analyze charts, create dashboards, manage experiments, and understand users and accounts.",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install amplitude@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/amplitude/mcp-marketplace/tree/main/plugins/amplitude",
  "homepage": "https://github.com/amplitude/mcp-marketplace",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "apollo",
  "summary": "Prospect, enrich leads, load outreach sequences, and query sales analytics with Apollo.io — one-click MCP server integration for Claude Code and Cowork.",
  "description": "Prospect, enrich leads, load outreach sequences, and query sales analytics with Apollo.io — one-click MCP server integration for Claude Code and Cowork.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install apollo@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/apolloio/apollo-mcp-plugin",
  "homepage": "https://www.apollo.io/",
  "author": "Apollo.io",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "apollo-skills",
  "summary": "Apollo GraphQL agent skills for Claude Code — Apollo Client, Server, Federation, Connectors, Router, Rover CLI, iOS, Kotlin, and the Apollo MCP server. Covers…",
  "description": "Apollo GraphQL agent skills for Claude Code — Apollo Client, Server, Federation, Connectors, Router, Rover CLI, iOS, Kotlin, and the Apollo MCP server. Covers schema design, query optimization, and GraphQL best practices.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install apollo-skills@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/apollographql/skills",
  "homepage": "https://www.apollographql.com",
  "author": "Apollo GraphQL",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "appwrite",
  "summary": "Appwrite tools for Claude Code, including SDK skills, Appwrite MCP servers, and deployment commands.",
  "description": "Appwrite tools for Claude Code, including SDK skills, Appwrite MCP servers, and deployment commands.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install appwrite@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/appwrite/claude-plugin",
  "homepage": "https://appwrite.io",
  "author": "Appwrite",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "asana",
  "summary": "Asana project management integration. Connects Claude Code to Asana's V2 MCP server to create and manage tasks, search projects, update assignments, and track…",
  "description": "Asana project management integration. Connects Claude Code to Asana's V2 MCP server to create and manage tasks, search projects, update assignments, and track progress. Requires a one-time Asana OAuth app setup — run /asana-setup after installing.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install asana@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/asana",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/external_plugins/asana",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "astronomer-data-agents",
  "summary": "Data engineering for Apache Airflow and Astronomer. Author DAGs with best practices, debug pipeline failures, trace data lineage, profile tables, migrate…",
  "description": "Data engineering for Apache Airflow and Astronomer. Author DAGs with best practices, debug pipeline failures, trace data lineage, profile tables, migrate Airflow 2 to 3, and manage local and cloud deployments.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install astronomer-data-agents@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/astronomer/agents",
  "homepage": "https://github.com/astronomer/agents",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "atlan",
  "summary": "Atlan data catalog plugin for Claude Code. Search, explore, govern, and manage your data assets through natural language. Powered by the Atlan MCP server with…",
  "description": "Atlan data catalog plugin for Claude Code. Search, explore, govern, and manage your data assets through natural language. Powered by the Atlan MCP server with semantic search, lineage traversal, glossary management, data quality rules, and more.",
  "category": "Other",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install atlan@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/atlanhq/agent-toolkit",
  "homepage": "https://docs.atlan.com/",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "atlassian",
  "summary": "Connect to Atlassian products including Jira and Confluence. Search and create issues, access documentation, manage sprints, and integrate your development…",
  "description": "Connect to Atlassian products including Jira and Confluence. Search and create issues, access documentation, manage sprints, and integrate your development workflow with Atlassian's collaboration tools.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install atlassian@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/atlassian/atlassian-mcp-server",
  "homepage": "https://github.com/atlassian/atlassian-mcp-server",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "atlassian-twg-cli",
  "summary": "Teamwork Graph CLI is Atlassian's agent-first interface to your entire work context: Jira issues, Confluence pages, Bitbucket PRs, along with your connected…",
  "description": "Teamwork Graph CLI is Atlassian's agent-first interface to your entire work context: Jira issues, Confluence pages, Bitbucket PRs, along with your connected third-party data sources. Purpose-built for coding agents like Claude Code (terminal or desktop), and powered by Atlassian's context graph. Try: \"draft a Jira issue from this PR and link it to the epic.\" Using Claude Code in the browser? Install the Atlassian Rovo MCP plugin instead. Run /twg-setup after install to connect Atlassian Teamwork Graph CLI to Claude Code.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install atlassian-twg-cli@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/atlassian-labs/twg-plugins",
  "homepage": "https://developer.atlassian.com/cloud/twg-cli/",
  "author": "Atlassian",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "atomic-agents",
  "summary": "Comprehensive development workflow for building AI agents with the Atomic Agents framework. Includes specialized agents for schema design, architecture…",
  "description": "Comprehensive development workflow for building AI agents with the Atomic Agents framework. Includes specialized agents for schema design, architecture planning, code review, and tool development. Features guided workflows, progressive-disclosure skills, and best practice validation.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install atomic-agents@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/BrainBlend-AI/atomic-agents",
  "homepage": "https://github.com/BrainBlend-AI/atomic-agents",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "auth0",
  "summary": "Enterprise-grade auth, easy to implement. Add login, SSO, MFA, and access control to any app with framework-aware guidance.",
  "description": "Enterprise-grade auth, easy to implement. Add login, SSO, MFA, and access control to any app with framework-aware guidance.",
  "category": "Security",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install auth0@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/auth0/agent-skills/tree/main/plugins/auth0",
  "homepage": "https://auth0.com",
  "author": "Auth0",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "aws-agents",
  "summary": "Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with Amazon Bedrock AgentCore, connecting tools, memory, policies, evaluation…",
  "description": "Build, deploy, and operate AI agents on AWS. Skills for scaffolding agents with Amazon Bedrock AgentCore, connecting tools, memory, policies, evaluation, debugging, and production hardening.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install aws-agents@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/aws/agent-toolkit-for-aws/tree/main/plugins/aws-agents",
  "homepage": "https://github.com/aws/agent-toolkit-for-aws",
  "author": "Amazon Web Services",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "aws-agents-for-devsecops",
  "summary": "Investigate incidents, review code and execute UAT for release readiness, scan code for vulnerabilities, and run penetration tests with AWS DevOps Agent and…",
  "description": "Investigate incidents, review code and execute UAT for release readiness, scan code for vulnerabilities, and run penetration tests with AWS DevOps Agent and AWS Security Agent.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install aws-agents-for-devsecops@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/aws/agent-toolkit-for-aws/tree/main/plugins/aws-agents-for-devsecops",
  "homepage": "https://github.com/aws/agent-toolkit-for-aws",
  "author": "Amazon Web Services",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "aws-amplify",
  "summary": "Build full-stack apps with AWS Amplify Gen 2 using guided workflows for authentication, data models, storage, GraphQL APIs, and Lambda functions.",
  "description": "Build full-stack apps with AWS Amplify Gen 2 using guided workflows for authentication, data models, storage, GraphQL APIs, and Lambda functions.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install aws-amplify@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/awslabs/agent-plugins/tree/main/plugins/aws-amplify",
  "homepage": "https://github.com/awslabs/agent-plugins",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "aws-core",
  "summary": "Build, deploy, and operate applications on AWS. Skills to author infrastructure-as-code, use core services, and complete common tasks.",
  "description": "Build, deploy, and operate applications on AWS. Skills to author infrastructure-as-code, use core services, and complete common tasks.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install aws-core@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/aws/agent-toolkit-for-aws/tree/main/plugins/aws-core",
  "homepage": "https://github.com/aws/agent-toolkit-for-aws",
  "author": "Amazon Web Services",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "aws-data-analytics",
  "summary": "Data lake, analytics, and ETL workflows with S3 Tables, AWS Glue, and Athena.",
  "description": "Data lake, analytics, and ETL workflows with S3 Tables, AWS Glue, and Athena.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install aws-data-analytics@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/aws/agent-toolkit-for-aws/tree/main/plugins/aws-data-analytics",
  "homepage": "https://github.com/aws/agent-toolkit-for-aws",
  "author": "Amazon Web Services",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "aws-serverless",
  "summary": "Design, build, deploy, test, and debug serverless applications with AWS Serverless services.",
  "description": "Design, build, deploy, test, and debug serverless applications with AWS Serverless services.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install aws-serverless@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/awslabs/agent-plugins/tree/main/plugins/aws-serverless",
  "homepage": "https://github.com/awslabs/agent-plugins",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "aws-startup-advisor",
  "summary": "Personalized AWS guidance built on patterns from 350,000+ startups. Get architecture, cost, and security recommendations matched to your stage, from day-one…",
  "description": "Personalized AWS guidance built on patterns from 350,000+ startups. Get architecture, cost, and security recommendations matched to your stage, from day-one account setup to production-ready infrastructure. Migrate to AWS from Azure, GCP, or Heroku with resource discovery, cost estimates, and generated Terraform. Move OpenAI, Azure OpenAI, and Gemini code to Amazon Bedrock, and plan and prototype AI agents on AgentCore and other AWS runtimes. Includes AWS Activate credits eligibility, 60+ exclusive startup offers, and multi-account, multi-region support. Built by AWS Startup Solutions Architects.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install aws-startup-advisor@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/aws/agent-toolkit-for-aws/tree/main/plugins/aws-startup-advisor",
  "homepage": "https://github.com/aws/agent-toolkit-for-aws",
  "author": "Amazon Web Services",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "aws-transform",
  "summary": "Migrate, modernize, and upgrade codebases to AWS. Transforms .NET Framework to .NET 8/10, mainframe COBOL to Java, VMware VMs to EC2, SQL Server to Aurora…",
  "description": "Migrate, modernize, and upgrade codebases to AWS. Transforms .NET Framework to .NET 8/10, mainframe COBOL to Java, VMware VMs to EC2, SQL Server to Aurora, and upgrades Java/Python/Node.js versions and AWS SDKs. AWS Transform - continuous modernization analyzes codebases for tech debt, security issues, and upgrade opportunities, then remediates them.",
  "category": "Migration",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install aws-transform@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/awslabs/agent-plugins/tree/main/plugins/aws-transform",
  "homepage": "https://github.com/awslabs/agent-plugins",
  "author": "Amazon Web Services",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "azure",
  "summary": "Transform Claude into an Azure expert. This plugin integrates the Azure MCP server and specialized Azure skills to move beyond generic advice. It enables…",
  "description": "Transform Claude into an Azure expert. This plugin integrates the Azure MCP server and specialized Azure skills to move beyond generic advice. It enables Claude to perform real-world tasks: listing resources, validating deployments, diagnosing infrastructure issues, and optimizing costs across 50+ Azure services.",
  "category": "Deployment",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install azure@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/microsoft/azure-skills",
  "homepage": "https://github.com/microsoft/azure-skills",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "azure-cosmos-db-assistant",
  "summary": "Expert assistant for Azure Cosmos DB — data modeling, query optimization, performance tuning, and best practices.",
  "description": "Expert assistant for Azure Cosmos DB — data modeling, query optimization, performance tuning, and best practices.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install azure-cosmos-db-assistant@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/AzureCosmosDB/cosmosdb-claude-code-plugin",
  "homepage": "https://github.com/AzureCosmosDB/cosmosdb-claude-code-plugin",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "azure-sql-developer",
  "summary": "Agent skills for Azure SQL Developer, the Azure SQL Database engine running locally in a container. Teaches your agent to run the engine, connect, migrate…",
  "description": "Agent skills for Azure SQL Developer, the Azure SQL Database engine running locally in a container. Teaches your agent to run the engine, connect, migrate, scaffold, build RAG, wire CI, and go local-to-cloud, using the real Private Preview image instead of the SQL Server image.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install azure-sql-developer@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/microsoft/azure-sql-database-container",
  "homepage": "https://github.com/microsoft/azure-sql-database-container",
  "author": "Microsoft",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "base44",
  "summary": "Build and deploy Base44 full-stack apps with CLI project management and JavaScript/TypeScript SDK development skills",
  "description": "Build and deploy Base44 full-stack apps with CLI project management and JavaScript/TypeScript SDK development skills",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install base44@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/base44/skills",
  "homepage": "https://docs.base44.com",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "bigdata-com",
  "summary": "Official Bigdata.com plugin providing financial research, analytics, and intelligence tools powered by Bigdata MCP.",
  "description": "Official Bigdata.com plugin providing financial research, analytics, and intelligence tools powered by Bigdata MCP.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install bigdata-com@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/Bigdata-com/bigdata-plugins-marketplace/tree/main/plugins/bigdata-com",
  "homepage": "https://docs.bigdata.com",
  "author": "RavenPack",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "bigquery-data-analytics",
  "summary": "Connect, query, and generate data insights for BigQuery datasets and data.",
  "description": "Connect, query, and generate data insights for BigQuery datasets and data.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install bigquery-data-analytics@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/gemini-cli-extensions/bigquery-data-analytics",
  "homepage": "https://github.com/gemini-cli-extensions/bigquery-data-analytics",
  "author": "Google LLC",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "blackrock-advisor-center-plugin",
  "summary": "BlackRock Advisor Center 360° skills for financial advisors: portfolio review, opportunity and fund-health checks, guided benchmark selection, guided…",
  "description": "BlackRock Advisor Center 360° skills for financial advisors: portfolio review, opportunity and fund-health checks, guided benchmark selection, guided portfolio building, wealth projections, and routing to Advisor Center web workflows. Requires the BlackRock Advisor Center connector and an Advisor Center account.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install blackrock-advisor-center-plugin@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/blackrock/advisor-center-agent-skills",
  "homepage": "https://github.com/blackrock/advisor-center-agent-skills",
  "author": "BlackRock Advisor Center",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "boltz",
  "summary": "Predict structures, screen molecules and proteins, and design binders with Boltz from Claude Code.",
  "description": "Predict structures, screen molecules and proteins, and design binders with Boltz from Claude Code.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install boltz@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/boltz-bio/boltz-api-skills/tree/main/plugins/boltz",
  "homepage": "https://boltz.bio",
  "author": "Boltz",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "box",
  "summary": "Work with your Box content directly from Claude Code — search files, organize folders, collaborate with your team, and use Box AI to answer questions…",
  "description": "Work with your Box content directly from Claude Code — search files, organize folders, collaborate with your team, and use Box AI to answer questions, summarize documents, and extract data without leaving your workflow.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install box@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/box/skills",
  "homepage": "https://github.com/box/skills",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "brightdata-plugin",
  "summary": "Web scraping, Google search, structured data extraction, and MCP server integration powered by Bright Data. Includes 7 skills: scrape any webpage as markdown…",
  "description": "Web scraping, Google search, structured data extraction, and MCP server integration powered by Bright Data. Includes 7 skills: scrape any webpage as markdown (with bot detection/CAPTCHA bypass), search Google with structured JSON results, extract data from 40+ websites (Amazon, LinkedIn, Instagram, TikTok, YouTube, and more), orchestrate Bright Data's 60+ MCP tools, built-in best practices for Web Unlocker, SERP API, Web Scraper API, and Browser API, Python SDK best practices for the brightda...",
  "category": "Other",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install brightdata-plugin@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/brightdata/skills",
  "homepage": "https://docs.brightdata.com",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "browser-use",
  "summary": "Give Claude a real browser — your Chrome or a Browser Use Cloud browser. Use it whenever a task involves a website or web app: browsing, scraping and data…",
  "description": "Give Claude a real browser — your Chrome or a Browser Use Cloud browser. Use it whenever a task involves a website or web app: browsing, scraping and data extraction, filling forms, testing sites, taking screenshots, automating web workflows.",
  "category": "Automation",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install browser-use@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/browser-use/plugins/tree/main/browser-use",
  "homepage": "https://browser-use.com",
  "author": "Browser Use",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "build-with-wordpress",
  "summary": "Craft production-grade WordPress sites and applications. Everything from themes and plugins to commerce and deployment.",
  "description": "Craft production-grade WordPress sites and applications. Everything from themes and plugins to commerce and deployment.",
  "category": "Other",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install build-with-wordpress@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/Automattic/claude-code-wordpress.com",
  "homepage": "https://developer.wordpress.com/wordpress-com-claude-code-plugin/",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "buildkite",
  "summary": "Official Buildkite skills for Claude Code, Cursor, and other AI coding agents — pipelines, migration, preflight, agent runtime, CLI, and API",
  "description": "Official Buildkite skills for Claude Code, Cursor, and other AI coding agents — pipelines, migration, preflight, agent runtime, CLI, and API",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install buildkite@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/buildkite/skills",
  "homepage": "https://buildkite.com",
  "author": "Buildkite",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "canva",
  "summary": "Create, edit, review, resize, and brand-check Canva designs with the Canva MCP server.",
  "description": "Create, edit, review, resize, and brand-check Canva designs with the Canva MCP server.",
  "category": "Design",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install canva@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/canva-sdks/canva-skills/tree/main/plugins/canva",
  "homepage": "https://www.canva.com",
  "author": "Canva",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "carbone-skill",
  "summary": "Official Carbone skill — complete templating language reference covering tags, loops, conditions, formatters, aggregators, and all output formats (DOCX, XLSX…",
  "description": "Official Carbone skill — complete templating language reference covering tags, loops, conditions, formatters, aggregators, and all output formats (DOCX, XLSX, PPTX, ODT, HTML, Markdown, PDF)",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install carbone-skill@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/carboneio/carbone-skill",
  "homepage": "https://carbone.io",
  "author": "Carbone",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "carta-cap-table",
  "summary": "Carta Cap Table plugin — skills and hooks for querying cap tables, grants, SAFEs, 409A valuations, waterfall scenarios, and more",
  "description": "Carta Cap Table plugin — skills and hooks for querying cap tables, grants, SAFEs, 409A valuations, waterfall scenarios, and more",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install carta-cap-table@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/carta/plugins/tree/main/plugins/carta-cap-table",
  "homepage": "https://carta.com",
  "author": "Carta Engineering",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "carta-crm",
  "summary": "Manage the Carta CRM conversationally — search, add, update, and enrich investors, companies, contacts, deals, notes, and fundraisings via the Carta CRM MCP…",
  "description": "Manage the Carta CRM conversationally — search, add, update, and enrich investors, companies, contacts, deals, notes, and fundraisings via the Carta CRM MCP Server.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install carta-crm@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/carta/plugins/tree/main/plugins/carta-crm",
  "homepage": "https://carta.com",
  "author": "Carta Engineering",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "carta-investors",
  "summary": "Carta Investors plugin — skills for querying investor data, performance benchmarks, regulatory reporting, AGM deck generation, brand extraction, and more via…",
  "description": "Carta Investors plugin — skills for querying investor data, performance benchmarks, regulatory reporting, AGM deck generation, brand extraction, and more via the Carta MCP Server.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install carta-investors@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/carta/plugins/tree/main/plugins/carta-investors",
  "homepage": "https://carta.com",
  "author": "Carta Engineering",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "catalyst-by-zoho",
  "summary": "Official Claude Code plugin for Catalyst by Zoho — full-stack serverless cloud platform. With Skills that covers all services, SDKs, CLI, architecture…",
  "description": "Official Claude Code plugin for Catalyst by Zoho — full-stack serverless cloud platform. With Skills that covers all services, SDKs, CLI, architecture patterns, pricing, migration guides, and Zoho MCP tool-based resource management.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install catalyst-by-zoho@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/catalystbyzoho/claude-plugin",
  "homepage": "https://catalyst.zoho.com/",
  "author": "Catalyst by Zoho",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "cds-mcp",
  "summary": "AI-assisted development of SAP Cloud Application Programming Model (CAP) projects. Search CDS models and CAP documentation.",
  "description": "AI-assisted development of SAP Cloud Application Programming Model (CAP) projects. Search CDS models and CAP documentation.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install cds-mcp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/cap-js/mcp-server",
  "homepage": "https://cap.cloud.sap/",
  "author": "SAP SE",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "chrome-devtools-mcp",
  "summary": "Control and inspect a live Chrome browser from your coding agent. Record performance traces, analyze network requests, check console messages with…",
  "description": "Control and inspect a live Chrome browser from your coding agent. Record performance traces, analyze network requests, check console messages with source-mapped stack traces, and automate browser actions with Puppeteer.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install chrome-devtools-mcp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
  "homepage": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "chronograph-gp",
  "summary": "Portfolio monitoring, valuations and analytics for private-capital GP teams using the Chronograph connector: portfolio-company one-pagers, fund quarterly…",
  "description": "Portfolio monitoring, valuations and analytics for private-capital GP teams using the Chronograph connector: portfolio-company one-pagers, fund quarterly review packs, markup/markdown briefs, TVPI attribution and budget-vs-actuals. Requires a Chronograph account and the Chronograph connector.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install chronograph-gp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/chronograph-pe/chronograph-gp-claude-plugin",
  "homepage": "https://www.chronograph.pe/",
  "author": "Chronograph",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "chronograph-lp",
  "summary": "Portfolio monitoring and analytics for private-capital LP teams using the Chronograph connector: cashflow forecasting, commitment pacing, look-through…",
  "description": "Portfolio monitoring and analytics for private-capital LP teams using the Chronograph connector: cashflow forecasting, commitment pacing, look-through exposure scans and GP-meeting prep. Requires a Chronograph account and the Chronograph connector.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install chronograph-lp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/chronograph-pe/chronograph-lp-claude-plugin",
  "homepage": "https://www.chronograph.pe/",
  "author": "Chronograph",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "circle-skills",
  "summary": "Ship stablecoin apps faster. Best-practice skills for USDC payments, cross-chain transfers, wallets, and smart contracts — plus Circle's MCP server for…",
  "description": "Ship stablecoin apps faster. Best-practice skills for USDC payments, cross-chain transfers, wallets, and smart contracts — plus Circle's MCP server for real-time SDK and documentation guidance.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install circle-skills@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/circlefin/skills/tree/master/plugins/circle",
  "homepage": "https://www.circle.com",
  "author": "Circle",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "circleback",
  "summary": "Circleback conversational context integration. Search and access meetings, emails, calendar events, and more.",
  "description": "Circleback conversational context integration. Search and access meetings, emails, calendar events, and more.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install circleback@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/circlebackai/claude-code-plugin",
  "homepage": "https://github.com/circlebackai/claude-code-plugin.git",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "ckeditor",
  "summary": "Install, configure, and integrate CKEditor 5 (free and premium) in any JavaScript project.",
  "description": "Install, configure, and integrate CKEditor 5 (free and premium) in any JavaScript project.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install ckeditor@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/ckeditor/skills",
  "homepage": "https://ckeditor.com",
  "author": "CKEditor (CKSource)",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "clangd-lsp",
  "summary": "C/C++ language server (clangd) for code intelligence",
  "description": "C/C++ language server (clangd) for code intelligence",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install clangd-lsp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/clangd-lsp",
  "homepage": null,
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "claude-code-setup",
  "summary": "Analyze codebases and recommend tailored Claude Code automations such as hooks, skills, MCP servers, and subagents.",
  "description": "Analyze codebases and recommend tailored Claude Code automations such as hooks, skills, MCP servers, and subagents.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install claude-code-setup@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-code-setup",
  "homepage": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-code-setup",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "claude-md-management",
  "summary": "Tools to maintain and improve CLAUDE.md files - audit quality, capture session learnings, and keep project memory current.",
  "description": "Tools to maintain and improve CLAUDE.md files - audit quality, capture session learnings, and keep project memory current.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install claude-md-management@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-md-management",
  "homepage": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-md-management",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "claude-security",
  "summary": "Deep vulnerability scanning of your own code, run entirely inside your Claude Code session at a chosen effort tier, with every finding challenged before it is…",
  "description": "Deep vulnerability scanning of your own code, run entirely inside your Claude Code session at a chosen effort tier, with every finding challenged before it is reported and the verification tally computed in code. Turns surviving findings into targeted patches, each verified by a panel of agents, that you apply when you choose.",
  "category": "Security",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install claude-security@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-security",
  "homepage": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-security",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "clay",
  "summary": "Work with Clay from Claude Code: set up and sign in to the clay CLI, query and analyze Clay tables, search Clay's GTM database for people and companies…",
  "description": "Work with Clay from Claude Code: set up and sign in to the clay CLI, query and analyze Clay tables, search Clay's GTM database for people and companies, manage audiences, signals, routines and workflows, and draft and review Sequencer campaigns. Includes hooks that auto-approve the plugin's own clay CLI calls and Clay skills; requires a Clay account.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install clay@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/clay-run/agent-plugins/tree/main/clay",
  "homepage": "https://github.com/clay-run/agent-plugins/tree/main/clay",
  "author": "Clay",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "clickhouse",
  "summary": "Connect Claude to your ClickHouse Cloud databases. Browse organizations, services, databases, and table schemas. Run read-only SQL queries against your data…",
  "description": "Connect Claude to your ClickHouse Cloud databases. Browse organizations, services, databases, and table schemas. Run read-only SQL queries against your data and get instant analytical answers. Monitor service backups, review billing costs, and inspect ClickPipe configurations - all through natural conversation.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install clickhouse@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/ClickHouse/clickhouse-claude-code-plugin",
  "homepage": "https://github.com/ClickHouse/clickhouse-claude-code-plugin",
  "author": "ClickHouse",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "clickhouse-best-practices",
  "summary": "28 best practice rules for ClickHouse schema design, query optimization, and data ingestion — prioritized by impact",
  "description": "28 best practice rules for ClickHouse schema design, query optimization, and data ingestion — prioritized by impact",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install clickhouse-best-practices@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/ClickHouse/agent-skills",
  "homepage": "https://clickhouse.com",
  "author": "ClickHouse Inc",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "cloud-sql-mysql",
  "summary": "Connect and interact with a Cloud SQL for MySQL database and data.",
  "description": "Connect and interact with a Cloud SQL for MySQL database and data.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install cloud-sql-mysql@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/gemini-cli-extensions/cloud-sql-mysql",
  "homepage": "https://github.com/gemini-cli-extensions/cloud-sql-mysql",
  "author": "Google LLC",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "cloud-sql-postgresql",
  "summary": "Create, connect, and interact with a Cloud SQL for PostgreSQL database and data.",
  "description": "Create, connect, and interact with a Cloud SQL for PostgreSQL database and data.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install cloud-sql-postgresql@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/gemini-cli-extensions/cloud-sql-postgresql",
  "homepage": "https://cloud.google.com/sql",
  "author": "Google LLC",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "cloud-sql-sqlserver",
  "summary": "Connect to Cloud SQL for SQL Server",
  "description": "Connect to Cloud SQL for SQL Server",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install cloud-sql-sqlserver@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/gemini-cli-extensions/cloud-sql-sqlserver",
  "homepage": "https://github.com/gemini-cli-extensions/cloud-sql-sqlserver",
  "author": "Google LLC",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "cloudflare",
  "summary": "Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents SDK, MCP servers, Wrangler CLI, and web performance.",
  "description": "Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents SDK, MCP servers, Wrangler CLI, and web performance.",
  "category": "Deployment",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install cloudflare@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/cloudflare/skills",
  "homepage": "https://github.com/cloudflare/skills",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "cloudinary",
  "summary": "Use Cloudinary directly in Claude. Manage assets, apply transformations, optimize media, and more through natural conversation.",
  "description": "Use Cloudinary directly in Claude. Manage assets, apply transformations, optimize media, and more through natural conversation.",
  "category": "Other",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install cloudinary@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/cloudinary-devs/cloudinary-plugin",
  "homepage": "https://cloudinary.com/documentation",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "cockroachdb",
  "summary": "Connect Claude Code directly to your CockroachDB clusters for hands-on database work — explore schemas, write optimized SQL, debug queries, and manage…",
  "description": "Connect Claude Code directly to your CockroachDB clusters for hands-on database work — explore schemas, write optimized SQL, debug queries, and manage distributed database clusters. This plugin provides 14 tools across two active MCP backends (self-hosted MCP Toolbox and managed CockroachDB Cloud MCP Server), three specialized agents (DBA, Developer, Operator), 32 skills across 6 operational domains, and built-in safety hooks.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install cockroachdb@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/cockroachdb/claude-plugin",
  "homepage": "https://github.com/cockroachdb/claude-plugin",
  "author": "Cockroach Labs",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "code-modernization",
  "summary": "Guided modernization for any legacy codebase: start with /modernize, get an assessment, an interactive map, the business rules mined from the code, and a plan…",
  "description": "Guided modernization for any legacy codebase: start with /modernize, get an assessment, an interactive map, the business rules mined from the code, and a plan you approve, then an upgrade, a rewrite or a rebuild with independent proof that the new code behaves like the old. Includes security hardening, a one-page report, specialist agents, and an optional live progress pane (early access).",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install code-modernization@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-modernization",
  "homepage": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-modernization",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "code-review",
  "summary": "Automated code review for pull requests using multiple specialized agents with confidence-based scoring to filter false positives",
  "description": "Automated code review for pull requests using multiple specialized agents with confidence-based scoring to filter false positives",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install code-review@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-review",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/plugins/code-review",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "code-simplifier",
  "summary": "Agent that simplifies and refines code for clarity, consistency, and maintainability while preserving functionality. Focuses on recently modified code.",
  "description": "Agent that simplifies and refines code for clarity, consistency, and maintainability while preserving functionality. Focuses on recently modified code.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install code-simplifier@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-simplifier",
  "homepage": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-simplifier",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "coderabbit",
  "summary": "Your code review partner. CodeRabbit provides external validation using a specialized AI architecture and 40+ integrated static analyzers—offering a different…",
  "description": "Your code review partner. CodeRabbit provides external validation using a specialized AI architecture and 40+ integrated static analyzers—offering a different perspective that catches bugs, security vulnerabilities, logic errors, and edge cases. Context-aware analysis via AST parsing and codegraph relationships. Automatically incorporates CLAUDE.md and project coding guidelines into reviews. Useful after writing or modifying code, before commits, when implementing complex or security-sensitive logic, or when a second opinion would increase confidence in the changes. Returns specific findings with suggested fixes that can be applied immediately. Free to use.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install coderabbit@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/coderabbitai/skills",
  "homepage": "https://github.com/coderabbitai/skills",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "codspeed",
  "summary": "CodSpeed is the all-in-one performance testing toolkit. Dive into benchmarking results, flamegraphs, and performance comparisons — give Claude granular…",
  "description": "CodSpeed is the all-in-one performance testing toolkit. Dive into benchmarking results, flamegraphs, and performance comparisons — give Claude granular profiling context to pinpoint bottlenecks and autonomously iterate on performance via the CodSpeed MCP server.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install codspeed@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/CodSpeedHQ/codspeed",
  "homepage": "https://codspeed.io",
  "author": "CodSpeed",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "commit-commands",
  "summary": "Commands for git commit workflows including commit, push, and PR creation",
  "description": "Commands for git commit workflows including commit, push, and PR creation",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install commit-commands@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/commit-commands",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/plugins/commit-commands",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "confidence",
  "summary": "Access Confidence feature flags, experiments, and migration tools directly from Claude Code.",
  "description": "Access Confidence feature flags, experiments, and migration tools directly from Claude Code.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install confidence@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/spotify/confidence-ai-plugins",
  "homepage": "https://confidence.spotify.com",
  "author": "Spotify Confidence",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "context7",
  "summary": "Upstash Context7 MCP server for up-to-date documentation lookup. Connects to Context7's hosted remote MCP server (https://mcp.context7.com/mcp) — no local…",
  "description": "Upstash Context7 MCP server for up-to-date documentation lookup. Connects to Context7's hosted remote MCP server (https://mcp.context7.com/mcp) — no local Node.js or npx required — to pull version-specific documentation and code examples directly from source repositories into your LLM context. Works anonymously out of the box; set CONTEXT7_API_KEY for higher rate limits.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install context7@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/context7",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/external_plugins/context7",
  "author": "Upstash",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "convex",
  "summary": "Official Convex plugin for Claude Code with bundled Convex skills, the convex-expert subagent for code-writing, a runtime-error monitor, and MCP access for…",
  "description": "Official Convex plugin for Claude Code with bundled Convex skills, the convex-expert subagent for code-writing, a runtime-error monitor, and MCP access for backend development, schema design, real-time features, auth, file storage, scheduled jobs, and AI agents.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install convex@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/get-convex/convex-backend-skill",
  "homepage": "https://github.com/get-convex/convex-backend-skill",
  "author": "Convex",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "crowdsec",
  "summary": "Operational skill for installing, configuring, operating, and debugging CrowdSec (cscli, LAPI/CAPI, hub, bouncers, WAF/AppSec) across bare-metal, Docker, and…",
  "description": "Operational skill for installing, configuring, operating, and debugging CrowdSec (cscli, LAPI/CAPI, hub, bouncers, WAF/AppSec) across bare-metal, Docker, and Kubernetes.",
  "category": "Security",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install crowdsec@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/crowdsecurity/crowdsec-skill",
  "homepage": "https://www.crowdsec.net",
  "author": "CrowdSec",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "crowdstrike-falcon-foundry",
  "summary": "CrowdStrike Falcon Foundry development skills for building cybersecurity applications on the Falcon platform. Includes UI development, collections, functions…",
  "description": "CrowdStrike Falcon Foundry development skills for building cybersecurity applications on the Falcon platform. Includes UI development, collections, functions, workflows, API integration, security patterns, and debugging workflows.",
  "category": "Security",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install crowdstrike-falcon-foundry@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/CrowdStrike/foundry-skills",
  "homepage": "https://github.com/CrowdStrike/foundry-skills",
  "author": "CrowdStrike",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "crowdstrike-falcon-fusion",
  "summary": "CrowdStrike Falcon Fusion skills for authoring, deploying, and executing Fusion workflows. Includes live action discovery, YAML authoring with schema…",
  "description": "CrowdStrike Falcon Fusion skills for authoring, deploying, and executing Fusion workflows. Includes live action discovery, YAML authoring with schema validation, workflow import and release, execution monitoring, and Falcon Next-Gen SIEM lookup files.",
  "category": "Security",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install crowdstrike-falcon-fusion@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/CrowdStrike/fusion-skills",
  "homepage": "https://github.com/CrowdStrike/fusion-skills",
  "author": "CrowdStrike",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "csharp-lsp",
  "summary": "C# language server for code intelligence",
  "description": "C# language server for code intelligence",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install csharp-lsp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/csharp-lsp",
  "homepage": null,
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "cwc-makers",
  "summary": "Onboard a Code-with-Claude Makers Cardputer with one /maker-setup command — clones the build-with-claude repo, flashes UIFlow firmware, and installs the…",
  "description": "Onboard a Code-with-Claude Makers Cardputer with one /maker-setup command — clones the build-with-claude repo, flashes UIFlow firmware, and installs the Claude Buddy app bundle.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install cwc-makers@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/cwc-makers",
  "homepage": "https://claude.com/cwc-makers",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "dash0",
  "summary": "OpenTelemetry observability for Claude Code sessions. Captures tool calls, LLM invocations, token usage, and errors as OTel traces. Send telemetry to Dash0 or…",
  "description": "OpenTelemetry observability for Claude Code sessions. Captures tool calls, LLM invocations, token usage, and errors as OTel traces. Send telemetry to Dash0 or any OpenTelemetry-compatible backend.",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install dash0@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/dash0hq/dash0-agent-plugin",
  "homepage": "https://dash0.com/",
  "author": "Dash0",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "data",
  "summary": "Data engineering for Apache Airflow and Astronomer. Author DAGs with best practices, debug pipeline failures, trace data lineage, profile tables, migrate…",
  "description": "Data engineering for Apache Airflow and Astronomer. Author DAGs with best practices, debug pipeline failures, trace data lineage, profile tables, migrate Airflow 2 to 3, and manage local and cloud deployments.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install data@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/astronomer/agents",
  "homepage": "https://github.com/astronomer/agents",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "data-agent-kit",
  "summary": "This plugin provides a specialized suite of skills for data engineers and database practitioners working on Google Cloud. It acts as an expert assistant…",
  "description": "This plugin provides a specialized suite of skills for data engineers and database practitioners working on Google Cloud. It acts as an expert assistant, allowing you to use natural language prompts in your preferred coding agent to architect complex data pipelines, transform data with dbt, write Spark and BigQuery SQL notebooks, and orchestrate end-to-end workflows across GCP's data ecosystem.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install data-agent-kit@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/GoogleCloudPlatform/data-agent-kit-plugin",
  "homepage": "https://cloud.google.com/products/data-agent-kit",
  "author": "Google LLC",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "data-engineering",
  "summary": "Data engineering plugin - warehouse exploration, pipeline authoring, Airflow integration",
  "description": "Data engineering plugin - warehouse exploration, pipeline authoring, Airflow integration",
  "category": "Other",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install data-engineering@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/astronomer/agents",
  "homepage": "https://github.com/astronomer/agents",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "databases-on-aws",
  "summary": "Expert database guidance for the AWS database portfolio. Design schemas, execute queries, handle migrations, and choose the right database for your workload.",
  "description": "Expert database guidance for the AWS database portfolio. Design schemas, execute queries, handle migrations, and choose the right database for your workload.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install databases-on-aws@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/awslabs/agent-plugins/tree/main/plugins/databases-on-aws",
  "homepage": "https://github.com/awslabs/agent-plugins",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "databricks",
  "summary": "Databricks skills for the CLI, Apps, Lakebase, Model Serving, Lakeflow Jobs, Spark Declarative Pipelines, Declarative Automation Bundles (DABs), and…",
  "description": "Databricks skills for the CLI, Apps, Lakebase, Model Serving, Lakeflow Jobs, Spark Declarative Pipelines, Declarative Automation Bundles (DABs), and classic-to-serverless migration.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install databricks@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/databricks/databricks-agent-skills/tree/main/plugins/databricks/claude",
  "homepage": "https://developers.databricks.com/",
  "author": "Databricks",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "datadog",
  "summary": "Use Datadog directly in Claude Code through a preconfigured Datadog MCP server. Query logs, metrics, traces, dashboards, and more through natural…",
  "description": "Use Datadog directly in Claude Code through a preconfigured Datadog MCP server. Query logs, metrics, traces, dashboards, and more through natural conversation. This plugin is in preview.",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install datadog@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/datadog-labs/claude-code-plugin",
  "homepage": "https://www.datadoghq.com/",
  "author": "Datadog",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "datahub-skills",
  "summary": "DataHub development and interaction toolkit with connector planning, PR review, catalog search, metadata enrichment, lineage tracing, data quality management…",
  "description": "DataHub development and interaction toolkit with connector planning, PR review, catalog search, metadata enrichment, lineage tracing, data quality management, and connection setup skills",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install datahub-skills@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/datahub-project/datahub-skills",
  "homepage": "https://datahub.com",
  "author": "DataHub",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "dataproc",
  "summary": "Manage Dataproc clusters and jobs.",
  "description": "Manage Dataproc clusters and jobs.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install dataproc@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/gemini-cli-extensions/dataproc",
  "homepage": "https://github.com/gemini-cli-extensions/dataproc",
  "author": "Google LLC",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "datarobot-agent-skills",
  "summary": "DataRobot skills for AI/ML workflows — model training, deployment, predictions, feature engineering, monitoring, explainability, data preparation, App…",
  "description": "DataRobot skills for AI/ML workflows — model training, deployment, predictions, feature engineering, monitoring, explainability, data preparation, App Framework CI/CD, and external agent monitoring.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install datarobot-agent-skills@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/datarobot-oss/datarobot-agent-skills",
  "homepage": "https://datarobot.com",
  "author": "DataRobot",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "dataverse",
  "summary": "Agent skills for building on, analyzing, and managing Microsoft Dataverse — with Dataverse MCP, PAC CLI, and Python SDK.",
  "description": "Agent skills for building on, analyzing, and managing Microsoft Dataverse — with Dataverse MCP, PAC CLI, and Python SDK.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install dataverse@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/microsoft/Dataverse-skills/tree/main/.github/plugins/dataverse",
  "homepage": "https://github.com/microsoft/Dataverse-skills",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "deepeval",
  "summary": "Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports, and iterative improvement loops to AI applications.",
  "description": "Skills for adding DeepEval evaluations, tracing, datasets, Confident AI reports, and iterative improvement loops to AI applications.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install deepeval@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/confident-ai/deepeval",
  "homepage": "https://github.com/confident-ai/deepeval",
  "author": "Confident AI",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "deploy-on-aws",
  "summary": "Deploy applications to AWS with architecture recommendations, cost estimates, and IaC deployment.",
  "description": "Deploy applications to AWS with architecture recommendations, cost estimates, and IaC deployment.",
  "category": "Deployment",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install deploy-on-aws@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/awslabs/agent-plugins/tree/main/plugins/deploy-on-aws",
  "homepage": "https://github.com/awslabs/agent-plugins",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "desktop-commander",
  "summary": "MCP server for terminal commands, process management, and file operations across text, code, PDF, DOCX, Excel, images, and structured data.",
  "description": "MCP server for terminal commands, process management, and file operations across text, code, PDF, DOCX, Excel, images, and structured data.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install desktop-commander@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/wonderwhy-er/DesktopCommanderMCP/tree/main/plugins/claude",
  "homepage": "https://desktopcommander.app",
  "author": "Desktop Commander",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "discord",
  "summary": "Discord messaging bridge with built-in access control. Manage pairing, allowlists, and policy via /discord:access.",
  "description": "Discord messaging bridge with built-in access control. Manage pairing, allowlists, and policy via /discord:access.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install discord@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/discord",
  "homepage": null,
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "dominodatalab",
  "summary": "Full Domino Data Lab platform support — workspaces, jobs, model deployment, experiment tracking, GenAI tracing, Spark/Ray/Dask, and app deployment for data…",
  "description": "Full Domino Data Lab platform support — workspaces, jobs, model deployment, experiment tracking, GenAI tracing, Spark/Ray/Dask, and app deployment for data science teams",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install dominodatalab@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/dominodatalab/domino-claude-plugin",
  "homepage": "https://www.domino.ai",
  "author": "Domino Data Lab",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "dropbox",
  "summary": "The Dropbox plugin for Claude connects your Dropbox files directly to Claude, so you can search, organize, save generated content, and create sharing links…",
  "description": "The Dropbox plugin for Claude connects your Dropbox files directly to Claude, so you can search, organize, save generated content, and create sharing links without switching tools. It respects your existing Dropbox permissions, and Claude only works with files you already have access to.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install dropbox@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/dropbox/dropbox-ai-plugins/tree/main/claude",
  "homepage": "https://www.dropbox.com",
  "author": "Dropbox",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "duckdb-skills",
  "summary": "DuckDB-powered skills for Claude Code: read any data file, attach and query DuckDB databases, search DuckDB/DuckLake docs, search past session logs, and…",
  "description": "DuckDB-powered skills for Claude Code: read any data file, attach and query DuckDB databases, search DuckDB/DuckLake docs, search past session logs, and install/update DuckDB extensions.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install duckdb-skills@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/duckdb/duckdb-skills",
  "homepage": "https://duckdb.org",
  "author": "DuckDB Foundation",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "duende-skills",
  "summary": "Duende development skills and agents for Claude Code — covering OAuth/OIDC protocols, IdentityServer, token management, ASP.NET Core…",
  "description": "Duende development skills and agents for Claude Code — covering OAuth/OIDC protocols, IdentityServer, token management, ASP.NET Core authentication/authorization, BFF patterns, and secure identity architecture",
  "category": "Security",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install duende-skills@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/DuendeSoftware/duende-skills",
  "homepage": "https://duendesoftware.com",
  "author": "Duende Software",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "dynatrace",
  "summary": "Dynatrace observability skills: DQL query patterns, application and infrastructure monitoring, log analysis, problem investigation, and incident response…",
  "description": "Dynatrace observability skills: DQL query patterns, application and infrastructure monitoring, log analysis, problem investigation, and incident response workflows, with the Dynatrace MCP server for live platform access.",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install dynatrace@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/Dynatrace/dynatrace-for-ai",
  "homepage": "https://www.dynatrace.com/hub/detail/claude-code-cli/",
  "author": "Dynatrace",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "exa",
  "summary": "Exa AI web search, deep research, and content extraction. Provides MCP tools and research skills for comprehensive web search, people discovery, company…",
  "description": "Exa AI web search, deep research, and content extraction. Provides MCP tools and research skills for comprehensive web search, people discovery, company research, academic papers, and more.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install exa@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/exa-labs/exa-mcp-server",
  "homepage": "https://exa.ai/docs/reference/exa-mcp",
  "author": "Exa",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "explanatory-output-style",
  "summary": "Adds educational insights about implementation choices and codebase patterns (mimics the deprecated Explanatory output style)",
  "description": "Adds educational insights about implementation choices and codebase patterns (mimics the deprecated Explanatory output style)",
  "category": "Learning",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install explanatory-output-style@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/explanatory-output-style",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/plugins/explanatory-output-style",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "expo",
  "summary": "Official Expo skills for building, deploying, upgrading, and debugging React Native apps with Expo. Covers UI development with Expo Router, SwiftUI and…",
  "description": "Official Expo skills for building, deploying, upgrading, and debugging React Native apps with Expo. Covers UI development with Expo Router, SwiftUI and Jetpack Compose components, Tailwind CSS setup, API routes, data fetching, CI/CD workflows, App Store and Play Store deployment, SDK upgrades, DOM components, and dev client distribution.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install expo@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/expo/skills/tree/main/plugins/expo",
  "homepage": "https://github.com/expo/skills/blob/main/plugins/expo/README.md",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "fakechat",
  "summary": "Localhost web chat for testing the channel notification flow. No tokens, no access control, no third-party service.",
  "description": "Localhost web chat for testing the channel notification flow. No tokens, no access control, no third-party service.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install fakechat@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/fakechat",
  "homepage": null,
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "fastly-agent-toolkit",
  "summary": "Fastly development tools and platform skills",
  "description": "Fastly development tools and platform skills",
  "category": "Other",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install fastly-agent-toolkit@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/fastly/fastly-agent-toolkit",
  "homepage": "https://github.com/fastly/fastly-agent-toolkit/blob/main/README.md",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "feature-dev",
  "summary": "Comprehensive feature development workflow with specialized agents for codebase exploration, architecture design, and quality review",
  "description": "Comprehensive feature development workflow with specialized agents for codebase exploration, architecture design, and quality review",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install feature-dev@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/feature-dev",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/plugins/feature-dev",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "fiftyone",
  "summary": "Build high-quality datasets and computer vision models. Visualize datasets, analyze models, find duplicates, run inference, evaluate predictions, and develop…",
  "description": "Build high-quality datasets and computer vision models. Visualize datasets, analyze models, find duplicates, run inference, evaluate predictions, and develop custom plugins.",
  "category": "Other",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install fiftyone@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/voxel51/fiftyone-skills",
  "homepage": "https://docs.voxel51.com/",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "figma",
  "summary": "Figma design platform integration. Access design files, extract component information, read design tokens, and translate designs into code. Bridge the gap…",
  "description": "Figma design platform integration. Access design files, extract component information, read design tokens, and translate designs into code. Bridge the gap between design and development workflows.",
  "category": "Design",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install figma@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/figma/mcp-server-guide",
  "homepage": "https://github.com/figma/mcp-server-guide",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "firebase",
  "summary": "Google Firebase MCP integration. Manage Firestore databases, authentication, cloud functions, hosting, and storage. Build and manage your Firebase backend…",
  "description": "Google Firebase MCP integration. Manage Firestore databases, authentication, cloud functions, hosting, and storage. Build and manage your Firebase backend directly from your development workflow.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install firebase@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/firebase",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/external_plugins/firebase",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "firecrawl",
  "summary": "Web scraping and crawling powered by Firecrawl. Turn any website into clean, LLM-ready markdown or structured data. Scrape single pages, crawl entire sites…",
  "description": "Web scraping and crawling powered by Firecrawl. Turn any website into clean, LLM-ready markdown or structured data. Scrape single pages, crawl entire sites, search the web, and extract structured information. Includes an AI agent for autonomous multi-source data gathering - just describe what you need and it finds, navigates, and extracts automatically.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install firecrawl@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/firecrawl/firecrawl-claude-plugin",
  "homepage": "https://github.com/firecrawl/firecrawl-claude-plugin.git",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "firestore-native",
  "summary": "Connect and interact with Firestore databases, collections, and documents.",
  "description": "Connect and interact with Firestore databases, collections, and documents.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install firestore-native@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/gemini-cli-extensions/firestore-native",
  "homepage": "https://github.com/gemini-cli-extensions/firestore-native",
  "author": "Google LLC",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "forge-skills",
  "summary": "Forge-focused skills and MCP configuration for Atlassian Forge: scaffold and deploy apps (forge create, templates, dev spaces), build Teamwork Graph…",
  "description": "Forge-focused skills and MCP configuration for Atlassian Forge: scaffold and deploy apps (forge create, templates, dev spaces), build Teamwork Graph connectors for Rovo Search/Rovo Chat, pre-deploy review, systematic debugging, plus Forge docs and Atlassian Design System lookups via MCP.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install forge-skills@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/atlassian/forge-skills",
  "homepage": "https://developer.atlassian.com/platform/forge/",
  "author": "Atlassian",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "frontend-design",
  "summary": "Create distinctive, production-grade frontend interfaces with high design quality. Generates creative, polished code that avoids generic AI aesthetics.",
  "description": "Create distinctive, production-grade frontend interfaces with high design quality. Generates creative, polished code that avoids generic AI aesthetics.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install frontend-design@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/frontend-design",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/plugins/frontend-design",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "fullstory",
  "summary": "Connect Claude to Fullstory to query behavioral analytics, session replays, and customer experience insights.",
  "description": "Connect Claude to Fullstory to query behavioral analytics, session replays, and customer experience insights.",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install fullstory@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/fullstorydev/fullstory-skills",
  "homepage": "https://www.fullstory.com",
  "author": "Fullstory",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "gc-ai",
  "summary": "Work in your GC AI legal knowledge base from Claude: upload documents, run review playbooks, and ask questions grounded in your own files, all as you.",
  "description": "Work in your GC AI legal knowledge base from Claude: upload documents, run review playbooks, and ask questions grounded in your own files, all as you.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install gc-ai@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/GC-AI-Inc/gc-ai-claude-plugin",
  "homepage": "https://docs.gc.ai/api-reference/mcp/overview",
  "author": "GC AI",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "github",
  "summary": "Official GitHub MCP server for repository management. Create issues, manage pull requests, review code, search repositories, and interact with GitHub's full…",
  "description": "Official GitHub MCP server for repository management. Create issues, manage pull requests, review code, search repositories, and interact with GitHub's full API directly from Claude Code.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install github@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/github",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/external_plugins/github",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "gitkraken",
  "summary": "Gives Claude access to your real Git and project context: commits, branches, pull requests, and issues across every repo you work in. Works with GitHub…",
  "description": "Gives Claude access to your real Git and project context: commits, branches, pull requests, and issues across every repo you work in. Works with GitHub, GitLab, Azure DevOps, Bitbucket, and Jira.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install gitkraken@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/gitkraken/claude-plugin",
  "homepage": "https://www.gitkraken.com",
  "author": "GitKraken",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "gitlab",
  "summary": "GitLab DevOps platform integration. Manage repositories, merge requests, CI/CD pipelines, issues, and wikis. Full access to GitLab's comprehensive DevOps…",
  "description": "GitLab DevOps platform integration. Manage repositories, merge requests, CI/CD pipelines, issues, and wikis. Full access to GitLab's comprehensive DevOps lifecycle tools.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install gitlab@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/gitlab",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/external_plugins/gitlab",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "google-cloud-storage",
  "summary": "Official Google Cloud Storage (GCS) plugin. Manage buckets and objects, transfer data, and configure MCP, FUSE, IAM, security, lifecycle rules, signed URLs…",
  "description": "Official Google Cloud Storage (GCS) plugin. Manage buckets and objects, transfer data, and configure MCP, FUSE, IAM, security, lifecycle rules, signed URLs, Terraform, and the CLI.",
  "category": "Deployment",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install google-cloud-storage@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/gemini-cli-extensions/google-cloud-storage",
  "homepage": "https://cloud.google.com/storage",
  "author": "Google LLC",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "gopls-lsp",
  "summary": "Go language server for code intelligence and refactoring",
  "description": "Go language server for code intelligence and refactoring",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install gopls-lsp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/gopls-lsp",
  "homepage": null,
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "govtribe",
  "summary": "Government contracting research and capture workflows in Claude: opportunity and pipeline briefs, bid/no-bid and competitor analysis, price-to-win and…",
  "description": "Government contracting research and capture workflows in Claude: opportunity and pipeline briefs, bid/no-bid and competitor analysis, price-to-win and proposal prep, powered by the GovTribe connector.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install govtribe@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/GovTribe/claude-plugin",
  "homepage": "https://govtribe.com",
  "author": "GovTribe",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "grafana-assistant",
  "summary": "Skills and rules for developing and using the Grafana Assistant app and CLI.",
  "description": "Skills and rules for developing and using the Grafana Assistant app and CLI.",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install grafana-assistant@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/grafana/ai-marketplace/tree/main/plugins/grafana-assistant",
  "homepage": "https://grafana.com",
  "author": "Grafana",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "grafana-cloud-mcp",
  "summary": "Hosted MCP server for AI-assisted Grafana Cloud observability — no local installation required.",
  "description": "Hosted MCP server for AI-assisted Grafana Cloud observability — no local installation required.",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install grafana-cloud-mcp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/grafana/ai-marketplace/tree/main/plugins/grafana-cloud-mcp",
  "homepage": "https://grafana.com",
  "author": "Grafana",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "grafana-mcp",
  "summary": "MCP server for AI-assisted Grafana dashboard, datasource, alerting, and incident management.",
  "description": "MCP server for AI-assisted Grafana dashboard, datasource, alerting, and incident management.",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install grafana-mcp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/grafana/ai-marketplace/tree/main/plugins/grafana-mcp",
  "homepage": "https://grafana.com",
  "author": "Grafana",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "greptile",
  "summary": "AI code review agent for GitHub and GitLab. View and resolve Greptile's PR review comments, run reviews on your working branch, and search your organization's…",
  "description": "AI code review agent for GitHub and GitLab. View and resolve Greptile's PR review comments, run reviews on your working branch, and search your organization's knowledge base and coding patterns, directly from Claude Code.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install greptile@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/greptileai/claude-plugin/tree/greptile--v1.2.3/plugins/greptile",
  "homepage": "https://www.greptile.com/docs/mcp-v2/overview",
  "author": "Greptile",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "growthbook",
  "summary": "A suite of agent skills for the full GrowthBook feature flag and experimentation lifecycle.",
  "description": "A suite of agent skills for the full GrowthBook feature flag and experimentation lifecycle.",
  "category": "Testing",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install growthbook@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/growthbook/skills",
  "homepage": "https://growthbook.io",
  "author": "GrowthBook",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "honeycomb",
  "summary": "Skills, agents, and workflows for Honeycomb observability — query patterns, production investigations, SLOs, OpenTelemetry instrumentation, and Beeline…",
  "description": "Skills, agents, and workflows for Honeycomb observability — query patterns, production investigations, SLOs, OpenTelemetry instrumentation, and Beeline migration. Designed to complement the Honeycomb MCP server.",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install honeycomb@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/honeycombio/agent-skill/tree/main/honeycomb",
  "homepage": "https://www.honeycomb.io",
  "author": "Honeycomb",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "hookify",
  "summary": "Easily create custom hooks to prevent unwanted behaviors by analyzing conversation patterns or from explicit instructions. Define rules via simple markdown…",
  "description": "Easily create custom hooks to prevent unwanted behaviors by analyzing conversation patterns or from explicit instructions. Define rules via simple markdown files.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install hookify@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/hookify",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/plugins/hookify",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "hostinger",
  "summary": "Deploy, manage and monitor your Hostinger services directly from Claude Code. The plugin connects Claude to Hostinger's remote MCP server, so you can ship…",
  "description": "Deploy, manage and monitor your Hostinger services directly from Claude Code. The plugin connects Claude to Hostinger's remote MCP server, so you can ship sites and apps, manage domains and DNS, run WordPress and operate VPS servers without leaving your coding environment. There's nothing to install on your machine: no Node.js, no npm, no local server. Key features include one-prompt deployments for static sites, Node.js apps (built on Hostinger), full WordPress site imports, and WordPress plugins and themes, plus static and PHP sites on the Agency Plan. Beyond deployments, Claude can search and register domains, edit DNS records and snapshots, check build logs, and manage mailboxes, online stores, email marketing contacts, subscriptions and orders. It can also control VPS firewalls, snapshots and monitoring. Sign in through your browser (OAuth) on first use, or set a `HOSTINGER_API_TOKEN` from hPanel. How to use: there are no commands to memorize. Describe what you want and Claude picks the right tool or deployment skill. Try \"deploy my static site to Hostinger\", \"deploy this Next.js app to example.com\", \"create an A record pointing example.com to 1.2.3.4\", or \"show VPS metrics for the last 24 hours.\"",
  "category": "Deployment",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install hostinger@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/hostinger/claude-plugin",
  "homepage": "https://www.hostinger.com",
  "author": "Hostinger",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "hubspot-sales",
  "summary": "Run your HubSpot sales workflow directly from Claude. Adds skills that cover the full sales day: import contacts and deals into HubSpot, get a prioritised…",
  "description": "Run your HubSpot sales workflow directly from Claude. Adds skills that cover the full sales day: import contacts and deals into HubSpot, get a prioritised morning brief, prep for any call with full CRM context, draft personalised follow-ups grounded in deal history, log calls and update records by describing what happened, and review your pipeline to surface stalling deals. Everything writes back to HubSpot.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install hubspot-sales@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/HubSpot/hubspot-mcp-plugins/tree/main/HubSpot-Sales",
  "homepage": "https://www.hubspot.com",
  "author": "HubSpot",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "huggingface-skills",
  "summary": "Build, train, evaluate, and use open source AI models, datasets, and spaces.",
  "description": "Build, train, evaluate, and use open source AI models, datasets, and spaces.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install huggingface-skills@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/huggingface/skills",
  "homepage": "https://github.com/huggingface/skills.git",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "hunter",
  "summary": "Find and verify professional email addresses, search contacts by domain, and enrich company data -- directly in Claude.",
  "description": "Find and verify professional email addresses, search contacts by domain, and enrich company data -- directly in Claude.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install hunter@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/hunter-io/claude-plugin",
  "homepage": "https://hunter.io",
  "author": "Hunter.io",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "hyperframes",
  "summary": "HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime adapter animations, captions, voiceovers, audio-reactive visuals, and…",
  "description": "HyperFrames by HeyGen. Write HTML, render video. Compositions, GSAP and runtime adapter animations, captions, voiceovers, audio-reactive visuals, and website-to-video capture for HyperFrames.",
  "category": "Design",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install hyperframes@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/heygen-com/hyperframes",
  "homepage": "https://hyperframes.heygen.com",
  "author": "HeyGen",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "idmp-plugin",
  "summary": "TDengine IDMP plugin with packaged skills for discovery, schema inspection, and safe operational workflows.",
  "description": "TDengine IDMP plugin with packaged skills for discovery, schema inspection, and safe operational workflows.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install idmp-plugin@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/taosdata/agent-skills/tree/main/plugins/idmp-plugin",
  "homepage": "https://github.com/taosdata/agent-skills",
  "author": "TaosData",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "imessage",
  "summary": "iMessage messaging bridge with built-in access control. Reads chat.db directly, sends via AppleScript. Manage pairing, allowlists, and policy via…",
  "description": "iMessage messaging bridge with built-in access control. Reads chat.db directly, sends via AppleScript. Manage pairing, allowlists, and policy via /imessage:access.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install imessage@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/imessage",
  "homepage": null,
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "incident-io",
  "summary": "Work with incident.io from Claude: respond to and investigate incidents, check on-call schedules and escalations, and author the runbooks, skills and…",
  "description": "Work with incident.io from Claude: respond to and investigate incidents, check on-call schedules and escalations, and author the runbooks, skills and architecture docs that incident.io investigations draw on. Bundles the official incident.io MCP server (OAuth on first use).",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install incident-io@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/incident-io/skills/tree/main/plugins/incident-io",
  "homepage": "https://incident.io",
  "author": "incident.io",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "informatica-for-claude-platform",
  "summary": "Governed catalog discovery for Informatica Intelligent Data Management Cloud (CDGC): find tables, columns, files, glossary terms and policies across the…",
  "description": "Governed catalog discovery for Informatica Intelligent Data Management Cloud (CDGC): find tables, columns, files, glossary terms and policies across the enterprise catalog, check ownership, certification, sensitivity and applicable policy, and get safe-usage guidance grounded in catalog metadata before querying any data. Requires an Informatica IDMC tenant and the Informatica Catalog Discovery connector.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install informatica-for-claude-platform@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/forcedotcom/informatica-claude-plugins/tree/main/informatica-for-claude-platform",
  "homepage": "https://github.com/forcedotcom/informatica-claude-plugins/tree/main/informatica-for-claude-platform",
  "author": "Informatica",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "intercom",
  "summary": "Intercom integration for Claude Code. Search conversations, analyze customer support patterns, look up contacts and companies, and install the Intercom…",
  "description": "Intercom integration for Claude Code. Search conversations, analyze customer support patterns, look up contacts and companies, and install the Intercom Messenger. Connect your Intercom workspace to get real-time insights from customer data.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install intercom@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/intercom/claude-plugin-external",
  "homepage": "https://github.com/intercom/claude-plugin-external",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "intuit-quickbooks",
  "summary": "QuickBooks business insights and actions: financial health briefings across P&L, cash flow, balance sheet and A/R, industry benchmarking, payroll cost…",
  "description": "QuickBooks business insights and actions: financial health briefings across P&L, cash flow, balance sheet and A/R, industry benchmarking, payroll cost analysis, overdue-invoice reminders, estimate/invoice drafting from email, payroll onboarding and base-pay changes (with confirmation), and QuickBooks Capital lending guidance. Requires the Intuit QuickBooks connector.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install intuit-quickbooks@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/intuit/quickbooks-claude-plugin",
  "homepage": "https://github.com/intuit/quickbooks-claude-plugin",
  "author": "Intuit QuickBooks",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "jdtls-lsp",
  "summary": "Java language server (Eclipse JDT.LS) for code intelligence",
  "description": "Java language server (Eclipse JDT.LS) for code intelligence",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install jdtls-lsp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/jdtls-lsp",
  "homepage": null,
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "jfrog",
  "summary": "Use the JFrog Platform from Claude Code: Artifactory repos and artifacts, security findings and exposures, Catalog package safety and downloads, workflows…",
  "description": "Use the JFrog Platform from Claude Code: Artifactory repos and artifacts, security findings and exposures, Catalog package safety and downloads, workflows across the SDLC, and platform administration.",
  "category": "Security",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install jfrog@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/jfrog/claude-plugin",
  "homepage": "https://jfrog.com",
  "author": "JFrog Ltd.",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "knowledge-catalog",
  "summary": "Connect to Knowledge Catalog to discover, manage, monitor, and govern data and AI artifacts across your data platform",
  "description": "Connect to Knowledge Catalog to discover, manage, monitor, and govern data and AI artifacts across your data platform",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install knowledge-catalog@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/gemini-cli-extensions/knowledge-catalog",
  "homepage": "https://github.com/gemini-cli-extensions/knowledge-catalog",
  "author": "Google LLC",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "kotlin-lsp",
  "summary": "Kotlin language server for code intelligence",
  "description": "Kotlin language server for code intelligence",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install kotlin-lsp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/kotlin-lsp",
  "homepage": null,
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "langfuse",
  "summary": "Skills for working with Langfuse, the open-source LLM engineering platform for tracing, prompt management, and evaluation.",
  "description": "Skills for working with Langfuse, the open-source LLM engineering platform for tracing, prompt management, and evaluation.",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install langfuse@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/langfuse/skills",
  "homepage": "https://langfuse.com",
  "author": "Langfuse",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "langfuse-observability",
  "summary": "Langfuse observability plugin for Claude Code — captures and exports traces, spans, and session telemetry from Claude Code to Langfuse for LLM monitoring…",
  "description": "Langfuse observability plugin for Claude Code — captures and exports traces, spans, and session telemetry from Claude Code to Langfuse for LLM monitoring, debugging, and evaluation",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install langfuse-observability@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/langfuse/claude-observability-plugin",
  "homepage": "https://langfuse.com/integrations/other/claude-code",
  "author": "Langfuse",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "laravel-boost",
  "summary": "Laravel development toolkit MCP server. Provides intelligent assistance for Laravel applications including Artisan commands, Eloquent queries, routing…",
  "description": "Laravel development toolkit MCP server. Provides intelligent assistance for Laravel applications including Artisan commands, Eloquent queries, routing, migrations, and framework-specific code generation.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install laravel-boost@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/laravel-boost",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/external_plugins/laravel-boost",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "leadfeeder",
  "summary": "Turn website visitor signals into pipeline with Leadfeeder: daily visitor briefs, visitor company research, buyer and contact discovery, personalised outreach…",
  "description": "Turn website visitor signals into pipeline with Leadfeeder: daily visitor briefs, visitor company research, buyer and contact discovery, personalised outreach drafts, and adding companies to your Leadfeeder lists, via the Leadfeeder connector. Requires a Leadfeeder account.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install leadfeeder@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/Leadfeeder/leadfeeder-mcp-plugin",
  "homepage": "https://www.leadfeeder.com",
  "author": "Leadfeeder",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "learn-with-coursera",
  "summary": "Turn any learning intent into a personalized Coursera experience. Asks three quick questions (topic, familiarity, preferred format), searches Coursera's…",
  "description": "Turn any learning intent into a personalized Coursera experience. Asks three quick questions (topic, familiarity, preferred format), searches Coursera's catalog, and delivers the right next step — a course, hands-on project, short video, or live roleplay — then maps a path forward. Requires the Coursera connector for catalog tools.",
  "category": "Learning",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install learn-with-coursera@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/coursera/skills/tree/main/skills",
  "homepage": "https://github.com/coursera/skills",
  "author": "Coursera",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "learning-output-style",
  "summary": "Interactive learning mode that requests meaningful code contributions at decision points (mimics the unshipped Learning output style)",
  "description": "Interactive learning mode that requests meaningful code contributions at decision points (mimics the unshipped Learning output style)",
  "category": "Learning",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install learning-output-style@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/learning-output-style",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/plugins/learning-output-style",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "legalzoom",
  "summary": "Attorney guidance and legal tools for business and personal needs. AI-powered document review identifies critical risks and important clauses, advises when to…",
  "description": "Attorney guidance and legal tools for business and personal needs. AI-powered document review identifies critical risks and important clauses, advises when to engage an attorney, and routes to LegalZoom's network when professional expertise is needed.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install legalzoom@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/legalzoom/claude-plugins/tree/main/plugins/legalzoom",
  "homepage": "https://www.legalzoom.com/",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "linear",
  "summary": "Linear issue tracking integration. Create issues, manage projects, update statuses, search across workspaces, and streamline your software development…",
  "description": "Linear issue tracking integration. Create issues, manage projects, update statuses, search across workspaces, and streamline your software development workflow with Linear's modern issue tracker.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install linear@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/linear",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/external_plugins/linear",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "linq-alpha",
  "summary": "LinqAlpha financial research in Claude: guided setup for the LinqAlpha connector, capability-based source selection for fundamentals, estimates, transcripts…",
  "description": "LinqAlpha financial research in Claude: guided setup for the LinqAlpha connector, capability-based source selection for fundamentals, estimates, transcripts, filings and market data, and an optional, opt-in default-source preference you can remove at any time. Requires a LinqAlpha account.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install linq-alpha@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/linq-lab/linq-alpha-plugin/tree/main/plugins/linq-alpha",
  "homepage": "https://www.linqalpha.com",
  "author": "LinqAlpha",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "liquid-lsp",
  "summary": "LSP integration for Shopify Liquid templates via the Shopify CLI theme language server.",
  "description": "LSP integration for Shopify Liquid templates via the Shopify CLI theme language server.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install liquid-lsp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/Shopify/liquid-skills/tree/main/plugins/liquid-lsp",
  "homepage": "https://github.com/Shopify/liquid-skills/tree/main/plugins/liquid-lsp",
  "author": "Shopify",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "liquid-skills",
  "summary": "Liquid language fundamentals, CSS/JS/HTML coding standards, and WCAG accessibility patterns for Shopify themes",
  "description": "Liquid language fundamentals, CSS/JS/HTML coding standards, and WCAG accessibility patterns for Shopify themes",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install liquid-skills@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/Shopify/liquid-skills/tree/main/plugins/liquid-skills",
  "homepage": "https://github.com/Shopify/liquid-skills/tree/main/plugins/liquid-skills",
  "author": "Shopify",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "logfire",
  "summary": "Add Logfire observability to Python applications with auto-instrumentation for FastAPI, httpx, asyncpg, SQLAlchemy, and more",
  "description": "Add Logfire observability to Python applications with auto-instrumentation for FastAPI, httpx, asyncpg, SQLAlchemy, and more",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install logfire@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/pydantic/skills/tree/main/plugins/logfire",
  "homepage": "https://github.com/pydantic/skills/tree/main/plugins/logfire",
  "author": "Pydantic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "logrocket",
  "summary": "Connect Claude Code to LogRocket to query session replays, metrics, issues, and user behavior using natural language.",
  "description": "Connect Claude Code to LogRocket to query session replays, metrics, issues, and user behavior using natural language.",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install logrocket@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/LogRocket/logrocket-claude-plugin/tree/main/plugins/logrocket",
  "homepage": "https://logrocket.com",
  "author": "LogRocket",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "looker",
  "summary": "Connect to Looker and interact with your data using LookML.",
  "description": "Connect to Looker and interact with your data using LookML.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install looker@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/gemini-cli-extensions/looker",
  "homepage": "https://github.com/gemini-cli-extensions/looker",
  "author": "Google LLC",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "lovable",
  "summary": "Build, iterate on, deploy, and manage Lovable apps from Claude Code. Bundles the official Lovable MCP server (remote, OAuth 2.1) and adds focused commands for…",
  "description": "Build, iterate on, deploy, and manage Lovable apps from Claude Code. Bundles the official Lovable MCP server (remote, OAuth 2.1) and adds focused commands for the common build/iterate/database workflows, with credit- and publish-safety prompts.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install lovable@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/lovablelabs/mcp",
  "homepage": "https://lovable.dev",
  "author": "Lovable",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "lua-lsp",
  "summary": "Lua language server for code intelligence",
  "description": "Lua language server for code intelligence",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install lua-lsp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/lua-lsp",
  "homepage": null,
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "lumen",
  "summary": "Precise local semantic code search via MCP. Indexes your codebase with Go AST parsing, embeds with Ollama or LM Studio, and exposes vector search to Claude…",
  "description": "Precise local semantic code search via MCP. Indexes your codebase with Go AST parsing, embeds with Ollama or LM Studio, and exposes vector search to Claude through an MCP server — no cloud, no npm.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install lumen@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/ory/lumen",
  "homepage": "https://www.ory.sh",
  "author": "Ory Corp",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "lusha",
  "summary": "Prospect, enrich, and build call-ready lead lists using Lusha's B2B intelligence platform — verified phone numbers, company signals, and lookalike targeting.",
  "description": "Prospect, enrich, and build call-ready lead lists using Lusha's B2B intelligence platform — verified phone numbers, company signals, and lookalike targeting.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install lusha@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/lusha-oss/lusha-mcp-plugin",
  "homepage": "https://www.lusha.com",
  "author": "Lusha",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "mapbox",
  "summary": "Mapbox skills and MCP servers for building location-aware applications with AI. Includes geospatial tools, style management, and patterns for web, iOS…",
  "description": "Mapbox skills and MCP servers for building location-aware applications with AI. Includes geospatial tools, style management, and patterns for web, iOS, Android, and AI agent frameworks.",
  "category": "Location",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install mapbox@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/mapbox/mapbox-agent-skills",
  "homepage": "https://www.mapbox.com",
  "author": "Mapbox",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "math-olympiad",
  "summary": "Solve competition math (IMO, Putnam, USAMO) with adversarial verification that catches what self-verification misses. Fresh-context verifiers attack proofs…",
  "description": "Solve competition math (IMO, Putnam, USAMO) with adversarial verification that catches what self-verification misses. Fresh-context verifiers attack proofs with specific failure patterns. Calibrated abstention over bluffing.",
  "category": "Math",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install math-olympiad@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/math-olympiad",
  "homepage": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/math-olympiad",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "math-proof",
  "summary": "Two skills for hard mathematics problems, each ending in a self-contained proof.md: /math-proof:solo has the session work the problem itself in stages with a…",
  "description": "Two skills for hard mathematics problems, each ending in a self-contained proof.md: /math-proof:solo has the session work the problem itself in stages with a notes file; /math-proof:siege works on it for hours in rounds of judge and worker sub-agents and says plainly what is and is not proved.",
  "category": "Math",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install math-proof@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/math-proof",
  "homepage": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/math-proof",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "mattpocock-skills",
  "summary": "Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, TDD, code review, domain modelling and more. Plug-and-play, not vibe coding.",
  "description": "Matt Pocock's agent skills for real engineering — grilling, spec/ticket flows, TDD, code review, domain modelling and more. Plug-and-play, not vibe coding.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install mattpocock-skills@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/mattpocock/skills",
  "homepage": "https://github.com/mattpocock/skills",
  "author": "Matt Pocock",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "mcp-apps",
  "summary": "Skills for creating MCP Apps with the MCP Apps SDK",
  "description": "Skills for creating MCP Apps with the MCP Apps SDK",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install mcp-apps@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/modelcontextprotocol/ext-apps/tree/main/plugins/mcp-apps",
  "homepage": "https://modelcontextprotocol.io",
  "author": "Anthropic / Model Context Protocol",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "mcp-server-dev",
  "summary": "Skills for designing and building MCP servers that work seamlessly with Claude. Guides you through deployment models (remote HTTP, MCPB, local), tool design…",
  "description": "Skills for designing and building MCP servers that work seamlessly with Claude. Guides you through deployment models (remote HTTP, MCPB, local), tool design patterns, auth, and interactive MCP apps.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install mcp-server-dev@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/mcp-server-dev",
  "homepage": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/mcp-server-dev",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "mcp-tunnels",
  "summary": "Connect Claude to a private MCP server through an Anthropic MCP tunnel. The /create-docker-mcp-tunnel command drives the Docker Compose quickstart end to end…",
  "description": "Connect Claude to a private MCP server through an Anthropic MCP tunnel. The /create-docker-mcp-tunnel command drives the Docker Compose quickstart end to end: certificates, proxy config, cloudflared, and a verifiable sample server.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install mcp-tunnels@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/mcp-tunnels",
  "homepage": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/mcp-tunnels",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "mercadopago",
  "summary": "Mercado Pago full-product integration toolkit. One agent routes to four orchestration skills (mp-integrate wizard, mp-webhooks, mp-test-setup, mp-review) that…",
  "description": "Mercado Pago full-product integration toolkit. One agent routes to four orchestration skills (mp-integrate wizard, mp-webhooks, mp-test-setup, mp-review) that pull every endpoint, payload, and snippet live from the official Mercado Pago MCP server. The MCP must always be connected — there is no offline mode.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install mercadopago@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/mercadopago/mercadopago-claude-marketplace/tree/main/plugins/mercadopago",
  "homepage": "https://github.com/mercadopago/mercadopago-claude-marketplace/tree/main/plugins/mercadopago",
  "author": "Mercado Pago Developer Experience",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "mergify",
  "summary": "Skills for the Mergify CLI: manage merge queues, stacked pull requests, Test Insights (flaky tests, quarantine), merge protections, and Mergify configuration…",
  "description": "Skills for the Mergify CLI: manage merge queues, stacked pull requests, Test Insights (flaky tests, quarantine), merge protections, and Mergify configuration directly from the terminal.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install mergify@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/mergifyio/mergify-cli",
  "homepage": "https://mergify.com",
  "author": "Mergify",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "microsoft-docs",
  "summary": "Access official Microsoft documentation, API references, and code samples for Azure, .NET, Windows, and more.",
  "description": "Access official Microsoft documentation, API references, and code samples for Azure, .NET, Windows, and more.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install microsoft-docs@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/MicrosoftDocs/mcp",
  "homepage": "https://github.com/microsoftdocs/mcp",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "migration-to-aws",
  "summary": "Plan a migration from Google Cloud Platform (and OpenAI/Gemini AI workloads) to AWS. Analyzes your Infrastructure-as-Code files, app code, and GCP billing…",
  "description": "Plan a migration from Google Cloud Platform (and OpenAI/Gemini AI workloads) to AWS. Analyzes your Infrastructure-as-Code files, app code, and GCP billing data to discover resources, design an AWS architecture, estimate costs, and generate migration artifacts — including AI-provider mapping to Amazon Bedrock. Processing is local; your data stays in your environment.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install migration-to-aws@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/awslabs/startups/tree/main/migrate/plugins/migration-to-aws",
  "homepage": "https://github.com/awslabs/startups",
  "author": "Amazon Web Services",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "mintlify",
  "summary": "Build beautiful documentation sites with Mintlify. Convert non-markdown files into properly formatted MDX pages, add and modify content with correct component…",
  "description": "Build beautiful documentation sites with Mintlify. Convert non-markdown files into properly formatted MDX pages, add and modify content with correct component use, and automate documentation updates.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install mintlify@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/mintlify/mintlify-claude-plugin",
  "homepage": "https://www.mintlify.com/",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "miro",
  "summary": "Secure access to Miro boards. Enables AI to read board context, create diagrams, and generate code with enterprise-grade security.",
  "description": "Secure access to Miro boards. Enables AI to read board context, create diagrams, and generate code with enterprise-grade security.",
  "category": "Design",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install miro@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/miroapp/miro-ai/tree/main/claude-plugins/miro",
  "homepage": "https://miro.com",
  "author": "Miro",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "mlflow",
  "summary": "Skills for tracing, evaluating, and improving AI agents with MLflow. Supports the full agent improvement loop: instrument → trace → evaluate → iterate →…",
  "description": "Skills for tracing, evaluating, and improving AI agents with MLflow. Supports the full agent improvement loop: instrument → trace → evaluate → iterate → validate.",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install mlflow@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/mlflow/skills",
  "homepage": "https://mlflow.org/",
  "author": "MLflow Team",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "modern-web-guidance",
  "summary": "Keep your coding agent up to date with the latest web best practices",
  "description": "Keep your coding agent up to date with the latest web best practices",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install modern-web-guidance@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/GoogleChrome/modern-web-guidance",
  "homepage": "https://goo.gle/modern-web-guidance",
  "author": "Google Chrome",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "monday-crm",
  "summary": "Run your monday CRM in plain language. Build a pipeline from scratch, start the day with a ranked deal briefing, spin up a forecast dashboard, audit board…",
  "description": "Run your monday CRM in plain language. Build a pipeline from scratch, start the day with a ranked deal briefing, spin up a forecast dashboard, audit board health, clean up messy data in bulk, and turn meeting notes into deal updates. Every skill writes back into monday as a real update, doc, or dashboard. Built on the official monday MCP connector.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install monday-crm@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/mondaycom/mcp/tree/master/plugins/monday-crm",
  "homepage": "https://monday.com",
  "author": "monday.com",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "mongodb",
  "summary": "Official Claude plugin for MongoDB (MCP Server + Skills). Connect to databases, explore data, manage collections, optimize queries, generate reliable code…",
  "description": "Official Claude plugin for MongoDB (MCP Server + Skills). Connect to databases, explore data, manage collections, optimize queries, generate reliable code, implement best practices, develop advanced features, and more.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install mongodb@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/mongodb/agent-skills/tree/main/plugins/mongodb",
  "homepage": "https://www.mongodb.com/docs/mcp-server/overview/",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "mongodb-atlas",
  "summary": "Connect to MongoDB Atlas clusters only through the Atlas Managed MCP Server. Sign in with your Atlas account to explore data, manage collections, optimize…",
  "description": "Connect to MongoDB Atlas clusters only through the Atlas Managed MCP Server. Sign in with your Atlas account to explore data, manage collections, optimize queries, generate reliable code with MongoDB best practices, and manage Atlas resources such as clusters, projects, database users, and network access. If you are running a different MongoDB deployment or want to run a local MongoDB MCP Server, install the MongoDB (Self-Managed MCP) plugin instead.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install mongodb-atlas@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/mongodb/agent-skills/tree/main/plugins/mongodb-atlas",
  "homepage": "https://www.mongodb.com/docs/mcp-server/get-started/",
  "author": "MongoDB",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "neon",
  "summary": "Manage your Neon projects and databases with the neon-postgres agent skill and the Neon MCP Server.",
  "description": "Manage your Neon projects and databases with the neon-postgres agent skill and the Neon MCP Server.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install neon@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/neondatabase/agent-skills/tree/main/plugins/neon-postgres",
  "homepage": "https://github.com/neondatabase/agent-skills/tree/main/plugins/neon-postgres",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "netlify-skills",
  "summary": "Netlify platform skills for Claude Code — functions, edge functions, blobs, database, image CDN, forms, config, CLI, frameworks, caching, AI gateway, and…",
  "description": "Netlify platform skills for Claude Code — functions, edge functions, blobs, database, image CDN, forms, config, CLI, frameworks, caching, AI gateway, and deployment.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install netlify-skills@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/netlify/context-and-tools",
  "homepage": "https://github.com/netlify/context-and-tools",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "netsuite-ai-companion",
  "summary": "Guides AI assistants that use the NetSuite AI Connector: tool-selection order, output formatting, NetSuite domain knowledge, multi-subsidiary and currency…",
  "description": "Guides AI assistants that use the NetSuite AI Connector: tool-selection order, output formatting, NetSuite domain knowledge, multi-subsidiary and currency handling, and SuiteQL safety guardrails. Requires the NetSuite AI Connector Service.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install netsuite-ai-companion@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/oracle/netsuite-suitecloud-sdk/tree/ai-plugins-dist/anthropic/netsuite-ai-companion",
  "homepage": "https://github.com/oracle/netsuite-suitecloud-sdk/tree/ai-plugins-dist/anthropic/netsuite-ai-companion",
  "author": "Oracle NetSuite",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "netsuite-finance-analyst",
  "summary": "Director-level finance analysis on live NetSuite data: financial reporting, period close, variance, aging and reconciliation reviews, cash reporting, and…",
  "description": "Director-level finance analysis on live NetSuite data: financial reporting, period close, variance, aging and reconciliation reviews, cash reporting, and board-ready narratives with next actions. Requires the NetSuite AI Connector Service.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install netsuite-finance-analyst@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/oracle/netsuite-suitecloud-sdk/tree/ai-plugins-dist/anthropic/netsuite-finance-analyst",
  "homepage": "https://github.com/oracle/netsuite-suitecloud-sdk/tree/ai-plugins-dist/anthropic/netsuite-finance-analyst",
  "author": "Oracle NetSuite",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "netsuite-suitecloud",
  "summary": "Develop NetSuite SuiteCloud solutions with SuiteScript, SDF, and best practices: SuiteScript records and upgrades, SDF objects, roles and permissions, UIF…",
  "description": "Develop NetSuite SuiteCloud solutions with SuiteScript, SDF, and best practices: SuiteScript records and upgrades, SDF objects, roles and permissions, UIF single-page apps, OWASP secure coding, project documentation, and the SAFE Guide.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install netsuite-suitecloud@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/oracle/netsuite-suitecloud-sdk/tree/ai-plugins-dist/anthropic/netsuite-suitecloud",
  "homepage": "https://github.com/oracle/netsuite-suitecloud-sdk/tree/ai-plugins-dist/anthropic/netsuite-suitecloud",
  "author": "Oracle NetSuite",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "newrelic",
  "summary": "New Relic observability intelligence for Claude Code. Investigate APM performance, analyze cloud costs, debug Kubernetes, write NRQL queries, and respond to…",
  "description": "New Relic observability intelligence for Claude Code. Investigate APM performance, analyze cloud costs, debug Kubernetes, write NRQL queries, and respond to alerts — all from your terminal using New Relic telemetry data.",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install newrelic@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/newrelic/claude-code-plugin",
  "homepage": "https://newrelic.com",
  "author": "New Relic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "nightvision",
  "summary": "Skills for working with NightVision, a DAST and API Discovery platform that finds exploitable vulnerabilities in web applications and REST APIs",
  "description": "Skills for working with NightVision, a DAST and API Discovery platform that finds exploitable vulnerabilities in web applications and REST APIs",
  "category": "Other",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install nightvision@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/nvsecurity/nightvision-skills",
  "homepage": "https://github.com/nvsecurity/nightvision-skills",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "nimble",
  "summary": "Nimble web data toolkit — search, extract, map, crawl the web and work with structured data agents",
  "description": "Nimble web data toolkit — search, extract, map, crawl the web and work with structured data agents",
  "category": "Other",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install nimble@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/Nimbleway/agent-skills",
  "homepage": "https://docs.nimbleway.com/integrations/agent-skills/plugin-installation",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "noibu",
  "summary": "Built for ecommerce, the Noibu plugin bridges the gap between customer experience and revenue by connecting Claude directly to your store's session, error…",
  "description": "Built for ecommerce, the Noibu plugin bridges the gap between customer experience and revenue by connecting Claude directly to your store's session, error, and conversion data through Noibu — and to the marketing, support, and commerce platforms that put insight into motion. Go beyond analysis: surface what's costing you revenue, take action across your stack, build workflows to automate work end-to-end.",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install noibu@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/Noibu/ai-plugin/tree/main/src",
  "homepage": "https://help.noibu.com/articles/3918362002-overview-of-the-noibu-plugin-for-claude",
  "author": "Noibu",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "notion",
  "summary": "Notion workspace integration. Search pages, create and update documents, manage databases, and access your team's knowledge base directly from Claude Code for…",
  "description": "Notion workspace integration. Search pages, create and update documents, manage databases, and access your team's knowledge base directly from Claude Code for seamless documentation workflows.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install notion@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/makenotion/claude-code-notion-plugin",
  "homepage": "https://github.com/makenotion/claude-code-notion-plugin",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "nvidia-skills",
  "summary": "Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading, training, inference, robotics, Physical AI, Omniverse, simulation, and other…",
  "description": "Find the right NVIDIA skill for GPU acceleration, CUDA, AI agents, data loading, training, inference, robotics, Physical AI, Omniverse, simulation, and other NVIDIA-powered workflows.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install nvidia-skills@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/NVIDIA/skills/tree/main/plugins/nvidia-skills",
  "homepage": "https://build.nvidia.com/skills/",
  "author": "NVIDIA",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "oracle-ai-data-platform-workbench-databricks-migrator",
  "summary": "Drive the Oracle AI Data Platform (AIDP) Databricks Migration Toolkit in natural language. Plans and executes automated Databricks → AIDP migrations of…",
  "description": "Drive the Oracle AI Data Platform (AIDP) Databricks Migration Toolkit in natural language. Plans and executes automated Databricks → AIDP migrations of notebooks, jobs, schedules, and catalog DDL — Pass-1 dependency rewrite + Pass-2 cell-by-cell execute/verify/fix on a live AIDP cluster with Claude.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install oracle-ai-data-platform-workbench-databricks-migrator@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/oracle-samples/oracle-aidp-samples/tree/main/ai/claude-code-plugins/oracle-ai-data-platform-workbench-databricks-migrator",
  "homepage": "https://docs.oracle.com/en/cloud/paas/ai-data-platform/index.html",
  "author": "Oracle",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "oracle-ai-data-platform-workbench-engineer-agent",
  "summary": "Oracle AI Data Platform (AIDP) Workbench engineer agent for Claude Code — a 37-skill agent that operates the full Spark/Delta lakehouse in natural language…",
  "description": "Oracle AI Data Platform (AIDP) Workbench engineer agent for Claude Code — a 37-skill agent that operates the full Spark/Delta lakehouse in natural language. Discovers your catalog into a grounding cache, turns plain English into accurate Spark SQL, and runs the lifecycle (CREATE/INSERT/UPDATE/DELETE/MERGE, OPTIMIZE/VACUUM, time-travel). Ingests files, profiles data and sets quality rules, authors and repairs pipelines, provisions clusters, and debugs via the Spark UI. Governs the platform (roles, credential store, Delta Sharing, audit logs), plus native Git, bundles, and MLOps/MLflow. Runs via the official Oracle aidp CLI.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install oracle-ai-data-platform-workbench-engineer-agent@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/oracle-samples/oracle-aidp-samples/tree/main/ai/claude-code-plugins/oracle-ai-data-platform-workbench-engineer-agent",
  "homepage": "https://docs.oracle.com/en/cloud/paas/ai-data-platform/index.html",
  "author": "Oracle",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "oracle-ai-data-platform-workbench-spark-connectors",
  "summary": "Oracle AI Data Platform Workbench Spark connectors for Claude Code. 18 connector skills covering every data source workbench customers commonly need: Oracle…",
  "description": "Oracle AI Data Platform Workbench Spark connectors for Claude Code. 18 connector skills covering every data source workbench customers commonly need: Oracle Autonomous DB family (ALH/ADW/ATP) via wallet/IAM-DB-Token/API-key, ExaCS, Fusion ERP REST, Fusion BICC, EPM Cloud Planning, Essbase 21c, OCI Streaming (Kafka), OCI Object Storage, Apache Iceberg, plus external systems (PostgreSQL, MySQL/HeatWave, SQL Server, Snowflake, Azure ADLS Gen2, AWS S3, generic REST, custom JDBC, Excel). Live-validated on the workbench `tpcds` cluster (Spark 3.5.0): 17 PASS / 4 ship-as-is out of 21 test rows.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install oracle-ai-data-platform-workbench-spark-connectors@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/oracle-samples/oracle-aidp-samples/tree/main/ai/claude-code-plugins/oracle-ai-data-platform-workbench-spark-connectors",
  "homepage": "https://docs.oracle.com/en/cloud/paas/ai-data-platform/index.html",
  "author": "Oracle",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "oracledb",
  "summary": "Connect, query, and interact with Oracle Databases and their data.",
  "description": "Connect, query, and interact with Oracle Databases and their data.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install oracledb@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/gemini-cli-extensions/oracledb",
  "homepage": "https://github.com/gemini-cli-extensions/oracledb",
  "author": "Google LLC",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "outputai",
  "summary": "Output.ai workflow development toolkit for Claude Code. Adds 5 specialist agents (planner, builder, debugger, prompt writer, quality reviewer), 40+…",
  "description": "Output.ai workflow development toolkit for Claude Code. Adds 5 specialist agents (planner, builder, debugger, prompt writer, quality reviewer), 40+ slash-command skills covering scaffolding, debugging, evaluation, and credential management, plus a SessionStart hook that auto-loads Output SDK conventions so Claude understands the framework before the first prompt.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install outputai@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/growthxai/output/tree/main/coding_assistants/claude/plugins/outputai",
  "homepage": "https://output.ai",
  "author": "Output.ai",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "pagerduty",
  "summary": "Enhance code quality and security through PagerDuty risk scoring and incident correlation. Score pre-commit diffs against historical incident data and surface…",
  "description": "Enhance code quality and security through PagerDuty risk scoring and incident correlation. Score pre-commit diffs against historical incident data and surface deployment risk before you ship.",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install pagerduty@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/PagerDuty/claude-code-plugins",
  "homepage": "https://github.com/PagerDuty/claude-code-plugins",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "paypal",
  "summary": "PayPal development plugin for Claude — integrate payments, subscriptions, invoices, disputes, and more using PayPal's APIs and MCP server",
  "description": "PayPal development plugin for Claude — integrate payments, subscriptions, invoices, disputes, and more using PayPal's APIs and MCP server",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install paypal@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/paypal/AI-Toolkit",
  "homepage": "https://developer.paypal.com/",
  "author": "PayPal",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "pendo-analytics",
  "summary": "Bring Pendo product analytics into Claude Code: account health, feature adoption, session replay lookup and triage, feedback analysis, and data-informed…",
  "description": "Bring Pendo product analytics into Claude Code: account health, feature adoption, session replay lookup and triage, feedback analysis, and data-informed planning grounded in real usage data. Requires the Pendo connector and a Pendo subscription.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install pendo-analytics@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/pendo-io/claude-pendo-plugin/tree/main/plugins/pendo-analytics",
  "homepage": "https://github.com/pendo-io/claude-pendo-plugin/tree/main/plugins/pendo-analytics",
  "author": "Pendo",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "pendo-guides",
  "summary": "Create production-ready Pendo in-app guides (walkthroughs, announcements, alerts, polls, promotions) as HTML/CSS/JS from a short intake conversation, using…",
  "description": "Create production-ready Pendo in-app guides (walkthroughs, announcements, alerts, polls, promotions) as HTML/CSS/JS from a short intake conversation, using Pendo's guide components.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install pendo-guides@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/pendo-io/claude-pendo-plugin/tree/main/plugins/pendo-guides",
  "homepage": "https://github.com/pendo-io/claude-pendo-plugin/tree/main/plugins/pendo-guides",
  "author": "Pendo",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "pendo-orchestrate",
  "summary": "Create, configure and edit draft Pendo Orchestrate email journeys, including multi-email and conditional split flows, via the Pendo connector. Journeys stay…",
  "description": "Create, configure and edit draft Pendo Orchestrate email journeys, including multi-email and conditional split flows, via the Pendo connector. Journeys stay in draft; activation happens in the Orchestrate UI.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install pendo-orchestrate@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/pendo-io/claude-pendo-plugin/tree/main/plugins/pendo-orchestrate",
  "homepage": "https://github.com/pendo-io/claude-pendo-plugin/tree/main/plugins/pendo-orchestrate",
  "author": "Pendo",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "php-lsp",
  "summary": "PHP language server (Intelephense) for code intelligence",
  "description": "PHP language server (Intelephense) for code intelligence",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install php-lsp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/php-lsp",
  "homepage": null,
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "pigment",
  "summary": "Analyze business data and build custom Pigment models, metrics, and boards through natural language.",
  "description": "Analyze business data and build custom Pigment models, metrics, and boards through natural language.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install pigment@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/gopigment/ai-plugins",
  "homepage": "https://www.pigment.com",
  "author": "Pigment",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "pinecone",
  "summary": "Pinecone vector database integration. Streamline your Pinecone development with powerful tools for managing vector indexes, querying data, and rapid…",
  "description": "Pinecone vector database integration. Streamline your Pinecone development with powerful tools for managing vector indexes, querying data, and rapid prototyping. Use slash commands like /quickstart to generate AGENTS.md files and initialize Python projects and /query to quickly explore indexes. Access the Pinecone MCP server for creating, describing, upserting and querying indexes with Claude. Perfect for developers building semantic search, RAG applications, recommendation systems, and other vector-based applications with Pinecone.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install pinecone@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/pinecone-io/pinecone-claude-code-plugin",
  "homepage": "https://github.com/pinecone-io/pinecone-claude-code-plugin",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "pixeltable",
  "summary": "Build multimodal AI applications with Pixeltable -- tables, computed columns, embedding search, UDFs, tool-calling agents, and 25+ AI provider integrations.",
  "description": "Build multimodal AI applications with Pixeltable -- tables, computed columns, embedding search, UDFs, tool-calling agents, and 25+ AI provider integrations.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install pixeltable@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/pixeltable/pixeltable-skill",
  "homepage": "https://docs.pixeltable.com",
  "author": "Pixeltable",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "planetscale",
  "summary": "An authenticated hosted MCP server that accesses your PlanetScale organizations, databases, branches, schema, and Insights data. Query against your data…",
  "description": "An authenticated hosted MCP server that accesses your PlanetScale organizations, databases, branches, schema, and Insights data. Query against your data, surface slow queries, and get organizational and account information.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install planetscale@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/planetscale/claude-plugin",
  "homepage": "https://planetscale.com/",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "playground",
  "summary": "Creates interactive HTML playgrounds — self-contained single-file explorers with visual controls, live preview, and prompt output with copy button. Includes…",
  "description": "Creates interactive HTML playgrounds — self-contained single-file explorers with visual controls, live preview, and prompt output with copy button. Includes templates for design playgrounds, data explorers, concept maps, and document critique.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install playground@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/playground",
  "homepage": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/playground",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "playwright",
  "summary": "Browser automation and end-to-end testing MCP server by Microsoft. Enables Claude to interact with web pages, take screenshots, fill forms, click elements…",
  "description": "Browser automation and end-to-end testing MCP server by Microsoft. Enables Claude to interact with web pages, take screenshots, fill forms, click elements, and perform automated browser testing workflows.",
  "category": "Testing",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install playwright@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/playwright",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/external_plugins/playwright",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "plugin-dev",
  "summary": "Comprehensive toolkit for developing Claude Code plugins. Includes 7 expert skills covering hooks, MCP integration, commands, agents, and best practices…",
  "description": "Comprehensive toolkit for developing Claude Code plugins. Includes 7 expert skills covering hooks, MCP integration, commands, agents, and best practices. AI-assisted plugin creation and validation.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install plugin-dev@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/plugin-dev",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/plugins/plugin-dev",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "posthog",
  "summary": "Access PostHog analytics, feature flags, experiments, error tracking, and insights directly from Claude Code.",
  "description": "Access PostHog analytics, feature flags, experiments, error tracking, and insights directly from Claude Code.",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install posthog@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/PostHog/ai-plugin",
  "homepage": "https://posthog.com/docs/model-context-protocol",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "postiz",
  "summary": "Social media automation CLI for scheduling posts, managing integrations, uploading media, and tracking analytics across 28+ platforms including X, LinkedIn…",
  "description": "Social media automation CLI for scheduling posts, managing integrations, uploading media, and tracking analytics across 28+ platforms including X, LinkedIn, Reddit, YouTube, TikTok, Instagram, and more",
  "category": "Other",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install postiz@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/gitroomhq/postiz-agent",
  "homepage": "https://postiz.com/agent",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "postman",
  "summary": "Work with Postman from your agent: bootstrap a repo's Postman setup, mock an API before it's implemented, run collection and governance checks in CI, monitor…",
  "description": "Work with Postman from your agent: bootstrap a repo's Postman setup, mock an API before it's implemented, run collection and governance checks in CI, monitor a live endpoint, deploy and debug Postman Flows, and publish generated API documentation.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install postman@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/postmanlabs/postman-plugin",
  "homepage": "https://github.com/postmanlabs/postman-plugin",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "pr-review-toolkit",
  "summary": "Comprehensive PR review agents specializing in comments, tests, error handling, type design, code quality, and code simplification",
  "description": "Comprehensive PR review agents specializing in comments, tests, error handling, type design, code quality, and code simplification",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install pr-review-toolkit@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/pr-review-toolkit",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/plugins/pr-review-toolkit",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "preset-cli-skills",
  "summary": "Preset CLI skills for explicit shell, scripting, and CI/CD workflows driven by the `sup` CLI (PyPI package `superset-sup`). Use only for CLI workflows; do not…",
  "description": "Preset CLI skills for explicit shell, scripting, and CI/CD workflows driven by the `sup` CLI (PyPI package `superset-sup`). Use only for CLI workflows; do not use for MCP-only work or as a substitute for direct API calls when the user wants HTTP/SDK code.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install preset-cli-skills@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/preset-io/agent-skills/tree/master/plugins/preset-cli-skills",
  "homepage": "https://www.preset.io",
  "author": "Preset",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "prisma",
  "summary": "Prisma MCP integration for Postgres database management, schema migrations, SQL queries, and connection string management. Provision Prisma Postgres…",
  "description": "Prisma MCP integration for Postgres database management, schema migrations, SQL queries, and connection string management. Provision Prisma Postgres databases, run migrations, and interact with your data directly.",
  "category": "Other",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install prisma@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/prisma/claude-plugin",
  "homepage": "https://prisma.io",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "project-artifact",
  "summary": "Generate and publish a living project status page — overview & success criteria, the workstream sequence, and next steps — as a shareable claude.ai artifact…",
  "description": "Generate and publish a living project status page — overview & success criteria, the workstream sequence, and next steps — as a shareable claude.ai artifact backed by a per-project config, so refreshes re-gather live state, redeploy the same URL, and report only the delta.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install project-artifact@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/project-artifact",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/plugins/project-artifact",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "pydantic-ai",
  "summary": "Write accurate Pydantic AI code from the start. Up-to-date patterns, decision trees, and common gotchas for agents, tools, structured output, streaming, and…",
  "description": "Write accurate Pydantic AI code from the start. Up-to-date patterns, decision trees, and common gotchas for agents, tools, structured output, streaming, and multi-agent apps.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install pydantic-ai@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/pydantic/skills/tree/main/plugins/ai",
  "homepage": "https://github.com/pydantic/skills/tree/main/plugins/ai",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "pyright-lsp",
  "summary": "Python language server (Pyright) for type checking and code intelligence",
  "description": "Python language server (Pyright) for type checking and code intelligence",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install pyright-lsp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/pyright-lsp",
  "homepage": null,
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "qdrant-skills",
  "summary": "Agent skills for Qdrant vector search covering scaling, performance optimization, search quality, monitoring, deployment, model migration, version upgrades…",
  "description": "Agent skills for Qdrant vector search covering scaling, performance optimization, search quality, monitoring, deployment, model migration, version upgrades, and SDK usage across Python, TypeScript, Rust, Go, .NET, and Java.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install qdrant-skills@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/qdrant/skills",
  "homepage": "https://skills.qdrant.tech",
  "author": "Qdrant",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "qodo",
  "summary": "Bring Qodo's codebase intelligence, coding standards, and code review into your coding agent.",
  "description": "Bring Qodo's codebase intelligence, coding standards, and code review into your coding agent.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install qodo@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/qodo-ai/qodo-skills/tree/main/packages/qodo",
  "homepage": "https://github.com/qodo-ai/qodo-skills.git",
  "author": "Qodo",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "qodo-standards",
  "summary": "Optional Qodo rules discovery and standards administration workflows.",
  "description": "Optional Qodo rules discovery and standards administration workflows.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install qodo-standards@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/qodo-ai/qodo-skills/tree/main/packages/qodo-standards",
  "homepage": "https://github.com/qodo-ai/qodo-skills.git",
  "author": "Qodo",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "qt-development-skills",
  "summary": "Agentic engineering skills for Qt software development — Qt C++/QML code review, QML coding, and Qt C++/QML code documentation.",
  "description": "Agentic engineering skills for Qt software development — Qt C++/QML code review, QML coding, and Qt C++/QML code documentation.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install qt-development-skills@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/TheQtCompanyRnD/agent-skills",
  "homepage": "https://www.qt.io/",
  "author": "Qt Group",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "quarkus-agent",
  "summary": "MCP server for AI coding agents to create, manage, and interact with Quarkus applications. Provides tools for project scaffolding, dev mode lifecycle…",
  "description": "MCP server for AI coding agents to create, manage, and interact with Quarkus applications. Provides tools for project scaffolding, dev mode lifecycle, extension skills, Dev MCP proxy, and documentation search.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install quarkus-agent@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/quarkusio/quarkus-agent-mcp",
  "homepage": "https://quarkus.io",
  "author": "Quarkus",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "railway",
  "summary": "Deploy and manage apps, databases, and infrastructure on Railway. Covers project setup, deploys, environment configuration, networking, troubleshooting, and…",
  "description": "Deploy and manage apps, databases, and infrastructure on Railway. Covers project setup, deploys, environment configuration, networking, troubleshooting, and monitoring.",
  "category": "Deployment",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install railway@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/railwayapp/railway-skills/tree/main/plugins/railway",
  "homepage": "https://docs.railway.com/ai/claude-code-plugin",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "ralph-loop",
  "summary": "Interactive self-referential AI loops for iterative development, implementing the Ralph Wiggum technique. Claude works on the same task repeatedly, seeing its…",
  "description": "Interactive self-referential AI loops for iterative development, implementing the Ralph Wiggum technique. Claude works on the same task repeatedly, seeing its previous work, until completion.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install ralph-loop@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/ralph-loop",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/plugins/ralph-loop",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "rc",
  "summary": "Configure RevenueCat projects, apps, products, entitlements, and offerings directly from Claude Code. Manage your in-app purchase backend without leaving your…",
  "description": "Configure RevenueCat projects, apps, products, entitlements, and offerings directly from Claude Code. Manage your in-app purchase backend without leaving your development workflow.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install rc@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/RevenueCat/rc-claude-code-plugin",
  "homepage": "https://www.revenuecat.com",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "receipts",
  "summary": "A personal Claude Code impact report for justifying your usage to a manager or a self-review: what you shipped, which projects it went to, and each project's…",
  "description": "A personal Claude Code impact report for justifying your usage to a manager or a self-review: what you shipped, which projects it went to, and each project's share of your usage. Reads your ~/.claude/projects transcripts and runs read-only git locally; only counts and project names are sent to write it up, and the report stays on your machine.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install receipts@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/receipts",
  "homepage": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/receipts",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "redis-development",
  "summary": "Redis development best practices — data structures, query engine, vector search, caching, and performance optimization",
  "description": "Redis development best practices — data structures, query engine, vector search, caching, and performance optimization",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install redis-development@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/redis/agent-skills/tree/main/plugins/redis-development",
  "homepage": "https://redis.io",
  "author": "Redis",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "remember",
  "summary": "Continuous memory for Claude Code. Extracts, summarizes, and compresses conversations into tiered daily logs. Claude remembers what you did yesterday.",
  "description": "Continuous memory for Claude Code. Extracts, summarizes, and compresses conversations into tiered daily logs. Claude remembers what you did yesterday.",
  "category": "Other",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install remember@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/Digital-Process-Tools/claude-remember",
  "homepage": "https://github.com/Digital-Process-Tools/claude-remember",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "render",
  "summary": "Deploy, debug, and monitor applications on Render. Includes skills, an agent, slash commands, and a render.yaml validation hook.",
  "description": "Deploy, debug, and monitor applications on Render. Includes skills, an agent, slash commands, and a render.yaml validation hook.",
  "category": "Deployment",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install render@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/render-oss/render-plugin-claude-code",
  "homepage": "https://render.com",
  "author": "Render",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "resend",
  "summary": "Agent skills for working with Resend to send and receive emails — email API integration, agent inbox, CLI, React Email components, and deliverability best…",
  "description": "Agent skills for working with Resend to send and receive emails — email API integration, agent inbox, CLI, React Email components, and deliverability best practices. Includes the Resend MCP server.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install resend@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/resend/resend-skills",
  "homepage": "https://resend.com",
  "author": "Resend",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "revenuecat",
  "summary": "Configure RevenueCat projects, apps, products, entitlements, and offerings directly from Claude Code. Manage your in-app purchase backend without leaving your…",
  "description": "Configure RevenueCat projects, apps, products, entitlements, and offerings directly from Claude Code. Manage your in-app purchase backend without leaving your development workflow.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install revenuecat@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/RevenueCat/rc-claude-code-plugin",
  "homepage": "https://www.revenuecat.com",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "rill",
  "summary": "Skills for developing and querying projects in the Rill business intelligence platform",
  "description": "Skills for developing and querying projects in the Rill business intelligence platform",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install rill@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/rilldata/agent-skills",
  "homepage": "https://docs.rilldata.com/developers/build/ai-configuration",
  "author": "Rill Data",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "rootly",
  "summary": "Full-lifecycle incident management: deploy safety, incident response, on-call management, and retrospectives.",
  "description": "Full-lifecycle incident management: deploy safety, incident response, on-call management, and retrospectives.",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install rootly@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/Rootly-AI-Labs/rootly-claude-plugin",
  "homepage": "https://rootly.com",
  "author": "Rootly",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "ruby-lsp",
  "summary": "Ruby language server for code intelligence and analysis",
  "description": "Ruby language server for code intelligence and analysis",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install ruby-lsp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/ruby-lsp",
  "homepage": null,
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "runway-api",
  "summary": "Video generation at scale. Generate videos, images, and audio with Runway's API — batch ad campaigns, product videos, multishot stories, and creative…",
  "description": "Video generation at scale. Generate videos, images, and audio with Runway's API — batch ad campaigns, product videos, multishot stories, and creative iteration. Supports seedance2, gen4.5, veo3, Nano, Banana Pro, and more.",
  "category": "Design",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install runway-api@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/runwayml/skills",
  "homepage": "https://runwayml.com",
  "author": "Runway",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "rust-analyzer-lsp",
  "summary": "Rust language server for code intelligence and analysis",
  "description": "Rust language server for code intelligence and analysis",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install rust-analyzer-lsp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/rust-analyzer-lsp",
  "homepage": null,
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "sagemaker-ai",
  "summary": "Build, train, and deploy AI models with deep AWS AI/ML expertise brought directly into your coding assistants, covering the surface area of Amazon SageMaker AI.",
  "description": "Build, train, and deploy AI models with deep AWS AI/ML expertise brought directly into your coding assistants, covering the surface area of Amazon SageMaker AI.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install sagemaker-ai@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/awslabs/agent-plugins/tree/main/plugins/sagemaker-ai",
  "homepage": "https://github.com/awslabs/agent-plugins",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "salesforce-development",
  "summary": "Build Salesforce apps and agents using these core building blocks: metadata, Apex, deploy/retrieve, security, reporting, and generated…",
  "description": "Build Salesforce apps and agents using these core building blocks: metadata, Apex, deploy/retrieve, security, reporting, and generated installed-versus-available capability discovery.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install salesforce-development@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/forcedotcom/sf-skills/tree/main/plugins/builder/salesforce-development",
  "homepage": "https://github.com/forcedotcom/sf-skills/tree/main/plugins/builder/salesforce-development",
  "author": "Salesforce",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "sanity",
  "summary": "Sanity content platform integration with MCP server, agent skills, and slash commands. Query and author content, build and optimize GROQ queries, design…",
  "description": "Sanity content platform integration with MCP server, agent skills, and slash commands. Query and author content, build and optimize GROQ queries, design schemas, and set up Visual Editing.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install sanity@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/sanity-io/agent-toolkit",
  "homepage": "https://www.sanity.io",
  "author": "Sanity",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "sap-cds-mcp",
  "summary": "AI-assisted development of SAP Cloud Application Programming Model (CAP) projects. Search CDS models and CAP documentation.",
  "description": "AI-assisted development of SAP Cloud Application Programming Model (CAP) projects. Search CDS models and CAP documentation.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install sap-cds-mcp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/cap-js/mcp-server",
  "homepage": "https://cap.cloud.sap/",
  "author": "SAP SE",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "sap-fiori-mcp-server",
  "summary": "MCP server for SAP Fiori development tools for Claude Code. Build and modify SAP Fiori applications with AI assistance.",
  "description": "MCP server for SAP Fiori development tools for Claude Code. Build and modify SAP Fiori applications with AI assistance.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install sap-fiori-mcp-server@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/SAP/open-ux-tools/tree/main/packages/fiori-mcp-server",
  "homepage": "https://github.com/SAP/open-ux-tools/tree/main/packages/fiori-mcp-server",
  "author": "SAP SE",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "sap-hana-cli",
  "summary": "150+ SAP HANA database tools for AI assistants. Query tables, import/export data, profile data quality, compare schemas, manage backups, monitor performance…",
  "description": "150+ SAP HANA database tools for AI assistants. Query tables, import/export data, profile data quality, compare schemas, manage backups, monitor performance, and more. Connects to SAP HANA Cloud and on-premise databases.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install sap-hana-cli@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/SAP-samples/hana-cli-claude-plugin",
  "homepage": "https://github.com/SAP-samples/hana-cli-claude-plugin",
  "author": "SAP SE",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "sap-mdk-server",
  "summary": "MCP server for SAP Mobile Development Kit (MDK). Build and modify MDK applications with AI assistance — schema lookups, action validation, rule editing, and…",
  "description": "MCP server for SAP Mobile Development Kit (MDK). Build and modify MDK applications with AI assistance — schema lookups, action validation, rule editing, and project scaffolding.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install sap-mdk-server@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/SAP/mdk-mcp-server",
  "homepage": "https://help.sap.com/docs/MDK",
  "author": "SAP SE",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "save-to-spotify",
  "summary": "Create polished audio episodes with TTS narration, rich timelines, cover images, and save them to Spotify via the save-to-spotify CLI.",
  "description": "Create polished audio episodes with TTS narration, rich timelines, cover images, and save them to Spotify via the save-to-spotify CLI.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install save-to-spotify@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/spotify/save-to-spotify/tree/main/plugin",
  "homepage": "https://github.com/spotify/save-to-spotify",
  "author": "Spotify",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "scandit-sdk",
  "summary": "AI agent skills for integrating the Scandit Data Capture SDK — product selection, documentation, and implementation guides for barcode scanning, ID capture…",
  "description": "AI agent skills for integrating the Scandit Data Capture SDK — product selection, documentation, and implementation guides for barcode scanning, ID capture, and smart label capture.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install scandit-sdk@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/Scandit/skills",
  "homepage": "https://www.scandit.com",
  "author": "Scandit",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "security-guidance",
  "summary": "Security review for Claude-generated code. Pattern-based warnings on edits, LLM-powered diff review on Stop, and an agentic commit reviewer that catches…",
  "description": "Security review for Claude-generated code. Pattern-based warnings on edits, LLM-powered diff review on Stop, and an agentic commit reviewer that catches injection, XSS, SSRF, hardcoded secrets, and 25+ other vulnerability classes.",
  "category": "Security",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install security-guidance@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/security-guidance",
  "homepage": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/security-guidance",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "semgrep",
  "summary": "Semgrep catches security vulnerabilities in real-time and guides Claude to write secure code from the start.",
  "description": "Semgrep catches security vulnerabilities in real-time and guides Claude to write secure code from the start.",
  "category": "Security",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install semgrep@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/semgrep/mcp-marketplace/tree/b58f407c6ac0f5fe47dee8301602f2e290a8ecfb/plugin",
  "homepage": "https://github.com/semgrep/mcp-marketplace.git",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "sentry",
  "summary": "Sentry error monitoring integration. Access error reports, analyze stack traces, search issues by fingerprint, and debug production errors directly from your…",
  "description": "Sentry error monitoring integration. Access error reports, analyze stack traces, search issues by fingerprint, and debug production errors directly from your development environment.",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install sentry@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/getsentry/plugin-claude",
  "homepage": "https://github.com/getsentry/plugin-claude",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "sentry-cli",
  "summary": "Skills for using the Sentry CLI to interact with Sentry from the command line",
  "description": "Skills for using the Sentry CLI to interact with Sentry from the command line",
  "category": "Monitoring",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install sentry-cli@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/getsentry/cli/tree/main/packages/cli/plugins/sentry-cli",
  "homepage": "https://sentry.io",
  "author": "Sentry",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "serena",
  "summary": "Semantic code analysis MCP server providing intelligent code understanding, refactoring suggestions, and codebase navigation through language server protocol…",
  "description": "Semantic code analysis MCP server providing intelligent code understanding, refactoring suggestions, and codebase navigation through language server protocol integration.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install serena@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/serena",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/external_plugins/serena",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "servicenow-sdk",
  "summary": "Create, edit, and deploy ServiceNow applications with the Fluent SDK effortlessly through Claude AI.",
  "description": "Create, edit, and deploy ServiceNow applications with the Fluent SDK effortlessly through Claude AI.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install servicenow-sdk@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/ServiceNow/sdk/tree/master/providers/claude/plugin",
  "homepage": "https://servicenow.github.io/sdk/",
  "author": "ServiceNow",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "session-report",
  "summary": "Generate an explorable HTML report of Claude Code session usage — tokens, cache efficiency, subagents, skills, and the most expensive prompts — from local…",
  "description": "Generate an explorable HTML report of Claude Code session usage — tokens, cache efficiency, subagents, skills, and the most expensive prompts — from local ~/.claude/projects transcripts.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install session-report@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/session-report",
  "homepage": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/session-report",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "setup-agent-analytics",
  "summary": "Detect AI agents in your codebase and instrument them with Pendo Agent Analytics via the best-fit path: Python SDK, TypeScript SDK, client-side trackAgent()…",
  "description": "Detect AI agents in your codebase and instrument them with Pendo Agent Analytics via the best-fit path: Python SDK, TypeScript SDK, client-side trackAgent(), or the Conversations API.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install setup-agent-analytics@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/pendo-io/claude-pendo-plugin/tree/main/plugins/setup-agent-analytics",
  "homepage": "https://github.com/pendo-io/claude-pendo-plugin/tree/main/plugins/setup-agent-analytics",
  "author": "Pendo",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "setup-mcp-agent-analytics",
  "summary": "Detect an MCP server's language (Python, TypeScript or Go) and instrument it with the matching Pendo SDK so MCP tool calls flow into Pendo Agent Analytics.",
  "description": "Detect an MCP server's language (Python, TypeScript or Go) and instrument it with the matching Pendo SDK so MCP tool calls flow into Pendo Agent Analytics.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install setup-mcp-agent-analytics@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/pendo-io/claude-pendo-plugin/tree/main/plugins/setup-mcp-agent-analytics",
  "homepage": "https://github.com/pendo-io/claude-pendo-plugin/tree/main/plugins/setup-mcp-agent-analytics",
  "author": "Pendo",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "shippo",
  "summary": "Shippo connects you to USPS, UPS, FedEx, DHL, and 40+ carriers, so you can handle a shipment end to end right inside Claude. Compare live rates and pick the…",
  "description": "Shippo connects you to USPS, UPS, FedEx, DHL, and 40+ carriers, so you can handle a shipment end to end right inside Claude. Compare live rates and pick the cheapest or best option, buy and print labels (domestic and international, with customs declarations), validate and standardize addresses, and track packages across carriers. Just ask in plain language: rate-shop a parcel, buy the right label, check a delivery status, or confirm an address before you ship. Whether you run a store or just need to send a package, Shippo turns a pile of carrier accounts into one simple conversation.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install shippo@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/goshippo/ai/tree/main/providers/claude/plugin",
  "homepage": "https://docs.goshippo.com",
  "author": "Shippo",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "shopify-ai-toolkit",
  "summary": "Shopify's AI Toolkit provides 18 development skills for building on the Shopify platform, covering documentation search, API schema access, GraphQL and Liquid…",
  "description": "Shopify's AI Toolkit provides 18 development skills for building on the Shopify platform, covering documentation search, API schema access, GraphQL and Liquid code validation, Hydrogen storefronts, Polaris UI extensions, store management via CLI, and onboarding guidance for both developers and merchants.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install shopify-ai-toolkit@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/Shopify/Shopify-AI-Toolkit",
  "homepage": "https://shopify.dev",
  "author": "Shopify",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "skill-creator",
  "summary": "Create new skills, improve existing skills, and measure skill performance. Use when users want to create a skill from scratch, update or optimize an existing…",
  "description": "Create new skills, improve existing skills, and measure skill performance. Use when users want to create a skill from scratch, update or optimize an existing skill, run evals to test a skill, or benchmark skill performance with variance analysis.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install skill-creator@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/skill-creator",
  "homepage": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/skill-creator",
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "slack",
  "summary": "Slack workspace integration. Search messages, access channels, read threads, and stay connected with your team's communications while coding. Find relevant…",
  "description": "Slack workspace integration. Search messages, access channels, read threads, and stay connected with your team's communications while coding. Find relevant discussions and context quickly.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install slack@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/slackapi/slack-mcp-plugin",
  "homepage": "https://github.com/slackapi/slack-mcp-plugin/tree/main",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "snowflake-cortex-code",
  "summary": "Automatically route Snowflake prompts from Claude Code to Cortex Code for execution. Provides slash commands for code review and task delegation, plus skills…",
  "description": "Automatically route Snowflake prompts from Claude Code to Cortex Code for execution. Provides slash commands for code review and task delegation, plus skills for routing, run, and setup.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install snowflake-cortex-code@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/Snowflake-Labs/snowflake-ai-kit/tree/main/plugins/cortex-code",
  "homepage": "https://docs.snowflake.com/en/user-guide/cortex-code",
  "author": "Snowflake",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "sonarqube",
  "summary": "Automatically enforce SonarQube code quality and security in the agent coding loop — 7,000+ rules, secrets scanning, agentic analysis, and quality gates…",
  "description": "Automatically enforce SonarQube code quality and security in the agent coding loop — 7,000+ rules, secrets scanning, agentic analysis, and quality gates across 40+ languages. PostToolUse hooks run analysis after every file edit. Pre-tool secrets scanning prevents 450+ patterns from reaching the LLM. Slash commands give on-demand access to quality gate status, coverage, duplication, and dependency risks. Includes SonarQube CLI, MCP Server, skills, hooks, and slash commands.",
  "category": "Security",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install sonarqube@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/SonarSource/sonarqube-agent-plugins",
  "homepage": "https://www.sonarsource.com",
  "author": "SonarSource",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "sonatype-guide",
  "summary": "Sonatype Guide MCP server for software supply chain intelligence and dependency security. Analyze dependencies for vulnerabilities, get secure version…",
  "description": "Sonatype Guide MCP server for software supply chain intelligence and dependency security. Analyze dependencies for vulnerabilities, get secure version recommendations, and check component quality metrics.",
  "category": "Security",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install sonatype-guide@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/sonatype/sonatype-guide-claude-plugin",
  "homepage": "https://github.com/sonatype/sonatype-guide-claude-plugin.git",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "sourcegraph",
  "summary": "Code search and understanding across codebases. Search, read, and trace references across repositories; analyze refactor impact; investigate incidents via…",
  "description": "Code search and understanding across codebases. Search, read, and trace references across repositories; analyze refactor impact; investigate incidents via commit and diff search; run targeted security sweeps.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install sourcegraph@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/sourcegraph-community/sourcegraph-claudecode-plugin",
  "homepage": "https://sourcegraph.com",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "spanner",
  "summary": "Connect and interact with Spanner data using natural language.",
  "description": "Connect and interact with Spanner data using natural language.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install spanner@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/gemini-cli-extensions/spanner",
  "homepage": "https://github.com/gemini-cli-extensions/spanner",
  "author": "Google LLC",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "spotify-ads-api",
  "summary": "Manage Spotify ad campaigns with natural language. Create campaigns, ad sets, ads, pull reports, and handle OAuth — all through conversation.",
  "description": "Manage Spotify ad campaigns with natural language. Create campaigns, ad sets, ads, pull reports, and handle OAuth — all through conversation.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install spotify-ads-api@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/spotify/ads-claude-plugin",
  "homepage": "https://github.com/spotify/ads-claude-plugin",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "stackhawk-api",
  "summary": "Query the StackHawk platform API for security posture reporting, findings analysis, and app management. Guides agents through authentication, data retrieval…",
  "description": "Query the StackHawk platform API for security posture reporting, findings analysis, and app management. Guides agents through authentication, data retrieval, and result presentation.",
  "category": "Security",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install stackhawk-api@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/stackhawk/agent-skills/tree/main/plugins/api",
  "homepage": "https://docs.stackhawk.com/ai-security/",
  "author": "StackHawk",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "stackhawk-hawkscan",
  "summary": "Configure, run, and interpret HawkScan DAST results inside Claude Code. Generates stackhawk.yml configs, runs scans via CLI or Docker, and transforms security…",
  "description": "Configure, run, and interpret HawkScan DAST results inside Claude Code. Generates stackhawk.yml configs, runs scans via CLI or Docker, and transforms security findings into prioritized fix tasks for your coding agent.",
  "category": "Security",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install stackhawk-hawkscan@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/stackhawk/agent-skills/tree/main/plugins/hawkscan",
  "homepage": "https://docs.stackhawk.com/ai-security/",
  "author": "StackHawk",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "streaming-skills-plugin",
  "summary": "Skills for streaming application developers, covering Kafka and Flink client libraries and Schema Registry",
  "description": "Skills for streaming application developers, covering Kafka and Flink client libraries and Schema Registry",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install streaming-skills-plugin@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/confluentinc/agent-skills",
  "homepage": "https://www.confluent.io",
  "author": "Confluent",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "stripe",
  "summary": "Stripe development plugin for Claude",
  "description": "Stripe development plugin for Claude",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install stripe@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/stripe/ai/tree/main/providers/claude/plugin",
  "homepage": "https://github.com/stripe/ai/tree/main/providers/claude/plugin",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "sumup",
  "summary": "SumUp payment integrations across terminal and online checkout flows. Build Android and iOS POS apps with SumUp card readers, online checkout with server SDKs…",
  "description": "SumUp payment integrations across terminal and online checkout flows. Build Android and iOS POS apps with SumUp card readers, online checkout with server SDKs and the checkout widget, and control card readers remotely via Cloud API.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install sumup@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/sumup/sumup-skills",
  "homepage": "https://www.sumup.com/",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "supabase",
  "summary": "Supabase MCP integration for database operations, authentication, storage, and real-time subscriptions. Manage your Supabase projects, run SQL queries, and…",
  "description": "Supabase MCP integration for database operations, authentication, storage, and real-time subscriptions. Manage your Supabase projects, run SQL queries, and interact with your backend directly.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install supabase@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/supabase-community/supabase-plugin",
  "homepage": "https://github.com/supabase-community/supabase-plugin",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "superdesign",
  "summary": "Design or redesign frontend UI and marketing graphics on the Superdesign infinite canvas. Reads your codebase for context, sets up a design system, and…",
  "description": "Design or redesign frontend UI and marketing graphics on the Superdesign infinite canvas. Reads your codebase for context, sets up a design system, and generates branchable design drafts you refine.",
  "category": "Design",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install superdesign@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/superdesigndev/superdesign-skill",
  "homepage": "https://superdesign.dev",
  "author": "Superdesign dev, Inc.",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "superpowers",
  "summary": "Superpowers teaches Claude brainstorming, subagent driven development with built in code review, systematic debugging, and red/green TDD. Additionally, it…",
  "description": "Superpowers teaches Claude brainstorming, subagent driven development with built in code review, systematic debugging, and red/green TDD. Additionally, it teaches Claude how to author and test new skills.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install superpowers@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/obra/superpowers",
  "homepage": "https://github.com/obra/superpowers.git",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "swift-lsp",
  "summary": "Swift language server (SourceKit-LSP) for code intelligence",
  "description": "Swift language server (SourceKit-LSP) for code intelligence",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install swift-lsp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/swift-lsp",
  "homepage": null,
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "synthflow",
  "summary": "Connects Claude Code to the Synthflow AI voice-agent platform through its hosted MCP server, with skills for reviewing calls and auditing agent prompts, plus…",
  "description": "Connects Claude Code to the Synthflow AI voice-agent platform through its hosted MCP server, with skills for reviewing calls and auditing agent prompts, plus a docs-search connector.",
  "category": "Automation",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install synthflow@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/SynthFlowAI/AnthropicPlugin/tree/main/plugins/synthflow",
  "homepage": "https://synthflow.ai",
  "author": "Synthflow",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "tavily",
  "summary": "Build AI applications with real-time web data using Tavily's search, extract, crawl, and research APIs.",
  "description": "Build AI applications with real-time web data using Tavily's search, extract, crawl, and research APIs.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install tavily@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/tavily-ai/skills",
  "homepage": "https://www.tavily.com/",
  "author": "Tavily Team",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "teamcity-cli",
  "summary": "Agent skill for interacting with TeamCity CI/CD using the teamcity CLI. Enables Claude to explore builds, view logs, start jobs, manage queues, agents, and…",
  "description": "Agent skill for interacting with TeamCity CI/CD using the teamcity CLI. Enables Claude to explore builds, view logs, start jobs, manage queues, agents, and more.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install teamcity-cli@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/JetBrains/teamcity-cli",
  "homepage": "https://www.jetbrains.com/teamcity/",
  "author": "JetBrains",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "telegram",
  "summary": "Telegram messaging bridge with built-in access control. Manage pairing, allowlists, and policy via /telegram:access.",
  "description": "Telegram messaging bridge with built-in access control. Manage pairing, allowlists, and policy via /telegram:access.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install telegram@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/telegram",
  "homepage": null,
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "terraform",
  "summary": "The Terraform MCP Server provides seamless integration with Terraform ecosystem, enabling advanced automation and interaction capabilities for Infrastructure…",
  "description": "The Terraform MCP Server provides seamless integration with Terraform ecosystem, enabling advanced automation and interaction capabilities for Infrastructure as Code (IaC) development.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install terraform@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/terraform",
  "homepage": "https://github.com/anthropics/claude-plugins-public/tree/main/external_plugins/terraform",
  "author": "HashiCorp",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "togetherai-skills",
  "summary": "Agent Skills for Together AI platform — inference, training, embeddings, audio, video, images, function calling, and infrastructure. Covers serverless chat…",
  "description": "Agent Skills for Together AI platform — inference, training, embeddings, audio, video, images, function calling, and infrastructure. Covers serverless chat completions, image/video generation, fine-tuning, batch inference, evaluations, sandboxes, dedicated endpoints, and GPU clusters.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install togetherai-skills@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/togethercomputer/skills",
  "homepage": "https://www.together.ai",
  "author": "Together AI",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "twilio-developer-kit",
  "summary": "Twilio Skills provide procedural knowledge for AI coding agents — which APIs to use, in what order, and what to avoid. Covers SMS, Voice, WhatsApp, Verify…",
  "description": "Twilio Skills provide procedural knowledge for AI coding agents — which APIs to use, in what order, and what to avoid. Covers SMS, Voice, WhatsApp, Verify, SendGrid, Compliance, and 30+ products.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install twilio-developer-kit@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/twilio/ai",
  "homepage": "https://www.twilio.com",
  "author": "Twilio",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "typescript-lsp",
  "summary": "TypeScript/JavaScript language server for enhanced code intelligence",
  "description": "TypeScript/JavaScript language server for enhanced code intelligence",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install typescript-lsp@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/typescript-lsp",
  "homepage": null,
  "author": "Anthropic",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "ui-theme-designer",
  "summary": "Plugin for coding agents working with UI theme designer. Bundles two skills: how-to and conceptual answers about UI theme designer on BTP, and questions about…",
  "description": "Plugin for coding agents working with UI theme designer. Bundles two skills: how-to and conceptual answers about UI theme designer on BTP, and questions about the SAP Design System and SAP Fiori design tokens — theme parameters and component-level parameter usage in UI5, UI5 Web Components, and Fundamental Styles.",
  "category": "Design",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install ui-theme-designer@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/SAP/ui-theme-designer-plugins-for-coding-agents/tree/main/plugins/ui-theme-designer",
  "homepage": "https://github.com/SAP/ui-theme-designer-plugins-for-coding-agents",
  "author": "SAP SE",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "ui5",
  "summary": "SAPUI5 / OpenUI5 plugin for coding agents. Create and validate UI5 projects, access API documentation, run UI5 linter, get development guidelines and best…",
  "description": "SAPUI5 / OpenUI5 plugin for coding agents. Create and validate UI5 projects, access API documentation, run UI5 linter, get development guidelines and best practices for UI5 development.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install ui5@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/UI5/plugins-coding-agents/tree/main/plugins/ui5",
  "homepage": "https://github.com/UI5/plugins-coding-agents",
  "author": "SAP SE",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "ui5-modernization",
  "summary": "Complete UI5 modernization toolkit with workflow and specialized fix patterns for modernizing SAPUI5/OpenUI5 applications.",
  "description": "Complete UI5 modernization toolkit with workflow and specialized fix patterns for modernizing SAPUI5/OpenUI5 applications.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install ui5-modernization@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/UI5/plugins-coding-agents/tree/main/plugins/ui5-modernization",
  "homepage": "https://github.com/UI5/plugins-coding-agents",
  "author": "SAP SE",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "ui5-typescript-conversion",
  "summary": "SAPUI5 / OpenUI5 plugin for coding agents. Convert JavaScript based UI5 projects to TypeScript.",
  "description": "SAPUI5 / OpenUI5 plugin for coding agents. Convert JavaScript based UI5 projects to TypeScript.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install ui5-typescript-conversion@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/UI5/plugins-coding-agents/tree/main/plugins/ui5-typescript-conversion",
  "homepage": "https://github.com/UI5/plugins-coding-agents",
  "author": "SAP SE",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "unity",
  "summary": "Unity's official plugin for Claude Code, with curated skills for game development, monetization, and performance optimization.",
  "description": "Unity's official plugin for Claude Code, with curated skills for game development, monetization, and performance optimization.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install unity@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/Unity-Technologies/unity-agent-plugin",
  "homepage": "https://unity.com",
  "author": "Unity Technologies",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "unreal-engine-skills-for-claude-code",
  "summary": "Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools exposed via Unreal's ToolsetRegistry across 30+ toolsets: actors, blueprints…",
  "description": "Control Unreal Editor directly from Claude Code via MCP. Hundreds of tools exposed via Unreal's ToolsetRegistry across 30+ toolsets: actors, blueprints, materials, Niagara, Control Rigs, Sequencer, State Trees, widgets, Gameplay Ability System, automation testing, and more.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install unreal-engine-skills-for-claude-code@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/EpicGames/unreal-engine-skills-for-claude-code-plugin",
  "homepage": "https://dev.epicgames.com/documentation/unreal-engine/unreal-mcp-in-unreal-editor",
  "author": "Epic Games",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "valtown",
  "summary": "Build and deploy on Val Town. Bundles the Val Town MCP server and platform skills (HTTP vals, cron/intervals, SQLite, email, OAuth, React UI, third-party…",
  "description": "Build and deploy on Val Town. Bundles the Val Town MCP server and platform skills (HTTP vals, cron/intervals, SQLite, email, OAuth, React UI, third-party integrations, templates).",
  "category": "Deployment",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install valtown@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/val-town/plugins/tree/main/plugin",
  "homepage": "https://val.town",
  "author": "Val Town",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "vanguard-advisor-tools",
  "summary": "Vanguard Advisor Tools for financial professionals: research and compare funds and ETFs across the industry and prepare for client conversations, using…",
  "description": "Vanguard Advisor Tools for financial professionals: research and compare funds and ETFs across the industry and prepare for client conversations, using Vanguard's advisor connector in Claude.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install vanguard-advisor-tools@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/Vanguard-oss/vanguard-advisor-tools",
  "homepage": "https://advisors.vanguard.com",
  "author": "Vanguard",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "vanta",
  "summary": "The Vanta plugin connects Claude Code to Vanta's security and compliance platform through the Vanta MCP server. It combines Vanta's test-specific remediation…",
  "description": "The Vanta plugin connects Claude Code to Vanta's security and compliance platform through the Vanta MCP server. It combines Vanta's test-specific remediation intelligence with your local repository context to help you fix compliance failures faster.",
  "category": "Security",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install vanta@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/VantaInc/vanta-mcp-plugin",
  "homepage": "https://help.vanta.com/en/articles/14094979-connecting-to-vanta-mcp#h_887ce3f337",
  "author": "Vanta",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "vanta-mcp-plugin",
  "summary": "The Vanta plugin connects Claude Code to Vanta's security and compliance platform through the Vanta MCP server. It combines Vanta's test-specific remediation…",
  "description": "The Vanta plugin connects Claude Code to Vanta's security and compliance platform through the Vanta MCP server. It combines Vanta's test-specific remediation intelligence with your local repository context to help you fix compliance failures faster.",
  "category": "Security",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install vanta-mcp-plugin@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/VantaInc/vanta-mcp-plugin",
  "homepage": "https://help.vanta.com/en/articles/14094979-connecting-to-vanta-mcp#h_887ce3f337",
  "author": "Vanta",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "vercel",
  "summary": "Vercel deployment platform integration. Manage deployments, check build status, access logs, configure domains, and control your frontend infrastructure…",
  "description": "Vercel deployment platform integration. Manage deployments, check build status, access logs, configure domains, and control your frontend infrastructure directly from Claude Code.",
  "category": "Deployment",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install vercel@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/vercel/vercel-plugin",
  "homepage": "https://github.com/vercel/vercel-plugin",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "vibe-prospecting",
  "summary": "Vibe Prospecting connects Claude to live B2B company and contact data so users can search, match, enrich, filter, and export prospects at scale. It turns…",
  "description": "Vibe Prospecting connects Claude to live B2B company and contact data so users can search, match, enrich, filter, and export prospects at scale. It turns natural-language requests into structured GTM workflows for lead generation, CRM enrichment, company research, executive discovery, and multi-step prospecting automation inside Claude Cowork and Claude Code.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install vibe-prospecting@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/explorium-ai/vibeprospecting-plugin",
  "homepage": "https://www.vibeprospecting.ai/product/claude-plugin",
  "author": "vibeprospecting.ai",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "vsql-extension-builder",
  "summary": "Builds a VillageSQL extension for MySQL end-to-end through a 7-phase persona-driven workflow. Commonly used to port PostgreSQL extensions to MySQL.",
  "description": "Builds a VillageSQL extension for MySQL end-to-end through a 7-phase persona-driven workflow. Commonly used to port PostgreSQL extensions to MySQL.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install vsql-extension-builder@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/villagesql/villagesql-skills",
  "homepage": "https://villagesql.com",
  "author": "VillageSQL",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "windsor-ai",
  "summary": "Connect Claude Code to 325+ business data sources via Windsor.ai. Query marketing, sales, CRM, ecommerce, finance, and analytics data from Google Ads, Meta…",
  "description": "Connect Claude Code to 325+ business data sources via Windsor.ai. Query marketing, sales, CRM, ecommerce, finance, and analytics data from Google Ads, Meta, HubSpot, Salesforce, Shopify, Stripe, and hundreds more — directly from your terminal.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install windsor-ai@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/windsor-ai/claude-windsor-ai-plugin",
  "homepage": "https://windsor.ai",
  "author": "Windsor.ai",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "wingspan",
  "summary": "Ask Claude about the contractors you pay through Wingspan, what you owe them, and what is holding up a payment, then onboard contractors and log payments as…",
  "description": "Ask Claude about the contractors you pay through Wingspan, what you owe them, and what is holding up a payment, then onboard contractors and log payments as drafts, with a preview before anything is written. Requires a Wingspan account; bundles the Wingspan MCP server (OAuth on first use).",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install wingspan@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/wingspanHQ/mcp-claude-plugin",
  "homepage": "https://github.com/wingspanHQ/mcp-claude-plugin",
  "author": "Wingspan",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "wix",
  "summary": "Build, manage, and deploy Wix sites and apps. CLI development skills for dashboard extensions, backend APIs, site widgets, and service plugins with the Wix…",
  "description": "Build, manage, and deploy Wix sites and apps. CLI development skills for dashboard extensions, backend APIs, site widgets, and service plugins with the Wix Design System, plus MCP server for site management.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install wix@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/wix/skills",
  "homepage": "https://dev.wix.com/docs/wix-cli/guides/development/about-wix-skills",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "workos",
  "summary": "WorkOS integration skills for AuthKit, SSO, Directory Sync, RBAC, Vault, Audit Logs, migrations, and API references.",
  "description": "WorkOS integration skills for AuthKit, SSO, Directory Sync, RBAC, Vault, Audit Logs, migrations, and API references.",
  "category": "Security",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install workos@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/workos/skills/tree/main/plugins/workos",
  "homepage": "https://workos.com",
  "author": "WorkOS",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "youdotcom-agent-skills",
  "summary": "You.com agent skills for web search, research with citations, and content extraction. Guided integrations for Vercel AI SDK, Claude Agent SDK, OpenAI Agents…",
  "description": "You.com agent skills for web search, research with citations, and content extraction. Guided integrations for Vercel AI SDK, Claude Agent SDK, OpenAI Agents SDK, crewAI, LangChain, Microsoft Teams.ai, direct REST API, and bash CLI.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install youdotcom-agent-skills@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/youdotcom-oss/agent-skills",
  "homepage": "https://you.com",
  "author": "You.com",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "zapier",
  "summary": "Connect 8,000+ apps to your AI workflow. Discover, enable, and execute Zapier actions directly from your client.",
  "description": "Connect 8,000+ apps to your AI workflow. Discover, enable, and execute Zapier actions directly from your client.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install zapier@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/zapier/zapier-mcp/tree/main/plugins/zapier",
  "homepage": "https://github.com/zapier/zapier-mcp/tree/main/plugins/zapier",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "zilliz",
  "summary": "Zilliz Cloud management plugin with 14 skills covering cluster lifecycle, collection schema, vector search, index tuning, bulk import, RBAC, backups, and…",
  "description": "Zilliz Cloud management plugin with 14 skills covering cluster lifecycle, collection schema, vector search, index tuning, bulk import, RBAC, backups, and monitoring.",
  "category": "Database",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install zilliz@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/zilliztech/zilliz-plugin",
  "homepage": "https://docs.zilliz.com",
  "author": "Zilliz",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "zocks-advisor",
  "summary": "Seven skills for financial advisors built on Zocks meeting intelligence: client behavioral profiles, attrition-risk ranking, held-away asset radar, client…",
  "description": "Seven skills for financial advisors built on Zocks meeting intelligence: client behavioral profiles, attrition-risk ranking, held-away asset radar, client journey dossiers, household review packs, next-best-action analysis and a tax opportunity scan. Requires the Zocks connector and a Zocks account.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install zocks-advisor@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/zocks-communications/zocks-agent-plugins",
  "homepage": "https://github.com/zocks-communications/zocks-agent-plugins",
  "author": "Zocks",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "zoom-plugin",
  "summary": "Claude plugin for planning, building, and debugging Zoom integrations across REST APIs, SDKs, webhooks, bots, and MCP workflows.",
  "description": "Claude plugin for planning, building, and debugging Zoom integrations across REST APIs, SDKs, webhooks, bots, and MCP workflows.",
  "category": "Development",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install zoom-plugin@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/zoom/zoom-plugin",
  "homepage": "https://developers.zoom.us/",
  "author": null,
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "zoominfo",
  "summary": "Search companies and contacts, enrich leads, find lookalikes, and get AI-ranked contact recommendations. Pre-built skills chain multiple ZoomInfo tools into…",
  "description": "Search companies and contacts, enrich leads, find lookalikes, and get AI-ranked contact recommendations. Pre-built skills chain multiple ZoomInfo tools into complete B2B sales workflows.",
  "category": "Productivity",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install zoominfo@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/Zoominfo/zoominfo-mcp-plugin",
  "homepage": "https://www.zoominfo.com",
  "author": "ZoomInfo",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "zscaler",
  "summary": "Manage Zscaler cloud security platform including ZPA (private access), ZIA (internet access), ZDX (digital experience), ZCC (client connector), EASM (attack…",
  "description": "Manage Zscaler cloud security platform including ZPA (private access), ZIA (internet access), ZDX (digital experience), ZCC (client connector), EASM (attack surface), and Z-Insights (analytics). Create and manage policies, troubleshoot connectivity, audit security configurations, and investigate incidents across the full Zscaler ecosystem.",
  "category": "Security",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install zscaler@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/zscaler/zscaler-mcp-server",
  "homepage": "https://github.com/zscaler/zscaler-mcp-server",
  "author": "Zscaler",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 },
 {
  "name": "zyte-web-data",
  "summary": "Web scraping skills for Claude Code powered by the Zyte API — scrape sites, generate and run Scrapy spiders, define extraction schemas, and ship to Scrapy…",
  "description": "Web scraping skills for Claude Code powered by the Zyte API — scrape sites, generate and run Scrapy spiders, define extraction schemas, and ship to Scrapy Cloud.",
  "category": "Automation",
  "install": [
   {
    "step": "The official marketplace is built into Claude Code. If /plugin does not list it, add it first.",
    "command": "/plugin marketplace add anthropics/claude-plugins-official"
   },
   {
    "step": "Install the plugin.",
    "command": "/plugin install zyte-web-data@claude-plugins-official"
   },
   {
    "step": "Restart Claude Code so the plugin's skills, commands, agents, and hooks load.",
    "command": null
   }
  ],
  "source": "https://github.com/zytedata/claude-skills",
  "homepage": "https://www.zyte.com",
  "author": "Zyte",
  "verified": true,
  "verificationNote": "Listed in anthropics/claude-plugins-official .claude-plugin/marketplace.json, read via the GitHub API on 2026-10-15."
 }
];
