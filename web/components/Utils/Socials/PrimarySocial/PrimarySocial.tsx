import css from "socials/PrimarySocial/PrimarySocial.module.scss"
import getSocial from "lib/getSocial";
import Link from "next/link";
import {tPrimarySocial} from "socials/PrimarySocial/PrimarySocial.models"
export default function PrimarySocial({title,theme,url}:tPrimarySocial){
    const icon = getSocial(url)?.icon;
    return (
        <Link
            className={css.wrapper}
            data-theme={theme}
            href={url}
            rel="noindex nofollow"
            target="_blank"
            title={title}
        >
            {icon}
        </Link>
    )
}