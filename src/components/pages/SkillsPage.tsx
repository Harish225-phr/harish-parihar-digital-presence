import { PageShell, PageHeader, FadeIn } from "@/components/portfolio-shared";
import { skills } from "@/lib/portfolio-data";

export default function SkillsPage() {
  return (
    <PageShell>
      <PageHeader tag="Toolkit" title="Skills & Stack" />
      <div className="grid gap-5 pb-20 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.06}>
            <div className="glass glass-hover h-full rounded-2xl p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--neon-soft)] text-[var(--neon)]">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </PageShell>
  );
}
