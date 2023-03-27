import React from 'react'
import { PropsCardNotification } from './CardNotification.props';
import cn from 'classnames';
import styles from './CardNotification.module.scss';
import { formatDate, formatTime } from '../../../../shared';

const CardNotification = ({ data, className }: PropsCardNotification) => {
  return (
    <div className={cn(styles.card, className)}>
        <strong>{formatDate(data.data.toString(), 'LOCAL')}</strong>
        &nbsp;
        в
        &nbsp;
        <strong>{formatTime(data.data.toString())}</strong>
        &nbsp;
        <span>
            к задаче
            &nbsp; 
            <strong>"{data.task.name}"</strong> 
            &nbsp;
            добавлен новый
            &nbsp; 
            {data.type === 'RESOURCE' ? 'ресурс' : 'комментарий'}
        </span>
    </div>
  )
}

export default CardNotification