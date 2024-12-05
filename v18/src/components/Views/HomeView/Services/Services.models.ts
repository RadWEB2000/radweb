import { tHomeServiceCard } from "@/cards/Services/HomeServiceCard/HomeServiceCard.models";

export type tServices = {
  title: string;
  slogan?: string;
  content: string;
  button: tLink;
  cards?: tHomeServiceCard[];
};
