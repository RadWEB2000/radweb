import css from "buttons/PrimaryButton/PrimaryButton.module.scss";
import {tPrimaryButton} from "buttons/PrimaryButton/PrimaryButton.models";
import Link from "next/link";
import { FaArrowRightLong as Arrow} from "react-icons/fa6";

export default function PrimaryButton(props:tPrimaryButton){
    if(props.type === "link"){
        return (
            <Link
                className={css.wrapper}
                data-dark={props.isDark}
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
                data-dark={props.isDark}
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