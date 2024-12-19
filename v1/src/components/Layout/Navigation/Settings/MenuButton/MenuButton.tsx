"use client";

import css from "@/nav/Settings/MenuButton/MenuButton.module.scss";
import { tMenuButton } from "@/nav/Settings/MenuButton/MenuButton.models";
import { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";

export default function MenuButton(props: tMenuButton) {
  const { isOpen, toggle } = useContext(MenuContext);

  return (
    <button
      aria-label={props.label}
      className={css.wrapper}
      data-active={isOpen}
      onClick={toggle}
      type="button"
      {...props.attributes}
    >
      <span className={css.line} />
      <span className={css.line} />
      <span className={css.line} />
    </button>
  );
}
