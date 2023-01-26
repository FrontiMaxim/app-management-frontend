import React from 'react'
import styles from './CardResourceWithDelete.module.scss';
import { CardResource } from '../CardResource/CardResource';
import { PropsCardResourceWithDelete } from './CardResourceWithDelete.props';
import { TiDelete } from 'react-icons/ti';
import { useDeleteResource } from '../../lib/hooks/useDeleteResource';


export const CardResourceWithDelete = (
        { resource: {id_resource, originalName, storageName }}: PropsCardResourceWithDelete
    ) => {

    
    const [remove] = useDeleteResource();
    
    return (
        <div className={styles.card}>
            <TiDelete 
                onClick={() => remove(id_resource)} 
                className={styles.btn_delete} 
                size={25}
            />
            <CardResource 
                name={originalName} 
                link={process.env.REACT_APP_URL_SERVER + '/resources/' + storageName}
            />
        </div>
    );
}
