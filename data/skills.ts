export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  blurb: string;
  skills: Skill[];
}

const icon = (file: string) => `/skills/${file}`;

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "web",
    title: "Web",
    blurb: "Interfaces and the services behind them.",
    skills: [
      { name: "HTML", icon: icon("html.png") },
      { name: "CSS", icon: icon("css.png") },
      { name: "JavaScript", icon: icon("js.png") },
      { name: "React", icon: icon("react.png") },
      { name: "Node.js", icon: icon("nodejs.png") },
      { name: "Web platforms", icon: icon("www.png") },
    ],
  },
  {
    id: "systems",
    title: "Systems",
    blurb: "Desktop builds, backends and taking software apart.",
    skills: [
      { name: "Python", icon: icon("python.png") },
      { name: "APIs", icon: icon("api.png") },
      { name: "Backend systems", icon: icon("software.png") },
      { name: "Reverse engineering", icon: icon("reverse-engineering.png") },
    ],
  },
  {
    id: "ai",
    title: "AI",
    blurb: "Models in products, and AI in the workflow.",
    skills: [
      { name: "AI systems", icon: icon("ai.png") },
      { name: "ChatGPT & LLM tooling", icon: icon("chatgpt.png") },
    ],
  },
  {
    id: "tooling",
    title: "Tooling",
    blurb: "The everyday kit.",
    skills: [
      { name: "Git", icon: icon("git.png") },
      { name: "GitHub", icon: icon("github.png") },
      { name: "VS Code", icon: icon("vscode.png") },
    ],
  },
];

export const ALL_SKILLS: Skill[] = SKILL_GROUPS.flatMap((group) => group.skills);
