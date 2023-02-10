import { IObject } from "../../model/object.interface";

export interface PropsFormObject {
    mode: 'CREATE' | 'CHANGE';
    defaultData?: IObject;
    closeModalWindow?: () => void;
}