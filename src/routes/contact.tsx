import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/components/pages/ContactPage";
import { SITE_URL } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Harish Parihar — Contact | Hire Front-End & React.js Developer" },
      { name: "description", content: "Contact Harish Parihar — Front-End Developer and React.js specialist. Available for full-time roles, freelance projects, and collaborations. Phone, email, LinkedIn, Instagram." },
      { name: "author", content: "Harish Parihar" },
      { name: "keywords", content: "Harish Parihar contact, Harish Parihar hire, Harish Parihar email, Harish Parihar phone, contact Harish Parihar, Harish Rajput contact, harish.phr contact" },
      { tag: "link", rel: "canonical", href: `${SITE_URL}/contact` },
      { property: "og:title", content: "Harish Parihar — Contact | Hire React.js Developer" },
      { property: "og:description", content: "Contact Harish Parihar — open to full-time roles, freelance projects and collaborations." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { property: "og:site_name", content: "Harish Parihar" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: ContactPage,
});
