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
                            key={item.title}
                        >
                            <h4
                                dangerouslySetInnerHTML={{__html:item.title}}
                            />
                            <ul>
                                {
                                    item.submenu.map((item) => {
                                        return (
                                            <Link
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