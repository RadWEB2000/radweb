import css from "nav/Navigation.module.scss";
import {tNavigation} from "nav/Navigation.models"
import {Brand,Menu,Settings} from "nav/index"

export default function Navigation(props:tNavigation){
    return (
        <nav
            className={css.wrapper}
        >
            {/* brand */}
            <div
                className={css.brand}
            >
                <Brand
                    {...props.brand}
                />
            </div>
            {/* menu */}
            <div
                className={css.menu}
            >
                <Menu
                    menu={props.menu}
                />
            </div>
            {/* settings */}
            <div
                className={css.settings}
            >
                <Settings/>
            </div>
        </nav>
    )
}