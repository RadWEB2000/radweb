import Link from "next/link";
import css from "nav/Brand/Brand.module.scss";
import {tBrand} from "nav/Brand/Brand.models"
import Image from "next/image";
export default function Brand(props:tBrand){
    return (
        <Link
            className={css.wrapper}
            href={props.url}
        >
            <picture
                className={css.media}
            >
                <Image
                    alt={props.icon.altText}
                    className={css.image}
                    fill
                    loading="eager"
                    priority
                    src={props.icon.sourceSrc}
                    title={props.icon.title}
                    quality={30}
                    {...props.icon.props}
                />
            </picture>
            <p
                className={css.title}
            >
                {props.title}
            </p>
        </Link>
    )
}