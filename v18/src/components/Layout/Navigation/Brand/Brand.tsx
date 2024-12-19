import css from "@/nav/Brand/Brand.module.scss";
import Image from "next/image";
import Link from "next/link";
import { tBrand } from "@/nav/Brand/Brand.models";

export default function Brand(props: tBrand) {
  return (
    <Link className={css.wrapper} href={props.url} {...props.props}>
      <Image
        alt={props.logo.altText}
        className={css.logo}
        fill
        loading="eager"
        src={props.logo.sourceSrc}
        priority
        title={props.logo.title}
        quality={50}
        {...props.logo.props}
      />
    </Link>
  );
}
