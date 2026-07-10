import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as Github, p as ExternalLink } from "../_libs/lucide-react.mjs";
import { n as PageHeader, r as PageShell, t as FadeIn } from "./portfolio-shared-BgetFOY8.mjs";
import { a as projects } from "./portfolio-data-BMhgHrWe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-Bw3dKRyR.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		tag: "Work",
		title: "Featured Projects"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3",
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
	})] });
}
var SplitComponent = ProjectsPage;
//#endregion
export { SplitComponent as component };
