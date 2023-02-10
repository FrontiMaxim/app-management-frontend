import React from 'react'
import { useForm } from 'react-hook-form';
import { PropsFormObject } from './FormObject.props';
import { IObject } from '../../model/object.interface';
import { IUser, MultiSelectUser } from '../../../user';
import { useCreateObject } from '../../lib/hooks/useCreateObject';
import { useUpdateObject } from '../../lib/hooks/useUpdateObject';
import { Button, Calendar, FieldNumber, FieldText, formatDate } from '../../../../shared';
import { useAppSelector } from '../../../../store';

export const FormObject = ({ mode, defaultData, closeModalWindow } : PropsFormObject) => {


    const [create] = useCreateObject();
    const [update] = useUpdateObject();

    const { register, handleSubmit } = useForm<IObject>({
        defaultValues: {
            ...defaultData,
            data_start: defaultData ? formatDate( defaultData.data_start, 'STANDART') : '',
            users: defaultData?.users?.map((user) => {
                user = user as IUser;
                return user.id_user
            })
        }
    });

    const listUser = useAppSelector(state => state.listUser.listUser);
    const user = useAppSelector(state => state.user);

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
            data.users.push(user);

             // приводим дату к формату DD.MM.YYYY
            data.data_start = formatDate(data.data_start, 'LOCAL');
        }

        
        if(data.apartment) {
            data.apartment = Number(data.apartment);
        } else {
            data.apartment = null;
        }

        if(mode === 'CREATE') {
            create(data);
        } else if (mode === 'CHANGE') {
            update(data);
        }
 
        if(closeModalWindow) {
            closeModalWindow();
        }
    }

    return ( 
        <form>
            {
                mode === 'CREATE' &&  <h1>Создание объекта</h1>
            }
            {
                mode === 'CHANGE' &&  <h1>Изменение объекта</h1>
            }
            <FieldText 
                placeholder='Дизайн кухни' 
                register={register} 
                nameField='note'
                minLength={10} 
                maxLength={52}
            />

            <FieldText 
                placeholder='Самара' 
                register={register} 
                nameField='city'
                minLength={3} 
                maxLength={14}
            />

            <FieldText 
                placeholder='Моссковское ш.' 
                register={register} 
                nameField='street'
                minLength={8} 
                maxLength={14}
            />

            <FieldText 
                placeholder='34Б' 
                register={register} 
                nameField='house'
                minLength={0} 
                maxLength={4}
            />

            <FieldNumber
                placeholder='508' 
                register={register} 
                nameField='apartment'
            />

            <Calendar register={register} nameField='data_start' />
            
            <FieldText 
                placeholder='Иванов Иван Иванович' 
                register={register} 
                nameField='client'
                minLength={10} 
                maxLength={40}
            />

            <MultiSelectUser register={register} nameField='users' />
            
            <Button 
                onClick={handleSubmit(submit)}
            >
                {mode === 'CREATE' ? 'Создать' : 'Сохранить изменения'}
            </Button>
                
            <Button 
                onClick={() => closeModalWindow && closeModalWindow()}
            >
                Отмена
            </Button>
        </form>
    )
}
