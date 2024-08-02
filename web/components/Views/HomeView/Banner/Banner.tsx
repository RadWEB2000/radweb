import css from "v-home/Banner/Banner.module.scss";
import Image from "next/image";
import {tBanner} from "v-home/Banner/Banner.models"

export default function Banner({content,image,title}:tBanner){
    return(
        <div
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
                    quality={23}
                />
            </picture>
            <section
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
            </section>
        </div>
    )
}