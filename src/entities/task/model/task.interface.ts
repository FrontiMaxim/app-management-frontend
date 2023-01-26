import { IObject } from "../../object";
import { IResource } from "../../resource";
import { IUser } from "../../user";

export interface ITask {
    id_task: string;
    name: string;
    deadline: string;
    description: string;
    object: IObject;
    user?: IUser; 
    status: IStatus;
    comments?: IComment[];
    resources?: IResource[];
}

interface IComment {
    id_comment: string;
    content: string;
    data: string
    user: IUser;
}

interface IStatus {
    id_status: number;
    name: 'SCHEDULED' | 'ON_PROGRES' | 'COMPLETE';
}