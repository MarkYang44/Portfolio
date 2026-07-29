import type { Project } from "./types";

export const projects = [
  {
    title: "Project 01",
    slug: "project-01",
    description:
      "A focused product case study. Replace this copy with the problem, approach, and outcome.",
    year: "2026",
    category: "Software System",
    technologies: ["TypeScript", "React", "API"],
    image: "/images/projects/project-01.webp",
    featured: true,
    github: null,
    demo: null,
    status: "Concept",
    visual: "signal",
  },
  {
    title: "Project 02",
    slug: "project-02",
    description:
      "A technical build with room for architecture notes, decisions, and measurable impact.",
    year: "2026",
    category: "Intelligent Tool",
    technologies: ["Python", "PyTorch", "Vision"],
    image: "/images/projects/project-02.webp",
    featured: true,
    github: null,
    demo: null,
    status: "In progress",
    visual: "vision",
  },
  {
    title: "Project 03",
    slug: "project-03",
    description:
      "A future project entry designed to grow into a full, standalone case-study page.",
    year: "2025",
    category: "Developer Experience",
    technologies: ["Systems", "Docker", "Cloud"],
    image: "/images/projects/project-03.webp",
    featured: true,
    github: null,
    demo: null,
    status: "Concept",
    visual: "systems",
  },
] satisfies readonly Project[];

