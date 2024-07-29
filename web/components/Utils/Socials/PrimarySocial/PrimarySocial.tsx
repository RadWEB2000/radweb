import getSocial from "lib/getSocial"
import Link from "next/link"
import {tPrimarySocial} from "socials/PrimarySocial/PrimarySocial.models"
import css from "socials/PrimarySocial/PrimarySocial.module.scss";

export default function PrimarySocial({title,url}:tPrimarySocial){
    const social = getSocial(url)?.icon;
    return (
        <Link
            className={css.wrapper}
            href={url}
            rel="noindex nofollow"
            target="_blank"
        >
            <span
                className={css.title}
                dangerouslySetInnerHTML={{__html:title}}
            />
            <i
                className={css.icon}
            >
                {social}
            </i>
        </Link>
    )
}