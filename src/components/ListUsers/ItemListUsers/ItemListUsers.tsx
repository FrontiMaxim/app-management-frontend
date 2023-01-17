import React from 'react'
import { IPropsItemListUsers } from './IPropsItemListUsers'
import { CardUser } from '../../CardUser/CardUser'
import { Button } from '../../Button/Button'
import { useAppDispatch } from '../../../store'
import { open } from '../../../store/modalWindowSlice'
import { setCurrentUserFromList } from '../../../store/listUserSlice'
import { ModeModalWindow } from '../../../interfaces/IModalWindow'

export const ItemListUsers = ({ user, isChange }: IPropsItemListUsers) => {

  const dispatch = useAppDispatch();
  const { CHANGE, DELETE } = ModeModalWindow;

  return (
    <li>
        <CardUser name={user.name} role={user.role} avatar={user.avatar} is_online={user.is_online} />

        {
            isChange &&
            <div>
                <Button value='редактировать' onClick={() => {
                    dispatch(open(CHANGE));
                    dispatch(setCurrentUserFromList(user));
                  }
                }
                />

                <Button value='удалить' onClick={() => {
                    dispatch(open(DELETE));
                    dispatch(setCurrentUserFromList(user));
                  }
                }
                />
            </div>
        }
    </li>
  )
}
