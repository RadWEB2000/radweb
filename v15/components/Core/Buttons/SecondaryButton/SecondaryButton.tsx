import Link from "next/link"
import css from "buttons/SecondaryButton/SecondaryButton.module.scss"
import {tSecondaryButton} from "buttons/SecondaryButton/SecondaryButton.models";
import { GoArrowRight as Arrow } from "react-icons/go";

export default function SecondaryButton(props:tSecondaryButton){
    if(props.type === "link"){
        return (
            <Link
                className={css.wrapper}
                data-theme={props.theme}
                href={props.url}
                {...props.props}
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
    }else {
        return (
            <button
                className={css.wrapper}
                data-theme={props.theme}
                {...props.props}
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
            </button>
        )
    }
}