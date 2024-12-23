import css from "@/footer/Details/Details.module.scss";
import { tDetails } from "@/footer/Details/Details.models";
import { EMail, Phone } from "@/ico/index";
import Link from "next/link";

export default function Details(props: tDetails) {
  function getContactIcon(variant: "e-mail" | "telephone") {
    switch (variant) {
      case "e-mail":
        return <EMail />;
      case "telephone":
        return <Phone />;
    }
  }

  return (
    <div className={css.wrapper}>
      <h4 className={css.brand}>{props.brand}</h4>
      {props.identificationData && (
        <ul className={css.identification}>
          {props.identificationData.map((item) => {
            return (
              <li className={css.identification__item} key={item.title}>
                <strong className={css.identification__item__title}>
                  {item.title}
                </strong>
                <p className={css.identification__item__content}>
                  {item.content}
                </p>
              </li>
            );
          })}
        </ul>
      )}
      {props.contact && (
        <ul className={css.contact}>
          {props.contact.map((item) => {
            return (
              <Link
                className={css.contact__item}
                href={item.url}
                key={item.title}
                title={item.title}
                {...item.attributes}
              >
                <i className={css.contact__item__icon}>
                  {getContactIcon(item.type)}
                </i>
                <span className={css.contact__item__content}>
                  {item.content}
                </span>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
}
