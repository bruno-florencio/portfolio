"use client";

import { useEffect, useState } from "react";
import { ArrowRight, BarChart3, Bot, Code2, ExternalLink, Github, Landmark, Linkedin, Mail, MapPin } from "lucide-react";
import { expertise, profile, projects, ui, type ExpertiseIcon, type Lang, type Project } from "@/data/content";

const icons: Record<ExpertiseIcon, typeof Bot> = { ai: Bot, data: BarChart3, code: Code2, finance: Landmark };

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const initials = profile.name.split(" ").map((n) => n[0]).join("");

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

      <header className="sticky top-0 z-10 border-b border-white/5 bg-zinc-950/70 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="text-sm font-semibold text-white">{profile.name}</a>
          <div className="flex items-center gap-5 text-sm text-zinc-400">
            <a href="#about" className="hidden hover:text-white sm:inline">{ui.nav.about[lang]}</a>
            <a href="#expertise" className="hidden hover:text-white sm:inline">{ui.nav.expertise[lang]}</a>
            <a href="#projects" className="hidden hover:text-white sm:inline">{ui.nav.projects[lang]}</a>
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
        {/* 1. Hero */}
        <section className="flex flex-col-reverse items-start gap-10 pb-20 pt-16 sm:pt-24 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {ui.available[lang]}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{profile.name}</h1>
            <p className="mt-3 text-lg font-medium text-violet-300 sm:text-xl">{profile.role[lang]}</p>
            <p className="mt-5 text-2xl leading-snug text-zinc-200 sm:text-3xl">{profile.headline[lang]}</p>
            <p className="mt-5 flex items-center gap-1.5 text-sm text-zinc-500">
              <MapPin size={14} /> {profile.location[lang]}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-400">
                {ui.viewProjects[lang]} <ArrowRight size={16} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:border-white/40">
                <Linkedin size={16} /> {ui.connectLinkedIn[lang]}
              </a>
            </div>
          </div>
          <div className="shrink-0">
            {profile.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={profile.photo} alt={profile.name} className="h-40 w-40 rounded-full border-2 border-violet-500/40 object-cover sm:h-56 sm:w-56" />
            ) : (
              <div className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-violet-500/40 bg-gradient-to-br from-violet-600/40 to-zinc-900 text-5xl font-bold text-white sm:h-56 sm:w-56 sm:text-6xl">
                {initials}
              </div>
            )}
          </div>
        </section>

        {/* 2. About */}
        <section id="about" className="scroll-mt-20 border-t border-white/5 py-20">
          <h2 className="mb-6 text-2xl font-semibold text-white">{ui.aboutTitle[lang]}</h2>
          <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-zinc-400">
            {profile.about.map((p) => (
              <p key={p.en}>{p[lang]}</p>
            ))}
          </div>
        </section>

        {/* 3. Core Expertise */}
        <section id="expertise" className="scroll-mt-20 border-t border-white/5 py-20">
          <h2 className="mb-8 text-2xl font-semibold text-white">{ui.expertiseTitle[lang]}</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {expertise.map((e) => {
              const Icon = icons[e.icon];
              return (
                <div key={e.title.en} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                      <Icon size={20} />
                    </span>
                    <h3 className="text-lg font-semibold text-white">{e.title[lang]}</h3>
                  </div>
                  <ul className="space-y-2">
                    {e.items.map((i) => (
                      <li key={i.en} className="flex gap-2 text-sm text-zinc-300">
                        <span className="text-violet-400">▸</span>
                        {i[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Featured Projects */}
        <section id="projects" className="scroll-mt-20 border-t border-white/5 py-20">
          <h2 className="mb-10 text-2xl font-semibold text-white">{ui.projectsTitle[lang]}</h2>
          <div className="space-y-10">
            {featured.map((p) => (
              <FeaturedProject key={p.title} p={p} lang={lang} />
            ))}
          </div>

          {others.length > 0 && (
            <>
              <h3 className="mb-6 mt-16 font-mono text-sm uppercase tracking-wider text-zinc-500">{ui.moreProjects[lang]}</h3>
              <div className="grid gap-5 sm:grid-cols-2">
                {others.map((p) => (
                  <div key={p.title} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                    <p className="font-mono text-xs uppercase tracking-wider text-violet-300">{p.kicker[lang]}</p>
                    <h4 className="mt-2 text-xl font-semibold text-white">{p.title}</h4>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{p.summary[lang]}</p>
                    <ul className="mt-4 space-y-1.5">
                      {p.impact.map((i) => (
                        <li key={i.en} className="flex gap-2 text-sm text-zinc-200">
                          <span className="text-emerald-400">✓</span>
                          {i[lang]}
                        </li>
                      ))}
                    </ul>
                    <ProjectButtons p={p} lang={lang} />
                  </div>
                ))}
              </div>
            </>
          )}
        </section>

        {/* 5. Contact */}
        <section id="contact" className="scroll-mt-20 border-t border-white/5 py-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">{ui.contactTitle[lang]}</h2>
          <p className="mx-auto mb-6 max-w-xl text-zinc-400">{ui.contactText[lang]}</p>
          <a href={`mailto:${profile.email}`} className="mb-8 inline-flex items-center gap-2 text-lg font-medium text-violet-300 underline-offset-4 hover:underline">
            <Mail size={18} /> {profile.email}
          </a>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-400">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:border-white/40">
              <Github size={16} /> GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-zinc-600">
        © 2026 {profile.name} · {profile.email}
      </footer>
    </div>
  );
}

function FeaturedProject({ p, lang }: { p: Project; lang: Lang }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
      {p.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={p.image} alt={p.title} className="aspect-[21/10] w-full border-b border-white/10 object-cover object-top" />
      ) : (
        p.flow && (
          <div className="flex w-full flex-col items-center justify-center py-12 sm:py-16 gap-3 border-b border-white/10 bg-gradient-to-br from-violet-600/25 via-zinc-950 to-emerald-600/10 p-6 sm:flex-row sm:gap-4">
            {p.flow.map((step, i) => (
              <div key={step} className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                {i > 0 && <ArrowRight className="rotate-90 text-violet-300 sm:rotate-0" size={20} />}
                <span className="rounded-xl border border-white/15 bg-zinc-950/80 px-4 py-3 text-center text-sm font-medium text-white">{step}</span>
              </div>
            ))}
          </div>
        )
      )}
      <div className="p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-wider text-violet-300">{p.kicker[lang]}</p>
        <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{p.title}</h3>
        <p className="mt-2 text-zinc-300">{p.summary[lang]}</p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">{ui.problem[lang]}</h4>
            <p className="text-sm leading-relaxed text-zinc-400">{p.problem[lang]}</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">{ui.solution[lang]}</h4>
            <p className="text-sm leading-relaxed text-zinc-400">{p.solution[lang]}</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">{ui.impact[lang]}</h4>
            <ul className="space-y-2">
              {p.impact.map((i) => (
                <li key={i.en} className="flex gap-2 text-sm text-zinc-200">
                  <span className="text-emerald-400">✓</span>
                  {i[lang]}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-zinc-400">{t}</span>
          ))}
        </div>
        <ProjectButtons p={p} lang={lang} />
      </div>
    </article>
  );
}

function ProjectButtons({ p, lang }: { p: Project; lang: Lang }) {
  if (!p.link && !p.repo) return null;
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {p.link && (
        <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-400">
          <ExternalLink size={15} /> {ui.liveDemo[lang]}
        </a>
      )}
      {p.repo && (
        <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:border-white/40">
          <Github size={15} /> {ui.caseStudy[lang]}
        </a>
      )}
    </div>
  );
}
