import css from "v-home/Services/Services.module.scss";
import {tServices} from "v-home/Services/Services.models"
export default function Services({button,content,title}:tServices){
    return (
        <div
            className={css.container}
        >
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
                <ul
                    className={css.cards}
                >


                </ul>
            </div>
        </div>
    )
}