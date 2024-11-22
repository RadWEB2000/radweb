"use client"

import css from "v-about/Memoir/Memoir.module.scss"
import {tMemoir, tCard} from "v-about/Memoir/Memoir.models"

function Card(props:tCard){
    return (
        <li
            className={css.card}
        >
            <strong
                className={css.card__date}
            >
                {props.date}
            </strong>
            <h3
                className={css.card__title}
            >
                {props.title}
            </h3>
            {
                props.content &&
                <p
                    className={css.card__content}
                >
                    {props.content}
                </p>
            }
        </li>
    )
}

export default function Memoir(props:tMemoir){
    return (
        <div
            className={css.wrapper}
        >
            <h2
                className={css.title}
                dangerouslySetInnerHTML={{__html:props.title}}
            />

            {
                props.timeline &&
                <ul
                    className={css.cards}
                >
                    {
                        props.timeline.map((item) => {
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