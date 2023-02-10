import { useQuery } from "react-query";
import { ITask } from "../..";
import { getTasksByIdObject } from "../../api/getTasksByIdObject";
import { getTasksByIdUser } from "../../api/getTasksByIdUser";
import { useLoacalStorage } from "../../../../shared";

interface IUseTask {
    tasks: ITask[] | undefined,
    isLoading: boolean,
    isError: boolean,
}

export const useTask = (id_object?: string, id_user?: string): IUseTask => {
    const [token] = useLoacalStorage<string>('token');

    const { data: tasks, isLoading, isError } = useQuery<ITask[], Error, ITask[], string>(
        'tasks', 
        () => {
            if(id_object) {
                return getTasksByIdObject('/task/read/tasks', id_object, token!);
            } else if (id_user) {
                return getTasksByIdUser('/task/read/tasks', id_user, token!);
            }  else {
                return Promise.reject();
            }
        },
    );

    return {
        tasks,
        isLoading,
        isError,
    }
}