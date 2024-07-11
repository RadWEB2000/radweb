import css from "c-blog/PrimaryBlogCard/PrimaryBlogCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import {tPrimaryBlogCard} from "c-blog/PrimaryBlogCard/PrimaryBlogCard.models"
import getDate from "lib/getDate";
export default function PrimaryBlogCard({date,excerpt,image,title,uri}:tPrimaryBlogCard){
    const release = getDate(date,"short");
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
                    quality={30}
                />
            </picture>
            <div
                className={css.box}
            >
                <p
                    className={css.release}
                    dangerouslySetInnerHTML={{__html:release}}
                />
                <h3
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <p
                    className={css.excerpt}
                    dangerouslySetInnerHTML={{__html:excerpt.length < 150 ? excerpt : excerpt.substring(0,147) + '...'}}
                />
            </div>
        </Link>
    )
}