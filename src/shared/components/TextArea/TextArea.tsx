import React from 'react';
import { PropsTextArea } from './TextArea.props';
import styles from './TextArea.module.scss';

export const TextArea = ({ register, nameField, minLength, maxLength, ...props }: PropsTextArea) => {
  return (
    <textarea 
      className={styles.textarea}
      { ...register(nameField) }
      {...props} 
    />
  )
}
