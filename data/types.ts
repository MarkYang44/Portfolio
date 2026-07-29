export type NavItem = {
  readonly label: string;
  readonly href: `#${string}`;
};

export type SocialLink = {
  readonly label: string;
  readonly href: string;
  readonly placeholder?: boolean;
};

export type ProfileFact = {
  readonly label: string;
  readonly value: string;
};

export type SkillGroup = {
  readonly label: string;
  readonly items: readonly string[];
};

export type Project = {
  readonly title: string;
  readonly slug: string;
  readonly description: string;
  readonly year: string;
  readonly category: string;
  readonly technologies: readonly string[];
  readonly image: string;
  readonly featured: boolean;
  readonly github: string | null;
  readonly demo: string | null;
  readonly status: "Concept" | "In progress" | "Shipped";
  readonly visual: "signal" | "systems" | "vision";
};

export type ExperienceItem = {
  readonly role: string;
  readonly organization: string;
  readonly period: string;
  readonly location: string;
  readonly description: string;
};

