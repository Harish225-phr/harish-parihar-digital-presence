import { useRef, useState, useEffect, type ReactNode } from "react";
import { motion, useScroll, useSpring, useInView } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left"
      style={{ scaleX: progress, background: "var(--neon)" }}
    />
  );
}

export function MouseGlow() {
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

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-1/2 top-5 z-40 w-[min(92%,1100px)] -translate-x-1/2">
      <div className="glass flex items-center justify-between rounded-full px-5 py-3">
        <Link to="/" className="font-display text-sm font-bold tracking-tight">
          HP<span className="text-[var(--neon)]">.</span>
        </Link>
        <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
          {navLinks.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="capitalize transition-colors hover:text-[var(--neon)]"
              activeProps={{ className: "text-[var(--neon)]" }}
            >
              {s.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-neon hidden text-xs md:inline-flex">
            Hire Me <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            className="glass flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="glass mt-2 rounded-2xl p-4 md:hidden">
          <nav className="flex flex-col gap-1 text-sm">
            {navLinks.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 capitalize transition-colors hover:bg-white/5 hover:text-[var(--neon)]"
                activeProps={{ className: "text-[var(--neon)] bg-white/5" }}
              >
                {s.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
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
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <ScrollProgress />
      <MouseGlow />
      <Nav />
      <main className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 md:pt-40">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <FadeIn>
      <div className="mb-14 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon)]">{tag}</span>
        <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">{title}</h2>
      </div>
    </FadeIn>
  );
}

export function FadeIn({
  children,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
}) {
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

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
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
