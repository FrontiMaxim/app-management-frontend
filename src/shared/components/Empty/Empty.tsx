import React from 'react';
import styles from './Empty.module.scss';
import { PropsEmpty } from './Empty.props';

const Empty = ({ text }: PropsEmpty) => {
    return (
        <div 
            className={styles.empty}
        >
            <span>{text}</span>
        </div>
    );
}

export default Empty;