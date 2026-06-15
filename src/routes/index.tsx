import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harish Parihar — Front-End Developer & React.js Specialist" },
      {
        name: "description",
        content:
          "Harish Parihar is a Front-End Developer with 1.5+ years of experience building modern, scalable web applications with React.js, JavaScript and API integrations.",
      },
      { property: "og:title", content: "Harish Parihar — Front-End Developer" },
      {
        property: "og:description",
        content:
          "React.js Developer | Dashboard & Automation Specialist. Building premium, scalable web experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
