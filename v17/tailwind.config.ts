import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "rgba(var(--black), <alpha-value>)",
        gray: "rgba(var(--gray), <alpha-value>)",
        jet: "rgba(var(--jet), <alpha-value>)",
        orange: "rgba(var(--orange), <alpha-value>)",
        platinum: "rgba(var(--platinum), <alpha-value>)",
        tangerine: "rgba(var(--tangerine), <alpha-value>)",
        white: "rgba(var(--white), <alpha-value>)",
      },
      fontFamily: {
        anton: "var(--anton)",
        inter: "var(--inter)",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
