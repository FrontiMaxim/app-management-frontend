import React from 'react'
import { ListResource, useCreateResource } from '../../entities/resource';
import Dropzone from 'react-dropzone';
import styles from './PanelResource.module.scss';
import { PropsPanelResource } from './PanelResource.props';
import cn from 'classnames';
import { useAppSelector } from '../../store';
import { useCreateNotification } from '../../entities/notification/lib/hooks/useCreateNotification';

export const PanelResource = ({id_task, className}: PropsPanelResource) => {

    const [createResource] = useCreateResource();
    const [createNotification] = useCreateNotification();

    const { id_user } = useAppSelector(state => state.user);

    const handlerOnDrop = (files: any) => {

        const formData = new FormData();  
        formData.append('resources', files[0]);

        createResource({
            body: formData,
            originalName: files[0].name,
            storageName:  Date.now().toString(),
            id_task,
            id_user
        });

        createNotification({
            id_user,
            id_task,
            data: new Date(Date.now()) ,
            is_watch: false,
            type: 'RESOURCE'
        });
    }

    return (
        <div className={cn(styles.panel_resource, className)}>
            <h2>Ресурсы</h2>
            <hr />
            <ListResource id_task={id_task} className={styles.list}/>
            {
                <Dropzone onDrop={handlerOnDrop}>
                {
                    ({getRootProps, getInputProps}) => (
                    <section>
                        <div {...getRootProps()} className={styles.zone}>
                            <input {...getInputProps()} />
                            <p>Нажмите на данную область, чтобы выбрать файл или перетащите его с рабочего стола...</p>
                        </div>
                    </section>
                )
                }
                </Dropzone>
            }
           
        </div>
    )
}
