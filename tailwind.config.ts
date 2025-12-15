import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: "#0E0E0E",
        surface: "#121212",
        "prism-yellow": "#F3E68F",
        "neon-pink": "#EFA9B6",
        "prism-cyan": "#4AF2EA",
        zinc400: "#A1A1AA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(243, 230, 143, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
