"use client";

import { useEffect, useState } from "react";
import { profile, projects, services, skills, stats, ui, type Lang, type Project } from "@/data/content";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const contacts = [
    { label: "Email", href: `mailto:${profile.email}` },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
    { label: ui.resume[lang], href: profile.resume },
  ].filter((c) => c.href);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

      <header className="sticky top-0 z-10 border-b border-white/5 bg-zinc-950/70 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="text-sm font-semibold text-white">{profile.name}</a>
          <div className="flex items-center gap-5 text-sm text-zinc-400">
            <a href="#work" className="hidden hover:text-white sm:inline">{ui.nav.projects[lang]}</a>
            <a href="#about" className="hidden hover:text-white sm:inline">{ui.nav.about[lang]}</a>
            <a href="#services" className="hidden hover:text-white sm:inline">{ui.nav.services[lang]}</a>
            <a href="#contact" className="hidden hover:text-white sm:inline">{ui.nav.contact[lang]}</a>
            <button
              onClick={() => setLang(lang === "en" ? "pt" : "en")}
              className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-white hover:border-violet-400"
              aria-label="Change language"
            >
              {lang === "en" ? "PT" : "EN"}
            </button>
          </div>
        </nav>
      </header>

      <main className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Hero */}
        <section className="pb-16 pt-20 sm:pb-20 sm:pt-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {ui.available[lang]}
          </div>
          <p className="mb-3 font-mono text-sm text-violet-400">{profile.role[lang]}</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            {profile.headline[lang]}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">{profile.subheadline[lang]}</p>
          <p className="mt-4 text-sm text-zinc-500">{profile.location[lang]}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-violet-500 px-6 py-3 text-sm font-medium text-white hover:bg-violet-400">
              {ui.cta[lang]}
            </a>
            {profile.resume && (
              <a href={profile.resume} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white hover:border-white/40">
                {ui.resume[lang]} ↓
              </a>
            )}
            <a href="#contact" className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white hover:border-white/40">
              {ui.nav.contact[lang]}
            </a>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label.en} className="bg-zinc-950 p-5">
              <p className="text-2xl font-bold text-white sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs leading-snug text-zinc-500">{s.label[lang]}</p>
            </div>
          ))}
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-20 py-20">
          <h2 className="mb-10 text-2xl font-semibold text-white">{ui.nav.projects[lang]}</h2>
          <div className="space-y-6">
            {projects.map((p) => (
              <CaseStudy key={p.title} p={p} lang={lang} />
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 border-t border-white/5 py-20">
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

        {/* Services */}
        <section id="services" className="scroll-mt-20 border-t border-white/5 py-20">
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

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 border-t border-white/5 py-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">{ui.talk[lang]}</h2>
          <p className="mx-auto mb-8 max-w-xl text-zinc-400">{ui.contactText[lang]}</p>
          <a href={`mailto:${profile.email}`} className="mb-8 inline-block text-lg font-medium text-violet-300 underline-offset-4 hover:underline">
            {profile.email}
          </a>
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

function CaseStudy({ p, lang }: { p: Project; lang: Lang }) {
  return (
    <article className={`rounded-2xl border p-6 sm:p-8 ${p.featured ? "border-violet-500/40 bg-violet-500/[0.07]" : "border-white/10 bg-white/[0.02]"}`}>
      <div className="flex flex-wrap items-center gap-3">
        <p className="font-mono text-xs uppercase tracking-wider text-violet-300">{p.kicker[lang]}</p>
        {p.featured && (
          <span className="rounded-full bg-violet-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">{ui.featured[lang]}</span>
        )}
      </div>
      <h3 className="mt-2 text-2xl font-semibold text-white">{p.title}</h3>
      <p className="mt-2 text-zinc-300">{p.summary[lang]}</p>

      {p.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={p.image} alt={p.title} className="mt-6 w-full rounded-xl border border-white/10" />
      )}

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">{ui.problem[lang]}</h4>
          <p className="text-sm leading-relaxed text-zinc-400">{p.problem[lang]}</p>
        </div>
        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">{ui.solution[lang]}</h4>
          <p className="text-sm leading-relaxed text-zinc-400">{p.solution[lang]}</p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">{ui.impact[lang]}</h4>
        <ul className="space-y-1.5">
          {p.impact.map((i) => (
            <li key={i.en} className="flex gap-2 text-sm text-zinc-200">
              <span className="text-emerald-400">✓</span>
              {i[lang]}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-5">
        <div className="flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-zinc-400">{t}</span>
          ))}
        </div>
        {(p.link || p.repo) && (
          <div className="flex gap-4 text-sm">
            {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="text-white underline-offset-4 hover:underline">{ui.visit[lang]} ↗</a>}
            {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="text-white underline-offset-4 hover:underline">{ui.code[lang]} ↗</a>}
          </div>
        )}
      </div>
    </article>
  );
}
