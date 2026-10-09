// Todo o conteúdo do site fica aqui. Edite este arquivo para atualizar o portfólio.
// Campos vazios ("") não aparecem no site — preencha quando tiver o dado.

export type Lang = "en" | "pt";
type T = Record<Lang, string>;

export const profile = {
  name: "Bruno Florencio",
  role: { en: "AI Automation Engineer", pt: "AI Automation Engineer" } as T,
  headline: {
    en: "I build AI-powered automations and full-stack products that run real businesses.",
    pt: "Construo automações com IA e produtos full-stack que rodam negócios de verdade.",
  } as T,
  subheadline: {
    en: "Founder of Syntrix. I ship end to end — data pipelines, LLM features, browser agents and SaaS — using AI-assisted development to move at startup speed.",
    pt: "Fundador do Syntrix. Entrego de ponta a ponta — pipelines de dados, features com LLM, agentes de navegador e SaaS — usando desenvolvimento assistido por IA para entregar em ritmo de startup.",
  } as T,
  location: { en: "Brazil · Remote · Overlaps US hours (ET/CT)", pt: "Brasil · Remoto · Horário compatível com os EUA (ET/CT)" } as T,
  about: {
    en: "I'm a builder who sits between business and engineering. As a solo founder I designed and shipped Syntrix, a multi-tenant financial SaaS, and in-house I replaced spreadsheet reporting at an engineering company with a live executive dashboard that syncs itself and writes its own analysis with LLMs. I treat AI as a production tool, not a demo: prompt design, model fallbacks, streaming, auth and cost all matter. I'm looking for remote roles or contracts where I can own automations and AI features end to end.",
    pt: "Sou um builder entre o negócio e a engenharia. Como fundador solo, projetei e lancei o Syntrix, um SaaS financeiro multi-tenant, e dentro de uma empresa de engenharia troquei relatórios em planilha por um dashboard executivo que se atualiza sozinho e escreve a própria análise com LLMs. Trato IA como ferramenta de produção, não como demo: design de prompts, fallback entre modelos, streaming, autenticação e custo importam. Busco vagas remotas ou contratos em que eu seja dono de automações e features de IA de ponta a ponta.",
  } as T,
  email: "brunofdalmeida1@gmail.com",
  github: "https://github.com/bruno-florencio",
  linkedin: "", // ex.: https://www.linkedin.com/in/seu-usuario
  resume: "", // ex.: /resume.pdf (coloque o PDF em public/)
};

export const stats: { value: string; label: T }[] = [
  { value: "3", label: { en: "production systems shipped", pt: "sistemas em produção" } },
  { value: "3", label: { en: "marketplaces automated by browser agents", pt: "marketplaces automatizados por agentes" } },
  { value: "10+", label: { en: "business modules in one dashboard", pt: "módulos de negócio em um dashboard" } },
  { value: "Hourly", label: { en: "self-updating data sync", pt: "sincronização automática de dados" } },
];

export const skills = [
  { group: { en: "AI & LLMs", pt: "IA & LLMs" } as T, items: ["Prompt engineering", "LLM integration", "Streaming responses", "Model fallback (Groq → Gemini)", "Claude", "OpenAI", "Gemini", "Claude Code"] },
  { group: { en: "Automation", pt: "Automação" } as T, items: ["Browser agents (Playwright)", "Telegram & WhatsApp bots", "Scheduled jobs", "ETL: Excel/ERP → Postgres", "Webhooks"] },
  { group: { en: "Full-stack", pt: "Full-stack" } as T, items: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind", "Serverless APIs"] },
  { group: { en: "Data & Infra", pt: "Dados & Infra" } as T, items: ["Supabase", "PostgreSQL + RLS", "Supabase Auth / JWT", "Vercel", "GitHub Actions CI/CD", "Oracle Cloud", "Linux VM + PM2"] },
];

export type Project = {
  title: string;
  kicker: T; // linha curta acima do título
  summary: T;
  problem: T;
  solution: T;
  impact: T[]; // resultados — use números reais sempre que possível
  stack: string[];
  link?: string;
  repo?: string;
  image?: string; // ex.: /projects/syntrix.png (coloque em public/projects/)
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Syntrix",
    kicker: { en: "Founder · Multi-tenant SaaS", pt: "Fundador · SaaS multi-tenant" },
    summary: {
      en: "Financial management SaaS for small and mid-sized businesses — the Brazilian alternative to QuickBooks-style tools.",
      pt: "SaaS de gestão financeira para pequenas e médias empresas, na linha de Conta Azul e Omie.",
    },
    problem: {
      en: "SMBs juggle payables, receivables, billing and cash flow across spreadsheets and disconnected tools.",
      pt: "PMEs controlam contas a pagar, receber, cobranças e fluxo de caixa em planilhas e ferramentas desconectadas.",
    },
    solution: {
      en: "Designed and built solo: a multi-tenant platform with per-tenant data isolation via Postgres Row-Level Security, integrated billing through the Asaas payments API, and separate customer, admin and AI apps on a shared Supabase backend.",
      pt: "Projetado e construído sozinho: plataforma multi-tenant com isolamento de dados por cliente via Row-Level Security do Postgres, cobrança integrada à API de pagamentos Asaas, e apps separados de cliente, admin e IA sobre um backend Supabase.",
    },
    impact: [
      { en: "Live in production at syntrix.com.br", pt: "No ar em produção em syntrix.com.br" },
      { en: "Owned everything: product, architecture, code and billing", pt: "Responsável por tudo: produto, arquitetura, código e cobrança" },
    ],
    stack: ["Supabase", "PostgreSQL RLS", "TypeScript", "Node.js", "Asaas API", "Vercel"],
    link: "https://syntrix.com.br",
    featured: true,
  },
  {
    title: "AI Executive Dashboard",
    kicker: { en: "In-house · Cetest Engenharia", pt: "Interno · Cetest Engenharia" },
    summary: {
      en: "Live executive dashboard that replaced manual spreadsheet reporting and writes its own analysis with LLMs.",
      pt: "Dashboard executivo que substituiu relatórios manuais em planilha e escreve a própria análise com LLMs.",
    },
    problem: {
      en: "Leadership at an engineering services company depended on scattered Excel files and an ERP to see revenue, cash flow, HR, safety and procurement — reports were slow, manual and always out of date.",
      pt: "A diretoria de uma empresa de engenharia dependia de planilhas espalhadas e de um ERP para ver faturamento, caixa, RH, segurança e suprimentos — relatórios lentos, manuais e sempre desatualizados.",
    },
    solution: {
      en: "Built an ETL pipeline (Excel + Sienge ERP API → Supabase Postgres) that runs hourly on business days, a React dashboard with 10+ modules (P&L, cash flow, billing, HR, payroll, safety, occupational health, procurement), and an AI 'CFO report' that streams an analytical narrative from the live numbers — Groq first, automatic fallback to Gemini.",
      pt: "Construí um pipeline ETL (Excel + API do ERP Sienge → Postgres no Supabase) que roda de hora em hora em dias úteis, um dashboard React com mais de 10 módulos (DRE, caixa, faturamento, RH, DP, segurança, medicina, suprimentos) e um 'parecer de CFO' por IA que gera uma análise em streaming a partir dos números reais — Groq primeiro, com fallback automático para Gemini.",
    },
    impact: [
      { en: "Reporting went from manual and periodic to automatic, every hour", pt: "Relatórios passaram de manuais e periódicos para automáticos, de hora em hora" },
      { en: "One login-protected source of truth for the whole leadership team", pt: "Uma fonte única e protegida por login para toda a diretoria" },
      { en: "LLM analysis with provider fallback, so reports keep working if one API is down", pt: "Análise por LLM com fallback entre provedores: continua funcionando se uma API cair" },
    ],
    stack: ["React", "Vite", "Supabase", "Supabase Auth", "Serverless API", "Groq", "Gemini", "Chart.js", "Sienge ERP API"],
  },
  {
    title: "Affiliate Deals Bot",
    kicker: { en: "Automation · Browser agents", pt: "Automação · Agentes de navegador" },
    summary: {
      en: "Autonomous bot that finds deals, generates affiliate links and posts them to Telegram and WhatsApp around the clock.",
      pt: "Robô autônomo que encontra ofertas, gera links de afiliado e publica no Telegram e WhatsApp o dia todo.",
    },
    problem: {
      en: "Running affiliate channels means hours a day hunting deals, generating links in each marketplace's portal and posting by hand — and Mercado Livre and Shopee offer no public API for affiliate links.",
      pt: "Manter canais de afiliados exige horas por dia caçando ofertas, gerando links no portal de cada marketplace e postando à mão — e Mercado Livre e Shopee não oferecem API pública para links de afiliado.",
    },
    solution: {
      en: "Built Playwright browser agents that log into Amazon, Mercado Livre and Shopee affiliate portals, pick products, generate the affiliate link and publish formatted posts to Telegram and WhatsApp. Includes a product queue with CSV import, duplicate-post prevention, a private admin console, and CI/CD to an Oracle Cloud VM (GitHub Actions → SSH → PM2, headed browser under Xvfb).",
      pt: "Criei agentes de navegador com Playwright que entram nos portais de afiliados da Amazon, Mercado Livre e Shopee, escolhem produtos, geram o link e publicam posts formatados no Telegram e WhatsApp. Inclui fila de produtos com importação de CSV, prevenção de posts repetidos, console admin privado e CI/CD para uma VM na Oracle Cloud (GitHub Actions → SSH → PM2, navegador sob Xvfb).",
    },
    impact: [
      { en: "3 marketplaces and 2 channels running unattended", pt: "3 marketplaces e 2 canais rodando sem intervenção" },
      { en: "800+ products loaded into the posting queue", pt: "Mais de 800 produtos carregados na fila de postagem" },
      { en: "Push-to-deploy: every commit ships to production automatically", pt: "Deploy a cada push: todo commit vai para produção automaticamente" },
    ],
    stack: ["Node.js", "Playwright", "Telegram Bot API", "WhatsApp (Baileys)", "Oracle Cloud", "GitHub Actions", "PM2", "Linux"],
  },
];

export const services = [
  {
    title: { en: "AI features in your product", pt: "IA dentro do seu produto" } as T,
    text: { en: "LLM-powered reports, assistants and summaries wired to your real data — with streaming, auth and model fallback.", pt: "Relatórios, assistentes e resumos com LLM ligados aos seus dados reais — com streaming, autenticação e fallback de modelo." } as T,
  },
  {
    title: { en: "Automation & agents", pt: "Automações e agentes" } as T,
    text: { en: "Browser agents, bots and scheduled pipelines that remove hours of manual work every day.", pt: "Agentes de navegador, bots e pipelines agendados que eliminam horas de trabalho manual por dia." } as T,
  },
  {
    title: { en: "MVPs & internal tools", pt: "MVPs e ferramentas internas" } as T,
    text: { en: "From idea to a deployed, authenticated app on Supabase + Vercel in weeks, not months.", pt: "Da ideia a um app no ar, com login, em Supabase + Vercel em semanas, não meses." } as T,
  },
];

export const ui = {
  nav: { about: { en: "About", pt: "Sobre" }, projects: { en: "Work", pt: "Projetos" }, services: { en: "Services", pt: "Serviços" }, contact: { en: "Contact", pt: "Contato" } },
  cta: { en: "See my work", pt: "Ver projetos" } as T,
  talk: { en: "Let's work together", pt: "Vamos trabalhar juntos" } as T,
  resume: { en: "Resume", pt: "Currículo" } as T,
  featured: { en: "Featured", pt: "Destaque" } as T,
  visit: { en: "Live site", pt: "Ver site" } as T,
  code: { en: "Source", pt: "Código" } as T,
  problem: { en: "Problem", pt: "Problema" } as T,
  solution: { en: "What I built", pt: "O que construí" } as T,
  impact: { en: "Impact", pt: "Resultado" } as T,
  skills: { en: "Toolkit", pt: "Ferramentas" } as T,
  available: { en: "Open to remote roles & contracts", pt: "Disponível para vagas remotas e contratos" } as T,
  contactText: {
    en: "Hiring for AI automation, internal tools or LLM features? I reply within one business day.",
    pt: "Precisa de automação com IA, ferramentas internas ou features com LLM? Respondo em até um dia útil.",
  } as T,
};
