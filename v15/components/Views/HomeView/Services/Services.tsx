import { PrimaryServiceCard as Card } from "cards/service/index";
import {tServices} from "v-home/Services/Services.models";
import css from "v-home/Services/Services.module.scss"


export default function Services(props:tServices){
   

    return (
        <>
            <section
                className={css.wrapper}
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
                            return (
                                <Card
                                    {...item}
                                    title={`${index + 1} ${item.title}`}
                                    key={item.title}
                                />
                            )
                        })
                    }
                    </ul>
            }
        </>
    )
}