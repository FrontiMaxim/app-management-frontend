import React from 'react'
import { IPropsAvatarGroup } from './IAvatarGroup'
import styles from './AvatarGroup.module.scss';

export const AvatarGroup = ({ users }: IPropsAvatarGroup ) => {

  interface TRoles {
      [key: string]: string,
  }

  const roles: TRoles = {
      'ADMIN': 'Администратор',
      'CLIENT': 'Клиент',
      'DESIGNER': 'Дизайнер'
  };

  return (
    <div className={styles.avatar_group}>
      <ul className={styles.list}>
        {
            users.map(user => <li key={user.id_user} className={styles.item}>
                                <div className={styles.information}>
                                    <div>ФИО: {user.name}</div>
                                    <div>
                                      { roles[user.role] }
                                    </div>
                                </div>
                                <img src={user.avatar} alt='аватарка' className={styles.avatar} />
                              </li>)  
        }
      </ul>
      <span className={styles.count}>{users.length}</span>
    </div>
  )
}
