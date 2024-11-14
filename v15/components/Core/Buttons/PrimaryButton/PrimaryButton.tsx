import {tPrimaryButton} from "buttons/PrimaryButton/PrimaryButton.models";
import css from "buttons/PrimaryButton/PrimaryButton.module.scss";
import Link from "next/link";
import { HiMiniArrowLongRight as Arrow } from "react-icons/hi2";

export default function PrimaryButton(props:tPrimaryButton){
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
    } else {
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