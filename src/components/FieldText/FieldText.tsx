import React from 'react';
import styles from './FieldText.module.scss';
import { IFieldText } from './IFieldText';

export const FieldText = ({ placeholder, register, nameField, type, minLength, maxLength } : IFieldText) => {
  return (
    <>
        <input type={type} className={styles.input} placeholder={ placeholder } {...register(nameField)} />
    </>
  )
}