import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SITE_URL } from "./portfolio-data-BMhgHrWe.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BsEcDaSp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-XlahMahT.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Harish Parihar — Front-End Developer & React.js Specialist" },
			{
				name: "description",
				content: "Harish Parihar — Front-End Developer with 1.5+ years of experience building modern, scalable web apps with React.js, JavaScript, and API integrations."
			},
			{
				name: "author",
				content: "Harish Parihar"
			},
			{
				name: "keywords",
				content: "Harish Parihar, Harish Rajput, Harish Parihar portfolio, Harish Parihar developer, Front-End Developer, React.js Developer, JavaScript Developer, Dashboard Developer, harish.phr"
			},
			{
				name: "google-site-verification",
				content: "K_ZOBKy8GOYjydl0vwAMN_E8yQZWIdjZFdTzljSIxnU"
			},
			{
				property: "og:title",
				content: "Harish Parihar — Front-End Developer & React.js Specialist"
			},
			{
				property: "og:description",
				content: "Official portfolio of Harish Parihar — React.js Developer building premium, scalable web experiences."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Harish Parihar"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Harish Parihar — Front-End Developer"
			},
			{
				name: "twitter:description",
				content: "React.js Developer | Dashboard & Automation Specialist."
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Person",
				name: "Harish Parihar",
				alternateName: [
					"Harish Rajput",
					"harish.phr",
					"Harish Parihar developer"
				],
				jobTitle: "Front-End Developer",
				url: SITE_URL,
				email: "harish.pariihar@gmail.com",
				telephone: "+91-8278771093",
				address: {
					"@type": "PostalAddress",
					addressLocality: "Kunihar, Solan",
					addressRegion: "Himachal Pradesh",
					addressCountry: "IN"
				},
				description: "Harish Parihar — Front-End Developer with 1.5+ years of experience specializing in React.js, JavaScript, and scalable web applications.",
				knowsAbout: [
					"React.js",
					"JavaScript",
					"TypeScript",
					"Front-End Development",
					"Dashboard Development",
					"API Integration",
					"WordPress",
					"Google Apps Script"
				],
				sameAs: ["https://www.linkedin.com/in/harish-rajjput/", "https://www.instagram.com/harish.phr/"]
			})
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebSite",
				name: "Harish Parihar",
				url: SITE_URL,
				author: {
					"@type": "Person",
					name: "Harish Parihar"
				}
			})
		}],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
			},
			{
				rel: "canonical",
				href: SITE_URL
			},
			{
				rel: "sitemap",
				type: "application/xml",
				href: "/sitemap.xml"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$6 = () => import("./skills-CgWU556x.mjs");
var Route$6 = createFileRoute("/skills")({
	head: () => ({ meta: [
		{ title: "Harish Parihar — Skills | React.js, JavaScript & Front-End Stack" },
		{
			name: "description",
			content: "Technical skills of Harish Parihar — React.js, JavaScript, HTML5, CSS3, REST APIs, MongoDB, WordPress, Google Apps Script, Git, and more."
		},
		{
			name: "author",
			content: "Harish Parihar"
		},
		{
			name: "keywords",
			content: "Harish Parihar skills, Harish Parihar React, Harish Parihar JavaScript, Harish Parihar developer skills, Harish Rajput skills, harish.phr skills"
		},
		{
			tag: "link",
			rel: "canonical",
			href: `${SITE_URL}/skills`
		},
		{
			property: "og:title",
			content: "Harish Parihar — Skills | React.js & Front-End Stack"
		},
		{
			property: "og:description",
			content: "Technical skills of Harish Parihar — React.js, JavaScript, APIs, CMS, databases and more."
		},
		{
			property: "og:type",
			content: "profile"
		},
		{
			property: "og:url",
			content: `${SITE_URL}/skills`
		},
		{
			property: "og:site_name",
			content: "Harish Parihar"
		},
		{
			name: "robots",
			content: "index, follow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./projects-Bw3dKRyR.mjs");
var Route$5 = createFileRoute("/projects")({
	head: () => ({ meta: [
		{ title: "Harish Parihar — Projects | React.js Web Applications & CMS Platforms" },
		{
			name: "description",
			content: "Featured projects by Harish Parihar — Rural CMS Platform, Country Explorer App, and Heena Art By Ritu. Built with React.js, REST APIs, and modern front-end tools."
		},
		{
			name: "author",
			content: "Harish Parihar"
		},
		{
			name: "keywords",
			content: "Harish Parihar projects, Harish Parihar portfolio, Harish Parihar React projects, Harish Rajput projects, Harish Parihar web development, harish.phr projects"
		},
		{
			tag: "link",
			rel: "canonical",
			href: `${SITE_URL}/projects`
		},
		{
			property: "og:title",
			content: "Harish Parihar — Projects | React.js Web Applications"
		},
		{
			property: "og:description",
			content: "Featured projects by Harish Parihar — CMS platforms, REST API apps, and business websites built with React.js."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			property: "og:url",
			content: `${SITE_URL}/projects`
		},
		{
			property: "og:site_name",
			content: "Harish Parihar"
		},
		{
			name: "robots",
			content: "index, follow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./experience-D0IQ5UDr.mjs");
var Route$4 = createFileRoute("/experience")({
	head: () => ({ meta: [
		{ title: "Harish Parihar — Experience | React.js Developer & Front-End Specialist" },
		{
			name: "description",
			content: "Work experience of Harish Parihar — Front-End Developer and React.js specialist. Built responsive web applications, integrated REST APIs, and owned the front-end lifecycle."
		},
		{
			name: "author",
			content: "Harish Parihar"
		},
		{
			name: "keywords",
			content: "Harish Parihar experience, Harish Parihar React developer, Harish Parihar front-end developer, Harish Rajput experience, harish.phr"
		},
		{
			tag: "link",
			rel: "canonical",
			href: `${SITE_URL}/experience`
		},
		{
			property: "og:title",
			content: "Harish Parihar — Experience | React.js Developer"
		},
		{
			property: "og:description",
			content: "Work experience of Harish Parihar — Front-End Developer and React.js specialist."
		},
		{
			property: "og:type",
			content: "profile"
		},
		{
			property: "og:url",
			content: `${SITE_URL}/experience`
		},
		{
			property: "og:site_name",
			content: "Harish Parihar"
		},
		{
			name: "robots",
			content: "index, follow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./education-Cy6lxt7Y.mjs");
var Route$3 = createFileRoute("/education")({
	head: () => ({ meta: [
		{ title: "Harish Parihar — Education | Qualifications & Certifications" },
		{
			name: "description",
			content: "Education and certifications of Harish Parihar — BCA at Shoolini University, Junior Software Developer Certification, and COPA Certification."
		},
		{
			name: "author",
			content: "Harish Parihar"
		},
		{
			name: "keywords",
			content: "Harish Parihar education, Harish Parihar qualifications, Harish Parihar certification, Harish Rajput education, Harish Parihar Shoolini University, harish.phr education"
		},
		{
			tag: "link",
			rel: "canonical",
			href: `${SITE_URL}/education`
		},
		{
			property: "og:title",
			content: "Harish Parihar — Education & Certifications"
		},
		{
			property: "og:description",
			content: "Education and certifications of Harish Parihar."
		},
		{
			property: "og:type",
			content: "profile"
		},
		{
			property: "og:url",
			content: `${SITE_URL}/education`
		},
		{
			property: "og:site_name",
			content: "Harish Parihar"
		},
		{
			name: "robots",
			content: "index, follow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-CGNTxZmK.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Harish Parihar — Contact | Hire Front-End & React.js Developer" },
		{
			name: "description",
			content: "Contact Harish Parihar — Front-End Developer and React.js specialist. Available for full-time roles, freelance projects, and collaborations. Phone, email, LinkedIn, Instagram."
		},
		{
			name: "author",
			content: "Harish Parihar"
		},
		{
			name: "keywords",
			content: "Harish Parihar contact, Harish Parihar hire, Harish Parihar email, Harish Parihar phone, contact Harish Parihar, Harish Rajput contact, harish.phr contact"
		},
		{
			tag: "link",
			rel: "canonical",
			href: `${SITE_URL}/contact`
		},
		{
			property: "og:title",
			content: "Harish Parihar — Contact | Hire React.js Developer"
		},
		{
			property: "og:description",
			content: "Contact Harish Parihar — open to full-time roles, freelance projects and collaborations."
		},
		{
			property: "og:type",
			content: "profile"
		},
		{
			property: "og:url",
			content: `${SITE_URL}/contact`
		},
		{
			property: "og:site_name",
			content: "Harish Parihar"
		},
		{
			name: "robots",
			content: "index, follow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-D7C74TUp.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "Harish Parihar — About | Front-End Developer & React.js Specialist" },
		{
			name: "description",
			content: "About Harish Parihar — Front-End Developer with 1.5+ years of experience building scalable, responsive web applications with React.js and JavaScript."
		},
		{
			name: "author",
			content: "Harish Parihar"
		},
		{
			name: "keywords",
			content: "Harish Parihar, Harish Rajput, Harish Parihar about, Harish Parihar developer, Harish Parihar React developer, harish.phr"
		},
		{
			tag: "link",
			rel: "canonical",
			href: `${SITE_URL}/about`
		},
		{
			property: "og:title",
			content: "Harish Parihar — About | Front-End Developer"
		},
		{
			property: "og:description",
			content: "About Harish Parihar — Front-End Developer with 1.5+ years of experience."
		},
		{
			property: "og:type",
			content: "profile"
		},
		{
			property: "og:url",
			content: `${SITE_URL}/about`
		},
		{
			property: "og:site_name",
			content: "Harish Parihar"
		},
		{
			name: "robots",
			content: "index, follow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-DEisG7Wu.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Harish Parihar — Front-End Developer & React.js Specialist" },
		{
			name: "description",
			content: "Harish Parihar is a Front-End Developer with 1.5+ years of experience building modern, scalable web applications with React.js, JavaScript and API integrations. Based in Himachal Pradesh, India."
		},
		{
			name: "keywords",
			content: "Harish Parihar, Harish Rajput, Harish Parihar developer, Harish Parihar React developer, Harish Parihar front-end developer, Harish Parihar portfolio, Harish Parihar Himachal, Harish Parihar Solan, harish.phr, Harish Parihar web developer, Harish Parihar JavaScript, Harish Parihar React.js"
		},
		{
			name: "author",
			content: "Harish Parihar"
		},
		{
			name: "robots",
			content: "index, follow, max-image-preview:large"
		},
		{
			property: "og:title",
			content: "Harish Parihar — Front-End Developer & React.js Specialist"
		},
		{
			property: "og:description",
			content: "React.js Developer | Dashboard & Automation Specialist. Building premium, scalable web experiences. 1.5+ years of experience."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			property: "og:url",
			content: SITE_URL
		},
		{
			property: "og:site_name",
			content: "Harish Parihar"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: "Harish Parihar — Front-End Developer & React.js Specialist"
		},
		{
			name: "twitter:description",
			content: "React.js Developer | Dashboard & Automation Specialist. Building premium, scalable web experiences."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SkillsRoute = Route$6.update({
	id: "/skills",
	path: "/skills",
	getParentRoute: () => Route$7
});
var ProjectsRoute = Route$5.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$7
});
var ExperienceRoute = Route$4.update({
	id: "/experience",
	path: "/experience",
	getParentRoute: () => Route$7
});
var EducationRoute = Route$3.update({
	id: "/education",
	path: "/education",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute,
	ContactRoute,
	EducationRoute,
	ExperienceRoute,
	ProjectsRoute,
	SkillsRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
