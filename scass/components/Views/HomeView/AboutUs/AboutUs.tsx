import css from "v-home/AboutUs/AboutUs.module.scss"
import Image from "next/image";
import {tAboutUs} from "v-home/AboutUs/AboutUs.models";
import { PrimaryButton as Button} from "buttons/index";

export default function AboutUs(props:tAboutUs) {
    return (
        <div
            className={css.wrapper}
        >
            <section
                className={css.container}
            >
                <h2
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
                {
                    props.button &&
                    <Button
                        {...props.button}
                    />
                }
            </section>
            <picture
                className={css.media}
            >
                <Image
                    alt={props.image.altText}
                    className={css.image}
                    fill
                    loading="lazy"
                    src={props.image.sourceSrc}
                    title={props.image.title}
                    quality={30}
                />
            </picture>
        </div>
    )
}