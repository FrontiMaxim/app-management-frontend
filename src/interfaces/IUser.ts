import { ISession } from "./ISession";

export interface IUser {
    id_user: string;
    name: string;
    login: string;
    is_online?: boolean;
    avatar: string | null;
    role: string;
    sessions?: ISession[];
}