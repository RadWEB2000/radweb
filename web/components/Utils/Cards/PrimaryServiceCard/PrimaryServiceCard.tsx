import Image from "next/image";
import css from "cards/PrimaryServiceCard/PrimaryServiceCard.module.scss"
import { tPrimaryServiceCard } from "cards/PrimaryServiceCard/PrimaryServiceCard.models";
import Link from "next/link";
export default function  PrimaryServiceCard({button,content,icon,title}:tPrimaryServiceCard) {
    return (
        <li
            className={css.wrapper}
        >
            <picture
                className={css.image__wrapper}
            >
                <Image
                    alt={icon.altText}
                    className={css.image}
                    fill
                    loading="lazy"
                    src={icon.sourceUrl}
                    title={icon.title}
                    quality={14}
                />
            </picture>
            <article
                className={css.box}
            >
                <h2
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </article>
            <Link
                className={css.button}
                href={button.url}
            >
                {button.title}
            </Link>
        </li>
    )
}