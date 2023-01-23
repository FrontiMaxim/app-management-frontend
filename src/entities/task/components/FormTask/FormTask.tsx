import React from 'react'
import { useForm } from 'react-hook-form';
import { ITask } from '../../model/task.interface';
import { useCreateTask } from '../../lib/hooks/useCreateTask';
import { FieldText } from '../../../../components';
import { PropsFormTask } from './FormTask.props';
import { Button, Calendar, TextArea, formatDate } from '../../../../shared';

export const FormTask = ({ mode, defaultData, closeModalWindow }: PropsFormTask) => {
    
    const { register, handleSubmit } = useForm<ITask>({
        defaultValues: {
            ...defaultData,
            user: { id_user: defaultData?.user?.id_user }
        }
    });

    const [create] = useCreateTask();

    // const { listUser } = useAppSelector(state => state.listUser);

    const submit = async (data: ITask): Promise<void> => {

        data.deadline = formatDate(data.deadline);

        console.log(data);
       
        // if(mode === 'CREATE') {
        //     create(data);
        // } else if (mode === 'CHANGE') {
        //     // update.mutate(data);
        // }
 
        if(closeModalWindow) {
            closeModalWindow();
        }
    }

    return (
        <>
            {
                mode === 'CREATE' &&  <h1>Создание объекта</h1>
            }
            {
                mode === 'CHANGE' &&  <h1>Изменение объекта</h1>
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
              
                {/* <MultiSelectUser register={register('users')} /> */}
              
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
