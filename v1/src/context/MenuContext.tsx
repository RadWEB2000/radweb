"use client";
import { createContext, useState } from "react";

type tMenuContext = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  isOpen: boolean;
};

type tMenuProvider = {
  children: React.ReactNode;
};

export const MenuContext = createContext<tMenuContext>({
  close: () => {},
  isOpen: false,
  open: () => {},
  toggle: () => {},
});

export default function MenuProvider(props: tMenuProvider) {
  const [menuStatus, toggleMenuStatus] = useState<boolean>(false);

  return (
    <MenuContext.Provider
      value={{
        close: () => toggleMenuStatus(false),
        open: () => toggleMenuStatus(true),
        toggle: () => toggleMenuStatus(!menuStatus),
        isOpen: menuStatus,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
}
