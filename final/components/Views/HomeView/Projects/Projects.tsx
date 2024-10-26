import css from "v-home/Projects/Projects.module.scss";
import {tProjects} from "v-home/Projects/Projects.models";
import Image from "next/image";
import { CSSProperties } from "react";
import Link from "next/link";
import { PrimaryProjectCard as Card} from "cards/index";

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
            <picture
                className={css.media}
            >
                <Image
                    alt={props.media.altText}
                    className={css.image}
                    fill
                    loading="lazy"
                    src={props.media.sourceSrc}
                    title={props.media.title}
                    quality={40}
                    {...props.media.props}
                />
            </picture>
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