import css from "cards/PrimaryBlogCard/PrimaryBlogCard.module.scss"
import Image from "next/image";
import Link from "next/link";
import {tPrimaryBlogCard} from "cards/PrimaryBlogCard/PrimaryBlogCard.models";

export default function PrimaryBlogCard(props:tPrimaryBlogCard){
    return (
        <li
            className={css.wrapper}
        >
            <div
                className={css.container}
            >
                <Link
                    className={css.link}
                    href={props.url}
                >
                    <h3
                        className={css.title}
                        dangerouslySetInnerHTML={{__html:props.title}}
                    />
                </Link>
                <p
                    className={css.excerpt}
                    dangerouslySetInnerHTML={{__html:props.excerpt.length <= 110 ? props.excerpt : `${props.excerpt.slice(0,107).trim()}...`}}
                />
            </div>
            <div
                className={css.box}
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
                    />
                </picture>
                <aside
                    className={css.details}
                >
                    <Link
                        className={css.category}
                        dangerouslySetInnerHTML={{__html:props.category.title}}
                        href={props.category.url}
                    />
                    <p
                        className={css.release}
                        dangerouslySetInnerHTML={{__html:props.release}}
                    />
                </aside>
            </div>
        </li>       
    )
}