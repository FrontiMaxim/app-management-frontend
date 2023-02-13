import React, { useState } from 'react'
import styles from './SelectUser.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';
import cn from 'classnames';
import { PropsSelectUser } from './SelectUser.props';
import { CardUser } from '../..';
import { CheckBox } from '../CheckBox/CheckBox';
import { RadioBox } from '../RadioBox/RadioBox';

export const SelectUser =({ users, register, nameField,  multi, nameList }: PropsSelectUser) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={styles.select}>
            <div className={styles.head}>
                <span>{ nameList }</span>
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
                        users.map((user) => 
                        <li key={user.id_user } className={cn(styles.item)} >
                            <CardUser {...user} />
                            {
                                multi ? 
                                <CheckBox register={register} nameField={nameField} value={user.id_user} />
                                :
                                <RadioBox 
                                    register={register} 
                                    nameField={nameField} 
                                   
                                    value={user.id_user} 
                                />
                            }
                        </li>)
                    }
                </ul>
            }
        </div>       
    )
  
}
