import React, { useEffect }  from 'react';
import './App.scss';
import { CabinetPage, LoginPage, SessionPage, UsersPage } from './pages';
import { useAppSelector } from './store';
import { useBeforeunload } from 'react-beforeunload';
import { useCloseSession } from './entities/session';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useLoacalStorage } from './shared';

function App() {

    const { close } = useCloseSession();

    const currentSession = useAppSelector(state => state.session);

    // кастомный хук с npm на закрытие всего приложения, чтобы отпрваить серверу об закрытии сессии
    useBeforeunload((e) => {
      e.preventDefault();
      close(currentSession);
      window.close();
    });
    
    const [token] = useLoacalStorage<string>('token');
    const navigate = useNavigate();

    useEffect(() => {
      if(token) {
        navigate('/session');
      }
    }, []);

    return (
      <div>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/session' element={<SessionPage />} />
          <Route path='/cabinet' element={<CabinetPage />}>
            <Route index element={<div>Объекты</div>} />
            <Route path='/cabinet/users' element={<UsersPage />} />
            <Route path='/cabinet/dashboard' element={<div>Статистика</div>} />
          </Route>
        </Routes>
      </div>
    );
}

export default App;
