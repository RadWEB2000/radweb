import Image from "next/image";
import { Breadcrumbs } from "parts/Utils";
import {tHero} from "v-services/Hero/Hero.models";
import css from "v-services/Hero/Hero.module.scss";

export default function Hero(props:tHero){
    return (
        <header
            className={css.wrapper}
        >
            <div
                className={css.breadcrumbs}
            >
                <Breadcrumbs
                    theme="light"
                    url={props.breadcrumbs}
                />
            </div>
            <section
                className={css.main}
            >
                <h1
                    className={css.title}
                >
                    {props.title}
                </h1>
                <p
                    className={css.content}
                >
                    {props.content}
                </p>
            </section>
            <figure
                className={css.media}
            >
                <picture
                    className={css.picture}
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
            </figure>
        </header>
    )
}