import React  from 'react'
import { FieldText } from '../FieldText/FieldText'
import { useForm } from 'react-hook-form';
import { IDataUser, IPropsFormUser } from './IFormUser';
import { Select } from '../Select/Select';
import { Option } from '../Select/ISelect';
import { Button } from '../Button/Button';
import { useCreateUser } from '../../hooks/useCreateUser';
import { useChangeUser } from '../../hooks/useChangeUser';
import { useAppDispatch, useAppSelector } from '../../store';
import { closeModalWindow } from '../../store/modalWindowSlice';

const FormUser = ({ url, typeModalWindow } : IPropsFormUser) => {

    const optionsRoles: Option[] = [
        {name: 'Администратор', value: 'ADMIN'},
        {name: 'Дизайнер', value: 'DESIGNER'},
        {name: 'Клиент', value: 'CLIENT'}
    ];

    const { currentUser } = useAppSelector(state => state.listUser)
    const dispatch = useAppDispatch();

    const { register, handleSubmit } = useForm<IDataUser>({
        defaultValues: {
            name: currentUser.name,
            login: currentUser.login,
            password: '',
        }
    });

    const { createUser, isErrorCreate } = useCreateUser();
    const { changeUser, isErrorChange } = useChangeUser();
    const token = localStorage.getItem('token');

    const submit = async (data: IDataUser): Promise<void> => {

        if (typeModalWindow === 'CREATE_USER') {
            await createUser(url, data, token!);
        } else if (typeModalWindow === 'CHANGHE_USER') {
            await changeUser(url, data, currentUser.id_user, token!);
        }
        
        dispatch(closeModalWindow());
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
                    onClick={() => dispatch(closeModalWindow())}
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