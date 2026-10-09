// Todo o conteúdo do site fica aqui. Edite este arquivo para atualizar o portfólio.

export type Lang = "pt" | "en";
type T = Record<Lang, string>;

export const profile = {
  name: "Bruno Florencio",
  role: { pt: "NoCode Builder & Prompt Engineer", en: "NoCode Builder & Prompt Engineer" } as T,
  headline: {
    pt: "Transformo ideias em produtos reais usando NoCode, automações e Inteligência Artificial.",
    en: "I turn ideas into real products using NoCode, automation and Artificial Intelligence.",
  } as T,
  about: {
    pt: "Sou fundador do Syntrix, um SaaS de gestão financeira, e construo produtos digitais combinando ferramentas NoCode/LowCode com engenharia de prompts e agentes de IA. Meu foco é entregar rápido, com qualidade de produção: do protótipo ao produto com clientes pagantes.",
    en: "I'm the founder of Syntrix, a financial management SaaS, and I build digital products by combining NoCode/LowCode tools with prompt engineering and AI agents. My focus is shipping fast with production quality: from prototype to a product with paying customers.",
  } as T,
  email: "brunofdalmeida1@gmail.com",
  github: "https://github.com/bruno-florencio",
  linkedin: "", // ex.: https://www.linkedin.com/in/seu-usuario
  whatsapp: "", // ex.: https://wa.me/5511999999999
};

export const skills = [
  { group: { pt: "IA & Prompts", en: "AI & Prompts" } as T, items: ["Prompt Engineering", "Claude", "ChatGPT", "Agentes de IA", "RAG", "Claude Code"] },
  { group: { pt: "NoCode / LowCode", en: "NoCode / LowCode" } as T, items: ["n8n", "Make", "Zapier", "Bubble", "FlutterFlow", "Lovable"] },
  { group: { pt: "Dados & Backend", en: "Data & Backend" } as T, items: ["Supabase", "PostgreSQL", "APIs REST", "Webhooks", "Node.js"] },
  { group: { pt: "Negócio", en: "Business" } as T, items: ["SaaS", "Pagamentos (Asaas)", "Produto", "Vercel"] },
];

export type Project = {
  title: string;
  description: T;
  tags: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Syntrix",
    description: {
      pt: "SaaS multi-tenant de gestão financeira para empresas — contas a pagar/receber, fluxo de caixa e cobranças integradas ao Asaas.",
      en: "Multi-tenant financial management SaaS for businesses — payables/receivables, cash flow and billing integrated with Asaas.",
    },
    tags: ["SaaS", "Supabase", "Asaas", "IA"],
    link: "https://syntrix.com.br",
    featured: true,
  },
  {
    title: "Plataforma de E-commerce",
    description: {
      pt: "Em construção: plataforma de lojas e checkout independente, com split de pagamentos e venda de produtos físicos e digitais.",
      en: "In progress: storefront and standalone checkout platform with payment split, selling both physical and digital products.",
    },
    tags: ["E-commerce", "Checkout", "Supabase", "Em construção"],
  },
  {
    title: "Automação com Agente de IA",
    description: {
      pt: "EXEMPLO — substitua por um projeto real: agente que atende clientes no WhatsApp e registra pedidos automaticamente.",
      en: "EXAMPLE — replace with a real project: an agent that handles customers on WhatsApp and logs orders automatically.",
    },
    tags: ["n8n", "WhatsApp", "LLM"],
  },
  {
    title: "Biblioteca de Prompts",
    description: {
      pt: "EXEMPLO — substitua por um projeto real: coleção de prompts testados para vendas, suporte e conteúdo.",
      en: "EXAMPLE — replace with a real project: a collection of tested prompts for sales, support and content.",
    },
    tags: ["Prompt Engineering", "Claude", "GPT"],
  },
];

export const services = [
  {
    title: { pt: "MVPs e SaaS NoCode", en: "NoCode MVPs & SaaS" } as T,
    text: { pt: "Do zero ao produto no ar em semanas, com banco de dados, login e pagamentos.", en: "From zero to a live product in weeks, with database, auth and payments." } as T,
  },
  {
    title: { pt: "Automações com IA", en: "AI Automations" } as T,
    text: { pt: "Fluxos que conectam suas ferramentas e usam IA para eliminar trabalho manual.", en: "Workflows that connect your tools and use AI to remove manual work." } as T,
  },
  {
    title: { pt: "Prompt Engineering", en: "Prompt Engineering" } as T,
    text: { pt: "Prompts e agentes confiáveis, testados e documentados para o seu negócio.", en: "Reliable, tested and documented prompts and agents for your business." } as T,
  },
];

export const ui = {
  nav: { about: { pt: "Sobre", en: "About" }, projects: { pt: "Projetos", en: "Projects" }, services: { pt: "Serviços", en: "Services" }, contact: { pt: "Contato", en: "Contact" } },
  cta: { pt: "Ver projetos", en: "See projects" } as T,
  talk: { pt: "Vamos conversar", en: "Let's talk" } as T,
  featured: { pt: "Destaque", en: "Featured" } as T,
  visit: { pt: "Acessar", en: "Visit" } as T,
  code: { pt: "Código", en: "Code" } as T,
  skills: { pt: "Ferramentas", en: "Toolkit" } as T,
  contactText: {
    pt: "Tem uma ideia ou processo para automatizar? Me chama.",
    en: "Have an idea or a process to automate? Get in touch.",
  } as T,
};
