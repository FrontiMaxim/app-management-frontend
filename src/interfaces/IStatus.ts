import { ITask } from "./ITask";

export interface IStatus {
    id_status: number;
    name: 'SCHEDULED' | 'ON_PROGRES' | 'COMPLETE';
    tasks?: ITask[];
}