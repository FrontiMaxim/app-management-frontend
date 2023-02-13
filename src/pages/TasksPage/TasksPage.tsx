import React from 'react';
import { TaskBoard, TaskCreationPanel } from '../../widgets';
import { useLocation } from 'react-router-dom';
import styles from './TasksPage.module.scss';
import { CardObject } from '../../entities/object';
import { AvatarGroup, Button } from '../../shared';

export const TasksPage = () => {

    const { state } = useLocation();

    return (
        <div className={styles.page}> 
            <div className={styles.container_information}>
                <div className={styles.information}>
                    <CardObject {...state.currentObject} />

                    <div className={styles.container_team}>
                        <span>Команда:</span>
                        <AvatarGroup users={state.currentObject.users} />
                    </div>
                    
                    <TaskCreationPanel 
                        currentObject={state.currentObject}
                    />
                </div>
            </div>
           
            <TaskBoard 
                id_object={state.currentObject.id_object} 
                className={styles.board}
            />
            {/* <TaskCreationPanel 
                currentObject={state.currentObject}
            /> */}
        </div>
    )
}
