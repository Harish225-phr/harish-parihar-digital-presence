import { GraduationCap } from "lucide-react";
import { PageShell, PageHeader, FadeIn } from "@/components/portfolio-shared";
import { education } from "@/lib/portfolio-data";

export default function EducationPage() {
  return (
    <PageShell>
      <PageHeader tag="Learning" title="Education" />
      <div className="grid gap-5 pb-20 md:grid-cols-3">
        {education.map((e, i) => (
          <FadeIn key={e.title} delay={i * 0.08}>
            <div className="glass glass-hover h-full rounded-2xl p-6">
              <GraduationCap className="h-6 w-6 text-[var(--neon)]" />
              <h3 className="font-display mt-4 text-base font-semibold">{e.title}</h3>
              <div className="mt-2 text-sm text-muted-foreground">{e.org}</div>
              <div className="mt-1 text-xs text-[var(--neon)]">{e.period}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </PageShell>
  );
}
