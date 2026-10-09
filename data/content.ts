// Todo o conteúdo do site fica aqui. Edite este arquivo para atualizar o portfólio.
// Campos vazios ("") não aparecem no site — preencha quando tiver o dado.

export type Lang = "en" | "pt";
type T = Record<Lang, string>;

const REPO = "https://github.com/bruno-florencio/portfolio/tree/main/projects";

export const profile = {
  name: "Bruno Florencio",
  photo: "", // ex.: /me.jpg — coloque a foto (quadrada, estilo headshot) em public/
  role: { en: "Financial Manager & AI Automation Engineer", pt: "Gestor Financeiro & AI Automation Engineer" } as T,
  headline: {
    en: "I build cloud-native systems and AI solutions to optimize business workflows.",
    pt: "Crio sistemas cloud-native e soluções de IA para otimizar os fluxos de trabalho das empresas.",
  } as T,
  location: { en: "Brazil · Remote · Overlaps US hours (ET/CT)", pt: "Brasil · Remoto · Horário compatível com os EUA (ET/CT)" } as T,
  about: [
    {
      en: "I combine a background in Financial Management with postgraduate degrees in Data Science and in Full-Stack Development & Cloud Computing. That mix lets me understand where a business loses time and money — and build the software that fixes it.",
      pt: "Uno a formação em Gestão Financeira com pós-graduações em Ciência de Dados e em Desenvolvimento Full-Stack & Cloud Computing. Essa combinação me permite enxergar onde uma empresa perde tempo e dinheiro — e construir o software que resolve.",
    },
    {
      en: "Self-taught in AI, my passion is applying advanced prompt engineering and AI APIs to remove operational and financial bottlenecks. I founded and built Syntrix, an AI-powered management SaaS, and I ship automations that run in production every day.",
      pt: "Autodidata em IA, minha paixão é aplicar engenharia de prompt avançada e APIs de IA para eliminar gargalos operacionais e financeiros. Fundei e construí o Syntrix, um SaaS de gestão com IA, e entrego automações que rodam em produção todos os dias.",
    },
  ] as T[],
  email: "brunofdalmeida1@gmail.com",
  github: "https://github.com/bruno-florencio",
  linkedin: "https://www.linkedin.com/in/bruno-florencio/",
};

export type ExpertiseIcon = "ai" | "data" | "code" | "finance";

export const expertise: { icon: ExpertiseIcon; title: T; items: T[] }[] = [
  {
    icon: "ai",
    title: { en: "AI & Automation", pt: "IA & Automação" },
    items: [
      { en: "Advanced prompt engineering", pt: "Engenharia de prompt avançada" },
      { en: "LLM APIs: OpenAI, Anthropic, Gemini, Groq", pt: "APIs de LLM: OpenAI, Anthropic, Gemini, Groq" },
      { en: "AI agents & assistants", pt: "Agentes e assistentes de IA" },
      { en: "Browser automation (Playwright)", pt: "Automação de navegador (Playwright)" },
      { en: "Bots & scheduled workflows", pt: "Bots e fluxos agendados" },
    ],
  },
  {
    icon: "data",
    title: { en: "Data & Cloud", pt: "Dados & Cloud" },
    items: [
      { en: "Data analytics & BI dashboards", pt: "Análise de dados e dashboards de BI" },
      { en: "SQL / PostgreSQL", pt: "SQL / PostgreSQL" },
      { en: "Python for data science", pt: "Python para ciência de dados" },
      { en: "ETL pipelines (Excel, ERP → database)", pt: "Pipelines ETL (Excel, ERP → banco)" },
      { en: "Cloud: Supabase, Vercel, Oracle Cloud", pt: "Cloud: Supabase, Vercel, Oracle Cloud" },
    ],
  },
  {
    icon: "code",
    title: { en: "Full-Stack Development", pt: "Desenvolvimento Full-Stack" },
    items: [
      { en: "React, Next.js, TypeScript", pt: "React, Next.js, TypeScript" },
      { en: "Node.js & serverless APIs", pt: "Node.js e APIs serverless" },
      { en: "Multi-tenant SaaS & auth", pt: "SaaS multi-tenant e autenticação" },
      { en: "Payments integration (Asaas)", pt: "Integração de pagamentos (Asaas)" },
      { en: "CI/CD with GitHub Actions", pt: "CI/CD com GitHub Actions" },
    ],
  },
  {
    icon: "finance",
    title: { en: "Finance", pt: "Finanças" },
    items: [
      { en: "Corporate finance", pt: "Finanças corporativas" },
      { en: "Cash flow management & optimization", pt: "Gestão e otimização de fluxo de caixa" },
      { en: "Financial reporting (P&L)", pt: "Relatórios financeiros (DRE)" },
      { en: "SME management systems", pt: "Sistemas de gestão para PMEs" },
      { en: "ERP integration", pt: "Integração com ERP" },
    ],
  },
];

export type Project = {
  title: string;
  kicker: T;
  summary: T;
  problem: T;
  solution: T;
  impact: T[];
  stack: string[];
  link?: string; // Live demo
  repo?: string; // Estudo de caso no GitHub
  image?: string; // ex.: /projects/syntrix.png (em public/projects/)
  flow?: string[]; // ilustração usada quando não há imagem
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "SYNTRIX.AI",
    kicker: { en: "Founder · AI-powered SaaS", pt: "Fundador · SaaS com IA" },
    summary: {
      en: "AI-powered financial and operational management SaaS for small and mid-sized businesses.",
      pt: "SaaS de gestão financeira e operacional com IA para pequenas e médias empresas.",
    },
    problem: {
      en: "SMBs juggle payables, receivables, cash, inventory and sales across spreadsheets and disconnected tools — the owner never has a clear view of cash flow.",
      pt: "PMEs controlam contas, caixa, estoque e vendas em planilhas e ferramentas desconectadas — o dono nunca tem uma visão clara do fluxo de caixa.",
    },
    solution: {
      en: "A multi-tenant platform covering finance, bank reconciliation, inventory, POS and BI, with AI agents for cash-flow insights, in-app support, BI narratives and security monitoring.",
      pt: "Plataforma multi-tenant com finanças, conciliação bancária, estoque, PDV e BI, e agentes de IA para insights de caixa, suporte no app, narrativas de BI e monitoramento de segurança.",
    },
    impact: [
      { en: "Live in production, built end to end by one person", pt: "No ar em produção, construído de ponta a ponta por uma pessoa" },
      { en: "Finance, inventory and POS on one data source — cash flow reflects sales in real time", pt: "Finanças, estoque e PDV na mesma base — o caixa reflete as vendas em tempo real" },
      { en: "Tenant isolation in the database (RLS); AI keys never reach the browser", pt: "Isolamento por cliente no banco (RLS); chaves de IA nunca chegam ao navegador" },
    ],
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL RLS", "Edge Functions", "Gemini", "Groq", "Asaas", "Expo"],
    link: "https://syntrix.com.br",
    repo: `${REPO}/syntrix`,
    image: "/projects/syntrix.png",
    featured: true,
  },
  {
    title: "Affiliate Deals Bot",
    kicker: { en: "Automation · Browser agents", pt: "Automação · Agentes de navegador" },
    summary: {
      en: "Autonomous bot that generates affiliate links and posts deals to Telegram and WhatsApp around the clock.",
      pt: "Robô autônomo que gera links de afiliado e publica ofertas no Telegram e WhatsApp o dia todo.",
    },
    problem: {
      en: "Affiliate channels take hours a day of manual deal hunting and link generation — and Mercado Livre and Shopee have no public API for affiliate links.",
      pt: "Canais de afiliados exigem horas por dia caçando ofertas e gerando links — e Mercado Livre e Shopee não têm API pública para links de afiliado.",
    },
    solution: {
      en: "Playwright agents operate the Amazon, Mercado Livre and Shopee affiliate portals, and a scheduler publishes formatted posts — deployed to Oracle Cloud on every push.",
      pt: "Agentes Playwright operam os portais de afiliados da Amazon, Mercado Livre e Shopee, e um agendador publica posts formatados — com deploy na Oracle Cloud a cada push.",
    },
    impact: [
      { en: "~100 automated posts per day, zero manual work", pt: "~100 posts automáticos por dia, zero trabalho manual" },
      { en: "3 marketplaces and 2 channels running unattended", pt: "3 marketplaces e 2 canais rodando sem intervenção" },
      { en: "800+ products in the posting queue", pt: "Mais de 800 produtos na fila de postagem" },
    ],
    stack: ["Node.js", "Playwright", "Telegram API", "WhatsApp", "Oracle Cloud", "GitHub Actions", "PM2"],
    repo: `${REPO}/affiliate-deals-bot`,
    flow: ["Amazon · Mercado Livre · Shopee", "Playwright agents", "Telegram · WhatsApp"],
    featured: true,
  },
  {
    title: "AI Executive Dashboard",
    kicker: { en: "In-house · Cetest Engenharia", pt: "Interno · Cetest Engenharia" },
    summary: {
      en: "Self-updating executive dashboard that replaced manual spreadsheet reporting and writes its own analysis with LLMs.",
      pt: "Dashboard executivo que se atualiza sozinho, substituiu relatórios em planilha e escreve a própria análise com LLMs.",
    },
    problem: {
      en: "Leadership relied on scattered Excel files and an ERP; reports were manual and always out of date.",
      pt: "A diretoria dependia de planilhas espalhadas e de um ERP; relatórios manuais e sempre desatualizados.",
    },
    solution: {
      en: "Hourly ETL from Excel and the Sienge ERP into Supabase, 10+ business modules, and an AI 'CFO report' with Groq → Gemini fallback.",
      pt: "ETL de hora em hora do Excel e do ERP Sienge para o Supabase, mais de 10 módulos e um 'parecer de CFO' por IA com fallback Groq → Gemini.",
    },
    impact: [
      { en: "Reporting went from manual to automatic, every hour", pt: "Relatórios passaram de manuais para automáticos, de hora em hora" },
      { en: "One source of truth for the whole leadership team", pt: "Uma fonte única de dados para toda a diretoria" },
    ],
    stack: ["React", "Supabase", "Serverless API", "Groq", "Gemini", "Sienge ERP"],
    repo: `${REPO}/ai-executive-dashboard`,
    flow: ["Excel · Sienge ERP", "Hourly ETL → Supabase", "Dashboard + AI CFO report"],
  },
];

export const ui = {
  nav: { about: { en: "About", pt: "Sobre" }, expertise: { en: "Expertise", pt: "Habilidades" }, projects: { en: "Projects", pt: "Projetos" }, contact: { en: "Contact", pt: "Contato" } },
  viewProjects: { en: "View My Projects", pt: "Ver meus projetos" } as T,
  connectLinkedIn: { en: "Connect on LinkedIn", pt: "Conectar no LinkedIn" } as T,
  aboutTitle: { en: "About Me", pt: "Sobre mim" } as T,
  expertiseTitle: { en: "Core Expertise", pt: "Principais habilidades" } as T,
  projectsTitle: { en: "Featured Projects", pt: "Projetos em destaque" } as T,
  moreProjects: { en: "More work", pt: "Outros projetos" } as T,
  liveDemo: { en: "Live Demo", pt: "Ver ao vivo" } as T,
  caseStudy: { en: "GitHub Case Study", pt: "Estudo de caso no GitHub" } as T,
  problem: { en: "Problem", pt: "Problema" } as T,
  solution: { en: "Solution", pt: "Solução" } as T,
  impact: { en: "Business Impact", pt: "Impacto no negócio" } as T,
  available: { en: "Open to remote roles & contracts", pt: "Disponível para vagas remotas e contratos" } as T,
  contactTitle: { en: "Let's work together", pt: "Vamos trabalhar juntos" } as T,
  contactText: {
    en: "Hiring for AI automation, financial systems or LLM features? I reply within one business day.",
    pt: "Precisa de automação com IA, sistemas financeiros ou features com LLM? Respondo em até um dia útil.",
  } as T,
};
