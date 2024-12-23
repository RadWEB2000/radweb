import logo_light from "@/img/radweb-short-light.png";
import { tNavigation } from "@/nav/Navigation.models";
import {
  FlagFrench as French,
  FlagGermany as Germany,
  FlagPoland as Poland,
  FlagUSA as Usa,
} from "@/ico/index";
import { tFooter } from "@/footer/Footer.models";

interface main_structure {
  nav: tNavigation;
  footer: tFooter;
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
  footer: {
    author: "RadWEB",
    details: {
      brand: "RadWEB",
      contact: [
        {
          content: "r.adamczyk@radweb.pl",
          title: "📧 Napisz do mnie: radoslaw.adamczyk2000@gmail.com",
          type: "e-mail",
          url: "mailto:radoslaw.adamczyk2000@gmail.com",
        },
        {
          content: "+48 794-100-413",
          title: "☎️ Zadzwoń do mnie: +48 794-100-413",
          type: "telephone",
          url: "tel:+48794100413",
        },
      ],
    },
    menus: [
      {
        title: "Na skróty",
        menu: [
          {
            title: "Start",
            url: "/",
          },
          {
            title: "O mnie",
            url: "/o-mnie",
          },
          {
            title: "Blog",
            url: "/blog",
          },
          {
            title: "Projekty i realizacje",
            url: "/projekty",
          },
          {
            title: "Słownik",
            url: "/slownik",
          },
          {
            title: "Case study",
            url: "/case-study",
          },
          {
            title: "Kontakt",
            url: "/kontakt",
          },
          {
            title: "Oferta",
            url: "/oferta",
          },
        ],
      },
      {
        title: "Oferta SEO",
        menu: [
          {
            title: "Pozycjonowanie stron",
            url: "/oferta/seo",
          },
          {
            title: "Pozycjonowanie e-commerce",
            url: "/oferta/seo/e-commerce",
          },
          {
            title: "Audyty SEO",
            url: "/oferta/seo/audyty",
          },
          {
            title: "Wizytówki Google",
            url: "/oferta/seo/wizytowki-google",
          },
          {
            title: "Migracja stron",
            url: "/oferta/seo/migracja-stron",
          },
          {
            title: "Pozycjonowanie lokalne",
            url: "/oferta/seo/lokalne",
          },
          {
            title: "Strategia SEO",
            url: "/oferta/seo/strategia",
          },
          {
            title: "SEO Copywriting",
            url: "/oferta/seo/copywriting",
          },
          {
            title: "SEO techniczne",
            url: "/oferta/seo/techniczne",
          },
          {
            title: "Pozycjonowanie zagraniczne",
            url: "/oferta/seo/techniczne",
          },
          {
            title: "Konsultacje",
            url: "/oferta/seo/konsultacje",
          },
        ],
      },
      {
        title: "Oferta WWW",
        menu: [
          {
            title: "Strony internetowe",
            url: "/oferta/strony-internetowe",
          },
          {
            title: "Sklepy internetowe",
            url: "/oferta/strony-internetowe/e-commerce",
          },
          {
            title: "Landing page",
            url: "/oferta/strony-internetowe/landing-page",
          },
          {
            title: "Szablony stron",
            url: "/oferta/strony-internetowe/szablony-stron",
          },
          {
            title: "Hosting",
            url: "/oferta/strony-internetowe/hosting",
          },
          {
            title: "Certyfikaty SSL",
            url: "/oferta/strony-internetowe/certyfikaty-ssl",
          },
          {
            title: "Aktualizacje stron",
            url: "/oferta/strony-internetowe/aktualizacje",
          },
          {
            title: "Modernizacja stron",
            url: "/oferta/strony-internetowe/modernizacja",
          },
          {
            title: "Integracje API",
            url: "/oferta/strony-internetowe/integracje-api",
          },
          {
            title: "Aplikacje webowe",
            url: "/oferta/strony-internetowe/aplikacje-webowe",
          },
          {
            title: "Konsultacje",
            url: "/oferta/strony-internetowe/konsultacje",
          },
        ],
      },
      {
        title: "",
        menu: [
          {
            title: "",
            url: "/",
          },
        ],
      },
    ],
    policies: [
      {
        title: "Polityka prywatności",
        url: "/polityka-prywatnosci",
      },
      {
        title: "Polityka Cookies",
        url: "/polityka-cookies",
      },
      {
        title: "Regulamin",
        url: "/regulamin",
      },
    ],
    socials: [
      "https://www.facebook.com/radoslaw.adamczyk.2000",
      "https://www.youtube.com/@radweb-programowanieiseo2410",
      "https://www.instagram.com/radoslaw.adamczyk.2000/",
      "https://github.com/RadWEB2000",
      "https://www.linkedin.com/in/rados%C5%82aw-adamczyk-853948195/",
      "https://x.com/rAdaCreative",
    ],
  },
};
