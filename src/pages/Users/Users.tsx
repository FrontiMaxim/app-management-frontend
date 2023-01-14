import React, { useEffect } from 'react'
import { DialogWindow, ListUsers, ModalWindow } from '../../components'
import { useModalWindow } from '../../hooks/useModalWindow'
import FormUser from '../../components/FormUser/FormUser';
import { useDialogWindow } from '../../hooks/useDialogWindow';
import { useDeleteUser } from '../../hooks/useDeleteUser';

export const Users = () => {

    const { openModalWindow, 
            closeModalWindow, 
            dataForModalWindow, 
            typeMoladWindow, 
            isOpenDodalWindow }  = useModalWindow();

    const { isAgree, agree, disagree } = useDialogWindow();
    const { deleteUser, isErrorDelete } = useDeleteUser();

    const token = localStorage.getItem('token');

    useEffect(() => {

        if(isAgree) {
            deleteUser('/user/delete', dataForModalWindow!.id_user, token!);
            closeModalWindow();
            disagree();
        } 

    }, [isAgree]);

    return (
        <div>
            {
                isOpenDodalWindow && typeMoladWindow !== 'DELETE_USER' &&

                <ModalWindow>
                    <FormUser 
                        url={ typeMoladWindow === 'CREATE_USER' ? '/user/create' : '/user/change'}
                        closeModalWindow={closeModalWindow} 
                        typeModalWindow={typeMoladWindow}
                        dataModalWindow={dataForModalWindow}
                    />
                </ModalWindow>
            }

            {
                isOpenDodalWindow && typeMoladWindow === 'DELETE_USER' &&

                <ModalWindow>
                    <DialogWindow 
                        question='Вы уверены, что хоитите удалить пользователя'
                        agree={agree}
                        disagree={closeModalWindow}
                    />
                </ModalWindow>
            }

            <ListUsers url='user/read/users' isChange={true} openModalWindow={openModalWindow}/>
        </div>
    )
}
