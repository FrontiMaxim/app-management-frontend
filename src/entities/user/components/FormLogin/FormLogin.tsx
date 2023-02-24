import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IDataAuthentication } from '../../model/authenticate.interface';
import { Button, FieldPassword, FieldText, useLoacalStorage } from '../../../../shared';
import { useAuthentication } from '../../lib/hooks/useAuthentication';
import { useNavigate } from 'react-router-dom';
import { AUTHENTICATION_ERROR } from '../../errors/authentication.error';
import { minLengthLogin, maxLengthLogin, minLengthPassword, maxLengthPassword } from './restrictions';
import styles from './FormLogin.module.scss';
import cn from 'classnames';

export const FormLogin = () => {

    const { register, handleSubmit, formState: {errors} } = useForm<IDataAuthentication>({
        mode: 'onBlur'
    });

    const navigate = useNavigate();

    const { authenticate, isErrorAuthenticate } = useAuthentication();

    const [, setToken] = useLoacalStorage<string>('token');

    const [textError, setTextError] = useState<string>('')

    const submit = async (data: IDataAuthentication) => {
        try {
            const token = await authenticate('/login', data);
            setToken(token);
            navigate('/session');
        } catch (e) {
            if(e instanceof AUTHENTICATION_ERROR) {
                setTextError(e.message);
            }
        }
    }

    return (
        <form className={styles.form}>
            <h2>Вход в систему</h2>
            <label>
                <p className={styles.title}>Логин</p>
                <FieldText 
                    register={register} 
                    nameField='login' 
                    placeholder='ivan'
                    className={cn({
                        [styles.error_input]: errors['login']
                    })}
                />
                {
                    errors['login'] && <div className={styles.error_text}>{ errors['login'].message }</div>
                }
            </label>
            <label>
                <p className={styles.title}>Пароль</p>
                <FieldPassword 
                    register={register} 
                    nameField='password' 
                    placeholder=''
                    required
                    className={cn({
                        [styles.error_input]: errors['password']
                    })}
                />
                {
                    errors['password'] && <div className={styles.error_text}>{ errors['password'].message }</div>
                }
            </label>
            <Button 
                onClick={handleSubmit(submit)}
                mode='primary'
                className={styles.btn}
            >
                Войти
            </Button>
            {
                isErrorAuthenticate && <div className={styles.error_text}>{textError}</div>
            }
        </form>
    )
}
