"use client"
import css from "cards/FaqCard/FaqCard.module.scss"
import {tFaqCard} from "cards/FaqCard/FaqCard.models"
import { useState } from "react"
export default function FaqCard(props:tFaqCard){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <li
            className={css.wrapper}
        >
            <header
                className={css.head}
            >
                <h3
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <button
                    className={css.button}
                    data-open={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={css.line} />
                    <span className={css.line} />
                </button>
            </header>
            {
                isOpen &&
                <div
                    className={css.box}
                >
                    <article
                        className={css.content}
                        dangerouslySetInnerHTML={{__html:props.content}}
                    />
                </div>
            }
        </li>
    )
}