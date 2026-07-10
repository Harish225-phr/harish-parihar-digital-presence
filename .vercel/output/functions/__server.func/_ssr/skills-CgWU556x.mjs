import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageHeader, r as PageShell, t as FadeIn } from "./portfolio-shared-BgetFOY8.mjs";
import { o as skills } from "./portfolio-data-BMhgHrWe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills-CgWU556x.js
var import_jsx_runtime = require_jsx_runtime();
function SkillsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		tag: "Toolkit",
		title: "Skills & Stack"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-5 pb-20 md:grid-cols-2 lg:grid-cols-3",
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
	})] });
}
var SplitComponent = SkillsPage;
//#endregion
export { SplitComponent as component };
