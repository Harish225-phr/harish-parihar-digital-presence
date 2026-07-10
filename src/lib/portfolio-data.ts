import {
  Code2,
  Database,
  Wrench,
  Cpu,
  Workflow,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const SITE_URL = "https://harish-parihar.techhim.online";

export const RESUME_URL =
  "https://drive.google.com/file/d/1idzzwBmnFzUOcMnMnnSPBkXIEX6oDPgs/view";

export const techBadges = ["React.js", "JavaScript", "HTML5", "CSS3", "MongoDB", "GitHub"];

export const experience = [
  {
    role: "Front-End Developer",
    period: "Jan 2025 — May 2026",
    points: [
      "Developed responsive web applications using React.js",
      "Integrated REST APIs across dashboards and client portals",
      "Improved application performance and load times",
      "Owned the complete front-end development lifecycle",
      "Collaborated closely with designers and backend teams",
    ],
  },
  {
    role: "Developer Intern",
    period: "Oct 2024 — Dec 2024",
    points: [
      "Built responsive web pages from scratch",
      "Fixed UI issues and shipped bug fixes",
      "Tested applications across browsers and devices",
      "Learned and applied Agile workflows",
    ],
  },
];

export type Skill = { icon: LucideIcon; title: string; items: string[] };

export const skills: Skill[] = [
  {
    icon: Code2,
    title: "Frontend Development",
    items: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
  },
  { icon: Workflow, title: "API & Integration", items: ["REST APIs", "Axios", "WordPress REST API"] },
  {
    icon: Cpu,
    title: "CMS & Automation",
    items: ["WordPress", "Headless CMS", "Google Apps Script", "Workflow Automation"],
  },
  { icon: Database, title: "Database", items: ["MongoDB", "SQL"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "Bitbucket", "Netlify", "Vercel", "Hosting", "DNS"] },
  { icon: Sparkles, title: "Other", items: ["SEO Basics", "Linux", "Debugging"] },
];

export const projects = [
  {
    title: "Rural CMS Platform",
    tag: "CMS · Dashboard",
    description:
      "Dynamic CMS dashboard built on a React.js architecture. Delivered 3 client websites in a single week using a custom content management workflow.",
    tech: ["React.js", "Node.js", "REST API", "MongoDB"],
    link: "https://rural.hp.gov.in/",
  },
  {
    title: "Country Explorer App",
    tag: "REST · UI",
    description:
      "Interactive explorer for the REST Countries API featuring live search, region filtering, and a polished dark / light mode toggle.",
    tech: ["React.js", "REST API", "Tailwind", "Dark Mode"],
    link: "https://hairsh-project.vercel.app/",
  },
  {
    title: "Heena Art By Ritu",
    tag: "Business · SEO",
    description:
      "Premium business website with Netlify deployment, custom domain integration and on-page SEO optimization for organic discovery.",
    tech: ["React.js", "Netlify", "SEO", "Custom Domain"],
    link: "https://heenaartbyritu.com/",
  },
];

export const stats = [
  { value: 1.5, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Websites Built" },
  { value: 3, suffix: "+", label: "Live Client Projects" },
  { value: 100, suffix: "%", label: "Responsive Design" },
];

export const education = [
  { title: "Bachelor of Computer Applications", org: "Shoolini University", period: "2025 — Present" },
  { title: "Junior Software Developer Certification", org: "Vertex Institute", period: "2024" },
  { title: "COPA Certification", org: "Vertex Institute", period: "2023 — 2024" },
];
