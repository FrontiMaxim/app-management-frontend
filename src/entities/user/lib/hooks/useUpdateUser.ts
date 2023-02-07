import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { useLoacalStorage } from "../../../../shared";
import { IUser } from "../../model/user.interface";
import { updateUser } from "../../api/updateUser";
import { AxiosResponse } from "axios";

type IUseUpdateUser = [
    mutate: UseMutateFunction<AxiosResponse<IUser, any>, unknown, IUser, unknown>,
    isLoading: boolean,
    isError: boolean
];

export const useUpdateUser = (): IUseUpdateUser => {

    const [token] = useLoacalStorage<string>('token');

    const queryClient = useQueryClient();
    
    const { mutate, isLoading, isError } = useMutation((user: IUser) => {
        return updateUser('/user/update', user, token as string);
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