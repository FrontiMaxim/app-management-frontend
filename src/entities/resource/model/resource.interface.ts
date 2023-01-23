import { ITask } from "../../task";

export interface IResource {
    id_resource: string;
    name: string;
    link: string;
    task: ITask;
}