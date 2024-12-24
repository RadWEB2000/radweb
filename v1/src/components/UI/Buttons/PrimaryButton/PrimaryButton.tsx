import { ArrowRight as Arrow } from "@/ico/index";
import css from "@/buttons/PrimaryButton/PrimaryButton.module.scss";
import { tPrimaryButton } from "@/buttons/PrimaryButton/PrimaryButton.models";
import Link from "next/link";

export default function PrimaryButton(props: tPrimaryButton) {
  if (props.mode === "link") {
    return (
      <Link
        className={css.wrapper}
        data-theme={props.theme}
        href={props.url}
        {...props.props}
      >
        <span className={css.title}>{props.title}</span>
        <i className={css.icon}>
          <Arrow />
        </i>
      </Link>
    );
  } else {
    return (
      <button className={css.wrapper} data-theme={props.theme} {...props.props}>
        <span className={css.title}>{props.title}</span>
        <i className={css.icon}>
          <Arrow />
        </i>
      </button>
    );
  }
}
