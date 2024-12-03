import css from "@/v-home/About/About.module.scss";
import { tAbout } from "@/v-home/About/About.models";
import Image from "next/image";
import { PrimaryButton as Button } from "@/buttons/index";

export default function About(props: tAbout) {
  return (
    <section className={css.wrapper}>
      <article className={css.container}>
        <h2 className={css.title}>{props.title}</h2>
        <p
          className={css.content}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        <Button
          title={props.button.title}
          url={props.button.url}
          variant="link"
          props={props.button.props}
        />
      </article>
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
    </section>
  );
}
