import css from "@/footer/Policies/Policies.module.scss";
import { tPolicies } from "@/footer/Policies/Policies.models";
import Link from "next/link";

export default function Policies(props: tPolicies) {
  return (
    <ul className={css.wrapper}>
      {props.policies.map((item) => {
        return (
          <Link
            className={css.item}
            href={item.url}
            key={item.title}
            {...item.props}
          >
            {item.title}
          </Link>
        );
      })}
    </ul>
  );
}
