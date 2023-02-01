import React from 'react';
import { Session } from '../../entities/session';
import styles from './SessionPage.module.scss';

export const SessionPage = () => {
  return (
    <div className={styles.page}>
        <Session />
    </div>
  )
}
