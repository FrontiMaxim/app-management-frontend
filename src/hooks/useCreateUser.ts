import { useState } from "react";
import { IDataUser } from "../components/FormUser/IFormUser";
import axios from "axios";
import { useAppDispatch } from "../store";
import { addUserInList } from "../store/listUserSlice";

interface IUserCreateUser {
    createUser: (url: string, data: IDataUser, token: string) => Promise<void>;
    isErrorCreate: boolean;
}   


export const useCreateUser = ():IUserCreateUser => {

    const [isErrorCreate, setIsErrorCreate] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    async function createUser (url: string, newUser: IDataUser, token: string): Promise<void> {
        try {
            const { data } = await axios.post(url, newUser, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log()
            setIsErrorCreate(false);
            dispatch(addUserInList(data));
        } catch (err) {
            setIsErrorCreate(true);
        }
    }

    return {
        isErrorCreate,
        createUser
    }
}



