import css from "@/nav/Settings/Settings.module.scss";
import { tSettings } from "@/nav/Settings/Settings.models";

export default function Settings(props: tSettings) {
  return <div className={css.wrapper}>{props.children}</div>;
}
