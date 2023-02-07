import React from 'react';
import styles from './CabinetPage.module.scss';
import { Section, Sidebar, Topbar, UserCreationPanel } from '../../widgets';
import { ListUsers } from '../../entities/user';
import { useAppSelector } from '../../store';

export const CabinetPage = () => {

    const users = useAppSelector(state => state.listUser.listUser);

    return (
        <div className={styles.page}>
            <Sidebar />
            <Topbar />
            <Section>
                
                <ListUsers isChange users={users} />
                <UserCreationPanel />
            </Section>
        </div>
    )
}
