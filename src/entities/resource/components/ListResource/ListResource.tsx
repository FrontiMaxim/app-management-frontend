import React from 'react'
import { useResource } from '../../lib/hooks/useResource'
import styles from './ListResource.module.scss';
import cn from 'classnames';
import { PropsListResource } from './ListResource.props';
import { CardResource } from '../CardResource/CardResource';

export const ListResource = ({id_task, className}: PropsListResource) => {

    const {resources} = useResource(id_task);

    return (
        <div className={cn(styles.list, className)}>
            <table>
                <thead>
                    <tr>
                        <th>Файл</th>
                        <th>Автор</th>
                        <th>Дата</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    resources &&
                    resources?.map(resource => <CardResource
                                                    key={resource.id_resource}
                                                    data={resource}
                                                /> )
                }
                </tbody>
            </table>
        </div>
    )
}
