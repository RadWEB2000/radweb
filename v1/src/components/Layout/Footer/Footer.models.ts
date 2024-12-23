import { tDetails } from "@/footer/Details/Details.models";
import { tAuthor } from "@/footer/Author/Author.models";
import { tMenu } from "@/footer/Menu/Menu.models";
import { tPolicies } from "@/footer/Policies/Policies.models";
import { tSocials } from "@/footer/Socials/Socials.models";

export type tFooter = tAuthor &
  tMenu &
  tPolicies &
  tSocials & {
    details: tDetails;
  };
