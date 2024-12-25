import css from "@/v-home/About/About.module.scss";
import { tAbout } from "@/v-home/About/About.models";
import Image from "next/image";
import { PrimaryButton as Button } from "@/ui/index";

export default function About(props: tAbout) {
  return (
    <div className={css.wrapper}>
      <section className={css.container}>
        <h2
          className={css.title}
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <p
          className={css.content}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        <Button {...props.button} mode="link" theme="white" />
      </section>
      <picture className={css.media}>
        <Image
          alt={props.image.altText}
          className={css.image}
          fill
          loading="lazy"
          src={props.image.sourceSrc}
          title={props.image.title}
          quality={30}
          {...props.image.props}
        />
      </picture>
    </div>
  );
}
