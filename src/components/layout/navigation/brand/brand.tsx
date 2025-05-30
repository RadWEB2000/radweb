import Image from "next/image";
import Link from "next/link";
import logo from "@/img/logo.webp"
import css from "@/nav/brand/brand.module.scss"

type brand = { logo: image } & link;

export default function Brand({ logo, label, uri }: brand) {
    return (
        <Link className={css.wrapper} href={uri} >
            <Image
                alt={logo.alt}
                className={css.logo}
                src={logo.src}
                title={logo.title}
                height={50}
                width={35}
                quality={55}
                sizes=""
                priority
                loading="eager"
            />
            <p className={css.brand}>{label}</p>
        </Link>
    )
}