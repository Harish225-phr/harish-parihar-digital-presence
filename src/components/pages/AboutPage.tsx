import { PageShell, PageHeader, FadeIn } from "@/components/portfolio-shared";

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader tag="About" title="Clean code. Real impact." />
      <FadeIn delay={0.1}>
        <div className="glass glass-hover mx-auto max-w-4xl rounded-3xl p-8 md:p-12">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Front-End Developer with{" "}
              <span className="text-foreground font-semibold">1.5+ years of experience</span>{" "}
              building scalable and responsive web applications using React.js and JavaScript.
            </p>
            <p>
              Experienced in API integration, dashboard development, Google Apps Script automation,
              WordPress solutions and performance optimization.
            </p>
            <p>
              Passionate about creating clean user experiences and solving real-world business
              problems through technology.
            </p>
          </div>
        </div>
      </FadeIn>
      <div className="pb-20" />
    </PageShell>
  );
}
