import React, { useEffect } from 'react'
import { IPropsListUsers } from './IListUsers'
import { ItemListUsers } from './ItemListUsers/ItemListUsers'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../store'
import { downloadListUser } from '../../store/listUserSlice'


export const ListUsers = ({ url, isChange }: IPropsListUsers) => {

    const { listUser } = useAppSelector(state => state.listUser);
    const dispatch = useAppDispatch();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if(token) {
            axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => dispatch(downloadListUser(response.data)));
        }
    }, [token, url]);

    return (
        <ul>
            {
                listUser.map(user => <ItemListUsers 
                                    key={user.id_user}
                                    user={user} 
                                    isChange={isChange} 
                                    />)
            }
        </ul>
    )
}
