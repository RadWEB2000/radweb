import Link from "next/link";
import {SecondaryBlogCard as Card} from "cards/index"
import css from "v-blog/InsightsPanel/InsightsPanel.module.scss";
import { tInsightsPanel } from "v-blog/InsightsPanel/InsightsPanel.models";
export default function InsightsPanel(props:tInsightsPanel){
    return(
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
                <Link 
                    className={css.button}
                    href={props.button.url}
                >
                    {props.button.title}
                </Link>
            </div>
            {
                props.cards &&
                <ul
                    className={css.cards}
                >
                    {
                        props.cards.slice(0,4).map((item) => {
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