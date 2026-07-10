import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone, c as Mail, d as GraduationCap, f as Github, l as Linkedin, m as Download, p as ExternalLink, s as MapPin, u as Instagram, v as Briefcase, y as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as motion, n as useSpring, r as useScroll, t as useInView } from "../_libs/framer-motion.mjs";
import { a as projects, c as techBadges, i as experience, o as skills, r as education, s as stats, t as RESUME_URL } from "./portfolio-data-BMhgHrWe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DEisG7Wu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var harish_profile_default = "/assets/harish-profile-DjU8N5wn.jpg";
function Section({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `relative mx-auto w-full max-w-7xl px-6 py-24 md:py-32 ${className}`,
		children
	});
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
function Counter({ to, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, { once: true });
	const [val, setVal] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const start = performance.now();
		const dur = 1400;
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / dur);
			setVal(to * (1 - Math.pow(1 - p, 3)));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "font-display text-5xl font-bold text-gradient md:text-6xl",
		children: [Number.isInteger(to) ? Math.round(val).toString() : val.toFixed(1), suffix]
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
function Portfolio() {
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		mass: .2
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "fixed left-0 right-0 top-0 z-50 h-[2px] origin-left",
				style: {
					scaleX: progress,
					background: "var(--neon)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MouseGlow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed left-1/2 top-5 z-40 w-[min(92%,1100px)] -translate-x-1/2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
							children: [
								{
									to: "/about",
									label: "about"
								},
								{
									to: "/experience",
									label: "experience"
								},
								{
									to: "/skills",
									label: "skills"
								},
								{
									to: "/projects",
									label: "projects"
								},
								{
									to: "/contact",
									label: "contact"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: s.to,
								className: "capitalize transition-colors hover:text-[var(--neon)]",
								activeProps: { className: "text-[var(--neon)]" },
								children: s.label
							}, s.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "btn-neon text-xs",
							children: ["Hire Me ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative flex min-h-screen items-center px-6 pt-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-bg absolute inset-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "var(--gradient-hero)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "glow-orb left-[-10%] top-1/4 h-[400px] w-[400px] bg-[var(--neon)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "glow-orb right-[-5%] bottom-1/4 h-[350px] w-[350px] bg-emerald-500/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative flex h-2 w-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--neon)] opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-[var(--neon)]" })]
								}), "Available for new opportunities"]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-display text-[clamp(2.8rem,8vw,5.5rem)] font-bold leading-[0.95]",
									children: [
										"HARISH",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gradient",
											children: "PARIHAR"
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-base text-muted-foreground md:text-lg",
									children: "Front-End Developer · React.js Developer · Dashboard & Automation Specialist"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
								delay: .3,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base",
									children: "I build modern, scalable and user-friendly web applications with React.js, JavaScript and API integrations."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
								delay: .4,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/projects",
											className: "btn-neon",
											children: ["View Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: RESUME_URL,
											target: "_blank",
											rel: "noreferrer",
											className: "btn-ghost",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download Resume"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/contact",
											className: "btn-ghost",
											children: "Contact Me"
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
								delay: .5,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10 flex flex-wrap gap-2",
									children: techBadges.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "glass rounded-full px-3 py-1.5 text-xs text-muted-foreground",
										children: t
									}, t))
								})
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							delay: .3,
							y: 40,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative mx-auto aspect-square w-full max-w-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-full bg-[var(--neon)]/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "animate-float relative h-full w-full overflow-hidden rounded-[2rem] bg-white p-2 shadow-[0_0_60px_rgba(0,255,136,0.25)] ring-1 ring-white/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: harish_profile_default,
												alt: "Harish Parihar — Front-End Developer",
												width: 1024,
												height: 1024,
												className: "h-full w-full rounded-[1.6rem] object-cover"
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											scale: .8
										},
										animate: {
											opacity: 1,
											scale: 1
										},
										transition: {
											delay: .8,
											duration: .6
										},
										className: "glass absolute -bottom-4 -left-4 hidden rounded-2xl px-4 py-3 sm:block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] uppercase tracking-wider text-muted-foreground",
											children: "Currently"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold",
											children: "Building React dashboards"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											scale: .8
										},
										animate: {
											opacity: 1,
											scale: 1
										},
										transition: {
											delay: 1,
											duration: .6
										},
										className: "glass absolute -right-3 top-6 hidden rounded-2xl px-4 py-3 sm:block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-2xl font-bold text-[var(--neon)]",
											children: "1.5+"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] uppercase tracking-wider text-muted-foreground",
											children: "Years"
										})]
									})
								]
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.3em] text-[var(--neon)]",
					children: "About"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-4xl font-bold md:text-5xl",
					children: "Clean code. Real impact."
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass glass-hover mx-auto max-w-4xl rounded-3xl p-8 md:p-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Front-End Developer with ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-semibold",
									children: "1.5+ years of experience"
								}),
								" building scalable and responsive web applications using React.js and JavaScript."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Experienced in API integration, dashboard development, Google Apps Script automation, WordPress solutions and performance optimization." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Passionate about creating clean user experiences and solving real-world business problems through technology." })
						]
					})
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.3em] text-[var(--neon)]",
					children: "Journey"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-4xl font-bold md:text-5xl",
					children: "Experience"
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-[var(--neon)] via-[var(--neon)]/30 to-transparent md:left-1/2" }), experience.map((exp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative mb-12 md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-4 top-6 -translate-x-1/2 md:left-1/2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative h-3 w-3 rounded-full bg-[var(--neon)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 animate-ping rounded-full bg-[var(--neon)] opacity-60" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass glass-hover ml-12 rounded-2xl p-6 md:ml-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 flex items-center gap-2 text-xs text-[var(--neon)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-3.5 w-3.5" }),
										" ",
										exp.period
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-bold",
									children: exp.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-2 text-sm text-muted-foreground",
									children: exp.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--neon)]" }), p]
									}, p))
								})
							]
						})]
					})
				}, exp.role))]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.3em] text-[var(--neon)]",
					children: "Toolkit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-4xl font-bold md:text-5xl",
					children: "Skills & Stack"
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: skills.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass glass-hover h-full rounded-2xl p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--neon-soft)] text-[var(--neon)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: s.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-muted-foreground",
									children: it
								}, it))
							})
						]
					})
				}, s.title))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.3em] text-[var(--neon)]",
					children: "Work"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-4xl font-bold md:text-5xl",
					children: "Featured Projects"
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass glass-hover group relative flex h-full flex-col overflow-hidden rounded-2xl p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[var(--neon)]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 text-[10px] uppercase tracking-[0.2em] text-[var(--neon)]",
								children: p.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-bold",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
								children: p.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 flex flex-wrap gap-1.5",
								children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-muted-foreground",
									children: t
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: p.link,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-1.5 rounded-full bg-[var(--neon)] px-3 py-1.5 text-xs font-semibold text-[#001a0e] transition-transform hover:-translate-y-0.5",
									children: ["Live ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://github.com/",
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs transition-colors hover:border-[var(--neon)] hover:text-[var(--neon)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-3 w-3" }), " Code"]
								})]
							})
						]
					})
				}, p.title))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass relative overflow-hidden rounded-3xl p-10 md:p-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-40",
					style: { background: "var(--gradient-hero)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative grid grid-cols-2 gap-8 md:grid-cols-4",
					children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: s.value,
								suffix: s.suffix
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-xs uppercase tracking-wider text-muted-foreground",
								children: s.label
							})]
						})
					}, s.label))
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.3em] text-[var(--neon)]",
					children: "Learning"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-4xl font-bold md:text-5xl",
					children: "Education"
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-3",
				children: education.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass glass-hover h-full rounded-2xl p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-6 w-6 text-[var(--neon)]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display mt-4 text-base font-semibold",
								children: e.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm text-muted-foreground",
								children: e.org
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs text-[var(--neon)]",
								children: e.period
							})
						]
					})
				}, e.title))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass relative overflow-hidden rounded-3xl p-8 md:p-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[var(--neon)]/20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-emerald-500/20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid gap-10 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeIn, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.3em] text-[var(--neon)]",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display mt-3 text-4xl font-bold leading-tight md:text-5xl",
								children: [
									"Let's work ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "together."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-sm text-muted-foreground md:text-base",
								children: "Open to full-time roles, freelance projects and collaboration on ambitious React.js builds."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.linkedin.com/in/harish-rajjput/",
										target: "_blank",
										rel: "noreferrer",
										className: "glass glass-hover inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--neon)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.instagram.com/harish.phr/",
										target: "_blank",
										rel: "noreferrer",
										className: "glass glass-hover inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--neon)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:harish.pariihar@gmail.com",
										className: "glass glass-hover inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--neon)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
									})
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							delay: .15,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: [
									{
										icon: Phone,
										label: "Phone",
										value: "8278771093",
										href: "tel:8278771093"
									},
									{
										icon: Mail,
										label: "Email",
										value: "harish.pariihar@gmail.com",
										href: "mailto:harish.pariihar@gmail.com"
									},
									{
										icon: MapPin,
										label: "Location",
										value: "Kunihar, Solan, Himachal Pradesh"
									},
									{
										icon: Linkedin,
										label: "LinkedIn",
										value: "linkedin.com/in/harish-rajjput",
										href: "https://www.linkedin.com/in/harish-rajjput/"
									},
									{
										icon: Instagram,
										label: "Instagram",
										value: "@harish.phr",
										href: "https://www.instagram.com/harish.phr/"
									}
								].map((c) => {
									const Inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "glass glass-hover flex items-center gap-4 rounded-2xl p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--neon-soft)] text-[var(--neon)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] uppercase tracking-wider text-muted-foreground",
												children: c.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "truncate text-sm font-medium",
												children: c.value
											})]
										})]
									});
									return c.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: c.href,
										target: c.href.startsWith("http") ? "_blank" : void 0,
										rel: "noreferrer",
										className: "block",
										children: Inner
									}, c.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: Inner }, c.label);
								})
							})
						})]
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
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
			})
		]
	});
}
var SplitComponent = Portfolio;
//#endregion
export { SplitComponent as component };
