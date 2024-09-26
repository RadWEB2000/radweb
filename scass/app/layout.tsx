
import type { Metadata } from "next";
import {Nunito_Sans, Oswald, Roboto_Mono} from "next/font/google"
import "css/Global.scss";
import { MainProvider } from "context/MainContext";

const nuntio = Nunito_Sans({
  subsets:["latin-ext"],
  variable:"--nuntio"
})

const oswald = Oswald({
  subsets:["latin-ext"],
  variable:"--oswald"
})

const roboto = Roboto_Mono({
    subsets:["latin-ext"],
    variable:"--roboto"
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
      <MainProvider>
        <body 
          className={`${nuntio.variable} ${oswald.variable} ${roboto.variable}`}
        >
          {children}
        </body>
      </MainProvider>
    </html>
  );
}