import { IUser } from "./IUser";

// для призмы
interface UserToConnect{
    id_user: string;
}

export interface IObject {
    id_object: string;
    city: string;
    street: string;
    house: string;
    apartment: number | null;
    note: string;
    data_start: string;
    client: string;
    users?: IUser[] | UserToConnect[];
}

