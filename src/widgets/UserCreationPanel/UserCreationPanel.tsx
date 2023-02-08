import React from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { ModalWindow, useModalWindow } from '../../shared';
import styles from './UserCreationPanel.module.scss';
import FormUser from '../../entities/user/components/FormUser/FormUser';


export const UserCreationPanel = () => {

    const {isOpen, open, close} = useModalWindow();

    return (
        <div className={styles.panel}>
            <BsPlusCircleFill 
                onClick={open} 
                size={65} 
                fill='#4460ed' 
                className={styles.btn}
                title='Создать нового пользователя'
            />
            {
                isOpen &&
                <ModalWindow>
                    <FormUser mode='CREATE' closeModalWindow={close} />
                </ModalWindow>
            }
        </div>
    )
}
