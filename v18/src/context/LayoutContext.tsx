"use client";
import { createContext, ReactNode, useState } from "react";

type tLayoutContext = {
  menu: {
    close: () => void;
    open: () => void;
    toggle: () => void;
    status: boolean;
  };
};

type tLayoutProvider = {
  children: ReactNode;
};

export const LayoutContext = createContext<tLayoutContext>({
  menu: {
    close: () => {},
    open: () => {},
    toggle: () => {},
    status: true,
  },
});

export default function LayoutProvider(props: tLayoutProvider) {
  const [menuExpand, toggleMenuExpand] = useState<boolean>(false);

  return (
    <LayoutContext.Provider
      value={{
        menu: {
          close: () => toggleMenuExpand(false),
          open: () => toggleMenuExpand(true),
          toggle: () => toggleMenuExpand(!menuExpand),
          status: menuExpand,
        },
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
}
