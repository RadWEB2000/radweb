import css from "cards/PersonCard/PrimaryPersonCard/PrimaryPersonCard.module.scss"
import Image from "next/image";
import Link from "next/link";
import {tPrimaryPersonCard} from "cards/PersonCard/PrimaryPersonCard/PrimaryPersonCard.models"

export default function PrimaryPersonCard({fullname:{firstname,lastname},image,industry,occupation,uri}:tPrimaryPersonCard){
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
                    quality={15}
                />
            </picture>
            <div
                className={css.box}
            >
                <span
                    className={css.industry}
                    dangerouslySetInnerHTML={{__html:industry}}
                />

                <div
                    className={css.details}
                >
                    <h3
                        className={css.fullname}
                    >{`${firstname} ${lastname}`}</h3>
                    <p 
                        className={css.occupation}
                        dangerouslySetInnerHTML={{__html:occupation}}
                    />
                </div>
            </div>
        </Link>
    )
}