import Link from "next/link";
import MenuItem from "./MenuItem";
import Submenu from "./Submenu";

type t_props = {
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

export default function Menu(props:t_props){
    return (
        <menu
            className="flex place-items-center place-content-center gap-x-3"
            role="menu"
        >
           {
                props.menu.map((item) => {
                    console.log(item.title, item)
                    if(item.submenu){
                        return (
                            <Submenu
                                {...item}
                                key={item.id}
                            />
                        )
                    }else{
                        return (
                            <MenuItem
                                {...item}
                                key={item.id}
                            />   
                        )
                    }
                })
           }
        </menu>
    )
}