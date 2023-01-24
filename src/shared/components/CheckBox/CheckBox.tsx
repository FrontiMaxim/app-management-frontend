import React from 'react'
import { PropsCheckBox } from './CheckBox.props'
import styles from './CheckBox.module.scss';

export const CheckBox = ({register,  ...props } : PropsCheckBox) => {
  return (
    <input className={styles.checkbox} type='checkbox' {...props} {...register} />
  )
}
