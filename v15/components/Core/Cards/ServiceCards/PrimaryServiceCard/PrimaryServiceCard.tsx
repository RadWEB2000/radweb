import css from "cards/service/PrimaryServiceCard/PrimaryServiceCard.module.scss";
import {tPrimaryServiceCard} from "cards/service/PrimaryServiceCard/PrimaryServiceCard.models"
import Link from "next/link";

export default function PrimaryServiceCard(props:tPrimaryServiceCard){
    return (
        <li
            className={css.wrapper}
        >
            <span
                data-tag={props.tag.toLowerCase()}
                className={css.tag}
            >
                {props.tag}
            </span>
            <Link
                className={css.link}
                href={props.url}
            >
                <h3
                    className={css.title}
                >
                    {props.title}
                </h3>
            </Link>
            <p
                className={css.content}
                dangerouslySetInnerHTML={{__html:props.content}}
            />
        </li>
    )
}