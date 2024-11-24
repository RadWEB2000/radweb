import {tSearch} from "v-blog/Search/Search.models"
import css from "v-blog/Search/Search.module.scss"

export default function Search(props:tSearch){
    return (
        <form
            className={css.wrapper}
        >
            <label 
                className={css.label}
                htmlFor="search"
            >
                {props.label}
            </label>
            <input 
                className={css.field}
                id="search"
                name="search"
                type="search" 
                {...props.props}
            />
        </form>
    )
}