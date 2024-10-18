import css from "socials/PrimarySocialButton/PrimarySocialButton.module.scss";
import getSocial from 'lib/getSocial';
import Link from 'next/link';
import {tPrimarySocialButton} from "socials/PrimarySocialButton/PrimarySocialButton.models"
export default function PrimarySocialButton(props:tPrimarySocialButton){
    const icon = getSocial(props.url)?.icon;
    return (
        <Link
            className={css.wrapper}
            href={props.url}
            rel="noindex nofollow"
            target='_blank'
            title={props.title}
        >
            {icon}
        </Link>
    )
}