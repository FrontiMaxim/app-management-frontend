import { ModeModalWindow } from "../../interfaces/IModalWindow";

export interface IDataUser {
    name: string;
    login: string;
    password: string;
    role: string;
}

export interface IPropsFormUser {
    mode: ModeModalWindow;
}