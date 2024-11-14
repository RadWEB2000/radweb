import css from "cards/blog/PrimaryBlogCard/PrimaryBlogCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import {tPrimaryBlogCard} from "cards/blog/PrimaryBlogCard/PrimaryBlogCard.models";
export default function PrimaryBlogCard(props:tPrimaryBlogCard){
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
            <p
                className={css.release}
                dangerouslySetInnerHTML={{__html:props.release}}
            />
        </Link>

    )
}