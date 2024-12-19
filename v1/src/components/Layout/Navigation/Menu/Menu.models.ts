export type tMenu = {
  menu: Array<
    tLink & {
      submenu?: tLink[];
    }
  >;
};
