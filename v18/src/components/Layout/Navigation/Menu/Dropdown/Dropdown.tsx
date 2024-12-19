"use client";
import css from "@/nav/Menu/Dropdown/Dropdown.module.scss";
import { tDropdown } from "@/nav/Menu/Dropdown/Dropdown.models";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MenuItem } from "@/nav/index";

export default function Dropdown(props: tDropdown) {
  const [isExpand, toggleExpand] = useState<boolean>(false);

  return (
    <li className={css.wrapper} onMouseLeave={() => toggleExpand(false)}>
      <MenuItem
        isDropdown
        isSubmenu={false}
        title={props.link.title}
        url={props.link.url}
        actions={{
          onClick: () => toggleExpand(!isExpand),
        }}
      />
      {isExpand && (
        <AnimatePresence>
          <motion.ul
            className={css.submenu}
            initial={{
              opacity: 0,
              visibility: "hidden",
            }}
            animate={{
              opacity: 1,
              visibility: "visible",
            }}
            exit={{
              opacity: 0,
              visibility: "hidden",
            }}
          >
            {props.menu.map((item) => {
              return (
                <MenuItem
                  isDropdown={false}
                  isSubmenu
                  key={item.title}
                  title={item.title}
                  url={item.url}
                  props={{
                    onClick: () => toggleExpand(false),
                  }}
                />
              );
            })}
          </motion.ul>
        </AnimatePresence>
      )}
    </li>
  );
}
