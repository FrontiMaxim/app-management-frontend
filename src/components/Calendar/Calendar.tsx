import React from 'react'
import { IPropsCalendar } from './ICalendar'

export const Calendar = ({ register, ...props } : IPropsCalendar) => {
  return (
    <input type='date' {...register} {...props}/>
  )
}
