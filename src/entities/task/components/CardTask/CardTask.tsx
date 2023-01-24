import React from 'react'
import styles from './CardTask.module.scss';
import { PropsCardTask } from './CardTask.props';
import { MenuCardTask } from '../MenuCardTask/MenuCardTask';
import { TagStatusTask } from '../TagStatusTask/TagStatusTask';
import { ContainerInformationTask } from '../ContainerInformationTask/ContainerInformationTask';
import { FaPen } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import cn from 'classnames';
import { Dialog, ModalWindow, useDialog, useModalWindow } from '../../../../shared';
import { FormTask } from '../FormTask/FormTask';
import { useDeleteTask } from '../../lib/hooks/useDeleteTask';

export const CardTask = ({ task }: PropsCardTask) => {

  const roleUser = 'ADMIN';

  const modalWindowForForm = useModalWindow();
  const modalWindowForDialog = useModalWindow();
  const dialog = useDialog();

  const [remove] = useDeleteTask();
  
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

      <div className={styles.task}>
          <div className={styles.head}>
            <TagStatusTask type={task.status.name} />
            {
              roleUser==='ADMIN' &&  
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

              <ContainerInformationTask 
                typeInformation='COMMENTS' 
                title='Комментарии' 
                information={task.comments ? task.comments.length : 0} 
              />

              <ContainerInformationTask 
                typeInformation='RESOURCES' 
                title='Файлы' 
                information={task.resources ? task.resources.length : 0} 
              />
            
              {
                task.user &&
                <div className={styles.container_user} title='Исполнитель'>
                  <span className={styles.name}>{task.user.name}</span>
                  <img className={styles.avatar} src={task.user.avatar} alt="аватарка" />
                </div>
              }
            </div>
        </div>
      </div>
    </>
  )
}
