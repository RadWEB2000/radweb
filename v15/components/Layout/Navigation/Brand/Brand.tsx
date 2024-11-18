import css from "nav/Brand/Brand.module.scss";
import Image from "next/image";
import Link from "next/link";
import {tBrand} from "nav/Brand/Brand.models";

export default function Brand(props:tBrand){
    return (
        <div
            className={css.wrapper}
        >
            <Link
                className={css.container}
                href={props.url}
                {...props.props}
            >
                <Image
                    alt={props.image.altText}
                    className={css.image}
                    fill
                    loading="eager"
                    priority
                    src={props.image.sourceSrc}
                    title={props.image.title}
                    quality={30}
                    {...props.image.props}
                />
            </Link>
        </div>
    )
}