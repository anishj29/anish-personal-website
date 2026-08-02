import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        border: "var(--border)",
        "bg-elevated": "var(--bg-elevated)",
        "hero-bg": "var(--hero-bg)",
        "hero-ink": "var(--hero-ink)",
        "hero-muted": "var(--hero-muted)",
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-newsreader)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
