

import css from "nav/Menu/MenuItem/MenuItem.module.scss"
import Link from "next/link";
import {tMenuItem} from "nav/Menu/MenuItem/MenuItem.models";


export default function MenuItem(props:tMenuItem){
    return (
        <li>
            <Link
                className={css.wrapper}
                href={props.url}
            >
                {props.title}
            </Link>
        </li>
    )
}