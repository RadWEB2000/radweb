import css from "@/nav/Menu/MenuItem/MenuItem.module.scss";
import Link from "next/link";
import { tMenuItem } from "@/nav/Menu/MenuItem/MenuItem.models";
import { MenuArrowIcon } from "@/data/icons";

export default function MenuItem(props: tMenuItem) {
  return (
    <li className={css.wrapper}>
      <Link
        className={css.label}
        href={props.url}
        data-submenu={props.isSubmenu}
        role="menuitem"
        {...props.props}
      >
        {props.title}
      </Link>
      {props.isDropdown && (
        <button className={css.icon} {...props.actions}>
          <MenuArrowIcon />
        </button>
      )}
    </li>
  );
}
