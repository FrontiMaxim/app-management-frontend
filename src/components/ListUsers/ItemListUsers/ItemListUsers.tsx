import React from 'react'
import { IPropsItemListUsers } from './IPropsItemListUsers'
import { CardUser } from '../../CardUser/CardUser'
import { Button } from '../../Button/Button'
import { useAppDispatch } from '../../../store'
import { openModalWindow } from '../../../store/modalWindowSlice'
import { setCurrentUserFromList } from '../../../store/listUserSlice'

export const ItemListUsers = ({ user, isChange }: IPropsItemListUsers) => {

  const dispatch = useAppDispatch();

  return (
    <li>
        <CardUser name={user.name} role={user.role} avatar={user.avatar} is_online={user.is_online} />

        {
            isChange &&
            <div>
                <Button value='редактировать' onClick={() => {
                    dispatch(openModalWindow('CHANGHE_USER'));
                    dispatch(setCurrentUserFromList(user));
                  }
                }
                />

                <Button value='удалить' onClick={() => {
                    dispatch(openModalWindow('DELETE_USER'));
                    dispatch(setCurrentUserFromList(user));
                  }
                }
                />
            </div>
        }
    </li>
  )
}
