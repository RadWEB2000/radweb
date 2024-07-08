import {tPrimaryPersonCard} from "c-person/PrimaryPersonCard/PrimaryPersonCard.models"
import Image from "next/image"
import Link from "next/link"
import css from "c-person/PrimaryPersonCard/PrimaryPersonCard.module.scss"

export default function PrimaryPersonCard({fullname,image,industry,uri}:tPrimaryPersonCard){
    return (
        <Link
            className={css.wrapper}
            href={uri}
        >
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
                    quality={34}
                />
            </picture>
            <div
                className={css.box}
            >
                <span
                    className={css.industry}
                    dangerouslySetInnerHTML={{__html:industry}}
                />
                <h3
                    className={css.fullname}
                >
                    <span
                        className={css.firstname}
                        dangerouslySetInnerHTML={{__html:fullname.firstname}}
                    />
                    <span
                        className={css.lastname}
                        dangerouslySetInnerHTML={{__html:fullname.lastname}}
                    />
                </h3>
            </div>
        </Link>
    ) 
}