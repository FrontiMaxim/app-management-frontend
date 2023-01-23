import React from 'react';
import cn from 'classnames';
import styles from './TagStatusTask.module.scss';
import { PropsTagStatusTask } from './TagStatusTask.props';

export const TagStatusTask = ({ type, ...props }: PropsTagStatusTask) => {

    let legend = '';

    switch(type) {
        case 'SCHEDULED':
            legend = 'Запланировано';
            break;
        case 'ON_PROGRES':
            legend = 'В процессе';
            break;
        case 'COMPLETE':
            legend = 'Выполнено';
            break;
        default:
            legend = '';
    }
        
    return (
        <span className={cn(styles.tag, {
            [styles.scheduled]: type==='SCHEDULED',
            [styles.on_progres]: type==='ON_PROGRES',
            [styles.complete]: type==='COMPLETE'
        })} {...props}>
            {
                legend
            }
        </span>
    );
}
