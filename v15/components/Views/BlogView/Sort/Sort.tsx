import {tSort} from "v-blog/Sort/Sort.models"

export default function Sort(props:tSort){

    return (
        <form>
            <label htmlFor="sort">{props.title}</label>
            <select name="sort" id="sort">
                <option value="Default">{props.options.default}</option>
                <option value="alphabetic-asc">{props.options["alphabetic-asc"]}</option>
                <option value="alphabetic-des">{props.options["alphabetic-des"]}</option>
                <option value="release-asc">{props.options["release-asc"]}</option>
                <option value="release-des">{props.options["release-des"]}</option>
            </select>
        </form>
    )
}