import React from 'react'
import { ModeModalWindow } from '../../interfaces/IModalWindow';
import { useModalWindow } from '../../hooks/useModalWindow';
import { Button, ListObject, ModalWindow } from '../../components';
import { FormObject } from '../../components/FormObject/FormObject';

export const Objects = () => {

    const { CREATE } = ModeModalWindow;

    const {isOpen, open, close} = useModalWindow();

    return (
        <div>
            {
                isOpen && 
                <ModalWindow>
                    <FormObject mode={CREATE} closeModalWindow={close}/>
                </ModalWindow>
            }

            <Button value='+ Добавить новый объект' onClick={open} />

            <ListObject isChange={true} />
        </div>
    )
}
