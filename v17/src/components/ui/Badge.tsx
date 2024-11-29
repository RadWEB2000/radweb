import getCategoryColor from "@/lib/getCategoryColor";

type props = {
  title: string;
  category: "seo" | "www" | "news" | "ppc";
  className?: string;
};

export default function Badge(props: props) {
  const color = getCategoryColor(props.category);

  return (
    <span
      className={` ${color} block px-3.5 py-1.5  max-w-[max-content] text-sm font-semibold text-center rounded-md cursor-default uppercase mx-1 my-1 ${props.className}`}
    >
      {props.title}
    </span>
  );
}
