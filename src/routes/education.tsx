import { createFileRoute } from "@tanstack/react-router";
import EducationPage from "@/components/pages/EducationPage";
import { SITE_URL } from "@/lib/portfolio-data";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Harish Parihar — Education | Qualifications & Certifications" },
      { name: "description", content: "Education and certifications of Harish Parihar — BCA at Shoolini University, Junior Software Developer Certification, and COPA Certification." },
      { name: "author", content: "Harish Parihar" },
      { name: "keywords", content: "Harish Parihar education, Harish Parihar qualifications, Harish Parihar certification, Harish Rajput education, Harish Parihar Shoolini University, harish.phr education" },
      { tag: "link", rel: "canonical", href: `${SITE_URL}/education` },
      { property: "og:title", content: "Harish Parihar — Education & Certifications" },
      { property: "og:description", content: "Education and certifications of Harish Parihar." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${SITE_URL}/education` },
      { property: "og:site_name", content: "Harish Parihar" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: EducationPage,
});
