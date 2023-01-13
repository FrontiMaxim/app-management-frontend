import { useState } from "react";
import { IUser } from "../interfaces/IUser";

export type IDataType = null | IUser;

interface IUseModalWindow {
    openModalWindow: (type: string, data: IDataType) => void;
    closeModalWindow: () => void;
    isOpenDodalWindow: boolean;
    typeMoladWindow: string;
    dataForModalWindow: IDataType;
}

export const useModalWindow = (): IUseModalWindow  => {

    const [isOpenDodalWindow, setIsOpenDodalWindow] = useState<boolean>(false);
    const [typeMoladWindow, setTypeMoladWindow] = useState<string>('');
    const [dataForModalWindow, setDataForModalWindow] = useState<IDataType>(null);

    function openModalWindow(type: string, data?: IDataType) {
        setIsOpenDodalWindow(true);
        setTypeMoladWindow(type);

        if(data) setDataForModalWindow(data);
    }

    function closeModalWindow() {
        setIsOpenDodalWindow(false);
    }

    return {
        openModalWindow,
        closeModalWindow,
        isOpenDodalWindow,
        typeMoladWindow,
        dataForModalWindow
    }
}