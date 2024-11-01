import css from "footer/Details/Details.module.scss";
import {tDetails} from "footer/Details/Details.models";
import Link from "next/link";
import getSocial from "lib/getSocial";


export default function Author(props:tDetails){
    return (
        <div
            className={css.wrapper}
        >
            <div
                className={`${css.container} ${css.top}`}
            >
                {
                    props.policies &&
                    <ul
                        className={css.policies}
                    >
                        {
                            props.policies.map((item) => {
                                return (
                                    <Link
                                        className={css.policies__item}
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
                                    >
                                        {item.title}
                                    </Link>
                                )
                            })
                        }
                    </ul>
                }
            </div>
            <div
                className={`${css.container} ${css.bottom}`}
            >
                <p
                    className={css.author}
                    dangerouslySetInnerHTML={{__html:props.author}}
                />

                {
                    props.socials &&
                    <ul
                        className={css.socials}
                    >
                        {
                            props.menu.map((item) => {
                                const social = getSocial(item.url)
                                return (
                                    <Link
                                        className={css.socials__item}
                                        href={item.url}
                                        key={item.title}
                                    >
                                        {social.icon}
                                    </Link>
                                )
                            })
                        }
                    </ul>
                }
            </div>
        </div>
    )
}