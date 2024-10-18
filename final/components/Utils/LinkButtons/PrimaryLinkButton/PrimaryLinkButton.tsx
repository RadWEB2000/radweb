import css from "link/PrimaryLinkButton/PrimaryLinkButton.module.scss"
import Link from "next/link";
import { FaChevronRight as Arrow} from "react-icons/fa6";
import {tPrimaryLinkButton} from "link/PrimaryLinkButton/PrimaryLinkButton.models"
export default function PrimaryLinkButton(props:tPrimaryLinkButton){
    return (
        <Link
            className={css.wrapper}
            data-theme={props.theme}
            href={props.url}
            title={props.title}
            {...props.props}
        >
            <i
                className={css.icon}
            >
                <Arrow/>
            </i>
            <span
                className={css.title}
            >
                {props.title}
            </span>
        </Link>
    )
}