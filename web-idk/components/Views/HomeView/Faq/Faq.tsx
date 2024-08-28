import css from "v-home/Faq/Faq.module.scss"
import { FaqCard as Card } from "cards/index"
import {tFaq} from "v-home/Faq/Faq.models"

export default function Faq(props:tFaq){
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
                        props.cards.map((item,index) => {
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
    )
}