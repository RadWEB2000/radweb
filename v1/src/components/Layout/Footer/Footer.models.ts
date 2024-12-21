import { tDetails } from "@/footer/Details/Details.models"
import { tAuthor } from "@/footer/Author/Author.models";
import { tMenu } from "@/footer/Menu/Menu.models";

export type tFooter = tAuthor & tMenu & {
    details:tDetails;
}