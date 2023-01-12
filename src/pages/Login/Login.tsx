import React, { useEffect, useRef } from 'react';
import styles from './Login.module.scss';
import { Button, FieldText } from '../../components';
import { useForm } from 'react-hook-form';
import { ILogin } from './ILogin';
import { useAuthentication } from '../../hooks/useAuthentication';
import { useSession } from '../../hooks/useSession';
import { useAppSelector } from '../../store';

export const Login = () => {

  const { register, handleSubmit } = useForm<ILogin>();
  const { authenticate, isAuthenticate, isErrorAuthenticate } = useAuthentication();
  const { openSession, isErrorOpenSession} = useSession();
  const { token } = useAppSelector(state => state.token);

  const refDataLogin = useRef<ILogin>({
    login: '',
    password: ''
  });

  const submit = async (data: ILogin) => {
    await authenticate('/login', data);
    refDataLogin.current = {
      ...data
    };
  }

  useEffect(() => {
    if(isAuthenticate) {
      localStorage.setItem('login', refDataLogin.current.login);
      localStorage.setItem('password', refDataLogin.current.password);
      openSession('/session/open', token);
    }
  }, [isAuthenticate]);


  return (
    <div className={styles.login}>
        <FieldText type='text' placeholder='Логин' register={register('login')} />
        <FieldText type='password' placeholder='Пароль' register={register('password')} />
        <Button value='Войти' handler={handleSubmit(submit)}/>
        {
          isErrorAuthenticate && 'Данного пользователя нет в системе'
        }
        {
          isErrorOpenSession && 'Не удалось создать сессию для работы в системе'
        }
    </div>
  )
}
