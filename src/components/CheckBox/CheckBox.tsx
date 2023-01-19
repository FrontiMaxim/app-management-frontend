import React from 'react'
import { IPropsCheckBox } from './ICheckBox'
import styles from './CheckBox.module.scss';

function CheckBox({register, ...props } : IPropsCheckBox) {
  return (
    <input className={styles.checkbox} type='checkbox' {...props} {...register} />
  )
}

export default CheckBox