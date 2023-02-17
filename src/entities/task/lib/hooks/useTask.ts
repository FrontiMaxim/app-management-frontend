import { useQuery } from "react-query";
import { ITask } from "../..";
import { getTasksByIdObject } from "../../api/getTasksByIdObject";
import { useLoacalStorage } from "../../../../shared";
import { useAppSelector } from "../../../../store";

interface IUseTask {
    tasks: ITask[] | undefined,
    isLoading: boolean,
    isError: boolean,
}

export const useTask = (id_object: string): IUseTask => {
    const [token] = useLoacalStorage<string>('token');

    const {role, id_user} = useAppSelector(state => state.user);

    const { data: tasks, isLoading, isError } = useQuery<ITask[], Error, ITask[], string>(
        `tasks`, 
        () => getTasksByIdObject('/task/read/tasks', id_object, token!),
        {
            refetchInterval: 1000 * 60,
            select: (tasks => {
                if(role !== 'DESIGNER') {
                    return tasks;
                }
                return tasks.filter(task => task.user.id_user === id_user);
            })
        }
    );

    return {
        tasks,
        isLoading,
        isError,
    }
}