import React from 'react';
import { PropsModalWindow } from './ModalWindow.props';
import styles from './ModalWindow.module.scss';

export const ModalWindow = ({ children }: PropsModalWindow) => {
  return (
      <div className={styles.modal_window}>
        {
          children
        }
      </div>
  )
}
