import css from "v-home/Hero/Hero.module.scss"
import Image from "next/image";
import {tHero as Props} from "v-home/Hero/Hero.models"
import { PrimarySocial as Social } from "socials/index";
export default function Hero({buttons,content,image,slogan,socials,title}:Props) {
    return (
        <div
            className={css.wrapper}
        >
            <section
                className={css.box}
            >
                <header
                    className={css.headings}
                >
                    <h1
                        className={css.title}
                        dangerouslySetInnerHTML={{__html:title}}
                    />
                    <h2
                        className={css.slogan}
                        dangerouslySetInnerHTML={{__html:slogan}}
                    />
                </header>
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:content}}
                />
                <ul
                    className={css.buttons}
                >

                </ul>
            </section>
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
            {
                socials &&
                <ul
                    className={css.socials}
                >
                    {
                        socials.map((item,index) => {
                            return (
                                <Social
                                    {...item}
                                    key={index}
                                />
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}