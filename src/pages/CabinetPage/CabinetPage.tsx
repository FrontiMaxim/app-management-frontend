import React from 'react';
import styles from './CabinetPage.module.scss';
import { Section, Sidebar, Topbar } from '../../widgets';

export const CabinetPage = () => {

    return (
        <div className={styles.page}>
            <Sidebar />
            <Topbar />
            <Section />
        </div>
    )
}
