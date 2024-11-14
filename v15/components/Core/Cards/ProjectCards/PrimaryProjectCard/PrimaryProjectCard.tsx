import css from "cards/project/PrimaryProjectCard/PrimaryProjectCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { tPrimaryProjectCardWithTheme } from "cards/project/PrimaryProjectCard/PrimaryProjectCard.models";

export default function PrimaryProjectCard(props:tPrimaryProjectCardWithTheme){
    return (
        <li
            className={css.wrapper}
        >
            <picture
                className={css.media}
            >
                <p
                    className={css.category}
                >
                    {props.category}
                </p>
                <Image
                    alt={props.image.altText}
                    className={css.image}
                    fill
                    loading="lazy"
                    src={props.image.sourceSrc}
                    title={props.image.title}
                    quality={45}
                    {...props.image.props}
                />
            </picture>
            <span
                className={`${css.line} ${css.line__horizontal}`}
            />
            <div
                className={css.container}
            >
                <div
                    className={css.details}
                >
                    <h3
                        className={css.title}
                        dangerouslySetInnerHTML={{__html:props.title}}
                    />
                    <p
                        className={css.release}
                    >
                        {props.release}
                    </p>
                    <Link
                        className={css.button}
                        href={props.button.url}
                        {...props.button.props}
                    >
                        {props.button.title}
                    </Link>
                </div>
                <span
                    className={`${css.line} ${css.line__vertival}`}
                />
                <div
                    className={css.box}
                >
                    <p
                        className={css.excerpt}
                        dangerouslySetInnerHTML={{__html:props.excerpt}}
                    />
                </div>
            </div>
        </li>   
    )
}