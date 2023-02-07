import { IUser } from "../../model/user.interface";

export interface PropsFormUser {
    mode: 'CREATE' | 'CHANGE';
    defaultData?: IUser;
    closeModalWindow?: () => void;
}