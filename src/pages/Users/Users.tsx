import React, { useEffect } from 'react'
import { Button, DialogWindow, ListUsers, ModalWindow } from '../../components'
import FormUser from '../../components/FormUser/FormUser';
import { useDialogWindow } from '../../hooks/useDialogWindow';
import { useDeleteUser } from '../../hooks/useDeleteUser';
import { useAppDispatch, useAppSelector } from '../../store';
import { close, open } from '../../store/modalWindowSlice';
import { ModeModalWindow } from '../../interfaces/IModalWindow';

export const Users = () => {

    const { isAgree, agree, disagree } = useDialogWindow();

    const { deleteUser, isErrorDelete } = useDeleteUser();

    const { CREATE, DELETE } = ModeModalWindow;

    const { currentUser}  = useAppSelector(state => state.listUser);
    const { isOpen, mode } = useAppSelector(state => state.modalWindow)

    const dispatch = useAppDispatch();

    const token = localStorage.getItem('token');

    useEffect(() => {

        if(isAgree) {
            deleteUser('/user/delete', currentUser.id_user, token!);
            dispatch(close());
            disagree();
        } 

    }, [isAgree]);

    return (
        <div>
            {
                isOpen && mode !== DELETE &&

                <ModalWindow>
                    <FormUser 
                        mode={ mode }
                    />
                </ModalWindow>
            }

            {
                isOpen && mode === DELETE &&

                <ModalWindow>
                    <DialogWindow 
                        question='Вы уверены, что хоитите удалить пользователя'
                        agree={agree}
                        disagree={close}
                    />
                </ModalWindow>
            }

            <Button value='+ Добавить нового пользователя' onClick={() => {
                dispatch(open(CREATE));
            }} />

            <ListUsers url='user/read/users' isChange={true} />
        </div>
    )
}
