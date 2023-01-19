import React, { useState } from 'react'
import { BiDownArrow } from 'react-icons/bi'
import { IPropsMultiSelectUser } from './IMultiSelectUser'
import { CardUser } from '../CardUser/CardUser'
import { useUser } from '../../hooks/useUser'
import CheckBox from '../CheckBox/CheckBox'
import styles from './MultiSelectUser.module.scss';

export const MultiSelectUser = ({ register }: IPropsMultiSelectUser) => {
    const {users} = useUser()

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={styles.multi_select}>
            <div className={styles.head}>
                <span>Список пользователей</span>
                <BiDownArrow  className={styles.arrow} onClick={() => setIsOpen(prev => !prev)}/>
            </div>
            {
                isOpen &&
                <ul className={styles.list}>
                    {
                        users?.map((user) => 
                        <li key={user.id_user}>
                            <CardUser {...user} />
                            <CheckBox register={register} value={user.id_user}/>
                        </li>)
                    }
                </ul>
            }
        </div>       
    )
}
