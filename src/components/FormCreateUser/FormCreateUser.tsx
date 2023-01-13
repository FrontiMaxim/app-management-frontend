import React  from 'react'
import { FieldText } from '../FieldText/FieldText'
import { useForm } from 'react-hook-form';
import { IDataCreateUser, IPropsCreateUser } from './IFormCreateUser';
import { Select } from '../Select/Select';
import { Option } from '../Select/ISelect';
import { Button } from '../Button/Button';
import { useCreateUser } from '../../hooks/useCreateUser';
import { useAppSelector } from '../../store';

export const FormCreateUser = ({ url } : IPropsCreateUser) => {

    const optionsRoles: Option[] = [
        {name: 'Администратор', value: 'ADMIN'},
        {name: 'Дизайнер', value: 'DESIGNER'},
        {name: 'Клиент', value: 'CLIENT'}
    ];

    const { register, handleSubmit } = useForm<IDataCreateUser>();
    const { createUser, isErrorCreate } = useCreateUser();
    const { token } = useAppSelector(state => state.token);

    const submit = (data: IDataCreateUser) => {
        createUser(url, data, token);
    }

    return (
        <>
            <h1>Добавление пользователя</h1>
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

                <Button value='Создать пользователя' onClick={handleSubmit(submit)}/>

                {
                    isErrorCreate && 'Данный пользователь уже существует'
                }
            </form>
        </>
    )
}
