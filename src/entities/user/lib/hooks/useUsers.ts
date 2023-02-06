import { useQuery } from "react-query";
import { IUser } from "../../model/user.interface";
import { getUsers } from "../../api/getUsers";
import { useLoacalStorage } from "../../../../shared";

interface IUseUsers {
    users: IUser[] | undefined,
    isLoading: boolean,
    isError: boolean,
}
 
export const useUsers = (): IUseUsers => {

   const [token] = useLoacalStorage<string>('token');

    const { data: users, isLoading, isError } = useQuery<IUser[], Error, IUser[], string>(
        'users', 
        () => getUsers('/user/read/users', token!)
    );

    return {
        users,
        isLoading,
        isError
    }
}