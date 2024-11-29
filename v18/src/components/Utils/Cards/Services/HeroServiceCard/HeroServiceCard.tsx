"use client";
import css from "@/cards/Services/HeroServiceCard/HeroServiceCard.module.scss";
import { tHeroServiceCard } from "@/cards/Services/HeroServiceCard/HeroServiceCard.models";
import Link from "next/link";
import { RiArrowRightUpLine as Arrow } from "react-icons/ri";
import Image from "next/image";

export default function HeroServiceCard(props: tHeroServiceCard) {
  return (
    <ul className={css.wrapper}>
      {props.cards.slice(0, 1).map((item) => {
        return (
          <li className={css.container} key={item.title}>
            <picture className={css.media}>
              <Image
                alt={item.image.altText}
                className={css.image}
                fill
                loading="lazy"
                src={item.image.sourceSrc}
                title={item.image.title}
                quality={25}
                {...item.image.props}
              />
            </picture>
            <article className={css.box}>
              <h3 className={css.title}>{item.title}</h3>
              <Link
                className={css.button}
                href={item.button.url}
                {...item.button.props}
              >
                <Arrow />
              </Link>
              <p className={css.excerpt}>{item.excerpt}</p>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
