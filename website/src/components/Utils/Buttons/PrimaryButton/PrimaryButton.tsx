import Link from "next/link";
import { tLink } from 'ts/types';
import { AiOutlineSwapRight as Arrow } from "react-icons/ai";
import css from "buttons/PrimaryButton/PrimaryButton.module.scss";

export default function PrimaryButton({label,uri,hrefLang}:tLink){
    return (
        <Link
            className={css.wrapper}
            href={uri}
            hrefLang={hrefLang}
        >
            <span
                className={css.label}
                dangerouslySetInnerHTML={{__html:label}}
            />
            <i
                className={css.icon}
            >
                <Arrow/>
            </i>
        </Link>
    )
}