import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface PropsBadge extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLElement>, HTMLElement> {
    count: number;
}