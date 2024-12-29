import { tOverview } from "@/v-home/Overview/Overview.models";
import { tHero } from "@/v-home/Hero/Hero.models";
import { tAbout } from "@/v-home/About/About.models";
import business_img from "@/img/r-adamczyk-gray.webp";
import lake_img from "@/img/lake.webp";
import cove_img from "@/img/cove.webp";
import meadow_img from "@/img/meadow.webp";
import mountains_img from "@/img/mountains.webp";
import { tOffer } from "@/v-home/Offer/Offer.models";

type t_home = {
  hero: tHero;
  overview: tOverview;
  about: tAbout;
  offer: tOffer;
};

export const homePage: t_home = {
  hero: {
    title: "RadWEB",
    slogan: "Współczesny marketing online",
    buttons: [
      {
        title: "Blog",
        url: "/blog",
      },
      {
        title: "Oferta",
        url: "/oferta",
      },
      {
        title: "Kontakt",
        url: "/oferta",
      },
    ],
    media: {
      type: "video",
      src: "https://videos.pexels.com/video-files/1741279/1741279-hd_1920_1080_30fps.mp4",
      props: {
        autoPlay: true,
        loop: true,
        muted: true,
      },
    },
  },
  overview: {
    content: `An independent web design and branding agency in Manchester set up in 2010 who care, build relationships, have industry experience, and win awards.`,
    title: "Who are we?",
  },
  about: {
    button: {
      title: "Poznaj mnie",
      url: "/o-mnie",
    },
    content: `Pozycjonowanie stron i sklepów internetowych to maraton, a nie sprint wymagający doświadczonego specjalisty SEO, który na podstawie danych i analiz jest w stanie wnieść wartość do pozycjonowanej strony oraz skutecznie podnieść ruch organiczny. Właśnie tak podchodzę do każdego nowego projektu, w który wchodzę. Pozycjonowaniem zajmuję się od ponad 10 lat!<br/><br/> Mam za sobą wiele sukcesywnie zakończonych projektów, które pod dziś dzień osiągają świetne rezultaty SEO. Jako specjalista SEO pozycjonowaniem zajmuję się nie tylko na rynku polskim ale również w Czechach, Słowacji, Węgrzech, Niemczech czy w Stanach Zjednoczonych.`,
    image: {
      altText:
        "Specjalista SEO/SEO - Twórca stron internetowych - Radosław Adamczyk",
      sourceSrc: business_img.src,
      title:
        "Specjalista SEO/SEO - Twórca stron internetowych - Radosław Adamczyk",
    },
    title: "Kim jestem?",
  },
  offer: {
    button: {
      title: "Pełna oferta",
      url: "/oferta",
    },
    content: `raft CMS vs. Wordpress? Silly question, it’s always going to be Craft CMS. At MadeByShape, we exclusively use Craft CMS because we believe in delivering high-quality, future-proof, sustainable websites. And there’s no CMS that does it better than Craft CMS. Craft empowers us to build custom solutions without the headaches of WordPress, and our clients love how easy it is to manage their content.`,
    title: "Usługi SEO i stron internetowych",
    cards: [
      {
        button: {
          title: "Sprawdź",
          url: "/oferta/seo",
        },
        content: `Additionally, a knowledge base article has been created to guide WordPress developers in understanding Craft’s ecosystem. From using the WordPress starter project to navigating core Craft CMS concepts, these resources ensure a smoother transition. <br/>wp-import, a new command-line interface (CLI) tool for Craft CMS, addresses these challenges head-on. Designed to analyse and replicate WordPress content schemas, it enables seamless migration of users, posts, pages, categories, tags, media, and custom taxonomies. Here’s what makes it stand out`,
        title: "SEO - Wyższa pozycja, większa widoczność, lepsze wyniki",
        image: {
          altText: "Widok na zatokę z wysokiego klifu nad błękitnym morzem",
          sourceSrc: cove_img.src,
          title: "Widok na zatokę z wysokiego klifu nad błękitnym morzem",
        },
        subservices: [
          {
            title: "Pozycjonowanie lokalne",
            url: "/oferta/seo/lokalne",
          },
          {
            title: "Audyty SEO",
            url: "/oferta/seo/audyty",
          },
          {
            title: "Tworzenie treści",
            url: "/oferta/seo/copywriting",
          },
          {
            title: "Link building",
            url: "/oferta/seo/link-building",
          },
          {
            title: "E-commerce",
            url: "/oferta/seo/e-commerce",
          },
          {
            title: "SEO techniczne",
            url: "/oferta/seo/optymalizacja-techniczna",
          },
        ],
      },
      {
        button: {
          title: "Sprawdź",
          url: "/oferta/strony-internetowe",
        },
        content: `Additionally, a knowledge base article has been created to guide WordPress developers in understanding Craft’s ecosystem. From using the WordPress starter project to navigating core Craft CMS concepts, these resources ensure a smoother transition. <br/>wp-import, a new command-line interface (CLI) tool for Craft CMS, addresses these challenges head-on. Designed to analyse and replicate WordPress content schemas, it enables seamless migration of users, posts, pages, categories, tags, media, and custom taxonomies. Here’s what makes it stand out`,
        title: "Nowoczesne strony internetowe - prostota i funkcjonalność",
        image: {
          altText: "Górskie jezioro otoczone lasami i szczytami w tle",
          sourceSrc: lake_img.src,
          title: "Górskie jezioro otoczone lasami i szczytami w tle",
        },
        subservices: [
          {
            title: "Projektowanie stron",
            url: "/oferta/strony-internetowe/projetkowanie",
          },
          {
            title: "Strony wizytówki",
            url: "/oferta/strony-internetowe/wizytówki",
          },
          {
            title: "Sklepy internetowe",
            url: "/oferta/strony-internetowe/e-commerce",
          },
          {
            title: "Strony one-page",
            url: "/oferta/strony-internetowe/one-apage",
          },
          {
            title: "Blogi",
            url: "/oferta/strony-internetowe/blogi",
          },
          {
            title: "Portfolio",
            url: "/oferta/strony-internetowe/portfolio",
          },
        ],
      },
      {
        button: {
          title: "Sprawdź",
          url: "/oferta/web-care",
        },
        content: `Additionally, a knowledge base article has been created to guide WordPress developers in understanding Craft’s ecosystem. From using the WordPress starter project to navigating core Craft CMS concepts, these resources ensure a smoother transition. <br/>wp-import, a new command-line interface (CLI) tool for Craft CMS, addresses these challenges head-on. Designed to analyse and replicate WordPress content schemas, it enables seamless migration of users, posts, pages, categories, tags, media, and custom taxonomies. Here’s what makes it stand out`,
        title: "Web Care - Aktualizacje, bezpieczeństwo rozwój",
        image: {
          altText: "Malownicza łąka o zachodzie słońca z widokiem na drzewa",
          sourceSrc: meadow_img.src,
          title: "Malownicza łąka o zachodzie słońca z widokiem na drzewa",
        },
        subservices: [
          {
            title: "Aktualizacje CMS",
            url: "/oferta/web-care/aktualizacje/cms",
          },
          {
            title: "Aktualizacje wtyczek i motywów",
            url: "/oferta/web-care/aktualizacje/wtyczki-i-motywy",
          },
          {
            title: "Certyfikaty SSL",
            url: "/oferta/web-care/certyfikaty-ssl",
          },
          {
            title: "Hosting",
            url: "/oferta/web-care/hosting",
          },
          {
            title: "Migracja stron",
            url: "/oferta/web-care/migracja",
          },
          {
            title: "Kopie zapasowe",
            url: "/oferta/web-care/backupy",
          },
        ],
      },
      {
        button: {
          title: "Sprawdź",
          url: "/oferta/ppc",
        },
        content: `Additionally, a knowledge base article has been created to guide WordPress developers in understanding Craft’s ecosystem. From using the WordPress starter project to navigating core Craft CMS concepts, these resources ensure a smoother transition. <br/>wp-import, a new command-line interface (CLI) tool for Craft CMS, addresses these challenges head-on. Designed to analyse and replicate WordPress content schemas, it enables seamless migration of users, posts, pages, categories, tags, media, and custom taxonomies. Here’s what makes it stand out`,
        title: "PPC - Zwiększ ruch, zmaksymalizuj zyski",
        image: {
          altText: "Górskie jezioro otoczone lasami i szczytami w tle",
          sourceSrc: mountains_img.src,
          title: "Górskie jezioro otoczone lasami i szczytami w tle",
        },
        subservices: [
          {
            title: "Optymalizacja kampanii",
            url: "/oferta/ppc/optymalizacja kampanii",
          },
          {
            title: "Strategie słów kluczowych",
            url: "/oferta/ppc/strategie-slow-kluczowych",
          },
          {
            title: "Audyt kampanii",
            url: "/oferta/ppc/audyt",
          },
          {
            title: "Rozszerzenia reklam",
            url: "/oferta/ppc/rozszerzenia-reklam",
          },
          {
            title: "Segmentowanie reklam",
            url: "/oferta/ppc/segmentowanie-reklam",
          },
          {
            title: "Strategie stawek",
            url: "/oferta/ppc/bidding",
          },
        ],
      },
    ],
  },
};
