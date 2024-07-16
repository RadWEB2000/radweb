import css from "c-service/PrimaryServiceCard/PrimaryServiceCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import {tPrimaryServiceCard} from "c-service/PrimaryServiceCard/PrimaryServiceCard.models"
import { FaArrowRight as Arrow } from "react-icons/fa";

export default function PrimaryServiceCard({content,image,title,uri}:tPrimaryServiceCard){
    return (
        <li
            className={css.wrapper}
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
                <div
                    className={css.details}
                >
                    <h3
                        className={css.title}
                        dangerouslySetInnerHTML={{__html:title}}
                    />
                    <p
                        className={css.content}
                        dangerouslySetInnerHTML={{__html:content}}
                    />
                </div>
                <div
                    className={css.button__wrapper}
                >
                    <Link 
                        className={css.button}
                        href={uri}
                    >
                        <Arrow/>
                    </Link>
                </div>
            </div>
        </li>
    )
}