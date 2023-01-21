import { useQuery } from "react-query";
import { ITask } from "../interfaces/ITask";
import { getTasksByIdObject } from "../services/taskService";

interface IUseObjects {
    tasks: ITask[] | undefined,
    isLoading: boolean,
    isError: boolean,
    isSuccess: boolean
}
 
export const useTask = (id_object: string): IUseObjects => {

    const token = localStorage.getItem('token');

    const { data: tasks, isLoading, isError, isSuccess } = useQuery<ITask[], Error, ITask[], string>(
        'tasks', 
        () => getTasksByIdObject('/task/read/tasks', id_object, token!),
        {
            initialData: [] as ITask[]
        }
    );

    return {
        tasks,
        isLoading,
        isError,
        isSuccess,
    }
}