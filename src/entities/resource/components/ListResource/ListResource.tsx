import React from 'react'
import { useResource } from '../../lib/hooks/useResource'
import { CardResourceWithDelete } from '../CardResourceWithDelete/CardResourceWithDelete';
import styles from './ListResource.module.scss';
import cn from 'classnames';
import { PropsListResource } from './ListResource.props';
import Empty from '../../../../shared/components/Empty/Empty';

export const ListResource = ({id_task, className}: PropsListResource) => {

    const {resources} = useResource(id_task);

    return (
        <div className={cn(styles.list, className)}>
            {
                resources &&
                resources.length === 0 ? <Empty text='Ресурсов нет...'/>
                :
                resources?.map(resource => <CardResourceWithDelete 
                                                key={resource.id_resource}
                                                resource={resource}
                                            /> )
            }
        </div>
    )
}
