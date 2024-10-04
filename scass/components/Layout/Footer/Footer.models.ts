import { tAuthor } from 'footer/Author/Author.models';
import { tInformations } from './Informations/Informations.models';
import { tMenu } from 'footer/Menu/Menu.models';
import { tSocials } from './Socials/Socials.models';
export type tFooter = {
    author:tAuthor;
    informations:tInformations;
    menu:tMenu;
    socials:tSocials;
}