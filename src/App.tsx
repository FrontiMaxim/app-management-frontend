import React, { useEffect } from 'react';
import './App.scss';
import { Login } from './pages';
import { useAppSelector } from './store';
import { useAuthentication } from './hooks/useAuthentication';
import { useSession } from './hooks/useSession';
import { useBeforeunload } from 'react-beforeunload';
import { FormCreateUser } from './components';
import { Users } from './pages/Users/Users';

function App() {

    const { authenticate, isAuthenticate, isErrorAuthenticate } = useAuthentication();
    const { openSession, closeSession, isErrorOpenSession, isErrorCloseSession } = useSession();

    const { token } = useAppSelector(state => state.token);
    const session = useAppSelector(state => state.session);
  
    // кастомный хук с npm на закрытие всего приложения, чтобы отпрваить серверу об закрытии сессии
    useBeforeunload(() => {
      closeSession('./session/close', token, session);
    });

    useEffect(() => {
      const login = localStorage.getItem('login');
      const password = localStorage.getItem('password');

      if(login && password) {
        authenticate('/login', { login, password });
      }
    }, []);


    useEffect(() => {

      if (isAuthenticate) {
        openSession('/session/open', token);
      }

    }, [isAuthenticate]);

    return (
      <div>
        <Login />
        {
          isErrorAuthenticate && 'Данного пользователя нет в системе'
        }
        {
        isErrorOpenSession && 'Не удалось создать сессию для работы в системе'
        }
        {
        isErrorCloseSession && 'Не удалось завершить сессию'
        }

        <FormCreateUser url='/user/create' />
        <Users />
      </div>
    );
}

export default App;
