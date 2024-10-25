import Image from "next/image";
import Link from "next/link";
import {tPrimaryProjectCard} from "cards/PrimaryProjectCard/PrimaryProjectCard.models";
import css from "cards/PrimaryProjectCard/PrimaryProjectCard.module.scss"

export default function PrimaryProjectCard(props:tPrimaryProjectCard){
    return (
        <li>
            <section>
                <h3
                    dangerouslySetInnerHTML={{__html:props.title}}            
                />
                <p
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
                {
                    props.button &&
                    <Link
                        href={props.button.url}
                    >
                        {props.button.title}
                    </Link>
                }
                <ul></ul>
            </section>
            <picture>
                <Image
                    alt={props.media.altText}
                    fill
                    loading="lazy"
                    src={props.media.sourceSrc}
                    title={props.media.title}
                    quality={40}
                    {...props.media.props}
                />
            </picture>
        </li>
    )
}