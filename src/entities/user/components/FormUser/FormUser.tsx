import React  from 'react'
import { useForm } from 'react-hook-form';
import { PropsFormUser } from './FormUser.props';
import { IUser } from '../../model/user.interface';
import { useCreateUser } from '../../lib/hooks/useCreateUser';
import { useUpdateUser } from '../../lib/hooks/useUpdateUser';
import { Button, FieldPassword, FieldText, Select, Option } from '../../../../shared';
import { maxLengthLogin, maxLengthName, minLengthLogin, minLengthName, minLengthPassword } from './restrictions';
import { maxLengthPassword } from '../FormLogin/restrictions';


const FormUser = ({ mode, defaultData, closeModalWindow } : PropsFormUser) => {

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

    const [create] = useCreateUser();
    const [update] = useUpdateUser();

   
    const submit = async (data: IUser) => {

        if (mode === 'CREATE') {
            create(data);
        } else if (mode === 'CHANGE') {
            update(data);
        }
        
        if(closeModalWindow) {
            closeModalWindow();
        }
    }

    return (
        <>
            {
                mode === 'CREATE' && <h1>Создание пользователя</h1>
            }
            {
                mode === 'CHANGE' && <h1>Изменение пользователя</h1>
            }
            <form>
                <FieldText 
                    placeholder='Имя пользователя' 
                    register={register} 
                    nameField='name'
                    minLength={minLengthName} 
                    maxLength={maxLengthName}
                />

                <FieldText 
                    placeholder='Логин пользователя' 
                    register={register} 
                    nameField='login'
                    minLength={minLengthLogin} 
                    maxLength={maxLengthLogin}
                />

                <FieldPassword
                    placeholder='Пароль пользователя' 
                    register={register} 
                    nameField='password'
                    minLength={minLengthPassword} 
                    maxLength={maxLengthPassword}
                    required={false}
                />

                <Select 
                    options={optionsRoles}
                    register={register}
                    nameFiled='role'
                />

                <Button 
                    onClick={handleSubmit(submit)}
                >{mode === 'CREATE' ? 'Создать пользователя' : 'Сохранить изменения'}</Button>

                <Button 
                    onClick={() => closeModalWindow && closeModalWindow()}
                >
                    Отмена
                </Button>
            </form>
        </>
    )
}


export default FormUser;