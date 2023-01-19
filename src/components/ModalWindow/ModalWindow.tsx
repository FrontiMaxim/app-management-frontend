import React from 'react';
import { IModalWindow } from './IModalWindow';
import styles from './ModalWindow.module.scss';

export const ModalWindow = ({ children }: IModalWindow) => {
  return (
      <div className={styles.modal_window}>
        {
          children
        }
      </div>
  )
}
