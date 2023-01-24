import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { useLoacalStorage } from "../../../../shared";
import { deleteTask } from "../../api/deleteTask";

type IUseDeleteTask = [
    mutate: UseMutateFunction<any, unknown, string, unknown>,
    isLoading: boolean,
    isError: boolean
];

export const useDeleteTask = (): IUseDeleteTask => {

    const [token] = useLoacalStorage<string>('token');

    const queryClient = useQueryClient();
    
    const { mutate, isLoading, isError } = useMutation((id_task: string) => {
        return deleteTask('/task/delete', id_task, token as string);
    }, {
        onSuccess() {
            queryClient.invalidateQueries('tasks');
        }
    });

    return [
        mutate,
        isLoading,
        isError
    ];
}