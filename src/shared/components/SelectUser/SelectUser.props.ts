import { UseFormRegister } from "react-hook-form";
import { IUser } from "../../../entities/user";

export interface PropsSelectUser {
    register: UseFormRegister<any>; 
    nameField: string;
    users: IUser[];
    multi?: boolean;
    nameList: string;
}
