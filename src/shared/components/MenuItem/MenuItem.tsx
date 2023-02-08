import React from 'react';
import { PropsMenuItem } from './MenuItem.props';
import styles from './MenuItem.module.scss';
import { Link } from 'react-router-dom';

export const MenuItem = ({ icon: Icon, value, href }: PropsMenuItem) => {

  return (
    <Link className={styles.item} to={href}>
        {
          Icon && <Icon size={20} className={styles.icon}/>
        }
        <span className={styles.value}>{ value }</span>
    </Link>
  )
}
