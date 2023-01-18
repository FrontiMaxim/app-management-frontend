import React from 'react'
import { IPropsMultiSelectUser } from './IMultiSelectUser'
import { CardUser } from '../CardUser/CardUser'
import { useUser } from '../../hooks/useUser'
import CheckBox from '../CheckBox/CheckBox'

export const MultiSelectUser = ({ register }: IPropsMultiSelectUser) => {
    const {users} = useUser()

    return (
        <div>
            <div>
                <span>Список пользователей</span>
                <i className="bx bx-chevron-down"></i>
            </div>
            <ul>
                {
                    users?.map((user) => 
                    <li key={user.id_user}>
                        <CardUser {...user} />
                        <CheckBox register={register} value={user.id_user}/>
                    </li>)
                }
                
            </ul>
        </div>       
    )
}
