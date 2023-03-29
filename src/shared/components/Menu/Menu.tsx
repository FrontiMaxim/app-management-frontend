import React from 'react';
import { PropsMenu } from './Menu.props';
import styles from './Menu.module.scss';
import { MenuItem } from '../MenuItem/MenuItem';
import { MenuItemWithBadge } from '../MenuItemWithBadge/MenuItemWithBadge';
import { useAppSelector } from '../../../store';

export const Menu = ({ items }: PropsMenu) => {

  const { count } = useAppSelector(state => state.listNotification);
  const { role} = useAppSelector(state => state.user);

  return (
    <nav className={styles.menu}>
        <ul>
            {
                items.map(item => 
                  item.withBadge ? <MenuItemWithBadge key={Date.now() + item.href} {...item}  count={count}/> 
                  : 
                  (role === 'ADMIN' || item.value === 'Проекты') && <MenuItem key={Date.now() + item.href} {...item} />
                )
            }
        </ul>
    </nav>
  )
}
