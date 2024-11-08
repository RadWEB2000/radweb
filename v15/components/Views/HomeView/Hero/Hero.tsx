
import css from "v-home/Hero/Hero.module.scss";
import {tHero} from "v-home/Hero/Hero.models";
import { PrimaryButton as Button} from "buttons/index";
import Image from "next/image";
export default function Hero(props:tHero){
    return (
        <header
            className={css.wrapper}
        >
            {
                (props.title || props.slogan || props.buttons) &&
                <section
                    className={css.container}
                >
                    <hgroup
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
                    </hgroup>
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
                                            type="link"
                                            isDark
                                        />
                                    )
                                })
                            }
                        </ul>
                    }
                </section>
            }
            {
                props.media &&
                <picture
                    className={css.media}
                >
                    {
                        props.media.type == "image" &&
                        <Image
                            alt={props.media.altText}
                            className={css.image}
                            fill
                            loading="eager"
                            priority
                            src={props.media.sourceSrc}
                            title={props.media.title}
                            quality={60}
                            {...props.media.props}
                        />
                    }
                </picture>
            }
        </header>
    )
}