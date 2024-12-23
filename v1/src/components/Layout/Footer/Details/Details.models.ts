import { AnchorHTMLAttributes } from "react";

export type tDetails = {
  brand: string;
  identificationData?: {
    title: string;
    content: string;
  }[];
  contact?: {
    attributes?: AnchorHTMLAttributes<HTMLAnchorElement>;
    type: "e-mail" | "telephone";
    title: string;
    content: string;
    url: string;
  }[];
};
