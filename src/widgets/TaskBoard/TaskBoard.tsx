import React, { useEffect, useState } from 'react'
import { PropsTaskBoard } from './TaskBoard.props'
import { ITask, ListTask, TagListTask, distributeTasksByStatus, useTask } from '../../entities/task';
import styles from './TaskBoard.module.scss';

export const TaskBoard = ({id_object, id_user}: PropsTaskBoard) => {
    
    const { tasks } = useTask(id_object, id_user);

    const [scheduledTasks, setScheduledTasks] = useState<ITask[]>([]);
    const [onProgresTasks, setOnProgresTasks] = useState<ITask[]>([]);
    const [completedTasks, setCompletedTasks] = useState<ITask[]>([]);

    useEffect(() => {
        if(tasks) {
            const { scheduledTasks, onProgresTasks, completedTasks } = distributeTasksByStatus(tasks);

            setScheduledTasks(scheduledTasks);
            setOnProgresTasks(onProgresTasks);
            setCompletedTasks(completedTasks);
        }
    }, [tasks]);
    
    return (
        <div className={styles.board} >
            <div className={styles.column}>
                <TagListTask type='SCHEDULED' />
                <ListTask data={scheduledTasks} />
            </div>
            <div className={styles.column}>
                <TagListTask type='ON_PROGRES' />
                <ListTask data={onProgresTasks} />
            </div>
            <div className={styles.column}>
                <TagListTask type='COMPLETE' />
                <ListTask data={completedTasks} />
            </div>
        </div>
    )
}
