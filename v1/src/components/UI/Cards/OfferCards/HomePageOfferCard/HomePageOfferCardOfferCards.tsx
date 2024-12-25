import { tHomePageOfferCard } from "@/c-offers/HomePageOfferCard/HomePageOfferCardOfferCards.models";
import css from "@/c-offers/HomePageOfferCard/HomePageOfferCardOfferCards.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function HomePageOfferCard(props: tHomePageOfferCard) {
  return (
    <li className={css.wrapper}>
      <div className={css.details}>
        <h3
          className={css.title}
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <Link
          aria-label={props.button.title}
          className={css.button}
          href={props.button.url}
          {...props.button.props}
        >
          więcej
        </Link>
      </div>
      <section className={css.container}>
        <picture className={css.media}>
          <Image
            alt={props.image.altText}
            className={css.image}
            fill
            loading="lazy"
            src={props.image.sourceSrc}
            title={props.image.title}
            quality={40}
            {...props.image.props}
          />
        </picture>
        <p></p>
      </section>
      {props.subservices && (
        <ul className={css.cards}>
          {props.subservices.map((item) => {
            return (
              <Link className={css.card} href={item.url} key={item.title}>
                {item.title}
              </Link>
            );
          })}
        </ul>
      )}
    </li>
  );
}
