import Image from "next/image";
import Link from "next/link";
import {tPrimaryProjectCard} from "cards/PrimaryProjectCard/PrimaryProjectCard.models";
import css from "cards/PrimaryProjectCard/PrimaryProjectCard.module.scss"

export default function PrimaryProjectCard(props:tPrimaryProjectCard){
    return (
        <li
            className={css.wrapper}
        >
            <section
                className={css.container}
            >
                <h3
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}            
                />
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
                {
                    props.button &&
                    <Link
                        className={css.button}
                        href={props.button.url}
                    >
                        {props.button.title}
                    </Link>
                }
                {
                    props.categories &&
                    <ul
                        className={css.categories}
                    >
                        {props.categories.map((item) => {
                            return (
                                <li
                                    className={css.category}
                                    dangerouslySetInnerHTML={{__html:item}}
                                    key={item}
                                />
                            )
                        })}
                    </ul>
                }
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
        </li>
    )
}