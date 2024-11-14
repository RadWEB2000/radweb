import { tPrimaryOfferCard } from 'cards/offer/PrimaryOfferCard/PrimaryOfferCard.models';
export type tOffer = {
    button:tLink;
    cards?:tPrimaryOfferCard[];
    content:string;
    title:string;
}