import Image from "next/image";
import Link from "next/link";
import Menu from "components/Layout/Navigation/Menu";

type t_props = {
    flags: {
        de:string;
        en:string;
        fr:string;
        pl:string;
    };
    logo: {
        image:tImage;
        url:string;
    }
    menu: {
        id:number;
        title:string;
        url:string;
        submenu?:{
            id:number;
            parentId:number;
            title:string;
            url:string;
        }[];
    }[];
}

export default function Navigation(props:t_props) {
    return (
        <nav
            className="flex place-content-around place-items-center py-2 sticky top-0 w-full bg-slate-300"
        >
            <Link href={props.logo.url}>
                <Image
                    alt={props.logo.image.altText}
                    height={50}
                    loading="eager"
                    priority
                    src={props.logo.image.sourceSrc}
                    title={props.logo.image.title}
                    width={50}
                />
            </Link>
            <Menu
                menu={props.menu}           
            />
            <div>
                <button>sun</button>
            </div>
        </nav>
    )
}