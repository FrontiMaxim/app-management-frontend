import React from 'react';
import { PropsButton } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.scss';

export const Button = ({ children, className, mode, ...props }: PropsButton) => {
  return (
    <>
      <button 
        {...props}
        className={cn(styles.button, className, {
          [styles.primary]: mode === 'primary',
          [styles.normal]: mode === 'normal'
        })}
      >{children}
      </button>
    </>
  )
}
