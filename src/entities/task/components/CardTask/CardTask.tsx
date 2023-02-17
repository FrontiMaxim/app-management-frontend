import React from 'react'
import styles from './CardTask.module.scss';
import { PropsCardTask } from './CardTask.props';
import { MenuCardTask } from '../MenuCardTask/MenuCardTask';
import { TagStatusTask } from '../TagStatusTask/TagStatusTask';
import { ContainerInformationTask } from '../ContainerInformationTask/ContainerInformationTask';
import { FaCheckCircle, FaPen } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import cn from 'classnames';
import { Avatar, Button, Dialog, ModalWindow, useDialog, useModalWindow } from '../../../../shared';
import { FormTask } from '../FormTask/FormTask';
import { useDeleteTask } from '../../lib/hooks/useDeleteTask';
import { useAppSelector } from '../../../../store';
import { useNavigate } from 'react-router-dom';
import { useUpdateTask } from '../../lib/hooks/useUpdateTask';

export const CardTask = ({ task, className }: PropsCardTask) => {

  const roleUser = useAppSelector(state => state.user.role);

  const modalWindowForForm = useModalWindow();
  const modalWindowForDialog = useModalWindow();
  const dialog = useDialog();

  const [remove] = useDeleteTask();
  const [update] = useUpdateTask();

  const updateStatusTask = () => {
    task.status.id_status = 3;
    update(task);
  }

  const navigate = useNavigate();
  
  return (
    <>
      {
        modalWindowForForm.isOpen &&
        <ModalWindow>
          <FormTask 
            mode='CHANGE' 
            defaultData={task} 
            currentObject={task.object} 
            closeModalWindow={modalWindowForForm.close}
          />
        </ModalWindow>
      }
      {
        modalWindowForDialog.isOpen &&
        <ModalWindow>
          <Dialog 
            question='Вы уверены, что хотите удалить задачу? Все данные, включая файлы и комментарии, будут удалены...'
            agree={() => {
              remove(task.id_task);
              dialog.disagree();
            }}
            disagree={modalWindowForDialog.close}
          />
        </ModalWindow>
      }

      <div className={cn(styles.task, className)}>
          <div className={styles.head}>
            <TagStatusTask type={task.status.name} />
            {
              roleUser === 'ADMIN' && task.status.name === 'SCHEDULED' ?
              <MenuCardTask>
                <FaPen 
                  size={12} 
                  className={styles.btn} 
                  title='Редактировать' 
                  onClick={modalWindowForForm.open} 
                />
                <ImCross 
                  size={12} 
                  className={cn(styles.btn, styles.delete)} 
                  title='Удалить' 
                  onClick={modalWindowForDialog.open}
                />
              </MenuCardTask>
              : roleUser === 'ADMIN' && task.status.name === 'ON_PROGRES' &&
              <MenuCardTask>
                <FaCheckCircle 
                 size={15} 
                 className={cn(styles.btn, styles.complete)} 
                 title='Установить статус "Выполнено"' 
                 onClick={updateStatusTask}
              />
              </MenuCardTask>
            }
          </div>
          <h4>{ task.name }</h4>
          <p>{ task.description }</p>
          <div>
            <div className={styles.containers}>

              <ContainerInformationTask 
                typeInformation='DEADLINE' 
                title='Срок сдачи' 
                information={task.deadline} 
              />

              <Button
                mode='primary'
                className={styles.btn_open}
                onClick={() => navigate(
                  '/cabinet/task',
                  {
                    state: {
                      currentTask: task
                    }
                  }
                )}
              >
                Открыть
              </Button>
            
              {
                task.user &&
                <div className={styles.container_user} title='Исполнитель'>
                  <span className={styles.name}>{task.user.name}</span>
                  <Avatar avatar={task.user.avatar} is_online={false} className={styles.avatar} />
                </div>
              }
            </div>
        </div>
      </div>
    </>
  )
}
