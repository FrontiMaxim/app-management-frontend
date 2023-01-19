import React from 'react';
import styles from './CardObject.module.scss';
import { IPropsCardObject } from './ICardObject';
import { AvatarGroup } from '../AvatarGroup/AvatarGroup';
import { IUser } from '../../interfaces/IUser';

export const CardObject = ({ city, street, house, apartment, note, data_start, client, users }: IPropsCardObject) => {
    return (
        <div className={styles.card_object}>
            <div className={styles.note}>
               {note} 
            </div>
            <div className={styles.location}>
                <span>Город: {city}</span>
                <span>Улица: {street}</span>
                <span>Дом: {house}</span>
                {
                    apartment && <span>Квартира: {apartment}</span>
                }
            </div>
            <div>
                Клиент: {client}
            </div>
            <div>
                Дата запуска проекта: {data_start}
            </div>
            {
                users && <AvatarGroup users={users as IUser[]} />
            }
            
        </div>
    )
}