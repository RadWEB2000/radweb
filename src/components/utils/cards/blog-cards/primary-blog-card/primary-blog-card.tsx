import css from "@/cards/blog-cards/primary-blog-card/primary-blog-card.module.scss"
import Image from "next/image";
import Link from "next/link";
import { CiCalendar as Calendar, CiClock2 as Clock } from "react-icons/ci";

type primary_blog_card = {
    image: image,
    title: string;
    uri: string;
    category: link;
    button: string;
    readingTime: number;
    release: string;
}

export default function PrimaryBlogCard({ category, image, readingTime, release, title, uri }: primary_blog_card) {
    return (
        <Link className={css.card} href={uri} >
            <figure className={css.card__media} >
                <Image
                    {...image}
                    className={css.card__media__image}
                    loading="lazy"
                    fill
                />
            </figure>
            <div className={css.card__details} >
                <Link className={css.card__details__category} href={category.label} >{category.label}</Link>
                <h3 className={css.card__details__title} >{title}</h3>
                <div className={css.card__details__info} >
                    <p className={css.card__details__info__item}>
                        <i className={css.card__details__info__item__icon} ><Calendar /></i>
                        <span className={css.card__details__info__item__label} >{release}</span>
                    </p>
                    <p className={css.card__details__info__item} >
                        <i className={css.card__details__info__item__icon}  ><Clock /></i>
                        <span className={css.card__details__info__item__label}  >{`${readingTime}min`}</span>
                    </p>
                </div>

            </div>
        </Link>
    )
}