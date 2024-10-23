import type { Metadata } from "next";
import {Mukta, Protest_Strike ,Source_Code_Pro} from "next/font/google";
import "../styles/Global.scss";

const mukta = Mukta({ // REGURAL
  subsets:["latin-ext"],
  variable:"--mukta",
  weight:["200","300","400","500","600","700","800"]  
})

const protest = Protest_Strike({ // BOLD
  weight:["400"],
  subsets:["latin-ext"],
  variable:"--protest"
})

const source = Source_Code_Pro({ // CODE
  weight:["200","300","400","500","600","700","800"],
  subsets:["latin-ext"],
  variable:"--source"
})

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
      <body className={`${mukta.variable} ${protest.variable} ${source.variable}`}>
        {children}
      </body>
    </html>
  );
}