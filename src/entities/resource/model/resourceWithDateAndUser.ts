import { IUser } from "../../user";

export interface IResourceWithDateAndUser {
    id_resource: string;
    originalName: string;
    storageName: string,
    id_task: string;
    user: IUser;
    date: Date;
}