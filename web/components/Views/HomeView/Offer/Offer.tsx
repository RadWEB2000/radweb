import css from "v-home/Offer/Offer.module.scss";
import {tOffer} from "v-home/Offer/Offer.models"

export default function Offer({cards,content,title}:tOffer) {
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
                    {
                        cards.map(({title,content}) => {
                            return (
                                <li
                                    className={css.card}
                                >
                                    <h3
                                        className={css.card__title}
                                        dangerouslySetInnerHTML={{__html:title}}
                                    />
                                    <span
                                        className={css.card__line}
                                    />
                                    <p
                                        className={css.card__content}
                                        dangerouslySetInnerHTML={{__html:content}}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}