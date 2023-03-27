import React from 'react'
import styles from './NotificationPage.module.scss';
import { useAppSelector } from '../../store';
import CardNotification from '../../entities/notification/components/CardNotification/CardNotification';
import { useNavigate } from 'react-router-dom';
import { ITask } from '../../entities/task';
import { useUpdateNotification } from '../../entities/notification/lib/hooks/useUpdateNotification';


export const NotificationPage = () => {

    const { list } = useAppSelector(state => state.listNotification)
    const [update] = useUpdateNotification();
    const navigate = useNavigate();

    const goToNotification = (task: ITask) => {
        update(task.id_task);
        navigate('/cabinet/task', { state: { currentTask: task }});
    }

    return (
        <div className={styles.page}>
           <h1>Уведомления</h1>
            
            <ul className={styles.list}>
                {
                    list.map(item => 
                        <li className={styles.list_item} onClick={() => goToNotification(item.task)} >
                            <CardNotification 
                                data={item} 
                                type={item.type}
                            /> 
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
