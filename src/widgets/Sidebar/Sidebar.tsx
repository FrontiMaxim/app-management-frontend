import React, { useEffect } from 'react';
import styles from './Sidebar.module.scss';
import { Avatar, Menu } from '../../shared';
import { useAppDispatch } from '../../store';
import { installUser, useUser, ROLES } from '../../entities/user';
import { MdOutlineMapsHomeWork } from 'react-icons/md';
import { PropsMenuItem } from '../../shared/components/MenuItem/MenuItem.props';
import { HiUsers } from 'react-icons/hi';
import { AiFillPieChart } from 'react-icons/ai';

export const Sidebar = () => {

    const { user } = useUser();

    const menuItems: PropsMenuItem[] = [
      {
        icon: <MdOutlineMapsHomeWork size={30} fill='#b1b1b1' />,
        value: 'Объекты',
        href: ''
      },
      {
        icon: <HiUsers size={30} fill='#b1b1b1' />,
        value: 'Пользователи',
        href: ''
      },
      {
        icon: <AiFillPieChart size={30} fill='#b1b1b1' />,
        value: 'Статистика',
        href: ''
      }
    ];

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(user) {
            dispatch(installUser(user));
        }
    }, [user]);

  return (
    <div className={styles.sidebar}>
        {
            user && 
            <div className={styles.user}>
              <Avatar 
                avatar={user.avatar} 
                is_online={false} 
                className={styles.avatar}
              />
              <div className={styles.name}>{user.name}</div>
              <div className={styles.role}>{ ROLES[user.role] }</div>
            </div>
        }

        <Menu items={menuItems}/>
    </div>
  )
}
