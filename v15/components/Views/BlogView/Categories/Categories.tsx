import Link from "next/link";
import {tCategories} from "v-blog/Categories/Categories.models";
import css from "v-blog/Categories/Categories.module.scss"
import { IoArrowForward as Arrow} from "react-icons/io5";


export default function Categories(props:tCategories){
    return (
        <aside
            className={css.wrapper}
        >
            <h3
                className={css.title}
            >
                {props.title}
            </h3>
            {
                props.categories &&
                <ul
                    className={css.categories}
                >
                    {
                        props.categories.map((item) => {
                            return (
                                <Link
                                    className={css.category}
                                    href={item.url}
                                    key={item.url}
                                    {...item.props}
                                >
                                    <i
                                        className={css.category__icon}
                                    >
                                        <Arrow/>
                                    </i>
                                    <span
                                        className={css.category__label}
                                    >
                                        {item.title}
                                    </span>
                                </Link>
                            )
                        })
                    }
                </ul>
            }
        </aside>
    )
}