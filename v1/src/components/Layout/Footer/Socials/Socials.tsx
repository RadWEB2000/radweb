import css from "@/footer/Socials/Socials.module.scss";
import { tSocials } from "@/footer/Socials/Socials.models";
import Link from "next/link";
import { getSocial } from "@/func/getSocials";
import { CSSProperties } from "react";

export default function Socials(props: tSocials) {
  return (
    <ul className={css.wrapper}>
      {props.socials.map((item) => {
        const social = getSocial(item);

        return (
          <Link
            className={css.social}
            href={item}
            key={item}
            title={social.title}
            style={
              {
                "--socialMediaColor": social.color,
              } as CSSProperties
            }
          >
            {social.icon}
          </Link>
        );
      })}
    </ul>
  );
}
