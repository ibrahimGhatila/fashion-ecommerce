import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E86642",
          light: "#EE7B57",
          dark: "#D8542F",
        },
        cream: {
          DEFAULT: "#F6F1EA",
          light: "#FAF7F1",
          dark: "#EFE8DD",
        },
        ink: {
          DEFAULT: "#1C1B19",
          soft: "#3A3A38",
        },
        muted: "#6E6C68",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
