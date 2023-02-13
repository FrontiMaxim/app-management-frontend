import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { ITask } from "../..";

export interface PropsCardTask extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLElement>, HTMLElement> {
    task: ITask;
}