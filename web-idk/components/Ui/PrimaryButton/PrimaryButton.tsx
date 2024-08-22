import getArrow from "lib/getArrow"
import Link from "next/link"
import {tPrimaryButton} from "ui/PrimaryButton/PrimaryButton.models"
import css from "ui/PrimaryButton/PrimaryButton.module.scss"


export default function PrimaryButton(props:tPrimaryButton){

    if(props.mode === "link"){
        return (
            <Link
                className={css.wrapper}
                href={props.url}
                {...props.attributes}
            >
                <span
                    className={css.label}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                {
                    props.arrow !== null && 
                    <i
                        className={css.icon}
                    >
                        {getArrow(props.arrow)}
                    </i>
                }
            </Link>
        )
    }
    if(props.mode === "button"){
        return (
            <button
                className={css.wrapper}
                {...props.attributes}
            >
                <span
                    className={css.label}
                    dangerouslySetInnerHTML={{__html:props.title}}
                />
                {
                    props.arrow !== null && 
                    <i
                        className={css.icon}
                    >
                        {getArrow(props.arrow)}
                    </i>
                }
            </button>
        )
    }
}