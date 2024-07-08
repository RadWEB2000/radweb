import {PrimaryServiceCard as Card} from "cards/index"
import {tServices} from "v-home/Services/Services.models"
import css from "v-home/Services/Services.module.scss"
export default function Services({button,buttonCard,cards,content,title}:tServices){
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
                    {cards.reverse().map((item,index) => {
                        return (
                            <Card
                                {...item}
                                button={buttonCard}
                                key={item.title}
                            />
                        )
                    })}
                </ul>
            }
        </div>
    )
}