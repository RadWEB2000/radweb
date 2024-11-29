import img from "@/img/wallpaper.jpg";
import Image from "next/image";
import Badge from "./Badge";

export default function BlogCard() {
  return (
    <li
      className="max-w-[33rem] my-6 mx-auto px-3 py-5 rounded-lg border-orange/45 border-2"
      style={{
        border: `var(--gray) 4px solid`,
      }}
    >
      <picture className="block relative mb-2 ">
        <Badge
          category="www"
          title="React"
          className="absolute top-2 left-2 py-1 px-3"
        />
        <Image
          alt="alt"
          className="rounded-md"
          loading="lazy"
          src={img.src}
          height={350}
          width={350}
          title="React dokumentacje - sprawdź więcej"
          quality={40}
        />
      </picture>
      <h3 className="font-anton text-orange/100 text-semibold text-5xl mt-2">
        React dokumentacje
      </h3>
      <p className="text-platinum text-md mt-1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam rem
        facilis consequuntur tempora blanditiis inventor...
      </p>
    </li>
  );
}
