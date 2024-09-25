import css from "cards/PrimaryProjectCard/PrimaryProjectCard.module.scss";
import {tPrimaryProjectCard} from "cards/PrimaryProjectCard/PrimaryProjectCard.models";
import Image from "next/image";

export default function PrimaryProjectCard(props:tPrimaryProjectCard){
    return (
        <li
            data-theme={props.theme}
            className={css.wrapper}
            style={{
                background:props.color
            }}
        >
            <section
                className={css.container}
            >
                <h4
                    className={css.slogan}
                    dangerouslySetInnerHTML={{__html:props.slogan}}
                />
                <h3
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <p
                    className={css.excerpt}
                    dangerouslySetInnerHTML={{__html:props.excerpt.length <= 150 ? props.excerpt : `${props.excerpt.substring(0,147)}...`}}
                />
                {
                    props.categories &&
                    <ul
                        className={css.categories}
                    >
                        {props.categories.map((item) => {
                            return (
                                <li
                                    className={css.category}
                                    key={item}
                                >
                                    {item}
                                </li>
                            )
                        })}
                    </ul>   
                }
            </section>
            <picture
                className={css.media}
            >
                <Image
                    alt={props.image.altText}
                    className={css.image}
                    fill
                    loading="lazy"
                    src={props.image.sourceSrc}
                    title={props.image.title}
                    quality={50}
                />               
            </picture>
        </li>       
    )
}