import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Phone, c as Mail, l as Linkedin, s as MapPin, u as Instagram, y as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as PageHeader, r as PageShell, t as FadeIn } from "./portfolio-shared-BgetFOY8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CGNTxZmK.js
var import_jsx_runtime = require_jsx_runtime();
var iconMap = {
	Phone,
	Mail,
	MapPin,
	Linkedin,
	Instagram
};
var contacts = [
	{
		icon: "Phone",
		label: "Phone",
		value: "8278771093",
		href: "tel:8278771093"
	},
	{
		icon: "Mail",
		label: "Email",
		value: "harish.pariihar@gmail.com",
		href: "mailto:harish.pariihar@gmail.com"
	},
	{
		icon: "MapPin",
		label: "Location",
		value: "Kunihar, Solan, Himachal Pradesh"
	},
	{
		icon: "Linkedin",
		label: "LinkedIn",
		value: "linkedin.com/in/harish-rajjput",
		href: "https://www.linkedin.com/in/harish-rajjput/"
	},
	{
		icon: "Instagram",
		label: "Instagram",
		value: "@harish.phr",
		href: "https://www.instagram.com/harish.phr/"
	}
];
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			tag: "Contact",
			title: "Get in touch"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:harish.pariihar@gmail.com",
							className: "btn-neon mt-8 text-sm",
							children: ["Send a message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: contacts.map((c) => {
								const Icon = iconMap[c.icon];
								const Inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "glass glass-hover flex items-center gap-4 rounded-2xl p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--neon-soft)] text-[var(--neon)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
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
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pb-20" })
	] });
}
var SplitComponent = ContactPage;
//#endregion
export { SplitComponent as component };
