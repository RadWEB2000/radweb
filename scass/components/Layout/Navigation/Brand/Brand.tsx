import css from "nav/Brand/Brand.module.scss"
import Image from "next/image";
import Link from "next/link";
import {tBrand} from "nav/Brand/Brand.models"

export default function Brand(props:tBrand){
    return (
        <Link
            className={css.wrapper}
            href={props.url}
        >
            {
                props.logo &&
                <picture
                    className={css.media}
                >
                    <Image
                        alt={props.logo.altText}
                        className={css.image}
                        fill
                        loading="eager"
                        priority
                        src={props.logo.sourceSrc}
                        title={props.logo.title}
                        quality={30}
                    />
                </picture>
            }
            <span
                className={css.brand}
                dangerouslySetInnerHTML={{__html:props.title}}
            />
        </Link>
    )
}