import { AnchorHTMLAttributes } from "react";

export type tHeroBlogCard = {
  title: string;
  release: string;
  button: {
    url: string;
    props?: AnchorHTMLAttributes<HTMLAnchorElement>;
  };
};

export type tHeroBlogCards = {
  className?: string;
  cards: tHeroBlogCard[];
};
