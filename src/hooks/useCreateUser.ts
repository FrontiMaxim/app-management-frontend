import { useState } from "react";
import { IDataCreateUser } from "../components/FormCreateUser/IFormCreateUser";
import axios from "axios";

interface IUserCreateUser {
    createUser: (url: string, data: IDataCreateUser, token: string) => Promise<void>;
    isErrorCreate: boolean;
}   


export const useCreateUser = ():IUserCreateUser => {

    const [isErrorCreate, setIsErrorCreate] = useState<boolean>(false);

    async function createUser (url: string, data: IDataCreateUser, token: string): Promise<void> {
        try {
            await axios.post(url, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setIsErrorCreate(false);
        } catch (err) {
            setIsErrorCreate(true);
        }
    }

    return {
        isErrorCreate,
        createUser
    }
}



