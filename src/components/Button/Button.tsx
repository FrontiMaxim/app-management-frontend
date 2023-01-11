import React from 'react'
import { IButton } from './IButton'

export const Button = ({ value, handler }: IButton) => {
  return (
    <>
      <button onClick={handler}>{value}</button>
    </>
  )
}
