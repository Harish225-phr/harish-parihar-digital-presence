import { ExternalLink, Github } from "lucide-react";
import { PageShell, PageHeader, FadeIn } from "@/components/portfolio-shared";
import { projects } from "@/lib/portfolio-data";

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader tag="Work" title="Featured Projects" />
      <div className="grid gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.08}>
            <div className="glass glass-hover group relative flex h-full flex-col overflow-hidden rounded-2xl p-6">
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[var(--neon)]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
              <div className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[var(--neon)]">
                {p.tag}
              </div>
              <h3 className="font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-2">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[var(--neon)] px-3 py-1.5 text-xs font-semibold text-[#001a0e] transition-transform hover:-translate-y-0.5"
                >
                  Live <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs transition-colors hover:border-[var(--neon)] hover:text-[var(--neon)]"
                >
                  <Github className="h-3 w-3" /> Code
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </PageShell>
  );
}
