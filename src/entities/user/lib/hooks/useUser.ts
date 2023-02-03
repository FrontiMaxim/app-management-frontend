import { useQuery } from "react-query";
import { IUser } from "../../model/user.interface";
import { useLoacalStorage } from "../../../../shared";
import { getUser } from "../../api/getUser";

interface IUseUser {
    user: IUser | undefined,
    isLoading: boolean,
    isError: boolean,
}

export const useUser = (): IUseUser => {
   const [token] = useLoacalStorage<string>('token');

    const { data: user, isLoading, isError } = useQuery<IUser, Error, IUser, string>(
        'user', 
        () => getUser('/user/read', token!)
    );

    return {
        user,
        isLoading,
        isError,
    }
}