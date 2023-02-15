import React from 'react'
import { useLocation } from 'react-router-dom';
import styles from './TaskPage.module.scss';
import { PanelComment, PanelResource } from '../../widgets';

export const TaskPage = () => {

    const { state } = useLocation();

    return (
        <div className={styles.page}>
            <PanelResource id_task={state.currentTask.id_task} className={styles.resources} />
            <PanelComment task={state.currentTask} className={styles.comments} />
        </div>
    )
}
