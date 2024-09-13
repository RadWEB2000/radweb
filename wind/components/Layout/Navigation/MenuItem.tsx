import Link from "next/link";

type t_props = {
    id:number;
    title:string;
    url:string;
}

export default function MenuItem(props:t_props){
    return (
        <li
            className="bg-blue-400"
            key={props.id}
            role="menuitem"
        >
            <Link
                href={props.url}
            >
                {props.title}
            </Link>
        </li>
    )
}