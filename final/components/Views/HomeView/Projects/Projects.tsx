import css from "v-home/Projects/Projects.module.scss";
import {tProjects} from "v-home/Projects/Projects.models";
import Image from "next/image";
import { CSSProperties } from "react";
import Link from "next/link";

export default function Projects(props:tProjects){
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
                                >
                                    <section
                                        className={css.card__box}
                                    >
                                        <h3
                                            className={css.card__box__title}
                                            dangerouslySetInnerHTML={{__html:item.title}}
                                        />
                                        <p
                                            className={css.card__box__content}
                                            dangerouslySetInnerHTML={{__html:item.content}}
                                        />
                                        <Link
                                            className={css.card__box__button}
                                            href={item.button.url}
                                        >
                                            {item.button.title}
                                        </Link>
                                        {
                                            item.categories &&
                                            <ul
                                                className={css.card__box__categories}
                                            >
                                                {
                                                    item.categories.map((item) => {
                                                        return (
                                                            <li
                                                                className={css.card__box__categories__item}
                                                                dangerouslySetInnerHTML={{__html:item}}
                                                            />
                                                        )
                                                    })
                                                }
                                            </ul>
                                        }
                                    </section>
                                    <picture
                                        className={css.card__media}
                                    >
                                        <Image
                                            alt={item.media.main.altText}
                                            className={css.card__media__image}
                                            fill
                                            loading="lazy"
                                            src={item.media.main.sourceSrc}
                                            title={item.media.main.title}
                                            quality={50}
                                        />
                                    </picture>
                                    {
                                        item.media.gallery &&
                                        <ul
                                            className={css.card__gallery}
                                            style={{
                                                "--cards_quantity":item.media.gallery.length
                                            } as CSSProperties}
                                        >
                                            {
                                                item.media.gallery.map((item) => {
                                                    return (
                                                        <li
                                                            className={css.card__gallery__item}
                                                        >
                                                            <Image
                                                                alt={item.altText}
                                                                className={css.card__gallery__item__image}
                                                                fill
                                                                loading="lazy"
                                                                src={item.sourceSrc}
                                                                title={item.title}
                                                                quality={30}
                                                            />
                                                        </li>
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
    )
}