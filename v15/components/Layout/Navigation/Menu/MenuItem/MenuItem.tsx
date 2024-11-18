import css from "nav/Menu/MenuItem/MenuItem.module.scss";
import Link from "next/link";
import {tMenuItem} from "nav/Menu/MenuItem/MenuItem.models"


export default function MenuItem(props:tMenuItem){
    return (
        <Link
            className={css.wrapper}
            href={props.url}
            data-theme={props.theme}
            {...props.props}
        >
            {props.title}
        </Link>
    )
}