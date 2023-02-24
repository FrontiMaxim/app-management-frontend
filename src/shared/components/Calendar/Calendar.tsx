import React from 'react'
import { PropsCalendar } from './Calendar.props';
import styles from './Calendar.module.scss';
import cn from 'classnames';

export const Calendar = ({ register, nameField, className, ...props } : PropsCalendar) => {
  return (
    <input 
      type='date' 
      {...register(nameField, {
        required: {
          value: true,
          message: 'Поле обязательно к заполнению'
        }
      })} 
      {...props}
      className={cn(styles.input, className)}
    />
  )
}
