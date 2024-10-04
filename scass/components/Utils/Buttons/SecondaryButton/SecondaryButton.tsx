import css from "buttons/SecondaryButton/SecondaryButton.module.scss"
import Link from "next/link";
import {tSecondaryButton} from "buttons/SecondaryButton/SecondaryButton.models";
import { HiOutlineArrowNarrowRight as Arrow} from "react-icons/hi";

export default function SecondaryButton(props:tSecondaryButton){
    return (
        <Link
            className={css.wrapper}
            data-theme={props.theme}
            href={props.url}
        >   
            <span
                className={css.title}
                dangerouslySetInnerHTML={{__html:props.title}}
            />
            <i
                className={css.icon}
            >
                <Arrow/>
            </i>
        </Link>
    )
}