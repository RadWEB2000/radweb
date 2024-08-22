import React from 'react'

export type tPrimaryButton = (
    {
        mode:"button";
        attributes?:React.ButtonHTMLAttributes<HTMLButtonElement>
    } | {
        mode:"link";
        url:string;
        attributes?:React.AnchorHTMLAttributes<HTMLAnchorElement>
    }
) & {
    arrow:"double"|"long"|"short"|null;
    title:string;
}