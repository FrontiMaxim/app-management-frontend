import React from 'react';
import styles from './CabinetPage.module.scss';
import { Sidebar, Topbar } from '../../widgets';
import { Outlet } from 'react-router-dom';

export const CabinetPage = () => {

    return (
        <div className={styles.page}>
            <Sidebar />
            <Topbar />
            <Outlet />  
        </div>
    )
}
