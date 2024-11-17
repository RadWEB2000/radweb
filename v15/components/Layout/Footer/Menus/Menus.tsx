import css from "footer/Menus/Menus.module.scss";
import {tMenus} from "footer/Menus/Menus.models"
import Link from "next/link";

export default function Menus(props:tMenus){
    return (
        <div
            className={css.wrapper}
        >
            {
                props.menus.map((item) => {
                    return (
                        <li
                            className={css.container}
                            key={item.title}
                        >
                            <h5
                                className={css.title}
                            >
                                {item.title}
                            </h5>
                            {
                                item.menu &&
                                <ul
                                    className={css.menu}
                                >
                                    {
                                        item.menu.map((item) => {
                                            return (
                                                <Link
                                                    className={css.item}
                                                    href={item.url}
                                                    key={item.title}
                                                >
                                                    {item.title}
                                                </Link>
                                            )
                                        })
                                    }
                                </ul>
                            }
                        </li>
                    )
                })
            }
        </div>
    )
}