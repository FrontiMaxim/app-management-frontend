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


        const date = new Date().toString();

        create({
            content: comment,
            task,
            user,
            data: formatDate(date, 'LOCAL'),
            time: formatTime(date)
        });
    }

    return (
        <form className={styles.form}>
            <textarea className={styles.text} onChange={(e) => setComment(e.target.value)}/>
            <Button onClick={submit}>
                Отправить
            </Button>
        </form>
    )
}
