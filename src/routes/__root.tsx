import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Harish Parihar — Front-End Developer & React.js Specialist" },
      {
        name: "description",
        content:
          "Harish Parihar — Front-End Developer with 1.5+ years of experience building modern, scalable web apps with React.js, JavaScript, and API integrations.",
      },
      { name: "author", content: "Harish Parihar" },
      {
        name: "keywords",
        content:
          "Harish Parihar, Harish Rajput, Harish Parihar portfolio, Harish Parihar developer, Front-End Developer, React.js Developer, JavaScript Developer, Dashboard Developer, harish.phr",
      },
      { name: "google-site-verification", content: "K_ZOBKy8GOYjydl0vwAMN_E8yQZWIdjZFdTzljSIxnU" },
      { property: "og:title", content: "Harish Parihar — Front-End Developer & React.js Specialist" },
      {
        property: "og:description",
        content:
          "Official portfolio of Harish Parihar — React.js Developer building premium, scalable web experiences.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Harish Parihar" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Harish Parihar — Front-End Developer" },
      {
        name: "twitter:description",
        content: "React.js Developer | Dashboard & Automation Specialist.",
      },
      { name: "robots", content: "index, follow" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Harish Parihar",
          alternateName: ["Harish Rajput", "harish.phr"],
          jobTitle: "Front-End Developer",
          description:
            "Front-End Developer with 1.5+ years of experience specializing in React.js, JavaScript, and scalable web applications.",
          knowsAbout: [
            "React.js",
            "JavaScript",
            "TypeScript",
            "Front-End Development",
            "Dashboard Development",
            "API Integration",
          ],
          sameAs: [
            "https://www.linkedin.com/in/harish-rajjput/",
            "https://www.instagram.com/harish.phr/",
          ],
        }),
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
