import css from "@/v-home/Overview/Overview.module.scss";
import Image from "next/image";
import { tOverview } from "@/v-home/Overview/Overview.models";

export default function Overview(props: tOverview) {
  return (
    <section className={css.wrapper}>
      <picture className={css.media}>
        {props.slogan && <h3 className={css.slogan}>{props.slogan}</h3>}
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
      <article className={css.container}>
        <h2 className={css.title}>{props.title}</h2>
        <p
          className={css.content}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </article>
    </section>
  );
}
