import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { ITask } from "../../../task";

export interface PropsListComment extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLElement>, HTMLElement> {
    task: ITask;
    idCurrentUser: string;
}