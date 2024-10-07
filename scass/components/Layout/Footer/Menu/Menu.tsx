import css from "footer/Menu/Menu.module.scss";
import {tMenu} from "footer/Menu/Menu.models"
import Link from "next/link";

export default function Menu(props:tMenu){
    return (
        <menu
            className={css.wrapper}
        >
            {
                props.menu.map((item) => {
                    return (
                        <li
                        className={css.column}
                            key={item.title}
                        >
                            <h4
                                className={css.title}
                                dangerouslySetInnerHTML={{__html:item.title}}
                            />
                            <ul
                                className={css.menu}
                            >
                                {
                                    item.submenu.map((item) => {
                                        return (
                                            <Link
                                                className={css.menu__item}
                                                href={item.url}
                                                key={item.title}
                                            >
                                                {item.title}
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    )
                })
            }
        </menu>
    )
}