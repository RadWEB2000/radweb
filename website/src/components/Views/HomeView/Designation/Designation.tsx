import css from "v-home/Designation/Designation.module.scss"
import Image from "next/image";
import {tDesignation} from "v-home/Designation/Designation.models"

export default function Designation({content,image}:tDesignation){
    return (
        <div
            className={css.wrapper}
        >
            <section
                className={css.content__box}
            >
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </section>
            <picture
                className={css.image__box}
            >
                <Image
                    alt={image.altText}
                    className={css.image}
                    fill
                    loading="lazy"
                    src={image.sourceUrl}
                    title={image.title}
                    quality={40}
                />
            </picture>
        </div>
    )
}