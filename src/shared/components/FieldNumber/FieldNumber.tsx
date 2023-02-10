import React from 'react';
import { PropsFieldNumber } from './FieldNumber.props';

export const FieldNumber = ({ placeholder, register, nameField, min, max }: PropsFieldNumber) => {
  return (
    <>
        <input type='number' placeholder={ placeholder } {...register(nameField)} />
    </>
  )
}