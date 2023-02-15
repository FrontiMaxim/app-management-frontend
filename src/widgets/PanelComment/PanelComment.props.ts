import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { ITask } from "../../entities/task";

export interface PropsPanelComment extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLElement>, HTMLElement>{
    task: ITask;
}
