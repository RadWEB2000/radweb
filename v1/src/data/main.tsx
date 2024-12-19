import logo_light from "@/img/radweb-short-light.png";
import { tNavigation } from "@/nav/Navigation.models";
import {
  FlagFrench as French,
  FlagGermany as Germany,
  FlagPoland as Poland,
  FlagUSA as Usa,
} from "@/ico/index";

interface main_structure {
  nav: tNavigation;
}

export const main: main_structure = {
  nav: {
    brand: {
      title: "RadWEB - Specjalista SEO i  twórca stron internetowych",
      url: "/",
      logo: {
        altText: "RadWEB - Logo",
        sourceSrc: logo_light.src,
        title: "RadWEB - Specjalista SEO i  twórca stron internetowych",
      },
      props: {
        hrefLang: "pl",
      },
    },
    menu: [
      {
        title: "Start",
        url: "/",
        props: {
          hrefLang: "pl",
        },
      },
      {
        title: "O mnie",
        url: "/o-mnie",
        props: {
          hrefLang: "pl",
        },
      },
      {
        title: "Oferta",
        url: "/oferta",
        props: {
          hrefLang: "pl",
        },
        submenu: [
          {
            title: "SEO",
            url: "/oferta/seo",
            props: {
              hrefLang: "pl",
            },
          },
          {
            title: "Strony internetowe",
            url: "/oferta/strony-internetowe",
            props: {
              hrefLang: "pl",
            },
          },
          {
            title: "Web Care",
            url: "/oferta/web-care",
            props: {
              hrefLang: "pl",
            },
          },
          {
            title: "Content marketing",
            url: "/oferta/content-marketing",
            props: {
              hrefLang: "pl",
            },
          },
          {
            title: "Znajdź RadWEB",
            url: "/oferta/miasta",
            props: {
              hrefLang: "pl",
            },
          },
        ],
      },
      {
        title: "Blog",
        url: "/blog",
        props: {
          hrefLang: "pl",
        },
      },
      {
        title: "Słownik",
        url: "/slownik",
        props: {
          hrefLang: "pl",
        },
      },
      {
        title: "Projekty",
        url: "/projekty",
        props: {
          hrefLang: "pl",
        },
      },
      {
        title: "Case study",
        url: "/case-study",
        props: {
          hrefLang: "pl",
        },
      },
      {
        title: "Kontakt",
        url: "/kontakt",
        props: {
          hrefLang: "pl",
        },
      },
    ],
    languages: [
      {
        flag: <Poland />,
        hrefLang: "pl",
        id: 1,
        title: "Język polski",
        url: "/",
      },
      {
        flag: <Usa />,
        hrefLang: "en",
        id: 2,
        title: "Język angielski",
        url: "/",
      },
      {
        flag: <Germany />,
        hrefLang: "de",
        id: 3,
        title: "Język niemiecki",
        url: "/",
      },
      {
        flag: <French />,
        hrefLang: "fr",
        id: 4,
        title: "Język francuzki",
        url: "/",
      },
    ],
    search: {
      label: "Szukaj",
      placeholder: "Wpisz tutaj",
    },
    menuButton: `Przycisk rozwijający menu`,
  },
};
