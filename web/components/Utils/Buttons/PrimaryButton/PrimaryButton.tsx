import { tPrimaryButton, tIconType } from "buttons/PrimaryButton/PrimaryButton.models";
import Link from "next/link";
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
    const {type:kind, icon, theme,title} = props;
    if(kind === "link") {
        const {url} = props;
        return (
            <Link
                data-theme={theme}
                href={url}
            >
                <span
                    dangerouslySetInnerHTML={{__html:title}}
                />
                {
                    icon !== null &&
                    <i>
                        {getIcon(icon)}
                    </i>
                }
            </Link>
        )
    }
    if(kind === "button"){
        const {action} = props;
        return (
            <button
                data-theme={theme}
            >
                <span
                    dangerouslySetInnerHTML={{__html:title}}
                />
                {
                    icon !== null &&
                    <i>
                        {getIcon(icon)}
                    </i>
                }
            </button>
        )
    }
}