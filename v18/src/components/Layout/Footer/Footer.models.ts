import { tDetails } from "@/footer/Details/Details.models";
import { tAuthor } from "@/footer/Author/Author.models";
import { tMenu } from "@/footer/Menu/Menu.models";
import { tPolicies } from "@/footer/Policies/Policies.models";

export type tFooter = tPolicies & {
  author: tAuthor;
  menu: tMenu;
  details: tDetails;
};
