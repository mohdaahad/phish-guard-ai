import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-blue": "#0197FF",
      },
      fontFamily: {
        satoshi: ["var(--font-jakarta)", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
        "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
        playwrite: ["var(--font-playwrite)", "sans-serif"],
        meowscript: ["var(--font-meowscript)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

