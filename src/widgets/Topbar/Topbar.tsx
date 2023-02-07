import React from 'react';
import styles from './Topbar.module.scss';
import { Button, useLoacalStorage } from '../../shared';
import { useCloseSession } from '../../entities/session';
import { useAppSelector } from '../../store';
import { useNavigate } from 'react-router-dom';

export const Topbar = () => {

  const currentSession = useAppSelector(state => state.session);
  const { close } = useCloseSession();
  const navigate = useNavigate();
  const [, setToken] = useLoacalStorage<string>('token');

  const exit = () => {
    close(currentSession);
    setToken('');
    navigate('/');
  }
 
  return (
    <div className={styles.topbar}>
        <Button 
          mode='primary' 
          className={styles.btn}
          onClick={exit}
        >
          Выйти
        </Button>
    </div>
  )
}
