import css from "@/footer/Menu/Menu.module.scss";
import { tMenu } from "@/footer/Menu/Menu.models";
import Link from "next/link";

export default function Menu(props: tMenu) {
  return (
    <menu className={css.wrapper}>
      {props.menus.map((item) => {
        return (
          <li className={css.container} key={item.label}>
            <h4 className={css.title}>{item.label}</h4>
            <ul className={css.menu}>
              {item.menu.map((item) => {
                return (
                  <Link
                    className={css.menu__item}
                    href={item.url}
                    key={item.title}
                    {...item.props}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </ul>
          </li>
        );
      })}
    </menu>
  );
}
