import React from 'react';
import styles from './LoginPage.module.scss';
import { FormLogin } from '../../entities/user';


export const LoginPage = () => {

    return (
      <div className={styles.login}>
        <FormLogin />
      </div>
    )
}
