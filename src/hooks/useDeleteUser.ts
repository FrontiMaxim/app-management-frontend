import { useState } from "react";
import axios from "axios";
import { removeUserInList } from "../store/listUserSlice";
import { useAppDispatch } from "../store";

interface IUserDeleteUser {
    deleteUser: (url: string, id_user: string, token: string) => Promise<void>;
    isErrorDelete: boolean;
}   


export const useDeleteUser = ():IUserDeleteUser => {

    const [isErrorDelete, setIsErrorDelete] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    async function deleteUser (url: string, id_user: string, token: string): Promise<void> {
        try {
            await axios.delete(url, {
                params: {
                    id_user
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setIsErrorDelete(false);
            dispatch(removeUserInList(id_user));

        } catch (err) {
            setIsErrorDelete(true);
        }
    }

    return {
        isErrorDelete,
        deleteUser
    }
}
