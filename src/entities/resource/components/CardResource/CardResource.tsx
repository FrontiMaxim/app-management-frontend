import React from 'react'
import { FaFile, FaFileAudio, FaFileExcel, FaFileImage, FaFilePdf, FaFilePowerpoint, FaFileVideo, FaFileWord } from 'react-icons/fa';
import styles from './CardResource.module.scss';
import { PropsCardResource } from './CardResource.props';
import { Extension } from '../../model/extension.type';
import { formatDate } from '../../../../shared';
import { useDeleteResource } from '../../lib/hooks/useDeleteResource';
import { useAppSelector } from '../../../../store';
import { TiDelete } from 'react-icons/ti';

export const CardResource = ({ data: {originalName, user, date, storageName, id_resource} }: PropsCardResource) => {

    const size = 40;
    let icon = <FaFile className={styles.icon} size={size} />;
    const extension: Extension = originalName.slice(originalName.lastIndexOf('.')) as Extension;
    const link = process.env.REACT_APP_URL_SERVER + '/resources/' + storageName;

    const [remove] = useDeleteResource();
    const { id_user } = useAppSelector(state => state.user);
    

    switch(extension) {
        case '.doc':
        case '.docx':
        case '.rtf':
            icon = <FaFileWord size={size} className={styles.icon} />;
            break;
        case '.pdf':
            icon = <FaFilePdf  size={size} className={styles.icon}  />;
            break;
        case '.pptx':
            icon = <FaFilePowerpoint size={size} className={styles.icon}  />;
            break;
        case '.xls':
            icon = <FaFileExcel size={size} className={styles.icon}  />;
            break;
        case '.jpg': 
        case '.jpeg':
        case '.png':
            icon = <FaFileImage size={size} className={styles.icon} />
            break;
        case '.mp3':
            icon = <FaFileAudio size={size} className={styles.icon}  />
            break;
        case '.mp4':
            icon = <FaFileVideo size={size} className={styles.icon}  />
            break;
    }

    return (
        <tr className={styles.card}>
            <td>
                <a 
                    className={styles.link_container} 
                    download
                    href={link}
                    target='_blank'
                    rel="noopener noreferrer" 
                >
                    {
                        icon
                    }
                    <span className={styles.name}>{originalName}</span>
                </a>
            </td>
            <td>
                {user.name}
            </td>
            <td>
                { formatDate(date.toString(), 'LOCAL') }
            </td>
            <td>
                {
                    id_user === user.id_user &&
                    <TiDelete 
                        onClick={() => remove(id_resource)} 
                        className={styles.btn_delete} 
                        size={25}
                    />
                }
            </td>
        </tr>
    );
}
