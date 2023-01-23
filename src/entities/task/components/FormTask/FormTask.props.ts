import { ITask } from "../../model/task.interface";

export interface PropsFormTask {
    mode: 'CREATE' | 'CHANGE';
    defaultData?: ITask;
    closeModalWindow?: () => void;
}