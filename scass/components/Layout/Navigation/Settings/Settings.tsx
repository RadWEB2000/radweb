import css from "nav/Settings/Settings.module.scss"
import {Lang, MenuButton as Button} from "nav/index";
import {tSettings} from "nav/Settings/Settings.models"
export default function Settings(props:tSettings){
    return (
        <div
            className={css.wrapper}
        >
            <Lang
                {...props.langs}
            />
            <Button/>            
        </div>
    )
}