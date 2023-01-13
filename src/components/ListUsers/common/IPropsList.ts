import { IDataType } from "../../../hooks/useModalWindow";

export interface IPropsList {
    isChange: boolean;
    openModalWindow?: (type: string, data: IDataType) => void;
}