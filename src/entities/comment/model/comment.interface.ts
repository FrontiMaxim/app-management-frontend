import { ITask } from "../../task";
import { IUser } from "../../user";

export interface IComment {
    id_comment?: string;
    content: string;
    data: string;
    time: string;
    task: ITask;
    user: IUser;
}