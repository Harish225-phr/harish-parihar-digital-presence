import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "@/components/pages/AboutPage";
import { SITE_URL } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Harish Parihar — About | Front-End Developer & React.js Specialist" },
      { name: "description", content: "About Harish Parihar — Front-End Developer with 1.5+ years of experience building scalable, responsive web applications with React.js and JavaScript." },
      { name: "author", content: "Harish Parihar" },
      { name: "keywords", content: "Harish Parihar, Harish Rajput, Harish Parihar about, Harish Parihar developer, Harish Parihar React developer, harish.phr" },
      { tag: "link", rel: "canonical", href: `${SITE_URL}/about` },
      { property: "og:title", content: "Harish Parihar — About | Front-End Developer" },
      { property: "og:description", content: "About Harish Parihar — Front-End Developer with 1.5+ years of experience." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${SITE_URL}/about` },
      { property: "og:site_name", content: "Harish Parihar" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: AboutPage,
});
