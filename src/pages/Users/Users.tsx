import React from 'react'
import { ListUsers } from '../../components'
import { useModalWindow } from '../../hooks/useModalWindow'

export const Users = () => {

    const {openModalWindow} = useModalWindow();

    return (
        <div>
            <ListUsers url='user/read/users' isChange={true} openModalWindow={openModalWindow}/>
        </div>
    )
}
