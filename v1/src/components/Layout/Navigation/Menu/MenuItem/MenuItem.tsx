import { ArrowDown } from "@/ico/index";
import css from "@/nav/Menu/MenuItem/MenuItem.module.scss";
import Link from "next/link";
import { tMenuItem } from "@/nav/Menu/MenuItem/MenuItem.models";

export default function MenuItem(props: tMenuItem) {
  return (
    <li className={css.wrapper}>
      <Link
        className={css.link}
        data-submenu={props.isSubmenu}
        href={props.url}
        {...props.props}
      >
        {props.title}
      </Link>
      {props.isDropdown && (
        <button className={css.button} {...props.button}>
          <ArrowDown className={css.icon} />
        </button>
      )}
    </li>
  );
}
