import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface PropsPanelResource extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLElement>, HTMLElement> {
    id_task: string;
}