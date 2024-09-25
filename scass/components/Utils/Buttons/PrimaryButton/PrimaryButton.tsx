import css from "buttons/PrimaryButton/PrimaryButton.module.scss"
import Link from "next/link";
import {tPrimaryButton} from "buttons/PrimaryButton/PrimaryButton.models"
import { FaAngleRight as Arrow} from "react-icons/fa";

export default function PrimaryButton(props:tPrimaryButton){
    return (
        <Link
            className={css.wrapper}
            href={props.title}
            hrefLang={props.hrefLang}
        >
            <span
                className={css.label}
            >
                {props.title}
            </span>
            <i
                className={css.icon}
            >
                <Arrow/>
            </i>
        </Link>
    )
}