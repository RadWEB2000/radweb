import { tOverview } from "@/v-home/Overview/Overview.models";
import { tHero } from "@/v-home/Hero/Hero.models";
import { tAbout } from "@/v-home/About/About.models";
import business_img from "@/img/r-adamczyk-gray.webp";

type t_home = {
  hero: tHero;
  overview: tOverview;
  about: tAbout;
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
      src: "https://videos.pexels.com/video-files/3196685/3196685-hd_1920_1080_25fps.mp4",
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
};
