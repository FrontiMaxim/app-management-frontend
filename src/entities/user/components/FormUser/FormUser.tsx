import React  from 'react'
import { useForm } from 'react-hook-form';
import { PropsFormUser } from './FormUser.props';
import { IUser } from '../../model/user.interface';
import { useCreateUser } from '../../lib/hooks/useCreateUser';
import { useUpdateUser } from '../../lib/hooks/useUpdateUser';
import { Button, FieldPassword, FieldText, Select, Option } from '../../../../shared';
import { maxLengthLogin, maxLengthName, minLengthLogin, minLengthName, minLengthPassword } from './restrictions';
import { maxLengthPassword } from '../FormLogin/restrictions';
import styles from './FormUser.module.scss';
import cn from 'classnames';


const FormUser = ({ mode, defaultData, closeModalWindow } : PropsFormUser) => {

    const optionsRoles: Option[] = [
        {name: 'Администратор', value: 'ADMIN'},
        {name: 'Дизайнер', value: 'DESIGNER'},
        {name: 'Клиент', value: 'CLIENT'}
    ];

    const { register, handleSubmit, formState: {errors} } = useForm<IUser>({
        defaultValues: {
            ...defaultData,
            password: ''
        },
        mode: 'onBlur'
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
        <form className={styles.form}>
            {
                mode === 'CREATE' && <h2>Создание пользователя</h2>
            }
            {
                mode === 'CHANGE' && <h2>Редактирование пользователя</h2>
            }

            <label>
                <p>ФИО (полностью)</p>
                <FieldText 
                    placeholder='Иванов Иван Иванович' 
                    register={register} 
                    nameField='name'
                    minLength={minLengthName} 
                    maxLength={maxLengthName}
                    className={cn({
                        [styles.error_input]: errors['name']
                    })}
                />
                {
                    errors['name'] && <div className={styles.error_text}>{ errors['name'].message }</div>
                }
            </label>
           
            <label>
                <p>Логин</p>
                <FieldText 
                    placeholder='ivanov_ivan' 
                    register={register} 
                    nameField='login'
                    minLength={minLengthLogin} 
                    maxLength={maxLengthLogin}
                    className={cn({
                        [styles.error_input]: errors['login']
                    })}
                />
                {
                    errors['login'] && <div className={styles.error_text}>{ errors['login'].message }</div>
                }
            </label>


            <label>
                <p>Пароль</p>
                <FieldPassword
                    placeholder='' 
                    register={register} 
                    nameField='password'
                    minLength={minLengthPassword} 
                    maxLength={maxLengthPassword}
                    required={false}
                    className={cn({
                        [styles.error_input]: errors['password']
                    })}
                />
                {
                    errors['password'] && <div className={styles.error_text}>{ errors['password'].message }</div>
                }
            </label>
            

            <label>
                <p>Роль пользователя в системе</p>
                <Select 
                    options={optionsRoles}
                    register={register}
                    nameFiled='role'
                />
            </label>
           

            <div className={styles.container_btn}>
                <Button 
                    onClick={handleSubmit(submit)}
                    mode='primary'
                >{mode === 'CREATE' ? 'Создать пользователя' : 'Сохранить изменения'}</Button>

                <Button 
                    mode='normal'
                    onClick={() => closeModalWindow && closeModalWindow()}
                >
                    Отмена
                </Button>
            </div>
            
        </form> 
    )
}


export default FormUser;