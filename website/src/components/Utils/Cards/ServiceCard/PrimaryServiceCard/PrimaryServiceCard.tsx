import Image from "next/image";
import {tPrimaryServiceCard} from "c-service/PrimaryServiceCard/PrimaryServiceCard.models"
import css from "c-service/PrimaryServiceCard/PrimaryServiceCard.module.scss";

export default function PrimaryServiceCard({button,excerpt,uri, image, title}:tPrimaryServiceCard){
    return (
        <li
            className={css.wrapper}
        >
            <picture
                className={css.image__wrapper}
            >
                <Image
                    alt={image.altText}
                    className={css.image}
                    fill
                    loading="lazy"
                    src={image.sourceUrl}
                    title={image.title}
                    quality={12}
                />
            </picture>
            <section
                className={css.box}
            >
                <h3
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <p
                    className={css.excerpt}
                    dangerouslySetInnerHTML={{__html:excerpt}}
                />
            </section>
        </li>
    )
}