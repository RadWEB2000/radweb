import css from "cards/service/PrimaryServiceCard/PrimaryServiceCard.module.scss"
import Link from "next/link";
import { GoArrowUpRight as Arrow } from "react-icons/go";
import {tPrimaryServiceCard} from "cards/service/PrimaryServiceCard/PrimaryServiceCard.models"

export default function PrimaryServiceCard(props:tPrimaryServiceCard){
    return (
        <li
            className={css.wrapper}
        >
            <section
                className={css.container}
            >
                <h3
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:props.content}}
                />
            </section>
            <div
                className={css.box}
            >
                <Link
                    className={css.button}
                    href={props.button.url}
                    {...props.button.props}
                >
                    <Arrow/>
                </Link>
            </div>
        </li>
    )
}