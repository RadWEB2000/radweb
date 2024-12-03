import css from "@/buttons/PrimaryButton/PrimaryButton.module.scss";
import { tPrimaryButton } from "@/buttons/PrimaryButton/PrimaryButton.models";
import Link from "next/link";
import { RiArrowRightLine as Arrow } from "react-icons/ri";

export default function PrimaryButton(props: tPrimaryButton) {
  if (props.variant === "link") {
    return (
      <Link
        className={css.wrapper}
        href={props.url}
        // theme={props.theme}
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
      <button
        className={css.wrapper}
        // theme={props.theme}
        {...props.props}
      >
        <span className={css.title}>{props.title}</span>
        <i className={css.icon}>
          <Arrow />
        </i>
      </button>
    );
  }
}
