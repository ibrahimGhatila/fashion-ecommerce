import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blue accent drawn from the logo — used sparingly.
        primary: {
          DEFAULT: "#1A6AC2",
          light: "#3E8AD8",
          dark: "#14559C",
        },
        // Near-white, whisper-cool neutrals
        cream: {
          DEFAULT: "#F3F4F5",
          light: "#FBFBFC",
          dark: "#E8EAEC",
        },
        // Deep navy-charcoal (echoes the logo's darks)
        ink: {
          DEFAULT: "#16202B",
          soft: "#3B4652",
        },
        muted: "#6B7280",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 18px 50px -20px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
