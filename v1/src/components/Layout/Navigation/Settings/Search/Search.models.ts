import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export type tSearch = {
  label: string;
  placeholder: string;
  field?: InputHTMLAttributes<HTMLInputElement>;
  button?: ButtonHTMLAttributes<HTMLButtonElement>;
};
