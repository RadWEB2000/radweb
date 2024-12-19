import css from "@/nav/Menu/Menu.module.scss";
import { tMenu } from "@/nav/Menu/Menu.models";
import Dropdown from "./Dropdown/Dropdown";
import MenuItem from "./MenuItem/MenuItem";

export default function Menu(props: tMenu) {
  return (
    <div className={css.wrapper} data-expand={props.isExpand} role="menubar">
      <menu className={css.container} role="menu">
        {props.menu.map((item) => {
          if (item.submenu) {
            return (
              <Dropdown
                key={item.title}
                link={{
                  title: item.title,
                  url: item.url,
                }}
                menu={item.submenu}
                {...item}
              />
            );
          } else {
            return (
              <MenuItem
                isDropdown={false}
                isSubmenu={false}
                title={item.title}
                url={item.url}
                key={item.title}
              />
            );
          }
        })}
      </menu>
    </div>
  );
}
