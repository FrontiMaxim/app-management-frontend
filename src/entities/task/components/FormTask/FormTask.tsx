import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ITask } from '../../model/task.interface';
import { useCreateTask } from '../../lib/hooks/useCreateTask';
import { PropsFormTask } from './FormTask.props';
import { Button, Calendar, FieldText, SelectUser, TextArea, formatDate } from '../../../../shared';
import { filterUsersByRole } from '../../lib/utils/filterUsersByRole';
import { useUpdateTask } from '../../lib/hooks/useUpdateTask';
import { IUser } from '../../../user';
import styles from './FormTask.module.scss';
import cn from 'classnames';
import { useParticipant } from '../../lib/hooks/useParticipant';

export const FormTask = ({ mode, defaultData, closeModalWindow, currentObject }: PropsFormTask) => {
    
    const { register, handleSubmit, formState: {errors} } = useForm<ITask>({
        defaultValues: {
            ...defaultData,
            user: defaultData?.user?.id_user,
            // приводим дату к формату YYYY-MM-DD
            deadline: formatDate(defaultData?.deadline ? defaultData.deadline : '', 'STANDART')
        }
    });

    const { participants } = useParticipant(currentObject.id_object);
    const [ performers, setPerformers ] = useState<IUser[]>([]);

    useEffect(() => {
        if(participants) {
            setPerformers(filterUsersByRole(participants, 'DESIGNER'));
        }
    }, [participants]);

    const [create] = useCreateTask();
    const [update] = useUpdateTask();

    const submit = async (data: ITask): Promise<void> => {

        // приводим дату к формату DD.MM.YYYY
        data.deadline = formatDate(data.deadline, 'LOCAL');

        // указываем текущий объект, у котрого работаем с задачами
        data.object = currentObject;

         // если у задачи ещё не было статуса, то её присваивается "Запланировано", иначе оставляем прежний
        if(!data.status) {
            data.status = {id_status: 1, name: 'SCHEDULED'};
        }
       
        // указываем исполнителя для задачи
        if(participants) {
            const id_user: string = String(data.user);
            data.user = participants.find(user => user.id_user === id_user);
        }
       
        if(mode === 'CREATE') {
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
                mode === 'CREATE' &&  <h2>Создание новой задачи</h2>
            }
            {
                mode === 'CHANGE' &&  <h2>Редактирование задачи</h2>
            }

            <label>
                <p>Название задачи</p>
                <FieldText 
                    placeholder='Название задачи' 
                    register={register} 
                    nameField='name'
                    className={cn({
                        [styles.error_input]: errors['name']
                    })}
                />
                {
                    errors['name'] && <div className={styles.error_text}>{ errors['name'].message }</div>
                }
            </label>

            <label>
                <p>Описание</p>
                <TextArea 
                    register={register} 
                    nameField='description'
                    className={cn({
                        [styles.error_input]: errors['description']
                    })}
                />
                {
                    errors['description'] && <div className={styles.error_text}>{ errors['description'].message }</div>
                }
            </label>


            <label>
                <p>Дата сдачи</p>
                <Calendar  
                    register={register} 
                    nameField='deadline' 
                    className={cn({
                        [styles.error_input]: errors['deadline']
                    })}
                />
                {
                    errors['deadline' ] && <div className={styles.error_text}>{ errors['deadline'].message }</div>
                }
            </label>
            
            <div>
                 <label>
                     <p>Исполнитель</p>
                </label>
                {
                    performers.length !== 0 ?
                    <SelectUser 
                        register={register}  
                        nameField='user'
                        users={performers} 
                        nameList='Список исполнителей'
                    />
                    :
                    <div>В команде отсутствуют исполнители...</div>
                }
            </div>
           
            
            <div className={styles.container_btn}>
                <Button 
                    onClick={handleSubmit(submit)}
                    mode='primary'
                    className={styles.btn}
                >
                    {mode === 'CREATE' ? 'Создать' : 'Сохранить'}
                </Button>

                <Button 
                    mode='normal'
                    onClick={() => closeModalWindow && closeModalWindow()}
                    className={styles.btn}
                >
                    Отмена
                </Button>
            </div>
            
        </form>
    )
}
