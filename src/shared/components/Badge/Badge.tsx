import React from 'react';
import { PropsBadge } from './Badge.props';
import cn from 'classnames';
import styles from './Badge.module.scss';

const Badge = ({ count, className, ...props}: PropsBadge) => {
  return (
    <>
        {count > 0 &&
            <div className={cn(styles.badge, className)}>
                {count}
            </div>
        }
    </>
  )
}

export default Badge;