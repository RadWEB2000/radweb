import css from "@/cards/Blog/RegularBlogCard/RegularBlogCard.module.scss";
import { tRegularBlogCard } from "@/cards/Blog/RegularBlogCard/RegularBlogCard.models";
import Link from "next/link";
import { TbSlash as Line } from "react-icons/tb";
import Image from "next/image";

export default function RegularBlogCard(props: tRegularBlogCard) {
  return (
    <Link className={css.wrapper} href={props.url}>
      <picture className={css.media}>
        <Image
          alt={props.image.altText}
          className={css.image}
          fill
          loading="lazy"
          src={props.image.sourceSrc}
          title={props.image.title}
          quality={40}
          {...props.image.props}
        />
      </picture>
      <p className={css.release}>{props.release}</p>

      <article className={css.container}>
        <h3 className={css.title}>{props.title}</h3>
        {props.categories && (
          <ul className={css.categories}>
            {props.categories.map((item, index) => {
              if (props.categories.length > 0) {
                if (index == props.categories.length - 1) {
                  return (
                    <Link
                      className={css.category}
                      href={item.url}
                      key={item.title}
                    >
                      {item.title}
                    </Link>
                  );
                } else {
                  return (
                    <>
                      <Link
                        className={css.category}
                        href={item.url}
                        key={item.title}
                      >
                        {item.title}
                      </Link>
                      <i className={css.line}>
                        <Line />
                      </i>
                    </>
                  );
                }
              } else {
                return (
                  <Link
                    className={css.category}
                    href={item.url}
                    key={item.title}
                  >
                    {item.title}
                  </Link>
                );
              }
            })}
          </ul>
        )}
      </article>
    </Link>
  );
}
