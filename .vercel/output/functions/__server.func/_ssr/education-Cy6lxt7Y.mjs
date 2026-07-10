import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as GraduationCap } from "../_libs/lucide-react.mjs";
import { n as PageHeader, r as PageShell, t as FadeIn } from "./portfolio-shared-BgetFOY8.mjs";
import { r as education } from "./portfolio-data-BMhgHrWe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/education-Cy6lxt7Y.js
var import_jsx_runtime = require_jsx_runtime();
function EducationPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		tag: "Learning",
		title: "Education"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-5 pb-20 md:grid-cols-3",
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
	})] });
}
var SplitComponent = EducationPage;
//#endregion
export { SplitComponent as component };
