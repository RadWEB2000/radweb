import css from "@/cards/Projects/RegularProjectCard/RegularProjectCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { tRegularProjectCard } from "@/cards/Projects/RegularProjectCard/RegularProjectCard.models";
import { GoDotFill as Dot } from "react-icons/go";

export default function RegularProjectCard(props: tRegularProjectCard) {
  return (
    <Link className={css.wrapper} href={props.url} title={props.title}>
      <picture className={css.media}>
        {props.categories && (
          <ul className={css.categories}>
            {props.categories.map((item, index) => {
              return (
                <li className={css.category} key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        )}
        <Image
          alt={props.image.altText}
          className={css.image}
          loading="lazy"
          fill
          src={props.image.sourceSrc}
          title={props.image.title}
          quality={25}
          {...props.image.props}
        />
      </picture>
      <section className={css.details}>
        <h2 className={css.title}>{props.title}</h2>
        <h3 className={css.subtitle}>
          {`${props.release} `}
          <Dot />
          {` ${props.subtitle}`}
        </h3>
      </section>
    </Link>
  );
}
