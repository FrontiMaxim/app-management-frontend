import React from 'react';
import styles from './CardObject.module.scss';
import { PropsCardObject } from './CardObject.props';

export const CardObject = ({ city, street, house, apartment, note, data_start, users }: PropsCardObject) => {
    return (
        <div className={styles.card}>
            <div className={styles.note}>
               {note} 
            </div>
            <div className={styles.location}>
                <span className={styles.bold}> Город: </span>{city}
                <span className={styles.bold}> Улица: </span>{street}
                <span className={styles.bold}> Дом: </span>{house}
                {
                    apartment && 
                    <span>
                        <span className={styles.bold}> Квартира: </span>
                        {apartment}
                    </span>
                }
            </div>
            <div>
                <span className={styles.bold}>Дата запуска проекта: </span> 
                {data_start}
            </div>
        </div>
    )
}