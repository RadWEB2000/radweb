import css from "v-home/AboutUs/AboutUs.module.scss"
import Image from "next/image"
import { PrimaryPersonCard as Card } from "cards/index"
import {tAboutUs} from "v-home/AboutUs/AboutUs.models"

export default function AboutUs({button,cards,content,image,title}:tAboutUs){
    return (
        <>
            <picture
                className={css.image__wrapper}
            >
                <Image
                    alt={image.altText}
                    className={css.image}
                    fill
                    loading="lazy"
                    src={image.sourceUrl}
                    title={image.title}
                    quality={55}
                />
            </picture>
            <div
                className={css.wrapper}
            >
                <section
                    className={css.box}
                >
                    <h2
                        className={css.title}
                        dangerouslySetInnerHTML={{__html:title}}
                    />
                    <p
                        className={css.content}
                        dangerouslySetInnerHTML={{__html:content}}
                    />
                </section>
                {
                    cards &&
                    <ul
                        className={css.cards}
                    >
                        {
                            cards.map((item,index) => {
                                return (
                                    <Card
                                        {...item}
                                        key={index}
                                    />
                                )
                            })
                        }
                    </ul>
                }
            </div>
        </>
    )
}