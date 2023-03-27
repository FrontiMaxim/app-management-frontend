import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { useLoacalStorage } from "../../../../shared";
import { AxiosResponse } from "axios";
import { INotification } from "../../model/notification.interface";
import { createNotification } from "../../api/createNotification";

type IUseCreateNotification = [
    mutate: UseMutateFunction<AxiosResponse<INotification, any>, unknown, INotification, unknown>,
    isLoading: boolean,
    isError: boolean
];

export const useCreateNotification = (): IUseCreateNotification => {

    const [token] = useLoacalStorage<string>('token');

    const queryClient = useQueryClient();
    
    const { mutate, isLoading, isError } = useMutation((notification: INotification) => {
        return createNotification('/notification/create', notification, token!);
    }, {
        onSuccess() {
            queryClient.invalidateQueries('notification');
        }
    });

    return [
        mutate,
        isLoading,
        isError
    ];
}
