"use client";
import css from "@/nav/Menu/Dropdown/Dropdown.module.scss";
import { MenuItem } from "@/nav/index";
import { useContext, useState } from "react";
import { tDropdown } from "@/nav/Menu/Dropdown/Dropdown.models";
import { MenuContext } from "@/context/MenuContext";

export default function Dropdown(props: tDropdown) {
  const { close } = useContext(MenuContext);
  const [isExpand, toggleExpand] = useState<boolean>(false);

  const exitMainItem = () => {
    close();
    toggleExpand(false);
  };

  return (
    <li className={css.wrapper} onMouseLeave={() => toggleExpand(false)}>
      <MenuItem
        {...props.link}
        isDropdown
        props={{
          onClick: close,
        }}
        button={{
          onClick: () => toggleExpand(!isExpand),
        }}
      />
      {isExpand && (
        <ul className={css.submenu}>
          {props.submenu.map((item) => {
            return (
              <MenuItem
                key={item.title}
                isSubmenu
                {...item}
                props={{
                  onClick: () => exitMainItem(),
                }}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
}
