import css from "v-home/Offer/Offer.module.scss"
import {tOffer} from "v-home/Offer/Offer.models"
import { PrimaryButton, SecondaryButton } from "buttons/index";

export default function Offer(props:tOffer){
    return (
        <div
            className={css.wrapper}
        >
            <div
                className={css.container}
            >
                <section
                    className={css.box}
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
                <div
                    className={css.button}
                >
                    <PrimaryButton
                        type="link"
                        isDark={false}
                        title={props.button.title}
                        url={props.button.url}
                        props={props.button.props}
                    />
                </div>
            </div>
            {
                props.cards &&
                <ul
                    className={css.cards}
                >
                    {
                        props.cards.map((item) => {
                            return (
                                <li
                                    className={css.card}
                                    key={item.title}
                                >
                                    <h3
                                        className={css.card__title}
                                        dangerouslySetInnerHTML={{__html:item.title}}
                                    />
                                    <p
                                        className={css.card__content}
                                        dangerouslySetInnerHTML={{__html:item.content}}
                                    />
                                    <SecondaryButton
                                        type="link"
                                        title={item.button.title}
                                        url={item.button.url}
                                        props={item.button.props}

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