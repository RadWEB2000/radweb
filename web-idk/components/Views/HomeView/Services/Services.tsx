import css from "v-home/Services/Services.module.scss"
import {tServices, tServicesGrid} from "v-home/Services/Services.models"
import { PrimaryServiceCard as Card } from "cards/index"

export default function Services(props:tServices){
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
                props.grid &&
                <ul
                className={css.cards}
                >
                    {props.grid.map((item,index) => {
                        return (
                            <ServicesGrid
                                {...item}
                                key={index}
                            />
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export function ServicesGrid(props:tServicesGrid){
    return (
        <div
        className={css.grid__wrapper}
        >
            <div
                className={css.grid__container}
            >
                <section
                    className={css.grid__box}
                >
                    <h3
                        className={css.grid__title}
                        dangerouslySetInnerHTML={{__html:props.title}}
                    />
                    <p
                        className={css.grid__content}
                        dangerouslySetInnerHTML={{__html:props.content}}
                    />
                </section>
            </div>
            {
                props.cards &&
                <ul
                    className={css.grid__cards}
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