import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { useLoacalStorage } from "../../../../shared";
import { AxiosResponse } from "axios";
import { updateAvatarByLogin } from "../../api/updateAvatarByLogin";

type IUseUpdateAvatar = [
    mutate: UseMutateFunction<AxiosResponse<FormData, any>, unknown, params, unknown>,
    isLoading: boolean,
    isError: boolean
];

type params = {
    body: FormData,
    login: string, 
};

export const useUpdateAvatar = (): IUseUpdateAvatar => {

    const [token] = useLoacalStorage<string>('token');

    const queryClient = useQueryClient();

    const { mutate, isLoading, isError } = useMutation(
        ({body, login}: params) => {
        return updateAvatarByLogin(
            '/user/update/avatar', 
            body, 
            login,
            token!
        );
    }, {
        onSuccess() {
            queryClient.invalidateQueries('user');
        }
    });


    return [
        mutate,
        isLoading,
        isError
    ];
}