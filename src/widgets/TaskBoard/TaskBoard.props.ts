import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface PropsTaskBoard extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLElement>, HTMLElement>{
    id_user?: string;
    id_object?: string;
}