import React from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { ModalWindow, useModalWindow } from '../../shared';
import { FormTask } from '../../entities/task';
import styles from './TaskCreationPanel.module.scss';
import { PropsTaskCreationPanel } from './TaskCreationPanel.props';

export const TaskCreationPanel = ({ currentObject }: PropsTaskCreationPanel) => {

    const {isOpen, open, close} = useModalWindow();

    return (
        <div>
            <BsPlusCircleFill 
                onClick={open} 
                size={65} 
                fill='#4460ed' 
                className={styles.btn}
                title='Создать новую задачу'
            />
            {
                isOpen &&
                <ModalWindow>
                    <FormTask mode='CREATE' closeModalWindow={close} currentObject={currentObject} />
                </ModalWindow>
            }
        </div>
    )
}
