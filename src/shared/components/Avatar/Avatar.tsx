import React from 'react'
import styles from './Avatar.module.scss';
import { PropsAvatar } from './Avatar.props';
import cn from 'classnames';


export const Avatar = ({ avatar, is_online, className, ...props }: PropsAvatar) => {
  return (
    <div className={cn(styles.avatar, className)}>
        {
            is_online && <div className={styles.indicator}></div>
        }
        <img src={`/avatars/${avatar}`} alt='аватар' />
    </div>
  )
}
