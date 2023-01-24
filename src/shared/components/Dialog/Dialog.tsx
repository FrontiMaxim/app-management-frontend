import React from 'react'
import { Button } from '../Button/Button'
import { PropsDialog } from './Dialog.props'

export const Dialog = ({question, agree, disagree}: PropsDialog) => {
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
