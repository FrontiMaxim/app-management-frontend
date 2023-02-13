import React from 'react'
import { PropsListTask } from './ListTask.props'
import { CardTask } from '../CardTask/CardTask'
import styles from './ListTask.module.scss';

export const ListTask = ({ data }: PropsListTask) => {
  return (
    <div className={styles.list} >
      {
          data.map(task => <CardTask 
                              key={task.id_task} 
                              task={task}
                              className={styles.item}
                            />)
      }
    </div>
  )
}
