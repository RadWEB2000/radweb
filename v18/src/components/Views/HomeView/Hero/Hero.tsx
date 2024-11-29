import service_img from "@/img/abstract-one.webp";
import { RegularButton as Button } from "@/buttons/index";
import { HeroServiceCard as Services } from "@/cards/Services/index";
import css from "@/v-home/Hero/Hero.module.scss";

export default function Hero() {
  return (
    <header className={css.wrapper}>
      <figure className={css.media}>
        <video
          autoPlay
          className={css.video}
          controls={false}
          loop
          src="/wallpaper.webm"
        />
      </figure>
      <section className={css.container}>
        <span className={css.line} />
        <div className={css.box}>
          <h1 className={css.title}>RadWEB</h1>
          <p className={css.content}>
            Aker invests in residential communities at the intersection of urban
            and outdoor environments.
          </p>
        </div>
        <div className={css.details}>
          <Services
            cards={[
              {
                button: {
                  url: `#`,
                },
                excerpt: `We are a team of entrepreneurs trained in operations, design, architecture, construction, accounting, and finance`,
                image: {
                  altText: ``,
                  sourceSrc: service_img.src,
                  title: ``,
                },
                title: `Web Care`,
              },
              {
                button: {
                  url: `#`,
                },
                excerpt: `We are a team of entrepreneurs trained in operations, design, architecture, construction, accounting, and finance`,
                image: {
                  altText: ``,
                  sourceSrc: service_img.src,
                  title: ``,
                },
                title: `Strony internetowe`,
              },
              {
                button: {
                  url: `#`,
                },
                excerpt: `We are a team of entrepreneurs trained in operations, design, architecture, construction, accounting, and finance`,
                image: {
                  altText: ``,
                  sourceSrc: service_img.src,
                  title: ``,
                },
                title: `SEO`,
              },
            ]}
          />
          <ul className={css.buttons}>
            <Button variant="link" title="Blog" url="#" />
            <Button variant="link" title="Oferta" url="#" />
            <Button variant="link" title="Kontakt" url="#" />
          </ul>
        </div>
      </section>
    </header>
  );
}
