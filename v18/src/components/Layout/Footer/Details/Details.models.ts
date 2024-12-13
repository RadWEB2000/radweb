import { AnchorHTMLAttributes } from "react";

export type tDetails = {
  brand: string;
  nip?: string;
  regon?: string;
  address: {
    location: string;
    zipCode: string;
  };
  contact: {
    variant: "phone" | "e-mail";
    url: string;
    title: string;
    label: string;
    props?: AnchorHTMLAttributes<HTMLAnchorElement>;
  }[];
};
