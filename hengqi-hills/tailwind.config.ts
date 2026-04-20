import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      aspectRatio: {
        "3/4": "3 / 4",
        "21/9": "21 / 9"
      },
      colors: {
        background: "#000000",
        surface: "#1d1d1f",
        primary: "#2997FF",
        text: {
          primary: "#FFFFFF",
          secondary: "rgba(255,255,255,0.8)",
          tertiary: "rgba(255,255,255,0.5)"
        },
        border: "rgba(255,255,255,0.1)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "PingFang SC", "Microsoft YaHei", "sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config;
