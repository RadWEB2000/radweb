import { ButtonHTMLAttributes } from "react";

export type tMenuItem = tLink & {
  isDropdown: boolean;
  isSubmenu: boolean;
  actions?: ButtonHTMLAttributes<HTMLButtonElement>;
};
