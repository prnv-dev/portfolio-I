import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: { DEFAULT: "var(--surface)", 2: "var(--surface-2)", 3: "var(--surface-3)" },
        line: { DEFAULT: "var(--line)", strong: "var(--line-strong)" },
        fg: { DEFAULT: "var(--fg)", muted: "var(--fg-muted)", faint: "var(--fg-faint)" },
        blue: { accent: "var(--blue)" },
        cyan: { accent: "var(--cyan)" },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        shell: "1200px",
      },
      spacing: {
        nav: "var(--nav-h)",
      },
    },
  },
  plugins: [],
};

export default config;
