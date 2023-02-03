import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface PropsAvatar extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLElement>, HTMLElement> {
    is_online?: boolean;
    avatar: string;
}