import React from 'react'
import { FieldText } from '../FieldText/FieldText'
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { IObject } from '../../interfaces/IObject';
import { IPropsFormObject } from './IFormObject';
import { Calendar } from '../Calendar/Calendar';
import { useMutation, useQueryClient } from 'react-query';
import { createObject, updateObject } from '../../services/objectService';
import { FieldNumber } from '../FieldNumber/FieldNumber';
import { ModeModalWindow } from '../../interfaces/IModalWindow';
import { MultiSelectUser } from '../MultiSelectUser/MultiSelectUser';
import { IUser } from '../../interfaces/IUser';
import { useAppSelector } from '../../store';

export const FormObject = ({ mode, defaultData, closeModalWindow } : IPropsFormObject) => {

    const { register, handleSubmit } = useForm<IObject>({
        defaultValues: {
            ...defaultData,
            users: defaultData?.users?.map((user: IUser | string) => {
                user = user as IUser;
                return user.id_user
            })
        }
    });

    const { CREATE, CHANGE } = ModeModalWindow;

    const { listUser } = useAppSelector(state => state.listUser);

    const token = localStorage.getItem('token');

    const queryClient = useQueryClient();

    const create = useMutation((object: IObject) => {
        return createObject('/object/create', object, token!);
    }, {
        onSuccess() {
            queryClient.invalidateQueries('objects');
        }
    })

    const update = useMutation((object: IObject) => {
        return updateObject('/object/update', object, token!);
    }, {
        onSuccess() {
            queryClient.invalidateQueries('objects');
        }
    })

    const submit = async (data: IObject): Promise<void> => {
       
        if(data.users) {
            const users: IUser[] = [];
            for(let id_user of data.users) {
                for(let user of listUser) {
                    if(id_user === user.id_user) {
                        users.push(user);
                    }
                }
            }
           
            data.users = users;
        }

        
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
 
        if(closeModalWindow) {
            closeModalWindow();
        }
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

                <MultiSelectUser register={register('users')} />
              
                <Button 
                    value={mode === CREATE ? 'Создать' : 'Сохранить изменения'}
                    onClick={handleSubmit(submit)}
                />

                <Button 
                    value='Отмена' 
                    onClick={() => closeModalWindow && closeModalWindow()}
                />
            </form>
        </>
    )
}
