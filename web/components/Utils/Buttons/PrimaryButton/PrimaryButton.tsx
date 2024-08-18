import css from "buttons/PrimaryButton/PrimaryButton.module.scss"
import Link from "next/link";
import { tPrimaryButton, tIconType } from "buttons/PrimaryButton/PrimaryButton.models";
import { FaAngleRight as Arrow } from "react-icons/fa6";
import { HiOutlineArrowNarrowRight as LongArrow } from "react-icons/hi";
import { FaRegEnvelope as Envelope} from "react-icons/fa6";
import { BsSend as Send } from "react-icons/bs";

function getIcon(type:tIconType):JSX.Element|null {
    if(type === "arrow"){
        return <Arrow/>
    } else if (type === "long-arrow") {
        return <LongArrow/>
    } else if(type === "envelope"){
        return <Envelope/>
    } else if(type === "send"){
        return <Send/>
    } else {
        return null;
    }
}

export default function PrimaryButton(props:tPrimaryButton){
    const {type:kind, icon, title} = props;
    if(kind === "link") {
        const {url} = props;
        return (
            <Link
                className={css.wrapper}
                href={url}
            >
                <span
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:title}}
                />
                {
                    icon !== null &&
                    <i
                        className={css.icon}
                    >
                        {getIcon(icon)}
                    </i>
                }
            </Link>
        )
    }
    if(kind === "button"){
        const {action, attributes} = props;
        return (
            <button
                className={css.wrapper}
                {...attributes}
            >
                <span
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:title}}
                />
                {
                    icon !== null &&
                    <i
                        className={css.icon}
                    >
                        {getIcon(icon)}
                    </i>
                }
            </button>
        )
    }
}