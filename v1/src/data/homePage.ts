import { tOverview } from "@/v-home/Overview/Overview.models";
import { tHero } from "@/v-home/Hero/Hero.models";
type t_home = {
  hero: tHero;
  overview: tOverview;
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
};
