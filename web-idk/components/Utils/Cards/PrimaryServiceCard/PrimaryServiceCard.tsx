import css from "cards/PrimaryServiceCard/PrimaryServiceCard.module.scss"
import Image from "next/image"
import Link from "next/link"
import {tPrimaryServiceCard} from "cards/PrimaryServiceCard/PrimaryServiceCard.models"

export default function PrimaryServiceCard(props:tPrimaryServiceCard){
    return (
        <Link 
            className={css.wrapper}
            href={props.url} 
        >
            <picture
                className={css.image__wrapper}
            >
                <Image
                    alt={props.image.altText}
                    className={css.image}
                    fill
                    loading="lazy"
                    src={props.image.sourceUrl}
                    title={props.image.title}
                    quality={20}
                />
            </picture>
            <section
                className={css.container}
            >
                <h3
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
            </section>
        </Link>
    )
}