import React from 'react'
import { FaFile, FaFileAudio, FaFileExcel, FaFileImage, FaFilePdf, FaFilePowerpoint, FaFileVideo, FaFileWord } from 'react-icons/fa';
import styles from './CardResource.module.scss';
import { PropsCardResource } from './CardResource.props';
import { Extension } from '../../model/extension.type';

export const CardResource = ({ name, link }: PropsCardResource) => {

    const size = 40;
    let icon = <FaFile className={styles.icon} size={size} />;
    const extension: Extension = name.slice(name.lastIndexOf('.')) as Extension;

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
        <div className={styles.card}>
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
                <span className={styles.name}>{name}</span>
            </a>
        </div>
    );
}
