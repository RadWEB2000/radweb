import { Dispatch, SetStateAction } from "react";

export type tMenuItemExpand = tLink & {
    isOpen:boolean;
    toggle:() => void;
};