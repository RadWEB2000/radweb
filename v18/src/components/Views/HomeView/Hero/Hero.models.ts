import { tHeroServiceCard } from "@/cards/Services/HeroServiceCard/HeroServiceCard.models";
import { tHeroBlogCard } from "@/cards/Blog/HeroBlogCard/HeroBlogCard.models";

export type tHero = {
  video: tVideo;
  title: string;
  articles: tHeroBlogCard[];
  content: string;
  buttons?: tLink[];
  services: tHeroServiceCard[];
};
