import {tPrimaryServiceCard} from "cards/PrimaryServiceCard/PrimaryServiceCard.models"
import css from "cards/PrimaryServiceCard/PrimaryServiceCard.module.scss"
import Link from "next/link"
import { GoArrowUpRight as Arrow } from "react-icons/go";

export default function PrimaryServiceCard(props:tPrimaryServiceCard) {
    return(
        <li
            className={css.wrapper}
        >
            <Link
                className={css.main}
                href={props.url}
            >
                <h3
                    className={css.main__heading}
                >
                    {props.title}
                </h3>
                <i
                    className={css.main__icon}
                >
                    <Arrow/>
                </i>
            </Link>
            {
                props.buttons &&
                <ul
                    className={css.buttons}
                >
                    {
                        props.buttons.slice(0,5).map((item) => {
                            return (
                                <Link
                                    className={css.button}
                                    dangerouslySetInnerHTML={{__html:item.title}}
                                    href={item.url}
                                    rel="index follow"
                                    key={item.title}
                                />
                            )
                        })
                    }
                </ul>
            }
        </li>
    )
}