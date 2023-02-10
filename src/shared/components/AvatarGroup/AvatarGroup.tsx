import React from 'react'
import { PropsAvatarGroup } from './AvatarGroup.props';
import { RiTeamFill } from 'react-icons/ri';
import styles from './AvatarGroup.module.scss';

export const AvatarGroup = ({ users }: PropsAvatarGroup ) => {

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
                                    <div className={styles.name}>{user.name}</div>
                                    <div className={styles.role}>
                                      { roles[user.role] }
                                    </div>
                                </div>
                                <img src={`avatars/${user.avatar}`} alt='аватарка' className={styles.avatar} />
                              </li>)  
        }
      </ul>
      <div className={styles.count}>
        <RiTeamFill size={20} fill='#4460ed' className={styles.icon}/>
        <span>{users.length}</span>
      </div>
    </div>
  )
}
