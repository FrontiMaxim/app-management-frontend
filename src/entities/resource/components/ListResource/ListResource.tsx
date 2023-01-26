import React from 'react'
import { useResource } from '../../lib/hooks/useResource'
import { CardResourceWithDelete } from '../CardResourceWithDelete/CardResourceWithDelete';
import styles from './ListResource.module.scss';

interface PropsListResource {
    id_task: string
}

export const ListResource = ({id_task}: PropsListResource) => {

    const {resources} = useResource(id_task);

    return (
        <div className={styles.list}>
            {
                resources?.map(resource => <CardResourceWithDelete 
                                                key={resource.id_resource}
                                                resource={resource}
                                            /> )
            }
        </div>
    )
}
