import css from "cards/PrimaryProjectCard/PrimaryProjectCard.module.scss"
import getDate from "@/lib/getDate";
import Image from "next/image";
import Link from "next/link";
import { TfiArrowRight as Arrow } from "react-icons/tfi";
import {tPrimaryProjectCard} from "cards/PrimaryProjectCard/PrimaryProjectCard.models"
export default function PrimaryProjectCard({author,content,image,release,title,categories,url}:tPrimaryProjectCard){

    const date = getDate(release,"pl","long")

    return (
        <li
            className={css.wrapper}
        >
            <header
                className={css.head}
            >
                <h2
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <Link
                    className={css.button}
                    href={url}
                >
                    <Arrow/>
                </Link>
            </header>
            <span
                className={css.line}
            />
            <article
                className={css.box}
            >
                <section
                    className={css.content}
                >
                    <p
                        dangerouslySetInnerHTML={{__html:content}}
                    />
                </section>
                <ul
                    className={css.details}
                >
                    {
                        release && date &&
                        <li
                        className={css.release}
                            dangerouslySetInnerHTML={{__html:`${date}`}}
                        />
                    }
                    {
                        categories &&
                        <li
                            className={css.categories}
                        >
                            <strong
                                className={css.categories__title}
                                dangerouslySetInnerHTML={{__html:`Kategorie:`}}
                            />
                            {
                                categories &&
                                <ul
                                    className={css.categories__list}
                                >
                                    {categories.map((item,index) => {
                                        return (
                                            <li
                                                className={css.categories__item}
                                                dangerouslySetInnerHTML={{__html:item}}
                                                key={item}
                                            />
                                        )
                                    })}
                                </ul>
                            }
                        </li>
                    }
                    {
                        author &&
                        <li
                            className={css.author}
                        >
                            <Link
                                dangerouslySetInnerHTML={{__html:`${author.fullname.firstname} ${author.fullname.lastname}`}}
                                href={author.uri}
                            />
                        </li>
                    }
                </ul>
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
                        quality={23}
                    />
                </picture>
            </article>
        </li>
    )
}