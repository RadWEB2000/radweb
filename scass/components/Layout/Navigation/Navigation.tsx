import css from "components/Layout/Navigation/Navigation.module.scss"
import { main } from "@/data/main";
import {Brand, Menu, Settings} from "nav/index"

export default function Navigation() {
    return (
        <nav
            className={css.wrapper}
        >
            <Brand
                {...main.nav.logo}
            />
            <Menu
                {...main.nav}
            />
            <Settings/>
        </nav>
    )
}