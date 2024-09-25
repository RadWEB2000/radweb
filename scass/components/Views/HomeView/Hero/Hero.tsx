import css from "v-home/Hero/Hero.module.scss"
import Image from "next/image"
import {tHero} from "v-home/Hero/Hero.models"
import { PrimaryButton as Button} from "buttons/index"

export default function Hero(props:tHero){
    return (
        <header
            className={css.wrapper}
        >
            {
                props.media &&
                <picture
                    className={css.media}
                >
                    <Image
                        alt={props.media.altText}
                        aria-label="hero image"
                        className={css.image}
                        fill
                        loading="eager"
                        priority
                        src={props.media.sourceSrc}
                        title={props.media.title}
                        quality={60}
                    />
                </picture>
            }
            <section
                className={css.box}
            >
                <h1
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <h2
                    className={css.slogan}
                    dangerouslySetInnerHTML={{__html:props.slogan}}
                />
                {
                    props.buttons &&
                    <ul
                        className={css.buttons}
                    >
                        {props.buttons.map((item) => {
                            return(
                                <Button
                                    {...item}
                                    key={item.title}
                                    hrefLang="pl"
                                />
                            )
                        })}
                    </ul>
                }
            </section>
        </header>
    )
}