import css from "buttons/PrimaryButton/PrimaryButton.module.scss";
import Link from "next/link";
import {tPrimaryButton} from "buttons/PrimaryButton/PrimaryButton.models"
import { BsArrowRight as Arrow} from "react-icons/bs";

export default function PrimaryButton({theme,title,url}:tPrimaryButton){
    return (
        <Link
            className={css.wrapper}
            data-theme={theme}
            href={url}
        >
            <span
                className={css.title}
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