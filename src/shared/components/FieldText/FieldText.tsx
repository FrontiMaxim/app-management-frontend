import React from 'react';
import styles from './FieldText.module.scss';
import { PropsFieldText } from './FieldText.props';
import cn from 'classnames';

export const FieldText = ({ placeholder, register, nameField, minLength, maxLength, className, ...props} : PropsFieldText) => {
  return (
    <>
        <input 
          type='text' 
          className={cn(styles.input, className)} 
          placeholder={ placeholder } 
          {...props}
          {...register(nameField, {
            required: true,
            minLength: {
              value: minLength ? minLength : 0,
              message: 'Недостаточно количество символов'
            },
            maxLength: {
              value: maxLength ? maxLength : Infinity,
              message: 'Превышено количество символов'
            }
          })} 
        />
    </>
  )
}