import css from "nav/Search/Search.module.scss"
import {tSearch} from "nav/Search/Search.models"

export default function Search(props:tSearch){
    return (
        <form 
            action=""
            className={css.wrapper}
        >
            <input 
                className={css.field}
                type="search"  
                placeholder={props.field.placeholder}
            />
        </form>
    )
}