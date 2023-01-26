import React from 'react'
import { ListResource, useCreateResource } from '../../entities/resource';
import Dropzone from 'react-dropzone';
import styles from './PanelResource.module.scss';

interface PropsPanelResource {
    id_task: string;
}

export const PanelResource = ({id_task}: PropsPanelResource) => {

    const [create] = useCreateResource();

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
        <div className={styles.panel_resource}>
            <ListResource id_task={id_task}/>
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
        </div>
    )
}
