import React from 'react'
import { ISelect } from './ISelect'

export const Select = ({ options, register } : ISelect) => {
  return (
    <select {...register}>
        {
            options.map((option) => <option key={option.name} value={option.value}>{option.name}</option>)
        }
    </select>
  )
}
