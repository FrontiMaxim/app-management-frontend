import React from 'react'
import { PropsButton } from './Button.props'

export const Button = ({ value, ...props }: PropsButton) => {
  return (
    <>
      <button {...props}>{value}</button>
    </>
  )
}
