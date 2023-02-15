import React from 'react'
import { FormComment, ListComment } from '../../entities/comment'
import { useAppSelector } from '../../store';
import { PropsPanelComment } from './PanelComment.props';
import styles from './PanelComment.module.scss';
import cn from 'classnames';

export const PanelComment = ({ task, className }: PropsPanelComment) => {
    const user = useAppSelector(state => state.user);

    return (
        <div className={cn(styles.panel, className)}>
            <h2>Комментарии</h2>
            <hr />
            <ListComment task={task} idCurrentUser={user.id_user}  className={styles.list}/>
            <FormComment task={task} user={user} />
        </div>
    )
}
