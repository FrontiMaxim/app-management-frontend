import React from 'react'
import { Button, ListUsers, ModalWindow } from '../../components'
import FormUser from '../../components/FormUser/FormUser';
import { useAppSelector } from '../../store';
import { ModeModalWindow } from '../../interfaces/IModalWindow';
import { useModalWindow } from '../../hooks/useModalWindow';

export const Users = () => {

    const { listUser } = useAppSelector(state => state.listUser);

    const { CREATE } = ModeModalWindow;

    const {isOpen, open, close} = useModalWindow();

    return (
        <div>
           {
                isOpen && 
                <ModalWindow>
                    <FormUser mode={CREATE} closeModalWindow={close}/>
                </ModalWindow>
            }

            <Button value='+ Добавить нового пользователя' onClick={open} />

            <ListUsers users={listUser} isChange={true} />
        </div>
    )
}
