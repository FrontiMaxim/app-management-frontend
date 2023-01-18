import { useQuery } from "react-query";
import { IUser } from "../interfaces/IUser";
import { getUsers } from "../services/userService";

interface IUseObjects {
    users: IUser[] | undefined,
    isLoading: boolean,
    isError: boolean,
    isSuccess: boolean
}
 
export const useUser = (): IUseObjects => {

    const token = localStorage.getItem('token');

    const { data: users, isLoading, isError, isSuccess } = useQuery<IUser[], Error, IUser[], string>(
        'users', 
        () => getUsers('/user/read/users', token!),
        {
            initialData: [] as IUser[]
        }
    );

    return {
        users,
        isLoading,
        isError,
        isSuccess,
    }
}