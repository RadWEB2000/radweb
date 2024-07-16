import { tPrimaryServiceCard } from 'c-service/PrimaryServiceCard/PrimaryServiceCard.models';
import { tButton,tCommonSection } from 'ts/common';
export type tServices = tCommonSection & {
    button:tButton;
    cards:tPrimaryServiceCard[];
}