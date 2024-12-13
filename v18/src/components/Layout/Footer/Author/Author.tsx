import css from "@/footer/Author/Author.module.scss";
import { tAuthor } from "@/footer/Author/Author.models";

export default function Author(props: tAuthor) {
  return (
    <p
      className={css.wrapper}
      dangerouslySetInnerHTML={{
        __html: `${props.author} &copy; ${props.year.start}-${props.year.end}`,
      }}
    />
  );
}
