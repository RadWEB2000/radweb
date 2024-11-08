import Link from "next/link";
import {SecondaryBlogCard as Card} from "cards/index"
import css from "v-blog/InsightsPanel/InsightsPanel.module.scss";
import { tInsightsPanel } from "v-blog/InsightsPanel/InsightsPanel.models";
export default function InsightsPanel(props:tInsightsPanel){
    return(
        <div
            className={css.wrapper}
        >
            {
                props.sections.map((item) => {
                    return (
                        <div
                            className={css.container}
                        >
                            <div
                                className={css.box}
                            >
                                <section
                                    className={css.details}
                                >
                                    <h2
                                        className={css.title}
                                        dangerouslySetInnerHTML={{__html:item.title}}
                                    />
                                    <p
                                        className={css.overview}
                                        dangerouslySetInnerHTML={{__html:item.overview}}
                                    />
                                </section>
                                <Link 
                                    className={css.button}
                                    href={item.button.url}
                                >
                                    {item.button.title}
                                </Link>
                            </div>
                            {
                                item.cards &&
                                <ul
                                    className={css.cards}
                                >
                                    {
                                        item.cards.slice(0,4).map((item) => {
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
                            {
                                item.content &&
                                <section
                                    className={css.content}
                                >
                                    <p
                                        dangerouslySetInnerHTML={{__html:item.content}}
                                    />
                                </section>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}