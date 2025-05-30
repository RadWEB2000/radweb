"use client"
import { MenuContext } from "@/context";
import { useState } from "react";

export default function MenuProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <MenuContext.Provider
            value={{
                close: () => setIsMenuOpen(false),
                isOpen: isMenuOpen,
                toggle: () => setIsMenuOpen(!isMenuOpen)
            }}
        >
            {children}
        </MenuContext.Provider>
    )
}