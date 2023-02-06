import React from 'react';
import { PropsMenuItem } from './MenuItem.props';
import styles from './MenuItem.module.scss';

export const MenuItem = ({ icon: Icon, value, href }: PropsMenuItem) => {

  return (
    <li className={styles.item}>
        {
          Icon && <Icon size={20} className={styles.icon}/>
        }
        <span className={styles.value}>{ value }</span>
    </li>
  )
}
