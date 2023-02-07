import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { useLoacalStorage } from "../../../../shared";
import { deleteUser } from "../../api/deleteUser";

type IUseDeleteUser = [
    mutate: UseMutateFunction<any, unknown, string, unknown>,
    isLoading: boolean,
    isError: boolean
];

export const useDeleteUser = (): IUseDeleteUser => {

    const [token] = useLoacalStorage<string>('token');

    const queryClient = useQueryClient();
    
    const { mutate, isLoading, isError } = useMutation((id_user: string) => {
        return deleteUser('/user/delete', id_user, token as string);
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