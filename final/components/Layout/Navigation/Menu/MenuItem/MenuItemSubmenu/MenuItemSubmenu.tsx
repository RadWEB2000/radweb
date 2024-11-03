import {tMenuItemSubmenu} from "nav/Menu/MenuItem/MenuItemSubmenu/MenuItemSubmenu.models"
import css from "nav/Menu/MenuItem/MenuItemSubmenu/MenuItemSubmenu.module.scss"
import Link from "next/link"

export default function MenuItemSubmenu(props:tMenuItemSubmenu){
    return (
        <li
            className={css.wrapper}
        >
            <Link
                href={props.url}
            >
                {props.title}
            </Link>
        </li>
    )
}