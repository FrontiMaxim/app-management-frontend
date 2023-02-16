import React from 'react'
import { useLocation } from 'react-router-dom';
import styles from './TaskPage.module.scss';
import { PanelComment, PanelResource } from '../../widgets';
import { ContainerInformationTask, ITask, TagStatusTask } from '../../entities/task';
import { Avatar } from '../../shared';

type TypeState = {
    currentTask: ITask;
}

export const TaskPage = () => {

    const { currentTask } = useLocation().state as TypeState;
   
    return (
        <div className={styles.page}>
            <div className={styles.information}>
                <div className={styles.head}>
                    <TagStatusTask type={currentTask.status.name} />
                    <ContainerInformationTask 
                        typeInformation='DEADLINE' 
                        title='Срок сдачи' 
                        information={currentTask.deadline} 
                    />
                    {
                    currentTask.user &&
                    <div className={styles.container_user} title='Исполнитель'>
                        <span className={styles.name}>{currentTask.user.name}</span>
                        <Avatar avatar={currentTask.user.avatar} is_online={false} className={styles.avatar} />
                    </div>
                    }
                </div>
                <div className={styles.body}>
                    <h3>{currentTask.name}</h3>
                    <p>{currentTask.description}</p>
                </div> 
            </div>
            <PanelResource id_task={currentTask.id_task} className={styles.resources} />
            <PanelComment task={currentTask} className={styles.comments} />
        </div>
    )
}
