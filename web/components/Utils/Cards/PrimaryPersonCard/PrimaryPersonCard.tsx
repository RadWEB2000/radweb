import css from "cards/PrimaryPersonCard/PrimaryPersonCard.module.scss"
import Image from "next/image";
import Link from "next/link";
import {tPrimaryPersonCard as Props} from "cards/PrimaryPersonCard/PrimaryPersonCard.models"
export default function PrimaryPersonCard({fullname,image,occupation,url}:Props){
    return (
        <Link
            className={css.wrapper}
            href={url}
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
                    quality={20}
                />
            </picture>
            <div
                className={css.box}
            >
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
                <p
                    className={css.occupation}
                    dangerouslySetInnerHTML={{__html:occupation}}
                />
            </div>
        </Link>
    )
}