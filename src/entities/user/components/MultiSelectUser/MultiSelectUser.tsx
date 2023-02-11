import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { PropsMultiSelectUser } from './MultiSelectUser.props'
import { CardUser } from '../../../../shared/components/CardUser/CardUser'
import styles from './MultiSelectUser.module.scss';
import cn from 'classnames';
import { useUsers } from '../../lib/hooks/useUsers';
import { CheckBox } from '../../../../shared';

export const MultiSelectUser = ({ register, nameField }: PropsMultiSelectUser) => {
    const {users} = useUsers();

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
                        <li key={user.id_user} className={cn(styles.item)}>
                            <CardUser {...user} />
                            <CheckBox 
                                register={register} 
                                nameField={nameField} 
                                value={user.id_user} 
                            />
                        </li>)
                    }
                </ul>
            }
        </div>       
    )
}
