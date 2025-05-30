import css from "@/nav/menu/menu-item/menu-item.module.scss";
import Link from "next/link"

type menu_item = link & {
    variant?: 'primary' | 'secondary'
}

export default function MenuItem({ label, uri, attrs, variant = 'primary' }: menu_item) {
    return (
        <Link className={`${css.wrapper} ${variant === 'primary' ? css.wrapper__primary : css.wrapper__secondary}`} href={uri} {...attrs} >
            {label}
        </Link>
    )
}