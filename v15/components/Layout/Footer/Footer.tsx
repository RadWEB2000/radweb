import css from "footer/Footer.module.scss";
import {tFooter} from "footer/Footer.models";
import Link from "next/link";
import getSocial from "lib/getSocial";

export default function Footer(props:tFooter){
    return (
        <footer
            className={css.wrapper}
        >
            <address
                className={css.details}
            >
                dane kontaktowe
            </address>
            <menu
                className={css.menu}
            >
                {
                    props.menus.map((item) => {
                        return (
                            <li
                                key={item.title}
                            >
                                <h4>{item.title}</h4>
                                {
                                    item.links &&
                                    <ul>
                                        {
                                            item.links.map((item) => {
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
                                }
                            </li>
                        )
                    })
                }
            </menu>
            <span
                className={css.line}
            />
            <div
                className={css.author}
                dangerouslySetInnerHTML={{__html:props.author}}
            />
            <ul
                className={css.socials}
            >
                {
                    props.socials.map((item) => {
                        const icon = getSocial(item.url)
                        return (
                            <Link
                                href={item.url}
                                key={item.title}
                                title={item.title}
                                {...item.props}
                            >
                                {icon}
                            </Link>
                        )
                    })
                }
            </ul>
        </footer>
    )
}