import React from 'react'
import { useForm } from 'react-hook-form';
import { PropsFormObject } from './FormObject.props';
import { IObject } from '../../model/object.interface';
import { IUser, MultiSelectUser } from '../../../user';
import { useCreateObject } from '../../lib/hooks/useCreateObject';
import { useUpdateObject } from '../../lib/hooks/useUpdateObject';
import { Button, Calendar, FieldNumber, FieldText, formatDate } from '../../../../shared';
import { useAppSelector } from '../../../../store';
import styles from './FormObject.module.scss';
import cn from 'classnames';

export const FormObject = ({ mode, defaultData, closeModalWindow } : PropsFormObject) => {

    const [create] = useCreateObject();
    const [update] = useUpdateObject();

    const { register, handleSubmit, formState: {errors} } = useForm<IObject>({
        defaultValues: {
            ...defaultData,
            data_start: defaultData ? formatDate( defaultData.data_start, 'STANDART') : '',
            users: defaultData?.users?.map((user) => {
                user = user as IUser;
                return user.id_user
            })
        },
        mode: 'onBlur'
    });

    const listUser = useAppSelector(state => state.listUser.listUser);
    const user = useAppSelector(state => state.user);

    const submit = async (data: IObject): Promise<void> => {
       
        if(data.users) {
            const users: IUser[] = [];
            for(let id_user of data.users) {
                for(let user of listUser) {
                    if(id_user === user.id_user) {
                        users.push(user);
                    }
                }
            }
           
            data.users = users;
            data.users.push(user);

             // приводим дату к формату DD.MM.YYYY
            data.data_start = formatDate(data.data_start, 'LOCAL');
        }

        if(data.apartment) {
            data.apartment = Number(data.apartment);
        } else {
            data.apartment = null;
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
                mode === 'CREATE' &&  <h1>Создание проекта</h1>
            }
            {
                mode === 'CHANGE' &&  <h1>Редактирование проекта</h1>
            }

            <div className={styles.container_fields}>
                <label>
                    <p>Название проекта</p>
                    <FieldText 
                        placeholder='Дизайн кухни' 
                        register={register} 
                        nameField='note'
                        className={cn({
                            [styles.error_input]: errors['note']
                        })}
                    />
                    {
                        errors['note'] && <div className={styles.error_text}>{ errors['note'].message }</div>
                    }
                </label>
                
                <label>
                    <p>Город</p>
                    <FieldText 
                        placeholder='Самара' 
                        register={register} 
                        nameField='city'
                        className={cn({
                            [styles.error_input]: errors['city']
                        })}
                    />
                    {
                        errors['city'] && <div className={styles.error_text}>{ errors['city'].message }</div>
                    }
                </label>

                <label>
                    <p>Улица</p>
                    <FieldText 
                        placeholder='Моссковское ш.' 
                        register={register} 
                        nameField='street'
                        className={cn({
                            [styles.error_input]: errors['street']
                        })}
                    />
                    {
                        errors['street'] && <div className={styles.error_text}>{ errors['street'].message }</div>
                    }
                </label>

                <label>
                    <p>Дом</p>
                    <FieldText 
                        placeholder='34Б' 
                        register={register} 
                        nameField='house'
                        className={cn({
                            [styles.error_input]: errors['house']
                        })}
                    />
                    {
                        errors['house'] && <div className={styles.error_text}>{ errors['house'].message }</div>
                    }
                </label>


                <label>
                    <p>Квартира</p>
                    <FieldNumber
                        placeholder='508' 
                        register={register} 
                        nameField='apartment'
                        className={cn({
                            [styles.error_input]: errors['apartment']
                        })}
                    />
                    {
                        errors['apartment'] && <div className={styles.error_text}>{ errors['apartment'].message }</div>
                    }
                </label>


                <label>
                    <p>Дата старта проекта</p>
                    <Calendar 
                        register={register} 
                        nameField='data_start' 
                        className={cn({
                            [styles.error_input]: errors['data_start']
                        })}
                    />
                    {
                        errors['data_start'] && <div className={styles.error_text}>{ errors['data_start'].message }</div>
                    }
                </label>
                
                <label>
                    <p>Клиент</p>
                    <FieldText 
                        placeholder='Иванов Иван Иванович' 
                        register={register} 
                        nameField='client'
                        className={cn({
                            [styles.error_input]: errors['client']
                        })}
                    />
                    {
                        errors['client'] && <div className={styles.error_text}>{ errors['client'].message }</div>
                    }
                </label>


                <div>
                    <label>
                        <p>Команда</p>
                    </label>
                    <MultiSelectUser register={register} nameField='users' />
                </div>
                    
                
            </div>
            
            
            <div className={styles.container_btn}>
                <Button 
                    onClick={handleSubmit(submit)}
                    mode='primary'
                    className={styles.btn}
                >
                    {mode === 'CREATE' ? 'Создать' : 'Сохранить изменения'}
                </Button>
                    
                <Button 
                    onClick={() => closeModalWindow && closeModalWindow()}
                    mode='normal'
                    className={styles.btn}
                >
                    Отмена
                </Button>
            </div>
        </form>
    )
}
