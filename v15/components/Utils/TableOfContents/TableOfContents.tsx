import Link from "next/link";
import {tTableOfContents} from "utils/TableOfContents/TableOfContents.models";
import css from "utils/TableOfContents/TableOfContents.module.scss"

export default function TableOfContents(props:tTableOfContents){
    return (
        <div
            className={css.wrapper}
        >
            <h3
                className={css.title}
            >
                {props.title}
            </h3>
            {
                props.menu &&
                <ul
                    className={css.menu}
                >
                    {
                        props.menu.map((item) => {
                            return (
                                <Link
                                    className={css.menu__item}
                                    href={item.url}
                                    key={item.title}
                                    {...item.props}
                                >
                                    {item.title}
                                </Link>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}