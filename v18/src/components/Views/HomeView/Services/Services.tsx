import css from "@/v-home/Services/Services.module.scss";
import { tServices } from "@/v-home/Services/Services.models";
import { PrimaryButton as Button } from "@/buttons/index";
import { HomeServiceCard as Card } from "@/cards/Services/index";

export default function Services(props: tServices) {
  return (
    <div className={css.wrapper}>
      <section className={css.container}>
        <hgroup className={css.headings}>
          <h2
            className={css.title}
            dangerouslySetInnerHTML={{ __html: props.title }}
          />
          {props.slogan && (
            <h3
              className={css.slogan}
              dangerouslySetInnerHTML={{ __html: props.slogan }}
            />
          )}
        </hgroup>
        <p
          className={css.content}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        <div className={css.button}>
          <Button
            theme="light"
            title={props.button.title}
            variant="link"
            url={props.button.url}
            props={props.button.props}
          />
        </div>
      </section>
      {props.cards && (
        <ul className={css.cards}>
          {props.cards.map((item) => {
            return <Card {...item} key={item.title} />;
          })}
        </ul>
      )}
    </div>
  );
}
