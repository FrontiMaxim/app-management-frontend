import React from 'react'
import { IPropsItemListUsers } from './IPropsItemListUsers'
import { CardUser } from '../../CardUser/CardUser'
import { Button } from '../../Button/Button'

export const ItemListUsers = ({ user, isChange, openModalWindow }: IPropsItemListUsers) => {
  return (
    <li>
        <CardUser name={user.name} role={user.role} avatar={user.avatar} is_online={user.is_online} />

        {
            isChange && openModalWindow &&
            <div>
                <Button value='редактировать' onClick={() => openModalWindow('CHANGHE_USER', user)} />
                <Button value='удалить' onClick={() => openModalWindow('DELETE_USER', null)}/>
            </div>
        }
    </li>
  )
}
