import css from "v-article/Hero/Hero.module.scss"
import Image from "next/image"
import { Breadcrumbs } from "parts/Utils"
import { tHero } from "v-article/Hero/Hero.models"
export default function Hero(props:tHero){
    return (
        <header
            className={css.wrapper}
        >
            <Breadcrumbs
                theme="light"
                url={props.breadcrumbs}
            />
            <h1
                className={css.title}
            >
                {props.title}
            </h1>
            <p
                className={css.excerpt}
            >
                {props.excerpt}
            </p>
            <p
                className={css.release}
            >
                {props.release}
            </p>
            <picture
                className={css.media}
            >
                <Image
                     alt={props.image.altText}
                     className={css.image}
                     fill
                     loading="eager"
                     priority
                     src={props.image.sourceSrc}
                     title={props.image.title}
                     quality={40}
                />
            </picture>
        </header>
    )
}