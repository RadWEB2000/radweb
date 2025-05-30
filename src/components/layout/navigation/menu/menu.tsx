'use client'
import css from "@/nav/menu/menu.module.scss";
import { MenuItem, MenuSubmenu } from "@/nav/index";
import { useContext } from "react";
import { MenuContext } from "@/context";

type menu = {
    menu: Array<link & {
        submenu: Array<link> | null;
    }>
}


export default function Menu({ menu }: menu) {
    const { close, isOpen } = useContext(MenuContext);

    return (
        <div className={css.wrapper} data-expand={isOpen}>
            <menu className={css.container} >
                {
                    menu.map(({ label, submenu, uri }, index) => {
                        if (submenu) {
                            return (
                                <MenuSubmenu
                                    {...{ label, submenu, uri }}
                                    key={`${label}-${uri}`}
                                />
                            )
                        } else {
                            return (
                                <MenuItem
                                    {...{ label, uri }}
                                    key={`${label}-${uri}`}
                                    attrs={{
                                        onClick: () => close()
                                    }}
                                />
                            )
                        }
                    })
                }
            </menu>
        </div>
    )
}