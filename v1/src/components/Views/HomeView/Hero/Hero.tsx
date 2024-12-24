import css from "@/v-home/Hero/Hero.module.scss";
import { tHero } from "@/v-home/Hero/Hero.models";
import Image from "next/image";
import { PrimaryButton as Button } from "@/ui/index";

export default function Hero(props: tHero) {
  return (
    <header className={css.wrapper}>
      <figure className={css.media}>
        {props.media.type === "video" && (
          <video className={css.video} {...props.media.props}>
            <source src={props.media.src} type={props.media.file} />
          </video>
        )}
        {props.media.type === "image" && (
          <Image
            alt={props.media.altText}
            className={css.image}
            fill
            loading="eager"
            priority
            src={props.media.sourceSrc}
            title={props.media.title}
            {...props.media.props}
          />
        )}
      </figure>
      <hgroup className={css.headings}>
        <h1
          className={css.title}
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <h2
          className={css.slogan}
          dangerouslySetInnerHTML={{ __html: props.slogan }}
        />
      </hgroup>
      <ul className={css.buttons}>
        {props.buttons.map((item) => {
          return (
            <Button
              {...item}
              theme="light"
              mode="link"
              key={item.title}
              {...item.props}
            />
          );
        })}
      </ul>
    </header>
  );
}
