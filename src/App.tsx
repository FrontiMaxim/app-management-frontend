import React, { useEffect } from 'react';
import './App.scss';
import { Login } from './pages';
import { useAppSelector } from './store';
import { useSession } from './hooks/useSession';
import { useBeforeunload } from 'react-beforeunload';
import { Users } from './pages/Users/Users';
import { ListObject } from './components/ListObject/ListObject';
import { FormObject } from './components/FormObject/FormObject';
import { ModeModalWindow } from './interfaces/IModalWindow';


function App() {

    const { openSession, closeSession, isErrorOpenSession} = useSession();
    const session = useAppSelector(state => state.session);

    const token = localStorage.getItem('token');
  
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

    return (
      <div>
        {/* <Login />
        {
          isErrorOpenSession && 'Не удалось создать сессию для работы в системе'
        } */}
        
        <Users />
        <ListObject isChange/>
        <FormObject mode={ModeModalWindow.CREATE} /> 
      </div>
    );
}

export default App;
