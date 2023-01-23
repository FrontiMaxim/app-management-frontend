import { IObject } from "../../object";
import { IUser } from "../../user";

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

interface IComment {
    id_comment: string;
    content: string;
    data: string
    user: IUser;
}

interface IResource {
    id_resource: string;
    name: string;
    link: string;
}

interface IStatus {
    id_status: number;
    name: 'SCHEDULED' | 'ON_PROGRES' | 'COMPLETE';
}