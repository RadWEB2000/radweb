import {tPrimaryProjectCard} from "c-projects/PrimaryProjectCard/PrimaryProjectCard.models"
import Image from "next/image"
import Link from "next/link"
import getDate from "lib/getDate"
import css from "c-projects/PrimaryProjectCard/PrimaryProjectCard.module.scss"
export default function PrimaryProjectCard({button,date,excerpt,image,title,uri}:tPrimaryProjectCard){

    const release = getDate(date,"short");

    return (
        <li
            className={css.wrapper}
        >
            <Link
                className={css.title}
                href={uri}
            >
                <h3
                    dangerouslySetInnerHTML={{__html:title}}
                />
            </Link>
            <span
                className={css.line}
            />
            <div
                className={css.box}
            >
                <section
                    className={css.content}
                >
                    <p
                        dangerouslySetInnerHTML={{__html:excerpt}}
                    />
                </section>
                <ul
                    className={css.details}
                >
                    <li>
                        <strong>Data</strong>
                        <p>{release}</p>
                    </li>
                </ul>
                <picture
                    className={css.image__wrapper}
                >
                    <Image
                        alt={image.altText}
                        className={css.image}
                        fill
                        loading="lazy"
                        src={image.sourceUrl}
                        title={image.title}
                        quality={15}
                    />
                </picture>
            </div>
        </li>
    )
}