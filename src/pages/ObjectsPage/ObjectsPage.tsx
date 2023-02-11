import React from 'react'
import { ListObject } from '../../entities/object';
import { ObjectCreationPanel } from '../../widgets';
import styles from './ObjectsPage.module.scss';

export const ObjectsPage = () => {
    return (
        <div className={styles.page}>
            <h1>Список проектов</h1>
            <ObjectCreationPanel />
            <ListObject isChange={true} />
        </div>
    )
}
