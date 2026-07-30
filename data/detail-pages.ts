export type DetailPageData = {
  readonly index: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly introduction: string;
  readonly sections: readonly {
    readonly label: string;
    readonly title: string;
    readonly body: string;
  }[];
};

export const detailPages = {
  about: {
    index: "01",
    eyebrow: "About / Profile",
    title: "The person behind the work.",
    introduction:
      "A dedicated space for a fuller introduction, working principles, interests, and the story behind the portfolio.",
    sections: [
      {
        label: "01 / Story",
        title: "Background",
        body: "Add a longer personal introduction, formative experiences, and the path that led to your current technical focus.",
      },
      {
        label: "02 / Approach",
        title: "How I work",
        body: "Describe your values, problem-solving process, collaboration style, and what thoughtful engineering means to you.",
      },
      {
        label: "03 / Beyond code",
        title: "Interests",
        body: "Share the subjects, communities, and pursuits that shape your perspective outside day-to-day development.",
      },
    ],
  },
  skills: {
    index: "02",
    eyebrow: "Skills / Stack",
    title: "Capabilities, with context.",
    introduction:
      "A framework for explaining not only which tools you use, but where you have applied them and how deeply you know them.",
    sections: [
      {
        label: "01 / Core",
        title: "Technical foundations",
        body: "Expand on languages, computer science fundamentals, architecture, and the systems knowledge behind your work.",
      },
      {
        label: "02 / Applied",
        title: "Frameworks & domains",
        body: "Connect frameworks, AI/ML knowledge, and product engineering skills to representative problems and outcomes.",
      },
      {
        label: "03 / Learning",
        title: "Currently exploring",
        body: "Keep a living record of technologies, research topics, and practices you are actively developing.",
      },
    ],
  },
  projects: {
    index: "03",
    eyebrow: "Selected Projects",
    title: "Work, decisions, and outcomes.",
    introduction:
      "A project index ready to grow into individual case studies with architecture notes, media, source links, and measurable results.",
    sections: [
      {
        label: "01 / Index",
        title: "All projects",
        body: "List featured and archived work with filters for discipline, technology, status, or year.",
      },
      {
        label: "02 / Method",
        title: "Case-study structure",
        body: "Each future case study can cover the problem, constraints, key decisions, implementation, and final outcome.",
      },
      {
        label: "03 / Evidence",
        title: "Demos & source",
        body: "Reserve space for live demonstrations, repositories, screenshots, diagrams, and technical documentation.",
      },
    ],
  },
  experience: {
    index: "04",
    eyebrow: "Experience",
    title: "A more complete timeline.",
    introduction:
      "A chronological view of professional roles, education, collaborations, and milestones, with room for the details that shaped each chapter.",
    sections: [
      {
        label: "01 / Work",
        title: "Professional experience",
        body: "Expand each role with responsibilities, decisions, technologies, collaborators, and concrete impact.",
      },
      {
        label: "02 / Study",
        title: "Education",
        body: "Document coursework, research, awards, societies, and projects that support your areas of focus.",
      },
      {
        label: "03 / Growth",
        title: "Milestones",
        body: "Highlight certifications, talks, publications, hackathons, volunteering, and other meaningful achievements.",
      },
    ],
  },
  contact: {
    index: "05",
    eyebrow: "Contact",
    title: "Start a thoughtful conversation.",
    introduction:
      "A focused contact destination for opportunities, collaborations, technical discussions, and other relevant enquiries.",
    sections: [
      {
        label: "01 / Reach out",
        title: "Contact channels",
        body: "Add your preferred email address, professional profiles, response expectations, and availability.",
      },
      {
        label: "02 / Context",
        title: "Helpful details",
        body: "Guide visitors on useful information to include, such as project scope, timeline, role, or discussion topic.",
      },
      {
        label: "03 / Availability",
        title: "Ways to collaborate",
        body: "Describe the roles, projects, research areas, or communities you are currently open to exploring.",
      },
    ],
  },
} satisfies Record<string, DetailPageData>;
