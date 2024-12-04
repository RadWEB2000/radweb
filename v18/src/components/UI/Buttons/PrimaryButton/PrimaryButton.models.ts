import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type tPrimaryButton = {
  title: string;
  theme: tTheme;
} & (
  | {
      variant: "link";
      url: string;
      props?: AnchorHTMLAttributes<HTMLAnchorElement>;
    }
  | {
      variant: "button";
      props?: ButtonHTMLAttributes<HTMLButtonElement>;
    }
);
