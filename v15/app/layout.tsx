import type { Metadata } from "next";
import { Antonio, Mukta, Martian_Mono, Ubuntu} from "next/font/google"
import "css/Global.scss"
import {Footer} from "footer/index";
import { main } from "data/main";
import { Navigation } from "nav/index";
import { MainProvider } from "context/MainContext";

const antonio = Antonio({
  subsets:["latin-ext"],
  variable:"--antonio"
})

const mukta = Mukta({
  weight:["300","400","500", "600","700"],
  subsets:["latin-ext","latin"],
  variable:"--mukta"
})

const martian = Martian_Mono({
  subsets:["latin-ext"],
  variable:"--martian"
})

const ubuntu = Ubuntu({
  subsets:["latin-ext"],
  weight:["300", "400","500","700"],
  variable:"--ubuntu"
})


export const metadata: Metadata = {
  title: "RadWEB - Layout",
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
          className={` ${antonio.variable} ${mukta.variable} ${martian.variable} ${ubuntu.variable}`}
        >
          <Navigation
            {...main.nav}
          />
          {children}
          <Footer
            {...main.footer}
          />
        </body>
      </MainProvider>
    </html>
  );
}
