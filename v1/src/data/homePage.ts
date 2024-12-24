import { tHero } from "@/v-home/Hero/Hero.models";
type t_home = {
  hero: tHero;
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
      src: "https://videos.pexels.com/video-files/3197580/3197580-hd_1920_1080_25fps.mp4",
      props: {
        autoPlay: true,
        loop: true,
        muted: true,
      },
    },
  },
};
