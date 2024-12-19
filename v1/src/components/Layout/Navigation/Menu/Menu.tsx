import css from "@/nav/Menu/Menu.module.scss";
import { tMenu } from "@/nav/Menu/Menu.models";
import { Dropdown, MenuItem } from "@/nav/index";

export default function Menu(props: tMenu) {
  return (
    <menu className={css.wrapper}>
      {props.menu.map((item) => {
        if (item.submenu) {
          return (
            <Dropdown
              key={item.title}
              link={{ ...item }}
              submenu={item.submenu}
            />
          );
        } else {
          return <MenuItem {...item} key={item.title} />;
        }
      })}
    </menu>
  );
}
