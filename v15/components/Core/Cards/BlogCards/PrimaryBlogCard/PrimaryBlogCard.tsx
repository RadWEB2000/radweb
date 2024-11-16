import css from "cards/blog/PrimaryBlogCard/PrimaryBlogCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import {tPrimaryBlogCard} from "cards/blog/PrimaryBlogCard/PrimaryBlogCard.models";
import getExceprtLength from "lib/getExceprtLength";
export default function PrimaryBlogCard(props:tPrimaryBlogCard){
    console.log(props.tag)
    return (
        <Link
            className={css.wrapper}
            href={props.button.url}
            {...props.button.props}
        >
            <picture
                className={css.media}
            >
                <p
                    className={css.category}
                    data-category={props.tag}
                >
                    {props.category}
                </p>
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
            <h3
                className={css.title}
                dangerouslySetInnerHTML={{__html:props.title}}
            />
            {
                props.excerpt &&
                <p
                    className={css.excerpt}
                >
                    {getExceprtLength(props.excerpt, 120)}
                </p>
            }
            <p
                className={css.release}
                dangerouslySetInnerHTML={{__html:props.release}}
            />
        </Link>

    )
}