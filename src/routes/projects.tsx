import { createFileRoute } from "@tanstack/react-router";
import ProjectsPage from "@/components/pages/ProjectsPage";
import { SITE_URL } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Harish Parihar — Projects | React.js Web Applications & CMS Platforms" },
      { name: "description", content: "Featured projects by Harish Parihar — Rural CMS Platform, Country Explorer App, and Heena Art By Ritu. Built with React.js, REST APIs, and modern front-end tools." },
      { name: "author", content: "Harish Parihar" },
      { name: "keywords", content: "Harish Parihar projects, Harish Parihar portfolio, Harish Parihar React projects, Harish Rajput projects, Harish Parihar web development, harish.phr projects" },
      { tag: "link", rel: "canonical", href: `${SITE_URL}/projects` },
      { property: "og:title", content: "Harish Parihar — Projects | React.js Web Applications" },
      { property: "og:description", content: "Featured projects by Harish Parihar — CMS platforms, REST API apps, and business websites built with React.js." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/projects` },
      { property: "og:site_name", content: "Harish Parihar" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: ProjectsPage,
});
