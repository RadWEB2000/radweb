import Link from "next/link";
import { tButton } from 'ts/types';
import { AiOutlineSwapRight as Arrow } from "react-icons/ai";
import css from "buttons/PrimaryButton/PrimaryButton.module.scss";

export default function PrimaryButton({title,url}:tButton){
    return (
        <Link
            className={css.wrapper}
            href={url}
        >
            <span
                className={css.label}
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