import css from "v-home/Hero/Hero.module.scss";
import Image from "next/image"
import { PrimaryLinkButton as Button, PrimaryLinkButton} from "link/index"
import { PrimarySocialButton, PrimarySocialButton as Social} from "socials/index"
import {tHero} from "v-home/Hero/Hero.models"

export default function Hero(props:tHero){
    return (
        <header
            className={css.wrapper}
        >
            <section
                className={css.container}
            >
                <h1
                    className={css.title}
                >
                    {props.title}
                </h1>
                <h2
                    className={css.slogan}
                >
                    {props.slogan}
                </h2>
                {
                    props.buttons &&
                    <ul
                        className={css.buttons}
                    >
                        {
                            props.buttons.map((item) => {
                                return (
                                    <Button
                                        {...item}
                                        key={item.title}
                                        theme="dark"
                                    />
                                )
                            })
                        }
                    </ul>
                }
            </section>
            <figure
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
                    quality={50}
                    {...props.image.props}
                />
            </figure>
            {
                props.socials &&
                <ul
                    className={css.socials}
                >
                    {
                        props.socials.map((item) => {
                            return (
                                <Social
                                    {...item}
                                    key={item.url}
                                />
                            )
                        })
                    }
                </ul>
            }
        </header>
    )
}