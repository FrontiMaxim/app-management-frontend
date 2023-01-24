import { IObject } from "../../../object";
import { ITask } from "../../model/task.interface";

export interface PropsFormTask {
    mode: 'CREATE' | 'CHANGE';
    currentObject: IObject;
    defaultData?: ITask;
    closeModalWindow?: () => void;
}