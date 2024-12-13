import css from "@/footer/Details/Details.module.scss";
import Link from "next/link";
import { tDetails } from "@/footer/Details/Details.models";
import { BsMailbox as Mail, BsPhone as Phone } from "react-icons/bs";
import { SlLocationPin as Location } from "react-icons/sl";

export default function Details(props: tDetails) {
  function getContactIcon(variant: "phone" | "e-mail") {
    switch (variant) {
      case "e-mail":
        return <Mail />;
      case "phone":
        return <Phone />;
    }
  }

  return (
    <address className={css.wrapper}>
      <h2 className={css.brand}>{props.brand}</h2>
      {props.nip && (
        <p className={css.nip}>
          <strong>NIP:</strong>
          {props.nip}
        </p>
      )}
      {props.regon && (
        <p className={css.regon}>
          <strong>REGON:</strong>
          {props.regon}
        </p>
      )}
      {props.address && (
        <div className={css.address}>
          <i className={css.address__icon}>
            <Location />
          </i>
          <p className={css.address__location}>
            {props.address.location}
            <br />
            {props.address.zipCode}
          </p>
        </div>
      )}
      <ul className={css.contact}>
        {props.contact.map((item) => {
          return (
            <Link
              className={css.contact__item}
              href={item.url}
              key={item.label}
              title={item.title}
              {...item.props}
            >
              <i className={css.contact__item__icon}>
                {getContactIcon(item.variant)}
              </i>
              <span className={css.contact__item__label}>{item.label}</span>
            </Link>
          );
        })}
      </ul>
    </address>
  );
}
