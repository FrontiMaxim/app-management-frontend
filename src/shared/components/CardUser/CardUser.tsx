import React from 'react';
import { PropsCardUser } from './CardUser.props';
import styles from './CardUser.module.scss';
import { Avatar } from '../Avatar/Avatar';
import { ROLES } from '../../../entities/user';


export const CardUser = ({ avatar, name, role, is_online }: PropsCardUser) => {

    return (
        <div className={styles.card_user}>
            <Avatar avatar={avatar} is_online={is_online} />
            <div className={styles.information}>
                <div className={styles.name}>
                    { name }
                </div>
                <div className={styles.role}>
                    { ROLES[role] }
                </div>
            </div>
        </div>
    )
}
