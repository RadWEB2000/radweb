import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "css/Global.scss";

const outfit = Outfit({
  display:"swap",
  preload:true,
  subsets:["latin-ext"],
  variable:"--regular",
  weight:["100","200","300","400","500","600","700","800","900"],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body 
        className={outfit.className}
      >
        {children}
      </body>
    </html>
  );
}
