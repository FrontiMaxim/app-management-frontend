import { useState } from "react";
import { IDataUser } from "../components/FormUser/IFormUser";
import axios from "axios";

interface IUserChangeUser {
    changeUser: (url: string, data: IDataUser, id_user: string, token: string) => Promise<void>;
    isErrorChange: boolean;
}   


export const useChangeUser = ():IUserChangeUser => {

    const [isErrorChange, setIsErrorChange] = useState<boolean>(false);

    async function changeUser (url: string, data: IDataUser, id_user: string, token: string): Promise<void> {
        try {
            await axios.put(url, {
                ...data,
                id_user
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setIsErrorChange(false);
        } catch (err) {
            setIsErrorChange(true);
        }
    }

    return {
        changeUser,
        isErrorChange
    }
}



