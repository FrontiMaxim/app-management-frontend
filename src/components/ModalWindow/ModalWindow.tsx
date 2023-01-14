import React from 'react'
import { IModalWindow } from './IModalWindow'

export const ModalWindow = ({ children }: IModalWindow) => {
  return (
      <div>
        {
          children
        }
      </div>
  )
}
