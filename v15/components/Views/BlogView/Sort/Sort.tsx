import css from "v-blog/Sort/Sort.module.scss"
import {tSort} from "v-blog/Sort/Sort.models"

export default function Sort(props:tSort){

    return (
        <form
            className={css.wrapper}
        >
            <label 
                className={css.label}
                htmlFor="sort"
            >
                {props.title}
            </label>
            <select className={css.options} name="sort" id="sort">
                <option 
                    className={css.option} 
                    value="Default"
                >
                    {props.options.default}
                </option>
                <option 
                    className={css.option}
                    value="alphabetic-asc"
                >
                    {props.options["alphabetic-asc"]}
                </option>
                <option 
                    className={css.option}
                    value="alphabetic-des"
                >
                    {props.options["alphabetic-des"]}
                </option>
                <option 
                    className={css.option} 
                    value="release-asc"
                >
                    {props.options["release-asc"]}
                </option>
                <option 
                    className={css.option} 
                    value="release-des"
                >
                    {props.options["release-des"]}
                </option>
            </select>
        </form>
    )
}