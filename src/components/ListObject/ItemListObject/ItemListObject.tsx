import React, { useEffect } from 'react'
import { Button } from '../../Button/Button';
import { CardObject } from '../../CardObject/CardObject';
import { IPropsItemListObject } from './IItemListObject';
import { ModalWindow } from '../../ModalWindow/ModalWindow';
import { FormObject } from '../../FormObject/FormObject';
import { ModeModalWindow } from '../../../interfaces/IModalWindow';
import { useModalWindow } from '../../../hooks/useModalWindow';
import { DialogWindow } from '../../DialogWindow/DialogWindow';
import { useDialogWindow } from '../../../hooks/useDialogWindow';
import { useMutation, useQueryClient } from 'react-query';
import { deleteObject } from '../../../services/objectService';

export const ItemListObject = ({ isChange, data}: IPropsItemListObject) => {

    const { CHANGE } = ModeModalWindow;
    const modalWindowforForm = useModalWindow();
    const modalWindowforDialog = useModalWindow();
    const {isAgree, agree, disagree} = useDialogWindow();

    const queryClient = useQueryClient();
    const token = localStorage.getItem('token');

    const remove = useMutation((id_object: string) => {
        return deleteObject('/object/delete', id_object, token!);
    }, {
        onSuccess() {
            queryClient.invalidateQueries('objects');
        }
    });

    useEffect(() => {

        if(isAgree) {
            remove.mutate(data.id_object);
            disagree();
        }

    }, [isAgree]);

    return (
        <>
        {
            modalWindowforForm.isOpen &&
            <ModalWindow>
                <FormObject mode={CHANGE} defaultData={data} closeModalWindow={modalWindowforForm.close}/>
            </ModalWindow>
        }
        {
            modalWindowforDialog.isOpen &&
            <ModalWindow>
                <DialogWindow 
                    question='Вы уверены, что хотите удалить объект? Все данные, которые свзявны с ним будут утерены'
                    agree={agree}
                    disagree={modalWindowforDialog.close}
                />
            </ModalWindow>
        }
        <li>
            <CardObject {...data} />
            {
                isChange &&
                <div>
                    <Button value='редактировать' onClick={modalWindowforForm.open}/>

                    <Button value='удалить' onClick={modalWindowforDialog.open}/>
                </div>
            }
         </li>
        </>
    );
}
