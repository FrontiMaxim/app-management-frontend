import React, { useEffect } from 'react'
import { useOpenSession } from '../../lib/hooks/useOpenSession';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../store';
import { installSession } from '../../store/sessionSlice';
import { PropsSession } from './Session.props';
import cn from 'classnames';
import { Button } from '../../../../shared';
import styles from './Session.module.scss';
import { Loader } from '../Loader/Loader';


export const Session = ({ className }: PropsSession) => {

    const { session, isErrorOpenSession } = useOpenSession();

    const navigate = useNavigate();
   
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(session) {
            dispatch(installSession(session));
            setTimeout(() => navigate('/cabinet'), 3000)
        }
    }, [session, dispatch, navigate]);


    return (
        <div className={cn(styles.session, className)}>
            {
                !isErrorOpenSession && <div className={styles.container}>
                        <p>Выполняется вход в систему...</p>
                        <Loader />
                    </div>
            }
            {
                isErrorOpenSession && <div className={styles.container}>
                    <p>Неудалось войти в систему ! Попробуйте снова...</p>
                    <Button
                        onClick={() => {navigate('/');}}
                        mode='normal'
                        className={styles.btn}
                    >
                        Войти в систему
                    </Button>
                </div>
            }
        </div>
    )
}
