import css from "v-home/WhyUs/WhyUs.module.scss";
import Image from "next/image";
import {tWhyUs} from "v-home/WhyUs/WhyUs.models"

export default function WhyUs({content,image}:tWhyUs){
    return (
        <div
            className={css.wrapper}
        >
            <article
                className={css.box}
            >
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </article>
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
                    quality={10}
                />
            </picture>
        </div>
    )
}