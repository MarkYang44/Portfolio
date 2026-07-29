import type { NavItem, ProfileFact, SocialLink } from "./types";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] satisfies readonly NavItem[];

export const siteConfig = {
  name: "Mark",
  title: "Mark — Developer Portfolio",
  description:
    "Software developer building thoughtful software, intelligent systems, and digital experiences.",
  role: "Software Developer",
  availability: "Available for meaningful work",
  hero:
    "Building thoughtful software, intelligent systems and digital experiences.",
  aboutTitle: "A developer focused on building meaningful systems.",
  aboutCopy: [
    "I care about software that feels considered — from the systems underneath to the details people interact with.",
    "This space is a living record of selected work, technical interests, and the ideas I am exploring next.",
  ],
  contactEmail: "hello@example.com",
  contactNote: "Placeholder contact — replace before launch",
} as const;

export const profileFacts = [
  { label: "Location", value: "Your location" },
  { label: "Focus", value: "Software · AI · Systems" },
  { label: "Current", value: "Open to possibilities" },
  { label: "Interests", value: "Useful, thoughtful technology" },
] satisfies readonly ProfileFact[];

export const socialLinks = [
  { label: "GitHub", href: "#contact", placeholder: true },
  { label: "LinkedIn", href: "#contact", placeholder: true },
] satisfies readonly SocialLink[];

