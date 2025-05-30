import { createContext } from "react";

const MenuContext = createContext({
    isOpen: true,
    close: () => { },
    toggle: () => { }
})

export default MenuContext;