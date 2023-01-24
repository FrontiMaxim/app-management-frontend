import { UseFormRegisterReturn } from "react-hook-form";
import { IUser } from "../../../entities/user";

export interface PropsSelectUser {
    register: UseFormRegisterReturn; 
    users: IUser[];
    multi?: boolean;
    nameList: string;
}
