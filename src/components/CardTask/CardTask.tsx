import React from 'react'
import styles from './CardTask.module.scss';
import { IPropsCardTask } from './ICardTask';
import { BsFillCalendarFill } from 'react-icons/bs';
import { AiOutlineComment, AiOutlineFile } from 'react-icons/ai';
import Tag from '../Tag/Tag';
import { MenuCardTask } from './MenuCardTask/MenuCardTask';

export const CardTask = ({ task }: IPropsCardTask) => {
  return (
    <div className={styles.task}>
        <div className={styles.head}>
          <Tag type={task.status.name} />
          <MenuCardTask />
        </div>
        <h4>{ task.name }</h4>
        <p>{ task.description }</p>
        <div>
          <div className={styles.containers}>
            <div className={styles.container_deadline} title='Срок сдачи'>
              <BsFillCalendarFill className={styles.icon} size={14}/>
              <span className={styles.deadline}>{task.deadline}</span>
            </div>
            <div  className={styles.container} title='Комментарии'>
              <AiOutlineComment className={styles.icon} />
              <span  className={styles.count}>{task.comments ? task.comments.length : 0}</span>
            </div>
            <div  className={styles.container} title='Файлы'>
              <AiOutlineFile className={styles.icon} />
              <span  className={styles.count}>{task.resources ? task.resources.length : 0}</span>
            </div>
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
  )
}
