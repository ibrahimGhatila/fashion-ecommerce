import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Restrained brass accent — used sparingly so the batik prints lead.
        primary: {
          DEFAULT: "#9C7A45",
          light: "#B79860",
          dark: "#7E6236",
        },
        // Warm bone / ivory
        cream: {
          DEFAULT: "#F1ECE1",
          light: "#F8F4EC",
          dark: "#E6DDCC",
        },
        // Warm near-black
        ink: {
          DEFAULT: "#1B1815",
          soft: "#413B34",
        },
        muted: "#6F675C",
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
