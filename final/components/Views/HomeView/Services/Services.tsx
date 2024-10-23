import css from "v-home/Services/Services.module.scss";
import {tServices} from "v-home/Services/Services.models";
import Link from "next/link";

export default function Services(props:tServices){
    return (
        <div
            className={css.wrapper}
        >
            <aside
                className={css.aside}
            >
                <h4
                    className={css.slogan}
                    dangerouslySetInnerHTML={{__html:props.slogan}}
                />
            </aside>
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
                {
                    props.cards &&
                    <ul
                        className={css.cards}
                    >
                        {
                            props.cards.map((item,index) => {
                                return (
                                    <li
                                        className={css.card}
                                        key={item.title}
                                    >
                                        <span
                                            className={css.card__index}
                                        >
                                            {index + 1 < 10 ? `0${index + 1 }` : index + 1}
                                        </span>
                                        <h3
                                            className={css.card__title}
                                            dangerouslySetInnerHTML={{__html:item.title}}
                                        />
                                        <p
                                            className={css.card__content}
                                            dangerouslySetInnerHTML={{__html:item.content}}
                                        />
                                        {
                                            item.cards &&
                                            <ul
                                                className={css.card__subcards}
                                            >
                                                {
                                                    item.cards.map((item) => {
                                                        return (
                                                            <Link   
                                                                className={css.card__subcards__item}
                                                                dangerouslySetInnerHTML={{__html:item.title}}
                                                                href={item.url}
                                                                key={item.title}
                                                            />
                                                        )
                                                    })
                                                }
                                            </ul>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
            </div>
        </div>
    )
}