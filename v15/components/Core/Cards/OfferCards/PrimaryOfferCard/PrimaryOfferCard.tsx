import css from "cards/offer/PrimaryOfferCard/PrimaryOfferCard.module.scss";
import {tPrimaryOfferCard} from "cards/offer/PrimaryOfferCard/PrimaryOfferCard.models"
import Image from "next/image";
import Link from "next/link";

export default function PrimaryOfferCard(props:tPrimaryOfferCard){
    return (
        <li
            className={css.wrapper}
            data-type={props.type}
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
            <div
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
                <Link
                    className={css.button}
                    href={props.button.url}
                    {...props.button.props}
                >
                    {props.button.title}
                </Link>
            </div>
        </li>
    )
}