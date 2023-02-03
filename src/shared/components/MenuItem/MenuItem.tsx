import React from 'react';
import { PropsMenuItem } from './MenuItem.props';
import styles from './MenuItem.module.scss';

export const MenuItem = ({ icon, value, href }: PropsMenuItem) => {

  return (
    <li className={styles.item}>
        {
          icon
        }
        <span className={styles.value}>{ value }</span>
    </li>
  )
}
