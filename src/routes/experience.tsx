import { createFileRoute } from "@tanstack/react-router";
import ExperiencePage from "@/components/pages/ExperiencePage";
import { SITE_URL } from "@/lib/portfolio-data";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Harish Parihar — Experience | React.js Developer & Front-End Specialist" },
      { name: "description", content: "Work experience of Harish Parihar — Front-End Developer and React.js specialist. Built responsive web applications, integrated REST APIs, and owned the front-end lifecycle." },
      { name: "author", content: "Harish Parihar" },
      { name: "keywords", content: "Harish Parihar experience, Harish Parihar React developer, Harish Parihar front-end developer, Harish Rajput experience, harish.phr" },
      { tag: "link", rel: "canonical", href: `${SITE_URL}/experience` },
      { property: "og:title", content: "Harish Parihar — Experience | React.js Developer" },
      { property: "og:description", content: "Work experience of Harish Parihar — Front-End Developer and React.js specialist." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${SITE_URL}/experience` },
      { property: "og:site_name", content: "Harish Parihar" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: ExperiencePage,
});
