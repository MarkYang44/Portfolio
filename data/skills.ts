import type { SkillGroup } from "./types";

export const skillGroups = [
  { label: "Languages", items: ["Python", "Java", "C++", "TypeScript"] },
  { label: "Frameworks", items: ["React", "Next.js", "Node.js"] },
  { label: "AI / ML", items: ["PyTorch", "Computer Vision", "LLM Systems"] },
  { label: "Tools", items: ["Git", "Docker", "Linux"] },
  { label: "Infrastructure", items: ["Cloud", "APIs", "CI / CD"] },
] satisfies readonly SkillGroup[];

