import React from 'react';
import { PropsMenuItemWithBadge } from './MenuItemWithBadge.props';
import styles from './MenuItemWithBadge.module.scss';
import { Link } from 'react-router-dom';
import Badge from '../Badge/Badge';

export const MenuItemWithBadge = ({ icon: Icon, value, href, count }: PropsMenuItemWithBadge) => {

  return (
    <Link className={styles.item} to={href}>
        {
          Icon && <Icon size={20} className={styles.icon}/>
        }
        <span className={styles.value}>{ value }</span>
        <Badge count={count} />
    </Link>
  )
}
