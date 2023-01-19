import React, { useEffect } from 'react'
import { IPropsItemListUsers } from './IPropsItemListUsers'
import { CardUser } from '../../CardUser/CardUser'
import { Button } from '../../Button/Button'
import { ModeModalWindow } from '../../../interfaces/IModalWindow'
import { useModalWindow } from '../../../hooks/useModalWindow'
import { useDialogWindow } from '../../../hooks/useDialogWindow'
import { useMutation, useQueryClient } from 'react-query'
import { deleteUser } from '../../../services/userService'
import { ModalWindow } from '../../ModalWindow/ModalWindow'
import FormUser from '../../FormUser/FormUser'
import { DialogWindow } from '../../DialogWindow/DialogWindow'

export const ItemListUsers = ({ data, isChange }: IPropsItemListUsers) => {

  const { CHANGE } = ModeModalWindow;
  const modalWindowforForm = useModalWindow();
  const modalWindowforDialog = useModalWindow();
  const {isAgree, agree, disagree} = useDialogWindow();

  const queryClient = useQueryClient();
  const token = localStorage.getItem('token');

  const remove = useMutation((id_user: string) => {
      return deleteUser('/user/delete', id_user, token!);
  }, {
      onSuccess() {
          queryClient.invalidateQueries('users');
      }
  });

  useEffect(() => {

      if(isAgree) {
          remove.mutate(data.id_user);
          disagree();
      }

  }, [isAgree]);

  return (
    <>
       {
            modalWindowforForm.isOpen &&
            <ModalWindow>
                <FormUser mode={CHANGE} defaultData={data} closeModalWindow={modalWindowforForm.close}/>
            </ModalWindow>
        }
        {
            modalWindowforDialog.isOpen &&
            <ModalWindow>
                <DialogWindow 
                    question='Вы уверены, что хотите удалить пользователя?'
                    agree={agree}
                    disagree={modalWindowforDialog.close}
                />
            </ModalWindow>
        }
        <li>

          <CardUser {...data} />

          {
              isChange &&
              <div>
                <div>
                    <Button value='редактировать' onClick={modalWindowforForm.open}/>

                    <Button value='удалить' onClick={modalWindowforDialog.open}/>
                </div>
              </div>
          }
      </li>  
    </>
  )
}
