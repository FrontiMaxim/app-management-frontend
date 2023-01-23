import { ITask } from "../..";

interface IReturn {
    scheduledTasks: ITask[];
    onProgresTasks: ITask[];
    completedTasks: ITask[];
}

export const distributeTasksByStatus = (tasks: ITask[]): IReturn =>  {
    const scheduledTasks: ITask[] = [];
    const onProgresTasks: ITask[] = [];
    const completedTasks: ITask[] = [];

    for (let task of tasks) {
        if (task.status.name === 'SCHEDULED') {
            scheduledTasks.push(task);
        } else if (task.status.name === 'ON_PROGRES') {
            onProgresTasks.push(task);
        } else if (task.status.name === 'COMPLETE') {
            completedTasks.push(task);
        }
    }

    return {
        scheduledTasks,
        onProgresTasks,
        completedTasks
    }
}