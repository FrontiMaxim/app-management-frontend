import React, { useEffect, useState } from 'react'
import { IPropsListUsers } from './IListUsers'
import { ItemListUsers } from './ItemListUsers/ItemListUsers'
import { IUser } from '../../interfaces/IUser'
import axios from 'axios'


export const ListUsers = ({ url, isChange, openModalWindow }: IPropsListUsers) => {

    const [users, setUsers] = useState<IUser[]>([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if(token) {
            axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => setUsers(response.data));
        }
    }, [token, url]);

    return (
        <ul>
            {
                users.map(user => <ItemListUsers 
                                    key={user.id_user}
                                    user={user} 
                                    isChange={isChange} 
                                    openModalWindow={openModalWindow}
                                    />)
            }
        </ul>
    )
}
