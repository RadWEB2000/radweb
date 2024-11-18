import css from "footer/Socials/Socials.module.scss";
import {tSocials} from "footer/Socials/Socials.models"
import getSocial from "lib/getSocial";
import Link from "next/link";

export default function Socials(props:tSocials){
    return (
        <ul
            className={css.wrapper}
        >
            {
                props.socials.map((item) => {
                    const icon = getSocial(item.url)
                    return (
                        <Link
                            className={css.item}
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
    )
}