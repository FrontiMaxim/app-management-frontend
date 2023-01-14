import React  from 'react'
import { FieldText } from '../FieldText/FieldText'
import { useForm } from 'react-hook-form';
import { IDataUser, IPropsFormUser } from './IFormUser';
import { Select } from '../Select/Select';
import { Option } from '../Select/ISelect';
import { Button } from '../Button/Button';
import { useCreateUser } from '../../hooks/useCreateUser';
import { useChangeUser } from '../../hooks/useChangeUser';

const FormUser = ({ url, typeModalWindow, closeModalWindow, dataModalWindow } : IPropsFormUser) => {

    const optionsRoles: Option[] = [
        {name: 'Администратор', value: 'ADMIN'},
        {name: 'Дизайнер', value: 'DESIGNER'},
        {name: 'Клиент', value: 'CLIENT'}
    ];

    const { register, handleSubmit } = useForm<IDataUser>({
        defaultValues: {
            name: dataModalWindow?.name,
            login: dataModalWindow?.login,
            password: '',
            role: dataModalWindow?.role
        }
    });

    const { createUser, isErrorCreate } = useCreateUser();
    const { changeUser, isErrorChange } = useChangeUser();
    const token = localStorage.getItem('token');

    const submit = async (data: IDataUser): Promise<void> => {

        if (typeModalWindow === 'CREATE_USER') {
            await createUser(url, data, token!);
        } else if (typeModalWindow === 'CHANGHE_USER') {
            await changeUser(url, data, dataModalWindow!.id_user, token!);
        }
        
        closeModalWindow();
    }

    return (
        <>
            {
                typeModalWindow === 'CREATE_USER' ?  <h1>Создание пользователя</h1> : <h1>Изменение пользователя</h1>
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
                    value={typeModalWindow === 'CREATE_USER' ? 'Создать пользователя' : 'Сохранить изменения'} 
                    onClick={handleSubmit(submit)}
                />

                <Button 
                    value='Отмена' 
                    onClick={closeModalWindow}
                />

                {
                    isErrorCreate && 'Данный пользователь уже существует'
                }
                {
                    isErrorChange && 'Не удалось сохранить изменения'
                }
                
            </form>
        </>
    )
}


export default FormUser;