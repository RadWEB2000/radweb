import css from "footer/Menu/Menu.module.scss";
import {tMenu} from "footer/Menu/Menu.models";
import Link from "next/link";

export default function Menu(props:tMenu){
    return (
        <menu
            className={css.wrapper}
            data-size={props.size}
        >
            {
                props.title &&
                <h4
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
            }
            {
                props.menu &&
                <ul
                    className={css.menu}
                >
                    {
                        props.menu.map((item) => {
                            return (
                                <li
                                    className={css.item}
                                    key={item.title}
                                >
                                    <Link
                                        href={item.url}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </menu>
    )
}