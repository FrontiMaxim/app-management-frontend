import { useState } from "react";
import { IDataUser } from "../components/FormUser/IFormUser";
import axios from "axios";
import { useAppDispatch } from "../store";
import { changeUserInList } from "../store/listUserSlice";

interface IUserChangeUser {
    changeUser: (url: string, data: IDataUser, id_user: string, token: string) => Promise<void>;
    isErrorChange: boolean;
}   


export const useChangeUser = ():IUserChangeUser => {

    const [isErrorChange, setIsErrorChange] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    async function changeUser (url: string, changedUser: IDataUser, id_user: string, token: string): Promise<void> {
        try {
            const { data } = await axios.put(url, {
                ...changedUser,
                id_user
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setIsErrorChange(false);
            dispatch(changeUserInList(data));
        } catch (err) {
            setIsErrorChange(true);
        }
    }

    return {
        changeUser,
        isErrorChange
    }
}
