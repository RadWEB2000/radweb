import type { Metadata } from "next";
import { anton, inter } from "@/data/fonts";
import "@/css/global.scss";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${anton.variable} ${inter.variable}`} suppressHydrationWarning={false}>{children}</body>
    </html>
  );
}
