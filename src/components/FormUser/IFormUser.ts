import { IUser } from "../../interfaces/IUser";

export interface IDataUser {
    name: string;
    login: string;
    password: string;
    role: string;
}

export interface IPropsFormUser {
    dataModalWindow: null | IUser;
    url: string;
    typeModalWindow: string;
    closeModalWindow: () => void;
}