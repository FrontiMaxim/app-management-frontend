import React from 'react'
import { CardObject } from '../../CardObject/CardObject';
import { IPropsItemListObject } from './ItemListObject.props';
import { FaPen, FaTrash } from 'react-icons/fa';
import { AvatarGroup, Dialog, ModalWindow, useDialog, useModalWindow } from '../../../../../shared';
import { FormObject } from '../../FormObject/FormObject';
import cn from 'classnames';
import styles from './ItemListObject.module.scss';
import { useDeleteObject } from '../../../lib/hooks/useDeleteObject';
import { IUser } from '../../../../user';


export const ItemListObject = ({ isChange, data}: IPropsItemListObject) => {

    const modalWindowForForm = useModalWindow();
    const modalWindowForDialog = useModalWindow();

    const dialog = useDialog();
   
    const [remove] = useDeleteObject();

    return (
        <>
        {
            modalWindowForForm.isOpen &&
            <ModalWindow>
                <FormObject mode='CHANGE' defaultData={data} closeModalWindow={modalWindowForForm.close}/>
            </ModalWindow>
        }
        {
            modalWindowForDialog.isOpen &&
            <ModalWindow>
                <Dialog
                    question='Вы уверены, что хотите удалить объект? Все данные, которые связаны с ним, будут утерены?'
                    agree={() => {
                        remove(data.id_object);
                        dialog.disagree();
                      }}
                    disagree={modalWindowForDialog.close}
                />
            </ModalWindow>
        }
        <li className={styles.item}>
            <CardObject {...data} />

            <div className={styles.container_team}>
                <span className={styles.head}>Команда:</span>
                {
                    data.users &&  <AvatarGroup users={data.users as IUser[]} />
                }
            </div>
            
            {
                isChange &&
                <div className={styles.group_btn}>
                    <FaPen  className={styles.btn} onClick={modalWindowForForm.open} title='Редактировать'/>

                    <FaTrash  className={cn(styles.btn, styles.delete)} onClick={modalWindowForDialog.open} title='Удалить'/>
                </div>
            }
         </li>
        </>
    );
}
