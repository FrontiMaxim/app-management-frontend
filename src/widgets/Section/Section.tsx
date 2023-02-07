import React from 'react';
import styles from './Section.module.scss';
import { PropsSection } from './Section.props';

export const Section = ({children}: PropsSection) => {

  return (
    <div className={styles.section}>
      {
        children
      }
    </div>
  )
}
