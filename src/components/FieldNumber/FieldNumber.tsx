import React from 'react';
import { IPropsFieldNumber } from './IFieldNumber';

export const FieldNumber = ({ placeholder, register, min, max }: IPropsFieldNumber) => {
  return (
    <>
        <input type='number' placeholder={ placeholder } {...register} />
    </>
  )
}