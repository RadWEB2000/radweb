// import service_img from "@/img/abstract-one.webp";
import css from "@/v-home/Hero/Hero.module.scss";
import {
  HeroBlogCard as Blog,
  HeroServiceCard as Services,
} from "@/cards/index";
import { RegularButton as Button } from "@/buttons/index";
import { tHero } from "@/v-home/Hero/Hero.models";

export default function Hero(props: tHero) {
  return (
    <header className={css.wrapper}>
      <figure className={css.media}>
        <video
          className={css.video}
          src={props.video.src}
          {...props.video.props}
        />
      </figure>
      <section className={css.container}>
        <span className={css.line} />
        <h1 className={css.title}>{props.title}</h1>
        <p className={css.content}>{props.content}</p>
        <Services className={css.services} cards={props.services} />
        <Blog className={css.blog} cards={props.articles} />
        {props.buttons && (
          <ul className={css.buttons}>
            {props.buttons.map((item) => {
              return (
                <Button
                  variant="link"
                  key={item.title}
                  title={item.title}
                  url={item.url}
                />
              );
            })}
          </ul>
        )}
      </section>
    </header>
  );
}
