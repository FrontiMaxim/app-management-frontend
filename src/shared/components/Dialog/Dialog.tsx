import React from 'react';
import { Button } from '../Button/Button';
import { PropsDialog } from './Dialog.props';
import styles from './Dialog.module.scss';

export const Dialog = ({question, agree, disagree}: PropsDialog) => {
  return (
    <div className={styles.dialog}>
        <div className={styles.question}>
            {
                question
            }
        </div>
        <div className={styles.container_btn}>
            <Button onClick={agree} mode='primary' className={styles.btn}>Да</Button>
            <Button onClick={disagree} mode='normal' className={styles.btn}>Нет</Button>
        </div>
    </div>
  )
}
