import React from 'react'
import styles from './Avatar.module.scss';
import { PropsAvatar } from './Avatar.props';


export const Avatar = ({ avatar, is_online }: PropsAvatar) => {
  return (
    <div className={styles.avatar}>
        {
            is_online && <div className={styles.indicator}></div>
        }
        <img src={`/avatars/${avatar}`} alt='аватар' />
    </div>
  )
}
