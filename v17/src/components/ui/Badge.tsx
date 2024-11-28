import getCategoryColor from "@/lib/getCategoryColor";

type props = {
    title:string;
    category:'seo'|'www'|'news'|'ppc';
}

export default function Badge(props:props){

    const color = getCategoryColor(props.category);


    return (
        <span
            className={` ${color} px-3.5 py-1.5  min-w-[max-content] text-md font-semibold text-center rounded-md cursor-default uppercase mx-1 my-1`}
        >
            {props.title}
        </span>
    )
}