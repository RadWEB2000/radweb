import css from "cards/PrimaryProjectCard/PrimaryProjectCard.module.scss"
import Image from "next/image";
import Link from "next/link";
import { tPrimaryProjectCard } from "cards/PrimaryProjectCard/PrimaryProjectCard.models";
import { TfiArrowTopRight as Arrow} from "react-icons/tfi";

export default function PrimaryProjectCard(props:tPrimaryProjectCard){
    return (
        <li
            className={css.wrapper}
        >
            <div
                className={css.container}
            >
                <aside
                    className={css.details}
                >
                    <h3
                        className={css.slogan}
                        dangerouslySetInnerHTML={{__html:props.slogan}}
                    />
                    <p
                        className={css.release}
                        dangerouslySetInnerHTML={{__html:props.release}}
                    />
                </aside>
                <section
                    className={css.box}
                >
                    <p
                        className={css.content}
                        dangerouslySetInnerHTML={{__html:props.content}}
                    />
                    <Link 
                        className={css.button}
                        href={props.url}
                    >
                        <h3
                            className={css.button__label}
                            dangerouslySetInnerHTML={{__html:props.title}}
                        />
                        <i
                            className={css.button__arrow}
                        >
                            <Arrow/>
                        </i>
                    </Link>
                </section>
            </div>
            <picture
                className={css.image__wrapper}
            >
                <Image
                    alt={props.image.altText}
                    className={css.image}
                    fill
                    loading="lazy"
                    src={props.image.sourceUrl}
                    quality={50}
                    title={props.image.title}
                />
            </picture>
        </li>
    )
}