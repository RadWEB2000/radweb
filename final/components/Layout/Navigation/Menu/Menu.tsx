"use client"
import css from "nav/Menu/Menu.module.scss";
import {tMenu} from "nav/Menu/Menu.models"
import {Dropdown, MenuItemRegural as Item} from "nav/index"
import { useContext } from "react";
import MainContext from "context/MainContext";

export default function Menu(props:tMenu){
    const {isOpen} = useContext(MainContext);
    return (
        <div
            className={css.wrapper}
            data-open={true}
        >
            <menu
                className={css.container}
            >
                {
                    props.menu.map((item) => {
                        if(item.dropdown){
                            return(
                                <Dropdown
                                    {...item}
                                    dropdown={item.dropdown}
                                    key={item.title}
                                />
                            )
                        }else{
                            return (
                                <Item
                                    {...item}
                                />
                            )
                        }
                    })
                }
            </menu>
        </div>
    )
}