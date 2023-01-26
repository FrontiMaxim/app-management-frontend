import React, { useEffect } from 'react';
import './App.scss';
import { Login, Objects } from './pages';
import { useAppDispatch, useAppSelector } from './store';
import { useSession } from './hooks/useSession';
import { useBeforeunload } from 'react-beforeunload';
import { Users } from './pages/Users/Users';
import { useUser } from './hooks/useUser';
import { setListUser } from './store/listUserSlice';
import { Tasks } from './pages/Tasks/Tasks';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import { ListResource } from './entities/resource';
import { PanelResource } from './widgets';

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
        <Login />
        {
          isErrorOpenSession && 'Не удалось создать сессию для работы в системе'
        }
        {/*         
        <Users />
        <Objects /> */}
        {/* <Tasks /> */}
        
       
      
        <PanelResource id_task='8984aea0-b881-4ed2-8cf4-096ca1707b7e'/>
      </div>
    );
}

export default App;
