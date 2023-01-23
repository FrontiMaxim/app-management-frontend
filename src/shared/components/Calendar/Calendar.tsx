import React from 'react'
import { IPropsCalendar } from './ICalendar'

export const Calendar = ({ register, nameField, ...props } : IPropsCalendar) => {
  return (
    <input 
      type='date' 
      {...register(nameField)} 
      {...props}
    />
  )
}
