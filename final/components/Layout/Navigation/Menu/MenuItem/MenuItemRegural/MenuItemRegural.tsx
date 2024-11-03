import {tMenuItemRegural} from "nav/Menu/MenuItem/MenuItemRegural/MenuItemRegural.models"
import css from "nav/Menu/MenuItem/MenuItemRegural/MenuItemRegural.module.scss"
import Link from "next/link"

export default function MenuItemRegural(props:tMenuItemRegural){
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