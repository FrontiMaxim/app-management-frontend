import { IUser } from "./user.interface";

export interface IListUser {
    listUser: IUser[];
    countUser: number;
    listUserOnline: IUser[];
    countUserOnline: number;
}