import css from "buttons/PrimaryButton/PrimaryButton.module.scss"
import Link from 'next/link';
import { GoArrowRight as Arrow } from "react-icons/go";
import {tPrimaryButton} from "buttons/PrimaryButton/PrimaryButton.models"
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