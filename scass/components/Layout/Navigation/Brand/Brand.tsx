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
            <Image
                alt={props.image.altText}
                // fill
                height={70}
                loading="eager"
                src={props.image.sourceSrc}
                priority
                title={props.image.title}
                quality={30}
                width={70}
            />
        </Link>
    )
}