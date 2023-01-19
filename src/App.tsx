import React, { useEffect } from 'react';
import './App.scss';
import { Login, Objects } from './pages';
import { useAppDispatch, useAppSelector } from './store';
import { useSession } from './hooks/useSession';
import { useBeforeunload } from 'react-beforeunload';
import { Users } from './pages/Users/Users';
import { useUser } from './hooks/useUser';
import { setListUser } from './store/listUserSlice';

function App() {

    const { openSession, closeSession, isErrorOpenSession} = useSession();
    const session = useAppSelector(state => state.session);

    const token = localStorage.getItem('token');

    const dispatch = useAppDispatch();

    const { users } = useUser();
  
    // кастомный хук с npm на закрытие всего приложения, чтобы отпрваить серверу об закрытии сессии
    useBeforeunload(() => {
      if(token) {
        closeSession('./session/close', token, session);
      }
    });

    useEffect(() => {
      if(token) {
        openSession('/session/open', token);
      }
    }, []);

    useEffect(() => {
      if(users) {
        dispatch(setListUser(users));
      }
    }, [users])

    return (
      <div>
        {/* <Login />
        {
          isErrorOpenSession && 'Не удалось создать сессию для работы в системе'
        } */}
        
        <Users />
        <Objects />
      </div>
    );
}

export default App;
