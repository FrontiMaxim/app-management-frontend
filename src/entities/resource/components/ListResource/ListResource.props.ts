import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface PropsListResource extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLElement>, HTMLElement> {
    id_task: string
}