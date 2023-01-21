import { ITask } from "./ITask";
import { IUser } from "./IUser";

export interface IComment {
    id_comment: string;
    content: string;
    data: string
    task: ITask;
    user: IUser;
}