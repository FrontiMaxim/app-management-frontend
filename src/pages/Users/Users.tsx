import React, { useEffect } from 'react'
import { Button, DialogWindow, ListUsers, ModalWindow } from '../../components'
import FormUser from '../../components/FormUser/FormUser';
import { useDialogWindow } from '../../hooks/useDialogWindow';
import { useDeleteUser } from '../../hooks/useDeleteUser';
import { useAppDispatch, useAppSelector } from '../../store';
import { closeModalWindow, openModalWindow } from '../../store/modalWindowSlice';

export const Users = () => {

    const { isAgree, agree, disagree } = useDialogWindow();

    const { deleteUser, isErrorDelete } = useDeleteUser();

    const { currentUser}  = useAppSelector(state => state.listUser);
    const { isOpenModalWindow, typeModalWindow } = useAppSelector(state => state.modalWindow)

    const dispatch = useAppDispatch();

    const token = localStorage.getItem('token');

    useEffect(() => {

        if(isAgree) {
            deleteUser('/user/delete', currentUser.id_user, token!);
            dispatch(closeModalWindow());
            disagree();
        } 

    }, [isAgree]);

    return (
        <div>
            {
                isOpenModalWindow && typeModalWindow !== 'DELETE_USER' &&

                <ModalWindow>
                    <FormUser 
                        url={ typeModalWindow === 'CREATE_USER' ? '/user/create' : '/user/change'}
                        typeModalWindow={typeModalWindow}
                    />
                </ModalWindow>
            }

            {
                isOpenModalWindow && typeModalWindow === 'DELETE_USER' &&

                <ModalWindow>
                    <DialogWindow 
                        question='Вы уверены, что хоитите удалить пользователя'
                        agree={agree}
                        disagree={closeModalWindow}
                    />
                </ModalWindow>
            }

            <Button value='+ Добавить нового пользователя' onClick={() => {
                dispatch(openModalWindow('CREATE_USER'));
            }} />

            <ListUsers url='user/read/users' isChange={true} />
        </div>
    )
}
