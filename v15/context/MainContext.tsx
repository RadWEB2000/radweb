"use client"
import { createContext, useState } from "react";

type tMainProvider = {
    children:React.ReactNode
}


const MainContext = createContext({
    isOpen:false,
    toggle:() => {},
    close:() => {}
})


export default MainContext;

export function MainProvider(props:tMainProvider){
    const  [isOpenMenu, toggleSetOpen] = useState<boolean>(false);
    return (
        <MainContext.Provider
            value={{
                close:() => toggleSetOpen(false),
                isOpen:isOpenMenu,
                toggle:() => toggleSetOpen(!isOpenMenu)
            }}
        >
            {props.children}
        </MainContext.Provider>
    )
}
