import React from 'react'
import { IButton } from './IButton'

export const Button = ({ value, ...props }: IButton) => {
  return (
    <>
      <button {...props}>{value}</button>
    </>
  )
}
