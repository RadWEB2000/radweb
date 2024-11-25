import { tControlPanel } from "v-blog/ControlPanel/ControlPanel.models"
import { tCategories } from "v-blog/Categories/Categories.models";
import { tArticles } from "v-blog/Articles/Articles.models";

export type tContainer = {
    controlPanel:tControlPanel;
    categories:tCategories;
    articles:tArticles;
}