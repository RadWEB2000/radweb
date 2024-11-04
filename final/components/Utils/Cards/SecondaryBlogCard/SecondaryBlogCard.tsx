import Link from "next/link";
import {tSecondaryBlogCard } from "cards/SecondaryBlogCard/SecondaryBlogCard.models";
import css from "cards/SecondaryBlogCard/SecondaryBlogCard.module.scss"
import Image from "next/image";
export default function SecondaryBlogCard(props:tSecondaryBlogCard){
    return (
        <Link
            className={css.wrapper}
            href={props.url}
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
                    quality={30}
                    {...props.image.props}
                />
            </picture>
            <section
                className={css.container}
            >
                <h3
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <p
                    className={css.release}
                    dangerouslySetInnerHTML={{__html:props.release}}
                />
                <Link
                    className={css.category}
                    href={props.category.url}
                >
                    {props.category.title}
                </Link>
            </section>
        </Link>
    )
}