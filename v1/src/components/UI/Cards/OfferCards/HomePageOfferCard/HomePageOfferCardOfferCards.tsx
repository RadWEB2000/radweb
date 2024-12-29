import { ArrowExpand } from "@/ico/index";
import { tHomePageOfferCard } from "@/c-offers/HomePageOfferCard/HomePageOfferCardOfferCards.models";
import css from "@/c-offers/HomePageOfferCard/HomePageOfferCardOfferCards.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function HomePageOfferCard(props: tHomePageOfferCard) {
  return (
    <li className={css.wrapper}>
      <div className={css.box}>
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
          <ArrowExpand
            className={css.icon}
            attributes={{
              fill: "#fff",
            }}
          />
        </Link>
      </div>
      <span className={css.line} />
      <section className={css.container}>
        <p
          className={css.content}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
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
      </section>
    </li>
  );
}
