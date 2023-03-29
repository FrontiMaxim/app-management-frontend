import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { useLoacalStorage } from "../../../../shared";
import { updateNotification } from "../../api/updateNotification";
import { useAppSelector } from "../../../../store";

type IUseUpdateNotification = [
    mutate: UseMutateFunction<unknown, unknown, string, unknown>,
    isLoading: boolean,
    isError: boolean
];

export const useUpdateNotification = (): IUseUpdateNotification => {

    const [token] = useLoacalStorage<string>('token');
    const { id_user } = useAppSelector(state => state.user);

    const queryClient = useQueryClient();
    
    const { mutate, isLoading, isError } = useMutation((id_task: string) => {
        return updateNotification('/notification/update', id_task, id_user, token!);
    }, {
        onSuccess() {
            queryClient.invalidateQueries('notifications');
        }
    });

    return [
        mutate,
        isLoading,
        isError
    ];
}