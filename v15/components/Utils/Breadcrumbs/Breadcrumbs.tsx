
import css from "utils/Breadcrumbs/Breadcrumbs.module.scss";
import Link from "next/link";
import { RiArrowRightSLine as Arrow, RiHome5Line as Home } from "react-icons/ri";

import {tBreadcrumbs} from "utils/Breadcrumbs/Breadcrumbs.models"


export default function Breadcrumbs(props:tBreadcrumbs){

    return (
        <ul
            className={css.wrapper}
            data-theme={props.theme}
        >
            <Link
                className={css.home}
                href="/"
            >
                <Home/>
            </Link>
            {
                props.url.slice(1).map((item) => {
                    return (
                        <>
                            <i
                                className={css.icon}
                                key={item.title}
                            >
                                <Arrow/>
                            </i>
                            <Link
                                className={css.link}
                                key={item.title}
                                href={item.url}
                                {...item.props}
                            >
                                {item.title}
                            </Link>
                        </>
                    )
                })
            }
        </ul>
    )
}