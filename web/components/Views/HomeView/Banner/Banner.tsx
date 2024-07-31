import css from "v-home/Banner/Banner.module.scss";
import {tBanner} from "v-home/Banner/Banner.models";
import Image from "next/image";

export default function Banner({image,text}:tBanner){
   
    const words = text.split(' ');
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
                    quality={40}
                />
            </picture>
            <section
                className={css.container}
            >
                {
                    words.map((item,index) => {
                        return(
                            <span
                                className={css.word}
                                key={index}
                            >
                                {`${item} `}
                            </span>
                        )
                    })
                }
            </section>
        </div>
    )

}