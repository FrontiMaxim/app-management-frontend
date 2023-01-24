import React from 'react'
import { PropsCalendar } from './Calendar.props'

export const Calendar = ({ register, nameField, ...props } : PropsCalendar) => {
  return (
    <input 
      type='date' 
      {...register(nameField)} 
      {...props}
    />
  )
}
