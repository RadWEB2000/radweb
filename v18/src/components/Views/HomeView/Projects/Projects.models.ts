import { tRegularProjectCard } from "@/cards/Projects/RegularProjectCard/RegularProjectCard.models";

export type tProjects = {
  title: string;
  slogan?: string;
  content: string;
  button: tLink;
  cards?: tRegularProjectCard[];
};
