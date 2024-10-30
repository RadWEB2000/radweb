import css from "v-home/Industries/Industries.module.scss";
import {tIndustries} from "v-home/Industries/Industries.models";
import Link from "next/link";
import Image from "next/image";

export default function Industries(props:tIndustries){
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
                        props.cards.map((item) => {
                            return (
                                <li
                                    className={css.card}
                                    key={item.title}
                                >
                                    <picture
                                        className={css.card__media}
                                    >
                                        <Image
                                            alt={item.image.altText}
                                            className={css.card__media__image}
                                            fill
                                            loading="lazy"
                                            src={item.image.sourceSrc}
                                            title={item.image.title}
                                            {...item.image.props}
                                        />
                                    </picture>
                                    <section
                                        className={css.card__details}
                                    >
                                        <h3
                                            className={css.card__details__title}
                                            dangerouslySetInnerHTML={{__html:item.title}}
                                        />
                                        <p
                                            className={css.card__details__content}
                                            dangerouslySetInnerHTML={{__html:item.content}}
                                        />
                                        <Link 
                                            className={css.card__details__button}
                                            href={item.button.url}
                                        >
                                            {item.button.title}
                                        </Link>
                                    </section>
                                </li>
                            )
                        })
                    }
                </ul>
            }
        
        </div>
    )
}