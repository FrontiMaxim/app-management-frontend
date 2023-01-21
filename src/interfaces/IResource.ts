import { ITask } from "./ITask";

export interface IResource {
    id_resource: string;
    name: string;
    link: string;
    task?: ITask;
}