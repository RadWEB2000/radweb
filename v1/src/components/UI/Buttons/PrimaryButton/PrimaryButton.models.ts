import { ButtonHTMLAttributes } from "react";

export type tPrimaryButton = (
  | ({
      mode: "link";
    } & tLink)
  | {
      mode: "button";
      title: string;
      props?: ButtonHTMLAttributes<HTMLButtonElement>;
    }
) & {
  theme: tTheme | "white" | "black";
};
