import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Briefcase } from "../_libs/lucide-react.mjs";
import { n as PageHeader, r as PageShell, t as FadeIn } from "./portfolio-shared-BgetFOY8.mjs";
import { i as experience } from "./portfolio-data-BMhgHrWe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experience-D0IQ5UDr.js
var import_jsx_runtime = require_jsx_runtime();
function ExperiencePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		tag: "Journey",
		title: "Experience"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto max-w-3xl pb-20",
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
	})] });
}
var SplitComponent = ExperiencePage;
//#endregion
export { SplitComponent as component };
