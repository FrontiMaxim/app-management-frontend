import React from 'react';
import { PropsSelect } from './Select.props';
import styles from './Select.module.scss';

export const Select =  ({ options, register, nameFiled } : PropsSelect) => {
  return (
    <select className={styles.select} {...register(nameFiled)}>
        {
            options.map((option) => <option key={option.name} value={option.value}>{option.name}</option>)
        }
    </select>
  )
}
