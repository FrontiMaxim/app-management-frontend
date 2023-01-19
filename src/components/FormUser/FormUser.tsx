import React  from 'react'
import { FieldText } from '../FieldText/FieldText'
import { useForm } from 'react-hook-form';
import { IPropsFormUser } from './IFormUser';
import { Select } from '../Select/Select';
import { Option } from '../Select/ISelect';
import { Button } from '../Button/Button';
import { ModeModalWindow } from '../../interfaces/IModalWindow';
import { IUser } from '../../interfaces/IUser';
import { useMutation, useQueryClient } from 'react-query';
import { createUser, updateUser } from '../../services/userService';

const FormUser = ({ mode, defaultData, closeModalWindow } : IPropsFormUser) => {

    const { CREATE, CHANGE } = ModeModalWindow;

    const optionsRoles: Option[] = [
        {name: 'Администратор', value: 'ADMIN'},
        {name: 'Дизайнер', value: 'DESIGNER'},
        {name: 'Клиент', value: 'CLIENT'}
    ];

    const { register, handleSubmit } = useForm<IUser>({
        defaultValues: {
            ...defaultData,
            password: ''
        }
    });

    const queryClient = useQueryClient();

    const create = useMutation((user: IUser) => {
        return createUser('/user/create', user, token!);
    }, {
        onSuccess() {
            queryClient.invalidateQueries('users');
        }
    })

    const update = useMutation((user: IUser) => {
        return updateUser('/user/update', user, token!);
    }, {
        onSuccess() {
            queryClient.invalidateQueries('users');
        }
    })

    const token = localStorage.getItem('token');

    const submit = async (data: IUser): Promise<void> => {

        console.log(data)

        if (mode === CREATE) {
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
                mode === CREATE && <h1>Создание пользователя</h1>
            }
            {
                mode === CHANGE && <h1>Изменение пользователя</h1>
            }
            <form>
                <FieldText 
                    placeholder='Имя пользователя' 
                    register={register('name')} 
                    type='text' 
                    minLength={20} 
                    maxLength={52}
                />

                <FieldText 
                    placeholder='Логин пользователя' 
                    register={register('login')} 
                    type='text' 
                    minLength={8} 
                    maxLength={14}
                />

                <FieldText 
                    placeholder='Пароль пользователя' 
                    register={register('password')} 
                    type='password' 
                    minLength={8} 
                    maxLength={100}
                />

                <Select 
                    options={optionsRoles}
                    register={register('role')}
                />

                <Button 
                    value={mode === CREATE ? 'Создать пользователя' : 'Сохранить изменения'} 
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


export default FormUser;