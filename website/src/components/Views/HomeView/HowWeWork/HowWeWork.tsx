import css from "v-home/HowWeWork/HowWeWork.module.scss"
import {tHowWeWork} from "v-home/HowWeWork/HowWeWork.models"


export default function HowWeWork({title, content, cards}:tHowWeWork){
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
                    {cards.map(({title, content}) => {
                        return (
                            <li 
                                className={css.card}
                                key={title} 
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
                    })}
                </ul>
            }
        </div>
    )
}