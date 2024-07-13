import css from "v-home/Hero/Hero.module.scss";
import Image from "next/image";
import {tHero} from "v-home/Hero/Hero.models";

export default function Hero({button,image,slogan,title}:tHero){
    return (
        <header
            className={css.wrapper}
        >
            <picture
                className={css.image__wrapper}
            >
                <Image
                    alt={image.altText}
                    className={css.image}
                    fill
                    loading="eager"
                    priority
                    src={image.sourceUrl}
                    title={image.title}
                    quality={30}
                />
            </picture>
            <section
                className={css.box}
            >
                <h1
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <h2
                    className={css.slogan}
                    dangerouslySetInnerHTML={{__html:slogan}}
                />
            </section>
        </header>
    )
}