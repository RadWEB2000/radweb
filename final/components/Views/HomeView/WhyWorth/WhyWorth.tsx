import css from "v-home/WhyWorth/WhyWorth.module.scss";
import {tWhyWorth} from "v-home/WhyWorth/WhyWorth.models";

export default function WhyWorth(props:tWhyWorth){
    return (
        <div
            className={css.wrapper}
        >
            <section
                className={css.container}
            >
                <h2
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
            </section>
            {
                props.cards &&
                <ul
                    className={css.cards}
                >
                    {
                        props.cards.map((item, index) => {

                            const indicator = index + 1 < 10 ? `0${index + 1}` : index + 1;

                            return (
                                <li
                                    className={css.card}
                                >
                                    <span
                                        className={css.card__indicator}
                                    >
                                        {indicator}
                                    </span>
                                    <h3
                                        className={css.card__title}
                                        dangerouslySetInnerHTML={{__html:item.title}}
                                    />
                                    <p
                                        className={css.card__content}
                                        dangerouslySetInnerHTML={{__html:item.content}}
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