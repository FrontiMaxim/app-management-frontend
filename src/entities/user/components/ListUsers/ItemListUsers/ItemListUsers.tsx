import React  from 'react';
import { PropsItemListUsers } from './ItemListUsers.props';
import styles from './ItemListUsers.module.scss';
import { FaPen, FaTrash } from 'react-icons/fa';
import cn from 'classnames';
import { CardUser, Dialog, ModalWindow, useDialog, useModalWindow } from '../../../../../shared';
import { useDeleteUser } from '../../../lib/hooks/useDeleteUser';
import FormUser from '../../FormUser/FormUser';

export const ItemListUsers = ({ user, isChange }: PropsItemListUsers) => {

  const modalWindowForForm = useModalWindow();
  const modalWindowForDialog = useModalWindow();
  const dialog = useDialog();

  const [remove] = useDeleteUser()

  return (
    <>
       {
        modalWindowForForm.isOpen &&
        <ModalWindow>
          <FormUser 
            mode='CHANGE' 
            defaultData={user} 
            closeModalWindow={modalWindowForForm.close}
          />
        </ModalWindow>
      }
      {
        modalWindowForDialog.isOpen &&
        <ModalWindow>
          <Dialog 
            question='Вы уверены, что хотите удалить пользователя?'
            agree={() => {
              remove(user.id_user);
              dialog.disagree();
            }}
            disagree={modalWindowForDialog.close}
          />
        </ModalWindow>
      }
        <li className={cn(styles.item_list, {
          [styles.noIsChange]: !isChange
        })}>

          <CardUser {...user} />

          {
            isChange &&
             
            <div className={styles.group_btn}>
                <FaPen  className={styles.btn} onClick={modalWindowForForm.open} title='Редактировать'/>

                <FaTrash  className={cn(styles.btn, styles.delete)} onClick={modalWindowForDialog.open} title='Удалить'/>
            </div>
             
          }
      </li>  
    </>
  )
}
