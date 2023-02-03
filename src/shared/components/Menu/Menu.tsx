import React from 'react';
import { PropsMenu } from './Menu.props';
import styles from './Menu.module.scss';
import { MenuItem } from '../MenuItem/MenuItem';

export const Menu = ({ items }: PropsMenu) => {
  return (
    <nav className={styles.menu}>
        <ul>
            {
                items.map(item => <MenuItem {...item} />)
            }
        </ul>
    </nav>
  )
}
