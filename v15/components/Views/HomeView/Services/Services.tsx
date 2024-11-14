import css from "v-home/Services/Services.module.scss";
import {tServices} from "v-home/Services/Services.models";
import { PrimaryServiceCard as Card } from "cards/service/index";
import { PrimaryButton as Button } from "buttons/index";

export default function Services(props:tServices){
    console.log(props.cards?.length)
    return (
        <div
            className={css.wrapper}
        >
            <section
                className={css.container}
            >
                {
                    props.slogan &&
                    <h3
                        className={css.slogan}
                        dangerouslySetInnerHTML={{__html:props.slogan}}
                    />
                }
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