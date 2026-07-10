import { createFileRoute } from "@tanstack/react-router";
import SkillsPage from "@/components/pages/SkillsPage";
import { SITE_URL } from "@/lib/portfolio-data";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Harish Parihar — Skills | React.js, JavaScript & Front-End Stack" },
      { name: "description", content: "Technical skills of Harish Parihar — React.js, JavaScript, HTML5, CSS3, REST APIs, MongoDB, WordPress, Google Apps Script, Git, and more." },
      { name: "author", content: "Harish Parihar" },
      { name: "keywords", content: "Harish Parihar skills, Harish Parihar React, Harish Parihar JavaScript, Harish Parihar developer skills, Harish Rajput skills, harish.phr skills" },
      { tag: "link", rel: "canonical", href: `${SITE_URL}/skills` },
      { property: "og:title", content: "Harish Parihar — Skills | React.js & Front-End Stack" },
      { property: "og:description", content: "Technical skills of Harish Parihar — React.js, JavaScript, APIs, CMS, databases and more." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${SITE_URL}/skills` },
      { property: "og:site_name", content: "Harish Parihar" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: SkillsPage,
});
