import css from "@/v-home/Overview/Overview.module.scss";
import { tOverview } from "@/v-home/Overview/Overview.models";

export default function Overview(props: tOverview) {
  return (
    <section className={css.wrapper}>
      <h2
        className={`slogan ${css.title}`}
        dangerouslySetInnerHTML={{ __html: props.title }}
      />
      <p
        className={css.content}
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </section>
  );
}
