import { tSearch } from "v-blog/Search/Search.models"
import { tSort } from "v-blog/Sort/Sort.models";

export type tControlPanel = {
    search:tSearch;
    sort:tSort;
}