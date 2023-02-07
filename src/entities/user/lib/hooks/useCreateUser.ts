import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { useLoacalStorage } from "../../../../shared";
import { createUser } from "../../api/createUser";
import { IUser } from "../../model/user.interface";
import { AxiosResponse } from "axios";

type IUseCreateUser = [
    mutate: UseMutateFunction<AxiosResponse<IUser, any>, unknown, IUser, unknown>,
    isLoading: boolean,
    isError: boolean
];

export const useCreateUser = (): IUseCreateUser => {

    const [token] = useLoacalStorage<string>('token');

    const queryClient = useQueryClient();
    
    const { mutate, isLoading, isError } = useMutation((user: IUser) => {
        return createUser('/user/create', user, token as string);
    }, {
        onSuccess() {
            queryClient.invalidateQueries('users');
        }
    });

    return [
        mutate,
        isLoading,
        isError
    ];
}
