import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageHeader, r as PageShell, t as FadeIn } from "./portfolio-shared-BgetFOY8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-D7C74TUp.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			tag: "About",
			title: "Clean code. Real impact."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
			delay: .1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass glass-hover mx-auto max-w-4xl rounded-3xl p-8 md:p-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Front-End Developer with",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground font-semibold",
								children: "1.5+ years of experience"
							}),
							" ",
							"building scalable and responsive web applications using React.js and JavaScript."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Experienced in API integration, dashboard development, Google Apps Script automation, WordPress solutions and performance optimization." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Passionate about creating clean user experiences and solving real-world business problems through technology." })
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pb-20" })
	] });
}
var SplitComponent = AboutPage;
//#endregion
export { SplitComponent as component };
