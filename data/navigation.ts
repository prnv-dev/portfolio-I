export interface NavLink {
  label: string;
  href: string;
}

export const PRIMARY_NAV: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "GitHub", href: "/github" },
  { label: "Resume", href: "/resume" },
];

export const PLAY_NAV: NavLink[] = [
  { label: "Terminal", href: "/lets-fun" },
  { label: "Brain mode", href: "/brain-mode" },
];

export const FOOTER_NAV: { title: string; links: NavLink[] }[] = [
  {
    title: "Work",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Skills", href: "/skills" },
      { label: "GitHub", href: "/github" },
    ],
  },
  {
    title: "Me",
    links: [
      { label: "About", href: "/about" },
      { label: "README", href: "/about-pranav" },
      { label: "Resume", href: "/resume" },
      { label: "Contact", href: "/contact" },
    ],
  },
  { title: "Play", links: PLAY_NAV },
];

export const SITE_ROUTES = [
  "",
  "/about",
  "/about-pranav",
  "/projects",
  "/skills",
  "/github",
  "/resume",
  "/contact",
  "/lets-fun",
  "/brain-mode",
] as const;
