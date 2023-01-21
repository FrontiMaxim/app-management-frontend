import React from 'react'
import { useTask } from '../../hooks/useTask'
import { CardTask } from '../../components';
import styles from './Tasks.module.scss';

export const Tasks = () => {

    const { tasks } = useTask("e6e33d4b-0907-4e62-8095-6ebfc6b51688");
    
    return (
        <div className={styles.tasks_page}>
            {
                tasks?.map(task => <CardTask key={task.id_task} task={task}/>)
            }
        </div>
    )
}
