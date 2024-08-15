import css from "socials/PrimarySocial/PrimarySocial.module.scss"
import Link from 'next/link';
import getSocial from 'lib/getSocial';
import {tPrimarySocial as Props} from "socials/PrimarySocial/PrimarySocial.models"
export default function PrimarySocial({title,url}:Props){
    const social = getSocial(url)?.icon;
    return (
        <Link
            className={css.wrapper}
            href={url}
            rel="noindex nofollow"
            target='_blank'
            title={title}
        >
            {social}          
        </Link>
    )
}