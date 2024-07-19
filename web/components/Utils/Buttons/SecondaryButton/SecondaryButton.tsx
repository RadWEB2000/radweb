import Link from "next/link";
import {tSecondaryButton} from "buttons/SecondaryButton/SecondaryButton.models"
import css from "buttons/SecondaryButton/SecondaryButton.module.scss"
export default function SecondaryButton({title,url}:tSecondaryButton){
    return (
        <Link
            dangerouslySetInnerHTML={{__html:title}}
            className={css.wrapper}
            href={url}
        />
        
    )
}