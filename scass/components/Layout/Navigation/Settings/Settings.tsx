import css from "nav/Settings/Settings.module.scss"
import {MenuButton} from "nav/index";

export default function Settings(){
    return(
        <div
            className={css.wrapper}
        >
            <MenuButton/>
        </div>
    )
}