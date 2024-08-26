import Link from "next/link";
import {tPrimaryBlogCard} from "cards/PrimaryBlogCard/PrimaryBlogCard.models"
import Image from "next/image";

export default function PrimaryBlogCard(props:tPrimaryBlogCard) {
    return (
        <Link
            href={props.url}
        >
            <picture>
                <Image
                    alt={props.image.altText}
                    fill
                    loading="lazy"
                    src={props.image.sourceUrl}
                    quality={30}
                    title={props.image.title}
                />
            </picture>
            <div>
                <p
                    dangerouslySetInnerHTML={{__html:`${props.fullname.firstname.slice(0,1)}. ${props.fullname.lastname}`}}
                />
                <h3
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <p
                    dangerouslySetInnerHTML={{__html:props.excerpt}}
                />
            </div>
            <aside>
                <Link
                    dangerouslySetInnerHTML={{__html:props.category.title}}
                    href={props.category.url}
                />
                {/* <p
                    dangerouslySetInnerHTML={{__html:`${}`}}            
                />                    */}
            </aside>
        </Link>
    )
}