import React from 'react'
import { TiArrowSortedUp } from 'react-icons/ti';
import { PropsTagListTask } from './TagListTask.props';
import styles from './TagListTask.module.scss';

export const TagListTask = ({ type }: PropsTagListTask) => {

    let text = '';
    let color = '#000000';

    switch(type) {
        case 'SCHEDULED':
            text = 'Запланировано';
            color = '#e79871';
            break;
        case 'ON_PROGRES':
            text = 'В процессе';
            color = '#4c64d0';
            break;
        case 'COMPLETE':
            text = 'Выполнено';
            color = '#48a21c';
            break;
    }

    return (
        <div className={styles.tag} >
            <span className={styles.text}>{text}</span>
            <TiArrowSortedUp fill={color} className={styles.icon} size={30} />
        </div>
    );
}
