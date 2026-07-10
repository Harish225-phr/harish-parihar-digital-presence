import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Menu, t as X, y as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as motion, n as useSpring, r as useScroll, t as useInView } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-shared-BgetFOY8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		mass: .2
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: "fixed left-0 right-0 top-0 z-50 h-[2px] origin-left",
		style: {
			scaleX: progress,
			background: "var(--neon)"
		}
	});
}
function MouseGlow() {
	const [pos, setPos] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		const onMove = (e) => setPos({
			x: e.clientX,
			y: e.clientY
		});
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 z-0 transition-opacity duration-300",
		style: { background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(0,255,136,0.06), transparent 50%)` }
	});
}
var navLinks = [
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/experience",
		label: "Experience"
	},
	{
		to: "/skills",
		label: "Skills"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/education",
		label: "Education"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed left-1/2 top-5 z-40 w-[min(92%,1100px)] -translate-x-1/2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass flex items-center justify-between rounded-full px-5 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "font-display text-sm font-bold tracking-tight",
					children: ["HP", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[var(--neon)]",
						children: "."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden gap-7 text-sm text-muted-foreground md:flex",
					children: navLinks.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: s.to,
						className: "capitalize transition-colors hover:text-[var(--neon)]",
						activeProps: { className: "text-[var(--neon)]" },
						children: s.label
					}, s.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "btn-neon hidden text-xs md:inline-flex",
						children: ["Hire Me ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "glass flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden",
						onClick: () => setOpen((o) => !o),
						"aria-label": "Toggle menu",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass mt-2 rounded-2xl p-4 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-1 text-sm",
				children: navLinks.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: s.to,
					onClick: () => setOpen(false),
					className: "rounded-lg px-3 py-2 capitalize transition-colors hover:bg-white/5 hover:text-[var(--neon)]",
					activeProps: { className: "text-[var(--neon)] bg-white/5" },
					children: s.label
				}, s.to))
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative border-t border-white/5 px-6 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1] text-gradient",
				children: [
					"Let's Build Something ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					" Amazing Together."
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
				delay: .2,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "© 2026 Harish Parihar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							"Crafted with ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--neon)]",
								children: "React"
							}),
							" & precision."
						]
					})]
				})
			})]
		})
	});
}
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MouseGlow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 md:pt-40",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function PageHeader({ tag, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-14 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs uppercase tracking-[0.3em] text-[var(--neon)]",
			children: tag
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display mt-3 text-4xl font-bold md:text-5xl",
			children: title
		})]
	}) });
}
function FadeIn({ children, delay = 0, y = 24 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		initial: {
			opacity: 0,
			y
		},
		animate: inView ? {
			opacity: 1,
			y: 0
		} : {},
		transition: {
			duration: .7,
			delay,
			ease: [
				.2,
				.8,
				.2,
				1
			]
		},
		children
	});
}
//#endregion
export { PageHeader as n, PageShell as r, FadeIn as t };
