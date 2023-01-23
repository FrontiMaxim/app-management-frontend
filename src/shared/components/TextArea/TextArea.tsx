import React from 'react'
import { PropsTextArea } from './TextArea.props'

export const TextArea = ({ register, nameField, minLength, maxLength, ...props }: PropsTextArea) => {
  return (
    <textarea 
      { ...register(nameField) }
      {...props} 
    />
  )
}
