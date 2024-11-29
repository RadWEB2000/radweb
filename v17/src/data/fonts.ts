import { Anton, Inter } from "next/font/google";

export const anton = Anton({
  adjustFontFallback: true,
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  preload: false,
  subsets: ["latin", "latin-ext"],
  variable: "--anton",
  weight: ["400"],
});

export const inter = Inter({
  adjustFontFallback: true,
  display: "swap",
  fallback: ["Arial", "Verdana", "Ubuntu", "sans-serif"],
  preload: true,
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--inter",
});
