import { Briefcase } from "lucide-react";
import { PageShell, PageHeader, FadeIn } from "@/components/portfolio-shared";
import { experience } from "@/lib/portfolio-data";

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageHeader tag="Journey" title="Experience" />
      <div className="relative mx-auto max-w-3xl pb-20">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-[var(--neon)] via-[var(--neon)]/30 to-transparent md:left-1/2" />
        {experience.map((exp, i) => (
          <FadeIn key={exp.role} delay={i * 0.1}>
            <div
              className={`relative mb-12 md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}
            >
              <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
                <div className="relative h-3 w-3 rounded-full bg-[var(--neon)]">
                  <div className="absolute inset-0 animate-ping rounded-full bg-[var(--neon)] opacity-60" />
                </div>
              </div>
              <div className="glass glass-hover ml-12 rounded-2xl p-6 md:ml-0">
                <div className="mb-2 flex items-center gap-2 text-xs text-[var(--neon)]">
                  <Briefcase className="h-3.5 w-3.5" /> {exp.period}
                </div>
                <h3 className="font-display text-xl font-bold">{exp.role}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--neon)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </PageShell>
  );
}
