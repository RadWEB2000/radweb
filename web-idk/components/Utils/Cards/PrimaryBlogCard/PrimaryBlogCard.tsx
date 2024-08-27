import css from "cards/PrimaryBlogCard/PrimaryBlogCard.module.scss"
import Link from "next/link";
import {tPrimaryBlogCard} from "cards/PrimaryBlogCard/PrimaryBlogCard.models"
import Image from "next/image";

export default function PrimaryBlogCard(props:tPrimaryBlogCard) {
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
                    quality={30}
                    title={props.image.title}
                />
            </picture>
            <div
                className={css.container}
            >
                <p
                    className={css.author}
                    dangerouslySetInnerHTML={{__html:`${props.fullname.firstname.slice(0,1)}. ${props.fullname.lastname}`}}
                />
                <h3
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <p
                    className={css.exceprt}
                    dangerouslySetInnerHTML={{__html:props.excerpt.length < 110 ? props.excerpt : props.excerpt.substring(0,107).trim() + "..."}}
                />
            </div>
            <div
                className={css.details}
            >
                <Link
                    className={css.category}
                    dangerouslySetInnerHTML={{__html:props.category.title}}
                    href={props.category.url}
                />
                <p
                    className={css.release}
                    dangerouslySetInnerHTML={{__html:`21 kwi 2024`}}            
                />                   
            </div>
        </Link>
    )
}