import React from 'react'
import { PropsSelect } from './Select.props'

export const Select =  ({ options, register, nameFiled } : PropsSelect) => {
  return (
    <select {...register(nameFiled)}>
        {
            options.map((option) => <option key={option.name} value={option.value}>{option.name}</option>)
        }
    </select>
  )
}
