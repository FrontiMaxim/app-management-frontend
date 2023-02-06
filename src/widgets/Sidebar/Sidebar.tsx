import React, { useEffect } from 'react';
import styles from './Sidebar.module.scss';
import { Avatar, Menu } from '../../shared';
import { useAppDispatch, useAppSelector } from '../../store';
import { installUser, useUser, ROLES, useUsers, setListUser, ListUsers} from '../../entities/user';
import { MdOutlineMapsHomeWork } from 'react-icons/md';
import { HiUsers } from 'react-icons/hi';
import { AiFillPieChart } from 'react-icons/ai';

export const Sidebar = () => {

    const { user } = useUser();
    const { users } = useUsers();

    const menuItems = [
      {
        icon: MdOutlineMapsHomeWork,
        value: 'Объекты',
        href: ''
      },
      {
        icon: HiUsers,
        value: 'Пользователи',
        href: ''
      },
      {
        icon: AiFillPieChart,
        value: 'Статистика',
        href: ''
      }
    ];

    const dispatch = useAppDispatch();

    const { listUserOnline } = useAppSelector(state => state.listUser);

    useEffect(() => {
        if(user) {
            dispatch(installUser(user));
        }
    }, [user]);


    useEffect(() => {
      if(users) {
          dispatch(setListUser(users));
      }
  }, [users]);

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

        <div className={styles.container_list}>
          <h4>Пользователи онлайн:</h4>
          <ListUsers isChange={false} users={listUserOnline}  className={styles.list}/>
        </div>
    </div>
  )
}
