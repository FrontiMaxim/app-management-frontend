import React from 'react';
import { IPropsTag } from './ITag';
import cn from 'classnames';
import styles from './Tag.module.scss';

function Tag({ type, ...props }: IPropsTag) {

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

export default Tag