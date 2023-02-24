import React, { ChangeEvent, RefObject, useEffect, useRef } from 'react';
import styles from './Sidebar.module.scss';
import { Avatar, Menu, PropsMenuItem } from '../../shared';
import { useAppDispatch, useAppSelector } from '../../store';
import { installUser, useUser, ROLES, useUsers, setListUser, ListUsers, useUpdateAvatar} from '../../entities/user';
import { MdOutlineMapsHomeWork } from 'react-icons/md';
import { HiUsers } from 'react-icons/hi';
import { BsPlusCircleFill } from 'react-icons/bs';


export const Sidebar = () => {

    const { user } = useUser();
    const { users } = useUsers();
    
    const menuItems: PropsMenuItem[] = [
      {
        icon: MdOutlineMapsHomeWork,
        value: 'Проекты',
        href: '/cabinet'
      },
      {
        icon: HiUsers,
        value: 'Пользователи',
        href: '/cabinet/users'
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


    const refInputFile = useRef() as RefObject<HTMLInputElement> | null;

    const handleClickBtnChangeAvatar = () => {
      if(refInputFile) {
        refInputFile.current!.click();
      }
    }

    const [updateAvatar] = useUpdateAvatar();
    
    const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
      const formData = new FormData();  
     
      if(e.target.files && user) {
        formData.append('avatar', e.target.files[0]);

        updateAvatar({
          body: formData,
          login: user.login
        });
      }
    }

  return (
    <div className={styles.sidebar}>
        {
            user && 
            <div className={styles.user}>
              <div className={styles.container_avatar}>
                <Avatar 
                  avatar={user.avatar} 
                  is_online={false} 
                  className={styles.avatar}
                />
                <BsPlusCircleFill 
                  onClick={handleClickBtnChangeAvatar} 
                  size={35} 
                  fill='#4460ed' 
                  className={styles.btn_change_avatar}
                  title='Загрузить аватарку'
                />
                <input 
                  ref={refInputFile}
                  type='file' 
                  accept='.jpeg, .jpg' 
                  onChange={handleChangeFile}
                  hidden
                />
              </div>
              <div className={styles.name}>{user.name}</div>
              <div className={styles.role}>{ ROLES[user.role] }</div>
            </div>
        }

        {
            user && user.role === 'ADMIN' &&
            <Menu items={menuItems}/>
        }
       
        <div className={styles.container_list}>
          <h4>Пользователи онлайн:</h4>
          <ListUsers isChange={false} users={listUserOnline}  className={styles.list}/>
        </div>
    </div>
  )
}
