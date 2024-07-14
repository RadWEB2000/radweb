import { MdArrowForward as Arrow } from "react-icons/md";
import {tPrimaryButton} from "buttons/PrimaryButton/PrimaryButton.models"
import Link from "next/link"
import css from "buttons/PrimaryButton/PrimaryButton.module.scss";

export default function PrimaryButton({title, url}:tPrimaryButton){
    return (
        <Link
            className={css.wrapper}
            href={url}
            rel="index follow"
        >
            <span
                className={css.label}
                dangerouslySetInnerHTML={{__html:title}}
            />
            <i
                className={css.icon}
            >
                <Arrow/>
            </i>
        </Link>
    )
}