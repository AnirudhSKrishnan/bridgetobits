import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#E0AF68",
          600: "#CA9B5D",
          700: "#B2874F"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(224,175,104,0.35), 0 0 30px rgba(224,175,104,0.10)",
        card: "0 8px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.03)"
      }
    }
  },
  plugins: []
} satisfies Config;
