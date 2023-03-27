import React, { useState } from 'react'
import { Button, formatDate, formatTime } from '../../../../shared';
import { useCreateComment } from '../../lib/hooks/useCreateComment';
import styles from './FormComment.module.scss';
import { PropsFormComment } from './FormComment.props';
import { useCreateNotification } from '../../../notification/lib/hooks/useCreateNotification';
import { useAppSelector } from '../../../../store';


export const FormComment = ({ task, user }: PropsFormComment) => {

    const [comment, setComment] = useState<string>('');
    const [createComment] = useCreateComment();

    const [createNotification] = useCreateNotification();

    const { id_user } = useAppSelector(state => state.user);

    const submit = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();

        if(comment !== '') {
            const date = new Date().toString();

            createComment({
                content: comment,
                task,
                user,
                data: formatDate(date, 'LOCAL'),
                time: formatTime(date)
            });

            createNotification({
                id_user,
                id_task: task.id_task,
                data: new Date(Date.now()) ,
                is_watch: false,
                type: 'MESSAGE'
            });
    
            setComment('');
        }       
    }

    return (
        <form className={styles.form}>
            <textarea className={styles.text} 
                defaultValue=''
                value={comment} 
                onChange={(e) => setComment(e.target.value)}
                placeholder='Комментарий...'
            />
            <Button onClick={submit} mode='primary' className={styles.btn}>
                Отправить
            </Button>
        </form>
    )
}
