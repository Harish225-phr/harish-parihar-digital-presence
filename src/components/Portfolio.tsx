import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useInView } from "motion/react";
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Github,
  ExternalLink,
  Code2,
  Database,
  Wrench,
  Cpu,
  Workflow,
  Sparkles,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import profileImg from "@/assets/harish-profile.jpg";

const RESUME_URL =
  "https://drive.google.com/file/d/1idzzwBmnFzUOcMnMnnSPBkXIEX6oDPgs/view";

const techBadges = ["React.js", "JavaScript", "HTML5", "CSS3", "MongoDB", "GitHub"];

const experience = [
  {
    role: "Front-End Developer",
    period: "Jan 2025 — May 2026",
    points: [
      "Developed responsive web applications using React.js",
      "Integrated REST APIs across dashboards and client portals",
      "Improved application performance and load times",
      "Owned the complete front-end development lifecycle",
      "Collaborated closely with designers and backend teams",
    ],
  },
  {
    role: "Developer Intern",
    period: "Oct 2024 — Dec 2024",
    points: [
      "Built responsive web pages from scratch",
      "Fixed UI issues and shipped bug fixes",
      "Tested applications across browsers and devices",
      "Learned and applied Agile workflows",
    ],
  },
];

const skills = [
  { icon: Code2, title: "Frontend Development", items: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"] },
  { icon: Workflow, title: "API & Integration", items: ["REST APIs", "Axios", "WordPress REST API"] },
  { icon: Cpu, title: "CMS & Automation", items: ["WordPress", "Headless CMS", "Google Apps Script", "Workflow Automation"] },
  { icon: Database, title: "Database", items: ["MongoDB", "SQL"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "Bitbucket", "Netlify", "Vercel", "Hosting", "DNS"] },
  { icon: Sparkles, title: "Other", items: ["SEO Basics", "Linux", "Debugging"] },
];

const projects = [
  {
    title: "Rural CMS Platform",
    tag: "CMS · Dashboard",
    description:
      "Dynamic CMS dashboard built on a React.js architecture. Delivered 3 client websites in a single week using a custom content management workflow.",
    tech: ["React.js", "Node.js", "REST API", "MongoDB"],
  },
  {
    title: "Country Explorer App",
    tag: "REST · UI",
    description:
      "Interactive explorer for the REST Countries API featuring live search, region filtering, and a polished dark / light mode toggle.",
    tech: ["React.js", "REST API", "Tailwind", "Dark Mode"],
  },
  {
    title: "Heena Art By Ritu",
    tag: "Business · SEO",
    description:
      "Premium business website with Netlify deployment, custom domain integration and on-page SEO optimization for organic discovery.",
    tech: ["React.js", "Netlify", "SEO", "Custom Domain"],
  },
];

const stats = [
  { value: 1.5, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Websites Built" },
  { value: 3, suffix: "+", label: "Live Client Projects" },
  { value: 100, suffix: "%", label: "Responsive Design" },
];

const education = [
  { title: "Bachelor of Computer Applications", org: "Shoolini University", period: "2025 — Present" },
  { title: "Junior Software Developer Certification", org: "Vertex Institute", period: "2024" },
  { title: "COPA Certification", org: "Vertex Institute", period: "2023 — 2024" },
];

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-7xl px-6 py-24 md:py-32 ${className}`}>
      {children}
    </section>
  );
}

function FadeIn({ children, delay = 0, y = 24 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  const display = Number.isInteger(to) ? Math.round(val).toString() : val.toFixed(1);
  return (
    <span ref={ref} className="font-display text-5xl font-bold text-gradient md:text-6xl">
      {display}
      {suffix}
    </span>
  );
}

function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(0,255,136,0.06), transparent 50%)`,
      }}
    />
  );
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Scroll progress */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left"
        style={{ scaleX: progress, background: "var(--neon)" }}
      />

      <MouseGlow />

      {/* Nav */}
      <header className="fixed left-1/2 top-5 z-40 w-[min(92%,1100px)] -translate-x-1/2">
        <div className="glass flex items-center justify-between rounded-full px-5 py-3">
          <a href="#home" className="font-display text-sm font-bold tracking-tight">
            HP<span className="text-[var(--neon)]">.</span>
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            {["about", "experience", "skills", "projects", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="capitalize transition-colors hover:text-[var(--neon)]">
                {s}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn-neon text-xs">
            Hire Me <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-center px-6 pt-32">
        <div className="grid-bg absolute inset-0" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="glow-orb left-[-10%] top-1/4 h-[400px] w-[400px] bg-[var(--neon)]" />
        <div className="glow-orb right-[-5%] bottom-1/4 h-[350px] w-[350px] bg-emerald-500/40" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <FadeIn>
              <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--neon)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--neon)]" />
                </span>
                Available for new opportunities
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-display text-[clamp(2.8rem,8vw,5.5rem)] font-bold leading-[0.95]">
                HARISH
                <br />
                <span className="text-gradient">PARIHAR</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-base text-muted-foreground md:text-lg">
                Front-End Developer · React.js Developer · Dashboard & Automation Specialist
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                I build modern, scalable and user-friendly web applications with React.js, JavaScript and API integrations.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="btn-neon">
                  View Projects <ArrowRight className="h-4 w-4" />
                </a>
                <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn-ghost">
                  <Download className="h-4 w-4" /> Download Resume
                </a>
                <a href="#contact" className="btn-ghost">
                  Contact Me
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="mt-10 flex flex-wrap gap-2">
                {techBadges.map((t) => (
                  <span
                    key={t}
                    className="glass rounded-full px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} y={40}>
            <div className="relative">
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <div className="absolute -inset-6 rounded-full bg-[var(--neon)]/20 blur-3xl" />
                <div className="animate-float relative h-full w-full overflow-hidden rounded-[2rem] bg-white p-2 shadow-[0_0_60px_rgba(0,255,136,0.25)] ring-1 ring-white/10">
                  <img
                    src={profileImg}
                    alt="Harish Parihar — Front-End Developer"
                    width={1024}
                    height={1024}
                    className="h-full w-full rounded-[1.6rem] object-cover"
                  />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="glass absolute -bottom-4 -left-4 hidden rounded-2xl px-4 py-3 sm:block"
              >
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Currently</div>
                <div className="text-sm font-semibold">Building React dashboards</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="glass absolute -right-3 top-6 hidden rounded-2xl px-4 py-3 sm:block"
              >
                <div className="font-display text-2xl font-bold text-[var(--neon)]">1.5+</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Years</div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about">
        <FadeIn>
          <div className="mb-12 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon)]">About</span>
            <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">Clean code. Real impact.</h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="glass glass-hover mx-auto max-w-4xl rounded-3xl p-8 md:p-12">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Front-End Developer with <span className="text-foreground font-semibold">1.5+ years of experience</span> building scalable and responsive web applications using React.js and JavaScript.
              </p>
              <p>
                Experienced in API integration, dashboard development, Google Apps Script automation, WordPress solutions and performance optimization.
              </p>
              <p>
                Passionate about creating clean user experiences and solving real-world business problems through technology.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience">
        <FadeIn>
          <div className="mb-14 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon)]">Journey</span>
            <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">Experience</h2>
          </div>
        </FadeIn>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-[var(--neon)] via-[var(--neon)]/30 to-transparent md:left-1/2" />
          {experience.map((exp, i) => (
            <FadeIn key={exp.role} delay={i * 0.1}>
              <div className={`relative mb-12 md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}>
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
      </Section>

      {/* SKILLS */}
      <Section id="skills">
        <FadeIn>
          <div className="mb-14 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon)]">Toolkit</span>
            <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">Skills & Stack</h2>
          </div>
        </FadeIn>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.06}>
              <div className="glass glass-hover h-full rounded-2xl p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--neon-soft)] text-[var(--neon)]">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span key={it} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-muted-foreground">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects">
        <FadeIn>
          <div className="mb-14 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon)]">Work</span>
            <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">Featured Projects</h2>
          </div>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <div className="glass glass-hover group relative flex h-full flex-col overflow-hidden rounded-2xl p-6">
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[var(--neon)]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
                <div className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[var(--neon)]">{p.tag}</div>
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-2">
                  <a href="#" className="inline-flex items-center gap-1.5 rounded-full bg-[var(--neon)] px-3 py-1.5 text-xs font-semibold text-[#001a0e] transition-transform hover:-translate-y-0.5">
                    Live <ExternalLink className="h-3 w-3" />
                  </a>
                  <a href="#" className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs transition-colors hover:border-[var(--neon)] hover:text-[var(--neon)]">
                    <Github className="h-3 w-3" /> Code
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* STATS */}
      <Section>
        <div className="glass relative overflow-hidden rounded-3xl p-10 md:p-14">
          <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08}>
                <div className="text-center">
                  <Counter to={s.value} suffix={s.suffix} />
                  <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education">
        <FadeIn>
          <div className="mb-14 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon)]">Learning</span>
            <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">Education</h2>
          </div>
        </FadeIn>
        <div className="grid gap-5 md:grid-cols-3">
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
      </Section>

      {/* CONTACT */}
      <Section id="contact">
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
                Open to full-time roles, freelance projects and collaboration on ambitious React.js builds.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="https://linkedin.com/in/harish-parihar" target="_blank" rel="noreferrer" className="glass glass-hover inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--neon)]">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="mailto:harish.pariihar@gmail.com" className="glass glass-hover inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--neon)]">
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="space-y-3">
                {[
                  { icon: Phone, label: "Phone", value: "8278771093", href: "tel:8278771093" },
                  { icon: Mail, label: "Email", value: "harish.pariihar@gmail.com", href: "mailto:harish.pariihar@gmail.com" },
                  { icon: MapPin, label: "Location", value: "Kunihar, Solan, Himachal Pradesh" },
                  
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/harish-parihar", href: "https://linkedin.com/in/harish-parihar" },
                ].map((c) => {
                  const Inner = (
                    <div className="glass glass-hover flex items-center gap-4 rounded-2xl p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--neon-soft)] text-[var(--neon)]">
                        <c.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{c.label}</div>
                        <div className="truncate text-sm font-medium">{c.value}</div>
                      </div>
                    </div>
                  );
                  return c.href ? (
                    <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
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
      </Section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/5 px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <FadeIn>
            <h3 className="font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1] text-gradient">
              Let's Build Something <br /> Amazing Together.
            </h3>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row">
              <div>© 2026 Harish Parihar</div>
              <div className="flex items-center gap-2">
                Crafted with <span className="text-[var(--neon)]">React</span> & precision.
              </div>
            </div>
          </FadeIn>
        </div>
      </footer>
    </div>
  );
}