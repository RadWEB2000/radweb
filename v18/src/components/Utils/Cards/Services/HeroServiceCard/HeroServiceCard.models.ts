import { AnchorHTMLAttributes } from "react";

export type tHeroServiceCard = {
  button: {
    url: string;
    props?: AnchorHTMLAttributes<HTMLAnchorElement>;
  };
  image: tImage;
  title: string;
  excerpt: string;
};

export type tHeroServiceCards = {
  cards: tHeroServiceCard[];
  className?: string;
};
