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
  name: "Mark Yang",
  title: "Mark Yang — Developer Portfolio",
  description:
    "Computer science student exploring artificial intelligence, computer vision, and software engineering.",
  role: "Computer Science Student",
  availability: "Available for meaningful work",
  hero:
    "Exploring intelligent systems through computer vision, artificial intelligence and thoughtful software engineering.",
  focus:
    "Artificial Intelligence · Computer Vision · Software Engineering",
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
  {
    label: "Focus",
    value: "Artificial Intelligence · Computer Vision · Software Engineering",
  },
  { label: "Current", value: "Open to possibilities" },
  { label: "Interests", value: "Useful, thoughtful technology" },
] satisfies readonly ProfileFact[];

export const socialLinks = [
  { label: "GitHub", href: "#contact", placeholder: true },
  { label: "LinkedIn", href: "#contact", placeholder: true },
] satisfies readonly SocialLink[];
