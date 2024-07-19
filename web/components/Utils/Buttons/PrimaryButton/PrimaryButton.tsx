import Link from "next/link";
import {tPrimaryButton} from "buttons/PrimaryButton/PrimaryButton.models"
import { MdKeyboardArrowRight as Arrow } from "react-icons/md";
import css from "buttons/PrimaryButton/PrimaryButton.module.scss";

export default function PrimaryButton({theme,title,url}:tPrimaryButton){
    return (
        <Link
            className={css.wrapper}
            data-theme={theme}
            href={url}
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