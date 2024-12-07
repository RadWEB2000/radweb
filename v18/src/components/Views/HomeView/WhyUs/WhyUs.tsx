import css from "@/v-home/WhyUs/WhyUs.module.scss";
import {tWhyUs} from "@/v-home/WhyUs/WhyUs.models";
import Image from "next/image";

export default function WhyUs(props:tWhyUs){
    return (
        <div
        className={css.wrapper}
        >
            <h2
                className={css.title}
            >
                {props.title}
            </h2>
            <p
                className={css.content}
                dangerouslySetInnerHTML={{__html:props.content}}
            />
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
                                    {
                                        index + 1 < 10 ? `0${index + 1}` : index + 1
                                    }
                                </span>
                                <h3 className={css.card__title}>{item.title}</h3>
                                <p
                                    className={css.card__content}
                                    dangerouslySetInnerHTML={{__html:item.content}}
                                />
                            </li>
                        )
                    })
                }
            </ul>
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
                quality={40}
                {...props.image.props}
                />
            </picture>
        </div>
    )
}