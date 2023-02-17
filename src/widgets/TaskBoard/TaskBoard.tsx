import React, { useEffect, useState } from 'react'
import { PropsTaskBoard } from './TaskBoard.props'
import { ITask, ListTask, TagListTask, distributeTasksByStatus, useTask } from '../../entities/task';
import styles from './TaskBoard.module.scss';
import cn from 'classnames';

export const TaskBoard = ({id_object, className}: PropsTaskBoard) => {
    
    const { tasks } = useTask(id_object);

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
        <div className={cn(styles.board, className)} >
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
