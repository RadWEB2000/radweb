import css from "@/footer/Socials/Socials.module.scss";
import { tSocials } from "@/footer/Socials/Socials.models";
import Link from "next/link";
import { getSocial } from "@/functions/getSocial";

export default function Socials(props: tSocials) {
  return (
    <ul className={css.wrapper}>
      {props.socials.map((item) => {
        const social = getSocial(item.url);

        return (
          <Link
            className={css.item}
            href={item.url}
            target="_blank"
            rel="noindex follow"
            key={item.url}
            title={item.title ?? social.title}
          >
            {social.icon}
          </Link>
        );
      })}
    </ul>
  );
}
