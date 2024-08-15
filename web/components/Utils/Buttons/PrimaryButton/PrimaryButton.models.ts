export type tIconType = "arrow" | "long-arrow" | "envelope" | "send" | null;

export type tPrimaryButton =   (
    {
        type: "link";
        url: string;
    } | {
        type: "button";
        action?: () => void;
    }
) & {
    theme: "primary" | "secondary";
    icon: tIconType;
    title: string;
};