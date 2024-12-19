"use client";
import { LayoutContext } from "@/context/LayoutContext";
import css from "@/nav/Settings/MenuButton/MenuButton.module.scss";
import { useContext } from "react";

export default function MenuButton() {
  const {
    menu: { status, toggle },
  } = useContext(LayoutContext);

  return (
    <button className={css.wrapper} data-open={status} onClick={toggle}>
      <span className={css.line} />
      <span className={css.line} />
      <span className={css.line} />
    </button>
  );
}
