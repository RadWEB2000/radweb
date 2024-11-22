import css from "cards/career/PrimaryCareerCard/PrimaryCareerCard.module.scss"
import {tPrimaryCareerCard} from "cards/career/PrimaryCareerCard/PrimaryCareerCard.models"
import Image from "next/image"
import { PrimaryButton as Button} from "buttons/index"

export default function PrimaryCareerCard(props:tPrimaryCareerCard) {
    return (
        <li
            className={css.wrapper}
        >
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
                     quality={45}
                     {...props.image.props}
                />
            </picture>
            <section
                className={css.container}
            >
                <span
                    className={css.duration}
                >
                    {`${props.duration.start} - ${props.duration.end}`}
                </span>
                <h3
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <h4
                    className={css.job}
                    dangerouslySetInnerHTML={{__html:props.job}}
                />
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
                <Button
                    {...props.button}
                    theme="light"
                    type="link"
                />
            </section>
        </li>
    )
}