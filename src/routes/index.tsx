import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";
import { SITE_URL } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harish Parihar — Front-End Developer & React.js Specialist" },
      {
        name: "description",
        content:
          "Harish Parihar is a Front-End Developer with 1.5+ years of experience building modern, scalable web applications with React.js, JavaScript and API integrations. Based in Himachal Pradesh, India.",
      },
      {
        name: "keywords",
        content:
          "Harish Parihar, Harish Rajput, Harish Parihar developer, Harish Parihar React developer, Harish Parihar front-end developer, Harish Parihar portfolio, Harish Parihar Himachal, Harish Parihar Solan, harish.phr, Harish Parihar web developer, Harish Parihar JavaScript, Harish Parihar React.js",
      },
      { name: "author", content: "Harish Parihar" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Harish Parihar — Front-End Developer & React.js Specialist" },
      {
        property: "og:description",
        content:
          "React.js Developer | Dashboard & Automation Specialist. Building premium, scalable web experiences. 1.5+ years of experience.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Harish Parihar" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Harish Parihar — Front-End Developer & React.js Specialist" },
      {
        name: "twitter:description",
        content:
          "React.js Developer | Dashboard & Automation Specialist. Building premium, scalable web experiences.",
      },
    ],
  }),
  component: Portfolio,
});
