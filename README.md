# Bruno Florencio — AI Automation Engineer

**I build AI-powered automations and full-stack products that run real businesses.**

Founder of Syntrix. I ship end to end — data pipelines, LLM features, browser agents and SaaS — using AI-assisted development to move at startup speed.

🌐 **Live portfolio:** [brunoflorencio.vercel.app](https://brunoflorencio.vercel.app) · 📧 [brunofdalmeida1@gmail.com](mailto:brunofdalmeida1@gmail.com) · 📍 Brazil · Remote · Overlaps US hours (ET/CT)

> Open to remote roles and contracts in AI automation, internal tools and LLM features.

---

## Selected work

| Project | What it is | Stack |
|---|---|---|
| [**Syntrix**](#syntrix) | Multi-tenant financial management SaaS — founder, built solo | Supabase · PostgreSQL RLS · TypeScript · Asaas API |
| [**AI Executive Dashboard**](#ai-executive-dashboard) | Self-updating executive dashboard with LLM-written analysis | React · Supabase · Groq · Gemini · Sienge ERP |
| [**Affiliate Deals Bot**](#affiliate-deals-bot) | Browser agents that find deals and post to Telegram/WhatsApp | Node.js · Playwright · GitHub Actions · PM2 |
| [**Commerce & Checkout Platform**](#commerce--checkout-platform) | Storefront platform with a standalone, embeddable checkout | Supabase · RLS · Asaas split payments |

---

### Syntrix
**Founder · Multi-tenant SaaS** · [syntrix.com.br](https://syntrix.com.br)

Financial management SaaS for small and mid-sized businesses.

- **Problem:** SMBs juggle payables, receivables, billing and cash flow across spreadsheets and disconnected tools.
- **What I built:** Designed and built solo — a multi-tenant platform with per-tenant data isolation via Postgres Row-Level Security, integrated billing through the Asaas payments API, and separate customer, admin and AI apps on a shared Supabase backend.
- **Impact:**
  - ✅ Live in production at syntrix.com.br
  - ✅ Owned everything: product, architecture, code and billing

`Supabase` `PostgreSQL RLS` `TypeScript` `Node.js` `Asaas API` `Vercel`

---

### AI Executive Dashboard
**In-house · Cetest Engenharia**

Live executive dashboard that replaced manual spreadsheet reporting and writes its own analysis with LLMs.

- **Problem:** Leadership at an engineering services company depended on scattered Excel files and an ERP to see revenue, cash flow, HR, safety and procurement — reports were slow, manual and always out of date.
- **What I built:**
  - An ETL pipeline (Excel + Sienge ERP API → Supabase Postgres) that runs hourly on business days
  - A React dashboard with 10+ modules: P&L, cash flow, billing, HR, payroll, safety, occupational health, procurement
  - An AI "CFO report" that streams an analytical narrative from the live numbers — Groq first, automatic fallback to Gemini
- **Impact:**
  - ✅ Reporting went from manual and periodic to automatic, every hour
  - ✅ One login-protected source of truth for the whole leadership team
  - ✅ LLM analysis with provider fallback, so reports keep working if one API is down

`React` `Vite` `Supabase` `Supabase Auth` `Serverless API` `Groq` `Gemini` `Chart.js` `Sienge ERP API`

---

### Affiliate Deals Bot
**Automation · Browser agents**

Autonomous bot that finds deals, generates affiliate links and posts them to Telegram and WhatsApp around the clock.

- **Problem:** Running affiliate channels means hours a day hunting deals, generating links in each marketplace's portal and posting by hand — and Mercado Livre and Shopee offer no public API for affiliate links.
- **What I built:** Playwright browser agents that log into Amazon, Mercado Livre and Shopee affiliate portals, pick products, generate the affiliate link and publish formatted posts to Telegram and WhatsApp. Includes a product queue with CSV import, duplicate-post prevention, a private admin console, and CI/CD to a cloud VM (GitHub Actions → SSH → PM2, headed browser under Xvfb).
- **Impact:**
  - ✅ 3 marketplaces and 2 channels running unattended
  - ✅ 800+ products loaded into the posting queue
  - ✅ Push-to-deploy: every commit ships to production automatically

`Node.js` `Playwright` `Telegram Bot API` `WhatsApp (Baileys)` `GitHub Actions` `PM2` `Linux`

---

### Commerce & Checkout Platform
**In progress · Platform architecture**

Shopify-style storefront platform with a standalone checkout that merchants can embed anywhere.

- **Problem:** Merchants selling physical and digital products need a store and a checkout without stitching together several platforms and payment providers.
- **What I built:** A multi-tenant architecture where checkout is an independent service (hosted payment link + JS/iframe embed), payments are split automatically between merchant and platform via Asaas marketplace sub-accounts, and no raw card data ever touches our servers.
- **Impact:**
  - ✅ Security-first design: tenant isolation with RLS, tokenized payments, KYC on the provider side

`Supabase` `PostgreSQL RLS` `Asaas split payments` `TypeScript`

---

## Toolkit

- **AI & LLMs:** prompt engineering, LLM integration, streaming responses, model fallback, Claude, OpenAI, Gemini, Groq, Claude Code
- **Automation:** browser agents (Playwright), Telegram & WhatsApp bots, scheduled jobs, ETL (Excel/ERP → Postgres), webhooks
- **Full-stack:** React, Next.js, Node.js, TypeScript, Tailwind, serverless APIs
- **Data & infra:** Supabase, PostgreSQL + RLS, Supabase Auth / JWT, Vercel, GitHub Actions CI/CD, Linux VM + PM2

---

## About this repo

Source code of [brunoflorencio.vercel.app](https://brunoflorencio.vercel.app) — Next.js + Tailwind, bilingual (EN/PT), deployed on Vercel on every push to `main`.

All site content lives in [`data/content.ts`](data/content.ts).

```bash
npm install
npm run dev   # http://localhost:3000
```
