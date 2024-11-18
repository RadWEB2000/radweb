import { tAuthor } from "footer/Author/Author.models";
import { tDetails } from "footer/Details/Details.models";
import { tMenus } from "footer/Menus/Menus.models";
import { tSocials } from "footer/Socials/Socials.models";

export type tFooter = tAuthor & tMenus & tSocials &{
    details: tDetails;
}