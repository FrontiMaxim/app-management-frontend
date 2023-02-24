import React from 'react';
import { PropsFieldNumber } from './FieldNumber.props';
import styles from './FieldNumber.module.scss';
import cn from 'classnames';

export const FieldNumber = ({ placeholder, register, nameField, min, max, className }: PropsFieldNumber) => {
  return (
    <>
        <input 
          type='number' 
          placeholder={ placeholder } 
          {...register(nameField, {
            required: {
              value: true,
              message: 'Поле обязательно к заполнению'
            }
          })} 
          className={cn(styles.input, className)}
        />
    </>
  )
}