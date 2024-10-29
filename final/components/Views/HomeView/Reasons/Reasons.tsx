import  css from "v-home/Reasons/Reasons.module.scss"
import {tReasons} from "v-home/Reasons/Reasons.models";
import Link from "next/link";

export default function Reasons(props:tReasons){
    return (
        <>
            {
                props.cards &&
                <div
                    className={css.wrapper}
                >
                    {
                        props.cards.slice(0,2).map((item) => {
                            return (
                                <section
                                    className={css.container}
                                    key={item.title}
                                >
                                    <h2
                                        className={css.title}
                                        dangerouslySetInnerHTML={{__html:item.title}}
                                    />
                                    <p
                                        className={css.content}
                                        dangerouslySetInnerHTML={{__html:item.content}}
                                    />
                                    {
                                        item.cards &&
                                        <ul
                                            className={css.cards}
                                        >
                                            {
                                                item.cards.map((item) => {
                                                    return (
                                                        <li
                                                            className={css.card}
                                                            key={item}
                                                        >
                                                            {item}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    }
                                    <Link
                                        className={css.button}
                                        href={item.button.url}
                                    >
                                        {item.button.title}
                                    </Link>
                                </section>
                            )
                        })
                    }
                </div>
            }
        </>
    )
}