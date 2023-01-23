import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { ITask } from "../../model/task.interface";
import { createTask } from "../../api/createTask";
import { useLoacalStorage } from "../../../../shared";

type IUseCreateTaks = [
    mutate: UseMutateFunction<ITask[], unknown, ITask, unknown>,
    isLoading: boolean,
    isError: boolean
];

export const useCreateTask = (): IUseCreateTaks => {

    const [token] = useLoacalStorage<string>('token');

    const queryClient = useQueryClient();
    
    const { mutate, isLoading, isError } = useMutation((task: ITask) => {
        return createTask('/task/create', task, token as string);
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