"use client";

import { useEffect, useState } from "react";
import { profile, projects, services, skills, ui, type Lang } from "@/data/content";

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const contacts = [
    { label: "Email", href: `mailto:${profile.email}` },
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "WhatsApp", href: profile.whatsapp },
  ].filter((c) => c.href);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

      <header className="sticky top-0 z-10 border-b border-white/5 bg-zinc-950/70 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="font-mono text-sm font-semibold text-white">
            {profile.name.split(" ")[0].toLowerCase()}<span className="text-violet-400">.ai</span>
          </a>
          <div className="flex items-center gap-5 text-sm text-zinc-400">
            <a href="#sobre" className="hidden hover:text-white sm:inline">{ui.nav.about[lang]}</a>
            <a href="#projetos" className="hidden hover:text-white sm:inline">{ui.nav.projects[lang]}</a>
            <a href="#servicos" className="hidden hover:text-white sm:inline">{ui.nav.services[lang]}</a>
            <a href="#contato" className="hidden hover:text-white sm:inline">{ui.nav.contact[lang]}</a>
            <button
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-white hover:border-violet-400"
              aria-label="Change language"
            >
              {lang === "pt" ? "EN" : "PT"}
            </button>
          </div>
        </nav>
      </header>

      <main className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Hero */}
        <section className="py-24 sm:py-32">
          <p className="mb-4 font-mono text-sm text-violet-400">{profile.role[lang]}</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            {profile.headline[lang]}
          </h1>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projetos" className="rounded-full bg-violet-500 px-6 py-3 text-sm font-medium text-white hover:bg-violet-400">
              {ui.cta[lang]}
            </a>
            <a href="#contato" className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white hover:border-white/40">
              {ui.talk[lang]}
            </a>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="scroll-mt-20 border-t border-white/5 py-20">
          <h2 className="mb-6 text-2xl font-semibold text-white">{ui.nav.about[lang]}</h2>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">{profile.about[lang]}</p>
          <h3 className="mb-4 mt-12 font-mono text-sm uppercase tracking-wider text-zinc-500">{ui.skills[lang]}</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group.en}>
                <p className="mb-2 text-sm font-medium text-white">{s.group[lang]}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span key={i} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300">{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className="scroll-mt-20 border-t border-white/5 py-20">
          <h2 className="mb-8 text-2xl font-semibold text-white">{ui.nav.projects[lang]}</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className={`flex flex-col rounded-2xl border p-6 transition hover:-translate-y-0.5 ${
                  p.featured ? "border-violet-500/40 bg-violet-500/10 sm:col-span-2" : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  {p.featured && (
                    <span className="rounded-full bg-violet-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                      {ui.featured[lang]}
                    </span>
                  )}
                </div>
                <p className="mb-5 flex-1 text-zinc-400">{p.description[lang]}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-xs text-violet-300">#{t}</span>
                  ))}
                </div>
                {(p.link || p.repo) && (
                  <div className="flex gap-4 text-sm">
                    {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="text-white underline-offset-4 hover:underline">{ui.visit[lang]} ↗</a>}
                    {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="text-white underline-offset-4 hover:underline">{ui.code[lang]} ↗</a>}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="scroll-mt-20 border-t border-white/5 py-20">
          <h2 className="mb-8 text-2xl font-semibold text-white">{ui.nav.services[lang]}</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {services.map((s) => (
              <div key={s.title.en} className="rounded-2xl border border-white/10 p-6">
                <h3 className="mb-2 font-semibold text-white">{s.title[lang]}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{s.text[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="scroll-mt-20 border-t border-white/5 py-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">{ui.talk[lang]}</h2>
          <p className="mb-8 text-zinc-400">{ui.contactText[lang]}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {contacts.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white hover:border-violet-400">
                {c.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-zinc-600">
        © 2026 {profile.name}
      </footer>
    </div>
  );
}
