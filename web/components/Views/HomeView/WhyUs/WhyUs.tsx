import css from "v-home/WhyUs/WhyUs.module.scss"
import Image from "next/image";
import {tWhyUs as Props} from "v-home/WhyUs/WhyUs.models";

export default function WhyUs({content,image,title}:Props){
    return (
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
                    quality={10}
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