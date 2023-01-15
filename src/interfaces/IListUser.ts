import { IUser } from "./IUser";

export interface IListUser {
    listUser: IUser[];
    countUser: number;
    currentUser: IUser;
}