import { tHomePageOfferCard } from "@/c-offers/HomePageOfferCard/HomePageOfferCardOfferCards.models";

type tArrayLength<T> =
  | [T]
  | [T, T]
  | [T, T, T]
  | [T, T, T, T]
  | [T, T, T, T, T]
  | [T, T, T, T, T, T];

export type tOffer = {
  title: string;
  content: string;
  button: tLink;
  cards?: tArrayLength<tHomePageOfferCard>;
};
