import React from 'react'
import { ListObject } from '../../entities/object';
import { ObjectCreationPanel } from '../../widgets';
import styles from './ObjectsPage.module.scss';
import { useAppSelector } from '../../store';

export const ObjectsPage = () => {

    const {role} = useAppSelector(state => state.user);

    return (
        <div className={styles.page}>
            <h1>Список проектов</h1>
            {
                role === 'ADMIN' && 
                <ObjectCreationPanel />
            }
            <ListObject isChange={true} />
        </div>
    )
}
