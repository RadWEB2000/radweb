import Image from "next/image";
import Link from "next/link";
import { FaAngleRight as Arrow } from "react-icons/fa";
import { tPrimaryServiceCard } from "c-services/PrimaryServiceCard/PrimaryServiceCard.models";

export default function PrimaryServiceCard({button,content,icon,title}:tPrimaryServiceCard) {
    return (
        <li>
            <picture>
                <Image
                    alt={icon.altText}
                    fill
                    loading="lazy"
                    src={icon.sourceUrl}
                    title={icon.title}
                    quality={4}
                />
            </picture>
            <h3
                dangerouslySetInnerHTML={{__html:title}}
            />
            <p
                dangerouslySetInnerHTML={{__html:content}}
            />
            <Link href={button.url}>
                <span
                    dangerouslySetInnerHTML={{__html:button.title}}
                />
                <i>
                    <Arrow/>
                </i>
            </Link>
        </li>
    )
}