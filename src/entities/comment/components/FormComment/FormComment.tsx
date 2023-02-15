import React, { useState } from 'react'
import { Button, formatDate, formatTime } from '../../../../shared';
import { useCreateComment } from '../../lib/hooks/useCreateComment';
import styles from './FormComment.module.scss';
import { PropsFormComment } from './FormComment.props';


export const FormComment = ({ task, user }: PropsFormComment) => {

    const [comment, setComment] = useState<string>('');
    const [create] = useCreateComment();

    const submit = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();

        if(comment !== '') {
            const date = new Date().toString();

            create({
                content: comment,
                task,
                user,
                data: formatDate(date, 'LOCAL'),
                time: formatTime(date)
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
