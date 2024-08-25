import css from "cards/PrimaryPersonCard/PrimaryPersonCard.module.scss"
import Image from "next/image";
import Link from "next/link";
import {tPrimaryPersonCard} from "cards/PrimaryPersonCard/PrimaryPersonCard.models"
export default function PrimaryPersonCard(props:tPrimaryPersonCard){
    return (
        <Link 
            className={css.wrapper}
            href={props.url}
        >
            <picture
                className={css.image__wrapper}
            >
                <Image
                    alt={props.image.altText}
                    className={css.image}
                    fill
                    loading="lazy"
                    src={props.image.sourceUrl}
                    quality={40}
                    title={props.image.title}
                />
            </picture>
            <div
                className={css.container}
            >
                <h3
                    className={css.fullname}
                >
                    <span
                        className={css.firstname}
                        dangerouslySetInnerHTML={{__html:props.fullname.firstname}}
                    />
                    <span
                        className={css.lastname}
                        dangerouslySetInnerHTML={{__html:props.fullname.lastname}}
                    />
                </h3>
                <strong
                    className={css.occupation}
                    dangerouslySetInnerHTML={{__html:props.occupation}}
                />
            </div>
        </Link>
    )   
}