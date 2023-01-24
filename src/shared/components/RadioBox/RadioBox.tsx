import React from 'react'
import { PropsRadioBox } from './RadioBox.props'
import styles from './RadioBox.module.scss';

export const RadioBox = ({register, ...props } : PropsRadioBox)  => {
  return (
    <input className={styles.radiobox} type='radio' {...props} {...register} />
  )
}
