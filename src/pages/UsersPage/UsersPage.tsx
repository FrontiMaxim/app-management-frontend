import React from 'react'
import { useAppSelector } from '../../store';
import { UserCreationPanel } from '../../widgets';
import styles from './UsersPage.module.scss';
import { ListUsers } from '../../entities/user';


export const UsersPage = () => {

    const { listUser } = useAppSelector(state => state.listUser);

    return (
        <div className={styles.page}>
           <h1>Список пользователей</h1>
            <ListUsers isChange users={listUser} />
            <UserCreationPanel />
        </div>
    )
}
