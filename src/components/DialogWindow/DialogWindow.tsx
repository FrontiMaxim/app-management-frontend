import React from 'react'
import { Button } from '../Button/Button'
import { IPropsDialogWindow } from './IDialogWindow'

export const DialogWindow = ({question, agree, disagree}: IPropsDialogWindow) => {
  return (
    <div>
        <div>
            {
                question + '?'
            }
        </div>
        <div>
            <Button value='Да' onClick={agree}/>
            <Button value='Нет' onClick={disagree} />
        </div>
    </div>
  )
}
