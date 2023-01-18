import { ModeModalWindow } from "../../interfaces/IModalWindow";
import { IObject } from "../../interfaces/IObject";

export interface IPropsFormObject {
    mode: ModeModalWindow;
    defaultData?: IObject;
    closeModalWindow?: () => void;
}