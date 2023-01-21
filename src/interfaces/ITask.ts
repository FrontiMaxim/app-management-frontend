import { IComment } from "./IComment";
import { IObject } from "./IObject";
import { IResource } from "./IResource";
import { IStatus } from "./IStatus";
import { IUser } from "./IUser";

export interface ITask {
    id_task: string;
    name: string;
    deadline: string;
    description: string;
    object: IObject;
    user?: IUser | null; 
    status: IStatus;
    comments?: IComment[];
    resources?: IResource[];
}