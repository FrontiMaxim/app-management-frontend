import React from 'react'
import { PropsButton } from './Button.props'

export const Button = ({ children, ...props }: PropsButton) => {
  return (
    <>
      <button {...props}>{children}</button>
    </>
  )
}
