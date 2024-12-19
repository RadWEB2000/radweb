"use client";
import css from "@/nav/Menu/Menu.module.scss";
import { tMenu } from "@/nav/Menu/Menu.models";
import { Dropdown, MenuItem } from "@/nav/index";
import { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";
export default function Menu(props: tMenu) {
  const { close } = useContext(MenuContext);

  return (
    <menu className={css.wrapper}>
      {props.menu.map((item) => {
        if (item.submenu) {
          return (
            <Dropdown
              key={item.title}
              link={{ ...item }}
              submenu={item.submenu}
            />
          );
        } else {
          return (
            <MenuItem
              {...item}
              key={item.title}
              props={{
                onClick: close,
              }}
            />
          );
        }
      })}
    </menu>
  );
}
