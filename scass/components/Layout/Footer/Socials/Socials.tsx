import css from "footer/Socials/Socials.module.scss";
import {tSocials} from "footer/Socials/Socials.models";
import Link from "next/link";
import getSocial from "lib/getSocial";

export default function Socials(props:tSocials){
    return (
        <ul
            className={css.wrapper}
        >
            {
                props.socials &&
                props.socials.map((item) => {
                    const social = getSocial(item)
                    return (
                        <Link
                            className={css.item}
                            href={item}
                            key={item}
                            rel="noindex nofollow"
                            target="_blank"
                        >
                            {social.icon}
                        </Link>
                    )
                })
            }
        </ul>
    )
}