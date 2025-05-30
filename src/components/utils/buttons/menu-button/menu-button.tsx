"use client"
import css from "@/buttons/menu-button/menu-button.module.scss"
import { MenuContext } from "@/context"
import { useContext } from "react"

export default function MenuButton() {

    const { isOpen, toggle } = useContext(MenuContext);

    return (
        <button className={css.wrapper} data-open={isOpen} onClick={() => toggle()} >
            <span className={css.line} />
            <span className={css.line} />
            <span className={css.line} />
        </button>
    )
}