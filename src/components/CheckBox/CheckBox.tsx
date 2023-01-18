import React from 'react'
import { IPropsCheckBox } from './ICheckBox'

function CheckBox({register, ...props } : IPropsCheckBox) {
  return (
    <input type='checkbox' {...props} {...register} />
  )
}

export default CheckBox