import { AnchorHTMLAttributes } from "react";

export type tHeroServiceCard = {
  cards: {
    button: {
      url: string;
      props?: AnchorHTMLAttributes<HTMLAnchorElement>;
    };
    image: tImage;
    title: string;
    excerpt: string;
  }[];
  className?:string;
};
