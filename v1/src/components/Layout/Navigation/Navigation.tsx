"use client";
import css from "@/nav/Navigation.module.scss";
import { tNavigation } from "@/nav/Navigation.models";
import {
  Brand,
  Languages,
  Menu,
  MenuButton,
  Search,
  Settings,
} from "@/nav/index";
import { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";

export default function Navigation(props: tNavigation) {
  const { isOpen: status } = useContext(MenuContext);

  console.log(status);
  return (
    <nav className={css.wrapper} data-expand={status}>
      <div className={css.container} data-expand={status}>
        <Brand {...props.brand} />
        <Menu menu={props.menu} />
      </div>
      <Settings>
        <Search {...props.search} />
        <Languages languages={props.languages} />
        <MenuButton label={props.menuButton} />
      </Settings>
    </nav>
  );
}
