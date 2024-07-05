import { PrimaryButton as Button } from "buttons/index";
import Image from "next/image";
import {tHero} from "v-home/Hero/Hero.models"
import css from "v-home/Hero/Hero.module.scss"
export default function Hero({image, title, slogan, buttons}:tHero){
    return (
        <header className={css.wrapper} >
            <picture className={css.image__box} >
                <Image
                    alt={image.altText}
                    className={css.image}
                    fill
                    loading="eager"
                    priority
                    src={image.sourceUrl}
                    title={image.title}
                    quality={50}
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
                {
                    buttons &&
                    <ul
                        className={css.buttons}
                    >
                        {
                            buttons.map(({label,uri}) => {
                                return (
                                    <Button
                                        label={label}
                                        hrefLang="pl"
                                        key={label}
                                        uri="#"
                                    />
                                )
                            })
                        }
                    </ul>
                }
                <ul>

                </ul>
            </section>
        </header>
    )
}