import { ITask } from "../../task";

export interface INotificationWithoutUser {
    id_notification: string;
    is_watch: boolean;    
    type: string;
    data: Date;
    task: ITask;
}