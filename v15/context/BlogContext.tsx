"use client"

import { createContext, ReactNode, useState } from "react"

type tSort = "DEFAULT" | "ALPHABETIC_ASC" | "ALPHABETIC_DES"|"RELEASE_ASC"|"RELEASE_DES"

type tBlogProvider = {
    children:ReactNode;
}

export const BlogContext = createContext({
    search: {
        value:"",
        action:() => {}
    },
    sort: {
        value:"",
        action: () => {}
    }
})

export default function BlogProvider(props:tBlogProvider){

    const [search, searchUpdate] = useState<string>("")
    const [sort, sortUpdate] = useState<tSort>("DEFAULT")

    return (
        <BlogContext.Provider
            value={{
                search:{
                    action:() => {},
                    value:search
                },
                sort:{
                    action: () => {},
                    value:sort
                }
            }}
        >
            {props.children}
        </BlogContext.Provider>
    )
}