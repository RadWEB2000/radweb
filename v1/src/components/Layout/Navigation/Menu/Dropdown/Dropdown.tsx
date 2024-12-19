"use client";
import { MenuItem } from "@/nav/index";
import { useState } from "react";
import { tDropdown } from "@/nav/Menu/Dropdown/Dropdown.models";

export default function Dropdown(props: tDropdown) {
  const [isExpand, toggleExpand] = useState<boolean>(true);

  return (
    <li>
      <MenuItem {...props.link} isDropdown />
      {isExpand && (
        <ul>
          {props.submenu.map((item) => {
            return <MenuItem key={item.title} isSubmenu {...item} />;
          })}
        </ul>
      )}
    </li>
  );
}
