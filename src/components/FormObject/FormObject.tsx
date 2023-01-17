import React  from 'react'
import { FieldText } from '../FieldText/FieldText'
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { IObject } from '../../interfaces/IObject';
import { IPropsFormObject } from './IFormObject';
import { Calendar } from '../Calendar/Calendar';
import { useMutation, useQueryClient } from 'react-query';
import { createObject } from '../../services/objectService';
import { FieldNumber } from '../FieldNumber/FieldNumber';
import { ModeModalWindow } from '../../interfaces/IModalWindow';

export const FormObject = ({ mode } : IPropsFormObject) => {

    const { register, handleSubmit } = useForm<IObject>();

    const { CREATE, CHANGE } = ModeModalWindow;

    const token = localStorage.getItem('token');

    const queryClient = useQueryClient()

    const create = useMutation((object: IObject) => {
        return createObject('/object/create', object, token!);
    }, {
        onSuccess() {
            queryClient.invalidateQueries('objects');
        }
    })

    const update = useMutation((object: IObject) => {
        return createObject('/object/update', object, token!);
    }, {
        onSuccess() {
            queryClient.invalidateQueries('objects');
        }
    })

    const submit = async (data: IObject): Promise<void> => {

        if(data.apartment) {
            data.apartment = Number(data.apartment);
        } else {
            data.apartment = null;
        }

        if(mode === CREATE) {
            create.mutate(data);
        } else if (mode === CHANGE) {
            update.mutate(data);
        }
 
        //dispatch(closeModalWindow());
    }

    return (
        <>
            {
                mode === CREATE &&  <h1>Создание объекта</h1>
            }
            {
                mode === CHANGE &&  <h1>Изменение объекта</h1>
            }
            <form>
                <FieldText 
                    placeholder='Название проекта' 
                    register={register('note')} 
                    type='text' 
                    minLength={20} 
                    maxLength={52}
                />

                <FieldText 
                    placeholder='Город' 
                    register={register('city')} 
                    type='text' 
                    minLength={8} 
                    maxLength={14}
                />

                <FieldText 
                    placeholder='Улица' 
                    register={register('street')} 
                    type='text' 
                    minLength={8} 
                    maxLength={14}
                />

                <FieldText 
                    placeholder='Дома' 
                    register={register('house')} 
                    type='text' 
                    minLength={8} 
                    maxLength={14}
                />

                <FieldNumber
                    placeholder='Квартира' 
                    register={register('apartment')} 
                />

                <Calendar  register={register('data_start')} />
              
                <FieldText 
                    placeholder='Клиент' 
                    register={register('client')} 
                    type='text' 
                    minLength={8} 
                    maxLength={14}
                />
              
                <Button 
                    value='submit'
                    onClick={handleSubmit(submit)}
                />

                {/* <Button 
                    value='Отмена' 
                    onClick={() => dispatch(closeModalWindow())}
                />

                {
                    isErrorCreate && 'Данный пользователь уже существует'
                }
                {
                    isErrorChange && 'Не удалось сохранить изменения'
                } */}
                
            </form>
        </>
    )
}
