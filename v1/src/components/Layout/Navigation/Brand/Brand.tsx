"use client";
import css from "@/nav/Brand/Brand.module.scss";
import Link from "next/link";
import { tBrand } from "@/nav/Brand/Brand.models";
import Image from "next/image";
import { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";

export default function Brand(props: tBrand) {
  const { close } = useContext(MenuContext);
  return (
    <Link
      className={css.wrapper}
      href={props.url}
      title={props.title}
      onClick={close}
      {...props.props}
    >
      {props.logo && (
        <Image
          alt={props.logo.altText}
          className={css.logo}
          loading="eager"
          height={120}
          priority
          src={props.logo.sourceSrc}
          title={props.logo.title}
          width={120}
          {...props.logo.props}
        />
      )}
      {props.brand && <p className={css.brand}>{props.brand}</p>}
    </Link>
  );
}
