import { Phone, Mail, MapPin, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { PageShell, PageHeader, FadeIn } from "@/components/portfolio-shared";

const iconMap = { Phone, Mail, MapPin, Linkedin, Instagram } as const;

const contacts = [
  { icon: "Phone" as const, label: "Phone", value: "8278771093", href: "tel:8278771093" },
  {
    icon: "Mail" as const,
    label: "Email",
    value: "harish.pariihar@gmail.com",
    href: "mailto:harish.pariihar@gmail.com",
  },
  { icon: "MapPin" as const, label: "Location", value: "Kunihar, Solan, Himachal Pradesh" },
  {
    icon: "Linkedin" as const,
    label: "LinkedIn",
    value: "linkedin.com/in/harish-rajjput",
    href: "https://www.linkedin.com/in/harish-rajjput/",
  },
  {
    icon: "Instagram" as const,
    label: "Instagram",
    value: "@harish.phr",
    href: "https://www.instagram.com/harish.phr/",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader tag="Contact" title="Get in touch" />
      <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-14">
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[var(--neon)]/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon)]">Contact</span>
            <h2 className="font-display mt-3 text-4xl font-bold leading-tight md:text-5xl">
              Let's work <br />
              <span className="text-gradient">together.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground md:text-base">
              Open to full-time roles, freelance projects and collaboration on ambitious React.js
              builds.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/in/harish-rajjput/"
                target="_blank"
                rel="noreferrer"
                className="glass glass-hover inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--neon)]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/harish.phr/"
                target="_blank"
                rel="noreferrer"
                className="glass glass-hover inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--neon)]"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="mailto:harish.pariihar@gmail.com"
                className="glass glass-hover inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--neon)]"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <a href="mailto:harish.pariihar@gmail.com" className="btn-neon mt-8 text-sm">
              Send a message <ArrowRight className="h-4 w-4" />
            </a>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="space-y-3">
              {contacts.map((c) => {
                const Icon = iconMap[c.icon];
                const Inner = (
                  <div className="glass glass-hover flex items-center gap-4 rounded-2xl p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--neon-soft)] text-[var(--neon)]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </div>
                      <div className="truncate text-sm font-medium">{c.value}</div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="block"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label}>{Inner}</div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
      <div className="pb-20" />
    </PageShell>
  );
}
