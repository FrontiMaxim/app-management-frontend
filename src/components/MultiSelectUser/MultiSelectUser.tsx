import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { IPropsMultiSelectUser } from './IMultiSelectUser'
import { CardUser } from '../CardUser/CardUser'
import { useUser } from '../../hooks/useUser'
import CheckBox from '../CheckBox/CheckBox'
import styles from './MultiSelectUser.module.scss';
import cn from 'classnames';

export const MultiSelectUser = ({ register }: IPropsMultiSelectUser) => {
    const {users} = useUser()

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={styles.multi_select}>
            <div className={styles.head}>
                <span>Список пользователей</span>
                <MdKeyboardArrowDown  
                    className={cn(styles.arrow, {
                        [styles.open]: isOpen
                    })} 
                    onClick={() => setIsOpen(prev => !prev)} 
                    size={20}
                />
            </div>
            {
                isOpen &&
                <ul className={cn(styles.list)}>
                    {
                        users?.map((user) => 
                        <li key={user.id_user} className={cn(styles.item)} >
                            <CardUser {...user} />
                            <CheckBox register={register} value={user.id_user} />
                        </li>)
                    }
                </ul>
            }
        </div>       
    )
}
