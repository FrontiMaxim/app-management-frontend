import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { FaPen } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import styles from './MenuCardTask.module.scss';
import cn from 'classnames'

export const MenuCardTask = () => {

  return (
    <div className={styles.menu}>
      <HiDotsHorizontal  className={styles.btn_control} size={20} />
     
      <div className={styles.container}>
        <FaPen size={12} className={styles.btn} title='Редактировать' />
        <ImCross size={12} className={cn(styles.btn, styles.delete)} title='Удалить' />
      </div>
      
    </div>
  )
}
