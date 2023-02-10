import React from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { ModalWindow, useModalWindow } from '../../shared';
import styles from './ObjectCreationPanel.module.scss';
import { FormObject } from '../../entities/object';


export const ObjectCreationPanel = () => {

    const {isOpen, open, close} = useModalWindow();

    return (
        <div className={styles.panel}>
            <BsPlusCircleFill 
                onClick={open} 
                size={65} 
                fill='#4460ed' 
                className={styles.btn}
                title='Создать новый проект'
            />
            {
                isOpen &&
                <ModalWindow>
                    <FormObject mode='CREATE' closeModalWindow={close} />
                </ModalWindow>
            }
        </div>
    )
}
