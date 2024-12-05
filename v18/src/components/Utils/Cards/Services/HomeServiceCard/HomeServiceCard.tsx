import css from "@/cards/Services/HomeServiceCard/HomeServiceCard.module.scss";
import { tHomeServiceCard } from "@/cards/Services/HomeServiceCard/HomeServiceCard.models";
import Image from "next/image";
import { RegularButton as Button } from "@/buttons/index";

export default function HomeServiceCard(props: tHomeServiceCard) {
  return (
    <li className={css.wrapper}>
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
      <section className={css.container}>
        <h3 className={css.title}>{props.title}</h3>
        <p
          className={css.content}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </section>
      <div className={css.button}>
        <Button
          title={props.button.title}
          url={props.button.url}
          props={props.button.props}
          variant="link"
        />
      </div>
    </li>
  );
}
