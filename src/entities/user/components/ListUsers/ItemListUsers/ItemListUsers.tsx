import React, { useEffect } from 'react'
import { PropsItemListUsers } from './ItemListUsers.props'
import { useMutation, useQueryClient } from 'react-query'
import styles from './ItemListUsers.module.scss';
import { FaPen, FaTrash } from 'react-icons/fa';
import cn from 'classnames';
import { CardUser } from '../../../../../shared';

export const ItemListUsers = ({ data, isChange }: PropsItemListUsers) => {

//   const { CHANGE } = ModeModalWindow;
//   const modalWindowforForm = useModalWindow();
//   const modalWindowforDialog = useModalWindow();
//   const {isAgree, agree, disagree} = useDialogWindow();

//   const queryClient = useQueryClient();
//   const token = localStorage.getItem('token');

//   const remove = useMutation((id_user: string) => {
//       return deleteUser('/user/delete', id_user, token!);
//   }, {
//       onSuccess() {
//           queryClient.invalidateQueries('users');
//       }
//   });

//   useEffect(() => {

//       if(isAgree) {
//           remove.mutate(data.id_user);
//           disagree();
//       }

//   }, [isAgree]);

  return (
    <>
       {/* {
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
        } */}
        <li className={cn(styles.item_list, {
          [styles.noIsChange]: !isChange
        })}>

          <CardUser {...data} />

          {/* {
            isChange &&
             
            <div className={styles.group_btn}>
                <FaPen  className={styles.btn} onClick={modalWindowforForm.open} title='Редактировать'/>

                <FaTrash  className={cn(styles.btn, styles.delete)} onClick={modalWindowforDialog.open} title='Удалить'/>
            </div>
             
          } */}
      </li>  
    </>
  )
}
