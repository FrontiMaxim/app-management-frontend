import React from 'react';
import { IPropsCardUser } from './IPropsCardUser';
import styles from './CardUser.module.scss';

export const CardUser = ({ avatar, name, role, is_online }: IPropsCardUser) => {

    interface TRoles {
        [key: string]: string,
    }

    const roles: TRoles = {
        'ADMIN': 'Администратор',
        'CLIENT': 'Клиент',
        'DESIGNER': 'Дизайнер'
    };

    return (
        <div className={styles.card_user}>
            <div className={styles.container_is_online}>
                {
                    is_online && <div className={styles.indicator}></div>
                }
                <img className={styles.avatar} src={avatar} alt='аватар'/>
            </div>
            <div className={styles.information}>
                <div className={styles.name}>
                    { name }
                </div>
                <div className={styles.role}>
                    { roles[role] }
                </div>
            </div>
        </div>
    )
}
