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
            <Button onClick={agree}>Да</Button>
            <Button onClick={disagree}>Нет</Button>
        </div>
    </div>
  )
}
