import React from 'react';
import styles from './FieldPassword.module.scss';
import { PropsFieldPassword } from './FieldPassword.props';
import cn from 'classnames';


export const FieldPassword = ({ placeholder, register, required, nameField, minLength, maxLength, className, ...props } : PropsFieldPassword) => {
  return (
    <>
        <input 
          type='password' 
          className={cn(styles.input, className)} 
          placeholder={ placeholder } 
          {...props}
          {...register(nameField, {
            required: {
              value: required,
              message: 'Поле обязательно к заполнению'
              
            },
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