import { ModeModalWindow } from "../../interfaces/IModalWindow";
import { IUser } from "../../interfaces/IUser";

export interface IPropsFormUser {
    mode: ModeModalWindow;
    defaultData?: IUser;
    closeModalWindow?: () => void;
}