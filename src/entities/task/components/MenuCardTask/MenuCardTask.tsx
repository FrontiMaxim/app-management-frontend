import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import styles from './MenuCardTask.module.scss';
import { PropsMenuCardTask } from './MenuCardTask.props';

export const MenuCardTask = ({ children }: PropsMenuCardTask) => {

  return (
    <div className={styles.menu}>
      <HiDotsHorizontal  className={styles.btn_control} size={20} />
     
      <div className={styles.container}>
        {
          children
        }
      </div>
      
    </div>
  )
}
