import React from 'react'
import { PropsCalendar } from './Calendar.props';
import styles from './Calendar.module.scss';
import cn from 'classnames';

export const Calendar = ({ register, nameField, className, ...props } : PropsCalendar) => {
  return (
    <input 
      type='date' 
      {...register(nameField, {
        required: true
      })} 
      {...props}
      className={cn(styles.input, className)}
    />
  )
}
