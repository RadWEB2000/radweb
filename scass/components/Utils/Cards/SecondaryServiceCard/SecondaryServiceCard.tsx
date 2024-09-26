import {tSecondaryServiceCard} from "cards/SecondaryServiceCard/SecondaryServiceCard.models"
import Image from "next/image"
import Link from "next/link"

export default function SecondaryServiceCard(props:tSecondaryServiceCard) {
    return (
        <li>
            <div>
                <div>
                    <h4
                        dangerouslySetInnerHTML={{__html:props.slogan}}
                    />
                    <h3
                        dangerouslySetInnerHTML={{__html:props.title}}
                    />
                </div>
                <button>

                </button>
            </div>
            <div>
                <section>
                    <p
                        dangerouslySetInnerHTML={{__html:props.content}}
                    />
                    <Link
                        href={props.button.url}
                    >
                        {props.button.title}
                    </Link>
                    <picture>
                        <Image
                            alt={props.image.altText}
                            fill
                            loading="lazy"
                            src={props.image.sourceSrc}
                            title={props.image.title}
                            quality={40}
                        />
                    </picture>
                </section>
            </div>
        </li>
    )
}