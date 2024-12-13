import css from "@/v-home/Projects/Projects.module.scss";
import { tProjects } from "@/v-home/Projects/Projects.models";
import { PrimaryButton as Button } from "@/buttons/index";
import { RegularProjectCard as Card } from "@/cards/index";

export default function Projects(props: tProjects) {
  return (
    <div className={css.wrapper}>
      <section className={css.container}>
        <hgroup className={css.headings}>
          <h2 className={css.title}>{props.title}</h2>
          {props.slogan && <h3 className={css.slogan}>{props.slogan}</h3>}
        </hgroup>
        <p
          className={css.content}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        <Button
          title={props.button.title}
          url={props.button.url}
          props={props.button.props}
          theme="light"
          variant="link"
        />
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
