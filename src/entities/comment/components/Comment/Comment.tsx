import React from 'react';
import styles from './Comment.module.scss';
import { Avatar } from '../../../../shared';
import { PropsComment } from './Comment.props';
import cn from 'classnames';

export const Comment = ({ comment, myself }: PropsComment) => {
  return (
    <div className={cn(styles.comment, {
        [styles.myself]: myself
    })}>
        {
            !myself && <Avatar avatar={comment.user.avatar} is_online={comment.user.is_online} />
        }
        <div className={styles.information}>
            <span className={styles.sender}>
                {myself ? 'Вы' : comment.user.name}
            </span>
            <div className={styles.date}>
                <span>{comment.data}</span>
                <span className={styles.time}>{comment.time}</span>
            </div>
        </div>
        <pre className={styles.content}>
            {comment.content}
        </pre>
    </div>
  )
}
