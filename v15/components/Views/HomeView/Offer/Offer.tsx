import css from "v-home/Offer/Offer.module.scss"
import {tOffer} from "v-home/Offer/Offer.models";
import { PrimaryButton as Button } from "buttons/index";
import { PrimaryOfferCard as Card } from "cards/offer/index";

export default function Offer(props:tOffer){
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
                <Button
                    {...props.button}
                    theme="light"
                    type="link"

                />
            </section>
            {
                props.cards &&
                <ul
                    className={css.cards}
                >
                    {
                        props.cards.map((item) => {
                            return (
                                <Card
                                    {...item}
                                    key={item.title}
                                />

                            )

                        })
                    }
                </ul>
            }
        </div>
    )
}