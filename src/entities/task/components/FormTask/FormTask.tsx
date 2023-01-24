import React from 'react'
import { useForm } from 'react-hook-form';
import { ITask } from '../../model/task.interface';
import { useCreateTask } from '../../lib/hooks/useCreateTask';
import { FieldText } from '../../../../components';
import { PropsFormTask } from './FormTask.props';
import { Button, Calendar, SelectUser, TextArea, formatDate } from '../../../../shared';
import { filterUsersByRole } from '../../lib/utils/filterUsersByRole';
import { useUpdateTask } from '../../lib/hooks/useUpdateTask';
import { useParticipant } from '../../lib/hooks/useParticipant';

export const FormTask = ({ mode, defaultData, closeModalWindow, currentObject }: PropsFormTask) => {
    
    const { register, handleSubmit } = useForm<ITask>({
        defaultValues: {
            ...defaultData,
            user: { id_user: defaultData?.user?.id_user },
            // приводим дату к формату YYYY-MM-DD
            deadline: formatDate(defaultData?.deadline ? defaultData.deadline : '', 'STANDART')
        }
    });

    const { participants, isLoading } = useParticipant(currentObject.id_object);

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
        <>
            {
                mode === 'CREATE' &&  <h1>Создание новой задачи</h1>
            }
            {
                mode === 'CHANGE' &&  <h1>Изменение задачи</h1>
            }
            <form>
                <FieldText 
                    placeholder='Название задачи' 
                    register={register('name')} 
                    type='text' 
                    minLength={20} 
                    maxLength={52}
                />

                <TextArea register={register} nameField='description'/>

                <Calendar  register={register} nameField='deadline' />
              
                {
                    isLoading ?
                    <div>Загрузка исполнителей по данному объекту...</div>
                    : 
                    participants &&
                    <SelectUser 
                        register={register('user')}  
                        users={filterUsersByRole(participants, 'DESIGNER', 'ADMIN')} 
                        nameList='Список исполнителей'
                    />
                }
              
                <Button 
                    value={mode === 'CREATE' ? 'Создать' : 'Сохранить изменения'}
                    onClick={handleSubmit(submit)}
                />

                <Button 
                    value='Отмена' 
                    onClick={() => closeModalWindow && closeModalWindow()}
                />
            </form>
        </>
    )
}
