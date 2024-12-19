import localFont from "next/font/local";

const TungstenBold = localFont({
  src: [
    { weight: "300", path: "./tungsten-bold.woff2", style: "normal" },
    { weight: "400", path: "./tungsten-bold.woff2", style: "normal" },
    { weight: "500", path: "./tungsten-bold.woff2", style: "normal" },
    { weight: "600", path: "./tungsten-bold.woff2", style: "normal" },
    { weight: "700", path: "./tungsten-bold.woff2", style: "normal" },
    { weight: "800", path: "./tungsten-bold.woff2", style: "normal" },
    { weight: "900", path: "./tungsten-bold.woff2", style: "normal" },
  ],
  variable: "--tungsten-bold",
  display: "swap",
  preload: true,
});

export { TungstenBold };
