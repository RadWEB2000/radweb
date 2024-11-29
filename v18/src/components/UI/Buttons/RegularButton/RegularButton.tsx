import css from "@/buttons/RegularButton/RegularButton.module.scss";
import { tRegularButton } from "@/buttons/RegularButton/RegularButton.models";
import Link from "next/link";
export default function RegularButton(props: tRegularButton) {
  if (props.variant === "link") {
    return (
      <Link
        className={css.wrapper}
        href={props.url}
        // theme={props.theme}
        {...props.props}
      >
        {props.title}
      </Link>
    );
  } else {
    return (
      <button
        className={css.wrapper}
        // theme={props.theme}
        {...props.props}
      >
        {props.title}
      </button>
    );
  }
}
