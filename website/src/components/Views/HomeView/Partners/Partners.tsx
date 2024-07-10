import Image from "next/image";
import {tPartners} from "v-home/Partners/Partners.models";
import css from "v-home/Partners/Partners.module.scss"

export default function Partners({cards,content,title}:tPartners){
    return (
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
                    {cards.map(({content,logo,title}) => {
                        return(
                            <li 
                                className={css.card}
                                key={title}
                            >
                                <picture
                                    className={css.card__image__wrapper}
                                >
                                    <Image
                                        alt={logo.altText}
                                        className={css.card__image}
                                        fill
                                        loading="lazy"
                                        src={logo.sourceUrl}
                                        title={logo.title}
                                        quality={20}
                                    />
                                </picture>
                                <h4
                                    className={css.card__title}
                                    dangerouslySetInnerHTML={{__html:title}}
                                />
                                <p
                                    className={css.card__content}
                                    dangerouslySetInnerHTML={{__html:content}}
                                />
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}