import css from "v-home/Hero/Hero.module.scss";
import Image from "next/image";
import {tHero} from "v-home/Hero/Hero.models";
import { PrimaryButton as Button} from "buttons/index";

export default function Hero(props:tHero){
    return (
        <header
            className={css.wrapper}
        >
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
                                        theme="light"
                                        type="link"
                                        key={item.title}
                                    />
                                )
                            })
                        }
                    </ul>
                }
            </section>
            {
                props.image &&
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
                        {...props.image.props}
                    />
                </picture>
            }
        </header>
    )
}