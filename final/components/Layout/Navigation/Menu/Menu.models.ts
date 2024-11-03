export type tMenu = {
    menu:Array<
        tLink & {
            dropdown?:tLink[] | null;
        }
    >;
}