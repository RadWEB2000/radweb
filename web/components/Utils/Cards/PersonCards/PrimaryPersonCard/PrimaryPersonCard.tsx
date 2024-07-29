import Link from "next/link";
import {tPrimaryPersonCards} from  "c-person/PrimaryPersonCard/PrimaryPersonCard.models"
import Image from "next/image";
import css from "c-person/PrimaryPersonCard/PrimaryPersonCard.module.scss"
export default function PrimaryPersonCards({fullname, industry, image, occupation, uri}:tPrimaryPersonCards){
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
                    quality={40}
                />
            </picture>
            <div
                className={css.box}
            >
                <span
                    className={css.indsutry}
                    dangerouslySetInnerHTML={{__html:industry}}
                />
                <header
                    className={css.details}
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
                    <h4
                        className={css.occupation}
                        dangerouslySetInnerHTML={{__html:occupation}}
                    />
                </header>
            </div>
        </Link>
    )
}