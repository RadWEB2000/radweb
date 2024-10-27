import css from "cards/PrimaryBlogCard/PrimaryBlogCard.module.scss";
import {tPrimaryBlogCard} from "cards/PrimaryBlogCard/PrimaryBlogCard.models";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight as Arrow} from "react-icons/fa6";

export default function PrimaryBlogCard(props:tPrimaryBlogCard){
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
                    quality={20}
                />
            </picture>
            <div
                className={css.main}
            >
                <Link
                    className={css.category}
                    href={props.category.url}
                >
                    {props.category.title}
                </Link>
                <h3
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <p
                    className={css.excerpt}
                    dangerouslySetInnerHTML={{__html:props.excerpt.length < 120 ? props.excerpt.length : props.excerpt.substring(0,117).trim() + "..."}}
                />
            </div>
            <div
                className={css.details}
            >
                <p
                    className={css.release}
                    dangerouslySetInnerHTML={{__html:props.release}}
                />
                <Link
                    className={css.button}
                    href={props.url}
                >
                    <Arrow/>
                </Link>
            </div>
        </li>
    )
}