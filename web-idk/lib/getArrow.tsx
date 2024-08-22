import { FaAnglesRight, FaArrowRight, FaAngleRight } from "react-icons/fa6";


export default function getArrow(arrow:"double"|"long"|"short"):JSX.Element|null{
    if(arrow === "double"){
        return <FaAnglesRight/>
    }else if(arrow === "long"){
        return <FaArrowRight/>
    }else if (arrow === "short"){
        return <FaAngleRight/>
    }else {
        return null;
    }
}