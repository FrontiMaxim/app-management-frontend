import React from 'react'
import { ListResource, useCreateResource } from '../../entities/resource';
import Dropzone from 'react-dropzone';
import styles from './PanelResource.module.scss';
import { PropsPanelResource } from './PanelResource.props';
import cn from 'classnames';
import { useAppSelector } from '../../store';

export const PanelResource = ({id_task, className}: PropsPanelResource) => {

    const [create] = useCreateResource();

    const { role } = useAppSelector(state => state.user);

    const handlerOnDrop = (files: any) => {

        const formData = new FormData();  
        formData.append('resources', files[0]);

        create({
            body: formData,
            originalName: files[0].name,
            storageName:  Date.now().toString(),
            id_task
        });
    }

    return (
        <div className={cn(styles.panel_resource, className)}>
            <h2>Ресурсы</h2>
            <hr />
            <ListResource id_task={id_task} className={styles.list}/>
            {
                role === 'DESIGNER' &&

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
