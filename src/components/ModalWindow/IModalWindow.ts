import { IUser } from "../../interfaces/IUser";

export interface IPropsModalWindow {
    component: JSX.Element;
    data: IUser;
    closeModalWindow: () => void;
}