import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { ITask } from "../../model/task.interface";
import { useLoacalStorage } from "../../../../shared";
import { updateTask } from "../../api/updateTask";

type IUseUpdateTaks = [
    mutate: UseMutateFunction<ITask[], unknown, ITask, unknown>,
    isLoading: boolean,
    isError: boolean
];

export const useUpdateTask = (): IUseUpdateTaks => {

    const [token] = useLoacalStorage<string>('token');

    const queryClient = useQueryClient();
    
    const { mutate, isLoading, isError } = useMutation((task: ITask) => {
        return updateTask('/task/update', task, token as string);
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