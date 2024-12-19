import { JSX } from "react";

export type tLanguage = {
  flag: JSX.Element;
  id: number;
};

export type tLanguages = {
  languages: Array<
    tLanguage & {
      url: string;
      title: string;
      hrefLang: string;
    }
  >;
};
